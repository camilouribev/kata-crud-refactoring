package co.com.sofka.crud.services;

import co.com.sofka.crud.DTOs.ListDTO;
import co.com.sofka.crud.DTOs.TodoDTO;
import co.com.sofka.crud.entities.List;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.repository.ListRepository;
import co.com.sofka.crud.repository.TodoRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class TodoService implements TodoServiceInterface {
    private ListRepository ListRepository;
    private TodoRepository TodoRepository;
    @Autowired
    private ModelMapper modelMapper = new ModelMapper();

    @Autowired
    private TodoService(ListRepository ListRepository, TodoRepository TodoRepository) {
        this.ListRepository = ListRepository;
        this.TodoRepository = TodoRepository;
    }

    ;

    //Mapper de Listas
    private ListDTO convertToListDTO(Set<TodoDTO> list) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        ListDTO ListDTO = modelMapper
                .map(list, ListDTO.class);
        return ListDTO;
    }

    //Mapper de ToDos

    private TodoDTO convertToTodoDTO(Todo todo) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        TodoDTO TodoDTO = modelMapper
                .map(todo, TodoDTO.class);
        return TodoDTO;
    }

    @Override
    public Set<TodoDTO> getToDosByList(Long listId) {
        try {
            return ListRepository.findById(listId).get().getToDos().stream().map(todo -> convertToTodoDTO(todo)).collect(Collectors.toSet());
        } catch (Exception e) {
            return null;
        }
    }


    @Override
    public TodoDTO createToDoByList(Long listId, TodoDTO someTodoDTO) {
        List lista = ListRepository.findById(listId).orElseThrow();

        Todo newToDo = new Todo(someTodoDTO.getId(), someTodoDTO.getNombre(), someTodoDTO.isTerminado() );
        lista.getToDos().add(newToDo);

        List listaActualizada = ListRepository.save(lista);

        var lastToDo = listaActualizada.getToDos()
                .stream()
                .max(Comparator.comparingInt(item -> item.getId().intValue()))
                .orElseThrow();
        someTodoDTO.setId(lastToDo.getId());
        someTodoDTO.setIdLista(listId);
        return someTodoDTO;
    }

    @Override
    public ListDTO createList(ListDTO someListDTO) {
        var lista = new List();
        lista.setName(Objects.requireNonNull(someListDTO.getNombre()));
        var id = ListRepository.save(lista).getId();
        someListDTO.setId(id);
        return someListDTO;
    }




    @Override
    public Set<ListDTO> getAllLists(){
        return StreamSupport
                .stream(ListRepository.findAll().spliterator(), false)
                .map(toDoList -> {
                    var listDto = toDoList.getToDos()
                            .stream()
                            .map(todo -> convertToTodoDTO(todo))
                            .collect(Collectors.toSet());
                    return convertToListDTO(listDto);
                })

                .collect(Collectors.toSet());


    }

    @Override
    public TodoDTO updateToDo(Long listId, TodoDTO oldTodo) {

        List lista = ListRepository.findById(listId).orElseThrow();

        for (Todo todo: lista.getToDos()){
            if(todo.getId().equals(oldTodo.getId())){
                todo.setCompleted(oldTodo.isTerminado());
                todo.setName(Objects.requireNonNull(oldTodo.getNombre()));
                todo.setId(Objects.requireNonNull(oldTodo.getId()));
        }

            ListRepository.save(lista);


        }
        return oldTodo;
    }

    @Override
    public void deleteToDo(Long todoId) {
        Todo todo = TodoRepository.findById(todoId).orElseThrow();
        TodoRepository.delete(todo);


    }

    @Override
    public void deleteList(Long listId) {

        List lista = ListRepository.findById(listId)
                .orElseThrow();
        ListRepository.delete(lista);
    }


}
