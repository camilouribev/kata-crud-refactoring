package co.com.sofka.crud.DTOs;

import java.util.HashSet;
import java.util.Set;

public class ListDTO {

    private Long id;
    private String nombre;
    private Set<TodoDTO> items = new HashSet<>();


    public ListDTO(Long id, String nombre, Set<TodoDTO> items) {
        this.id = id;
        this.nombre = nombre;
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
