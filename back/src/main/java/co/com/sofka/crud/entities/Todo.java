package co.com.sofka.crud.entities;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message= "Debes escribir algo en el campo")
    @Size(min=4, max = 100)
    private String name;
    private boolean completed;


    public Todo(){
    }

    public Todo(Long id, String name, boolean completed) {
        this.id = id;
        this.name = name;
        this.completed = completed;
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
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }



}
