package co.com.sofka.crud.controllers;

import co.com.sofka.crud.DTOs.ListDTO;
import co.com.sofka.crud.DTOs.TodoDTO;
import co.com.sofka.crud.entities.List;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    private TodoService TodoService;

    @Autowired
    public TodoController(TodoService TodoService) {
        this.TodoService = TodoService;
    }

    @GetMapping(value = "/api/lists")
    public Set<ListDTO> getAllListToDos() {
        return TodoService.getAllLists();
    }

    @GetMapping(value = "api/{listId}/todos")
    public Iterable<TodoDTO> getToDosByListId(@PathVariable("listId") Long listId) {
        return TodoService.getToDosByList(listId);
    }

    @PostMapping(value = "api/todolist")
    public ListDTO newListToDo(@RequestBody ListDTO todoList) {
        return TodoService.createList(todoList);
    }

    @DeleteMapping(value = "api/{id}/todolist")
    public void deleteListById(@PathVariable("id") Long id) {
        TodoService.deleteList(id);
    }

    @PutMapping(value = "api/{listId}/todo")
    public TodoDTO updateAToDoByListId(@PathVariable("listId") Long listId, @RequestBody TodoDTO todo) {
        if (todo.getId() != null) {
            return TodoService.updateToDo(listId, todo);
        }
        throw new RuntimeException();
    }

    @PostMapping(value = "api/{listId}/todo")
    public TodoDTO addNewToDoByListId(@PathVariable("listId") Long listId, @RequestBody TodoDTO todo) {
        return TodoService.createToDoByList(listId, todo);
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void deleteAToDoById(@PathVariable("id") Long id) {
        TodoService.deleteToDo(id);
    }
}
