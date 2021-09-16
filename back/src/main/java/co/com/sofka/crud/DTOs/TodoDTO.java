package co.com.sofka.crud.DTOs;

public class TodoDTO {

    private Long id;
    private String name;
    private boolean isCompleted;
    private Long listId;

    public TodoDTO(){
        super();
    }

    public TodoDTO(Long id, String name, boolean isCompleted, Long listId) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
        this.listId = listId;
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

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    public Long getListId() {
        return listId;
    }

    public void setListId(Long listId) {
        this.listId = listId;
    }
}
