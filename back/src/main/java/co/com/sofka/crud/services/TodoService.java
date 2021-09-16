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

import java.util.Set;
import java.util.stream.Collectors;

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
    private ListDTO convertToListDTO(List list) {
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

    public Set<TodoDTO> getTodosByList(Long listId) {
        try {
            return ListRepository.findById(listId).get().getToDos().stream().map(todo -> convertToTodoDTO(todo)).collect(Collectors.toSet());
        } catch (Exception e) {
            return null;
        }

    }


    @Override
    public TodoDTO createToDoByList(Long listId, TodoDTO someTodoDTO) {
        return null;
    }

    @Override
    public ListDTO createList(ListDTO someListDTO) {
        return null;
    }

    @Override
    public Set<TodoDTO> getToDosByList(Long listId) {
        return null;
    }

    @Override
    public Set<ListDTO> getAllLists() {
        return null;
    }

    @Override
    public TodoDTO updateToDo(Long listId, TodoDTO oldTodo) {
        return null;
    }

    @Override
    public void deleteToDo(Long todoId) {

    }

    @Override
    public void deleteList(Long listId) {

    }


}
