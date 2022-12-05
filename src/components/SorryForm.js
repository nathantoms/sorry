import React, { useState } from 'react';

export const SorryForm = ({formSubmitted}) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [aggrieved, setAggrieved] = useState("");
  const [perpetrator, setPerpetrator] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleFormValidation = (aggrieved, perpetrator, eventDescription) => {
    if(aggrieved === "" || perpetrator === "" || eventDescription === "") {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  }

  const handleAggrievedChange = (e) => {
    setAggrieved(e.target.value);
    handleFormValidation(e.target.value, perpetrator, eventDescription);
  };

  const handlePerpetratorChange = (e) => {
    setPerpetrator(e.target.value);
    handleFormValidation(aggrieved, e.target.value, eventDescription);
  };

  const handleEventsChange = (e) => {
    setEventDescription(e.target.value);
    handleFormValidation(aggrieved, perpetrator, e.target.value);
  };
  
  const submitForm = (e) => {
    e.preventDefault();

    formSubmitted(
      aggrieved,
      perpetrator,
      eventDescription
    );
  };

  return  (
    <form>
      <div className="form-group">
        <label htmlFor="inputName1">Name of the aggrieved</label>
        <input 
          type="text"
          className="form-control"
          id="inputName1"
          aria-describedby="nameHelp"
          placeholder="Aggrieved"
          onChange={handleAggrievedChange}
        />
        <label htmlFor="inputName2">Name of the perpetrator</label>
        <input
          type="text"
          className="form-control"
          id="inputName2"
          aria-describedby="nameHelp"
          placeholder="Perpetrator"
          onChange={handlePerpetratorChange}
        />
        <label htmlFor="inputActions">Description of the events</label>
        <input
          type="text"
          className="form-control"
          id="inputActions"
          aria-describedby="nameHelp"
          placeholder="Events"
          onChange={handleEventsChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={submitForm}
        disabled={!formIsValid}  
      >
          Submit
      </button>
    </form>
  );
}