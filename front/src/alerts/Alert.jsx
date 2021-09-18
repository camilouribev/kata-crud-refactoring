import React from "react";

export default function Alert(props) {
  if (props.trigger) {
    return (
      <div>
        <h3>Mínimo 3 caracteres</h3>
      </div>
    );
  }

  return null;
}
