package co.com.sofka.crud.services;

import co.com.sofka.crud.DTOs.ListDTO;
import co.com.sofka.crud.DTOs.TodoDTO;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.repository.ListRepository;
import co.com.sofka.crud.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class TodoService extends TodoServiceInterface {
    private ListRepository ListRepository;
    private TodoRepository TodoRepository;

    @Autowired
    private TodoService(ListRepository ListRepository, TodoRepository TodoRepository){
        this.ListRepository = ListRepository;
        this.TodoRepository = TodoRepository;
    };

    public Set<TodoDTO> getTodosByList(Long listId){
        ListRepository.findById(listId)
    };

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
