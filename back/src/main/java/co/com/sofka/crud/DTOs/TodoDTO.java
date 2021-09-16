package co.com.sofka.crud.DTOs;

public class TodoDTO {

    private Long id;
    private String nombre;
    private boolean terminado;
    private Long idLista;

    public TodoDTO(Long id, String nombre, boolean terminado, Long idLista) {
        this.id = id;
        this.nombre = nombre;
        this.terminado = terminado;
        this.idLista = idLista;
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

    public Long getIdLista() {
        return idLista;
    }

    public void setIdLista(Long idLista) {
        this.idLista = idLista;
    }
}
