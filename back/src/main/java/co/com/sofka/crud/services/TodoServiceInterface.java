package co.com.sofka.crud.services;

import co.com.sofka.crud.DTOs.ListDTO;
import co.com.sofka.crud.DTOs.TodoDTO;

import java.util.Set;

public interface TodoServiceInterface {
    public TodoDTO createToDoByList(Long listId, TodoDTO someTodoDTO);
    public ListDTO createList(ListDTO someListDTO);
    public Set<TodoDTO> getToDosByList(Long listId);
    public Set<ListDTO> getAllLists();
    public TodoDTO updateToDo(Long listId, TodoDTO oldTodo );
    public void deleteToDo(Long todoId);
    public void deleteList(Long listId);



}
