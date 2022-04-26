import React from "react";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

const Input = (props) => {
  const handleCity = (event) => {
    // console.log(event);
    if (event.key === "Enter") {
      props.handleCity(event.target.value);
    }
    if (event.type === "blur") {
      props.handleCity(event.target.value);
    }
  };

  return (
    <div className="input">
      <FormGroup
        style={{ display: "flex", justifyContent: "center" }}
        controlId="formBasicEmail"
      >
        <FormControl
          type="text"
          placeholder="Enter city"
          onBlur={handleCity}
          onKeyDown={handleCity}
          style={{ borderRadius: "10px", border: "1px solid blue" }}
        />
      </FormGroup>
    </div>
  );
};

export default Input;
