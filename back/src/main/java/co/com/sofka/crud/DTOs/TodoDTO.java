package co.com.sofka.crud.DTOs;

public class TodoDTO {

    private Long id;
    private String nombre;
    private boolean terminado;
    private String categoria;

    public TodoDTO(Long id, String nombre, boolean terminado, String categoria) {
        this.id = id;
        this.nombre = nombre;
        this.terminado = terminado;
        this.categoria = categoria;
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

    public boolean isTerminado() {
        return terminado;
    }

    public void setTerminado(boolean terminado) {
        this.terminado = terminado;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
