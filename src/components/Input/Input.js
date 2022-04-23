import React from "react";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

const Input = (props) => {
  const handleCity = (event) => {
    props.handleCity(event.target.value);
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
          onChange={handleCity}
        />
      </FormGroup>
    </div>
  );
};

export default Input;
