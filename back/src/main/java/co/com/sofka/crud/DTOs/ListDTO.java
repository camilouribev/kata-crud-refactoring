package co.com.sofka.crud.DTOs;

import co.com.sofka.crud.entities.Todo;

import java.util.HashSet;
import java.util.Set;

public class ListDTO {

    private Long id;
    private String name;
    private Set<TodoDTO> items = new HashSet<>();

    public ListDTO(){
        super();
    }
    public ListDTO(Long id, String name, Set<TodoDTO> items) {
        this.id = id;
        this.name = name;
        this.items = items;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<TodoDTO> getItems() {
        return items;
    }

    public void setItems(Set<TodoDTO> items) {
        this.items = items;
    }
}
