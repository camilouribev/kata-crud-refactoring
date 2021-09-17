package co.com.sofka.crud.exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(HttpStatus.CONFLICT) // 409
public class IdNotFound extends RuntimeException{
            public IdNotFound(long id){
            super("El id " + id + " no existe.");
        }
    }


