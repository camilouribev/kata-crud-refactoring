package co.com.sofka.crud.entities;

import javax.persistence.*;

@Entity
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private boolean completed;
    private String category;

    /*@ManyToOne(optional = false, cascade= CascadeType.ALL )
    private ListToDo list;*/

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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

  /*  public ListToDo getList() {
       return list;
    }

    public void setList(ListToDo list) {
        this.list = list;
    }*/
}
