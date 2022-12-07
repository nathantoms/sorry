import React, { useState } from 'react';
import './SorryForm.css';

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
    const value = e.target.value.trim();
    setAggrieved(value);
    handleFormValidation(value, perpetrator, eventDescription);
  };

  const handlePerpetratorChange = (e) => {
    const value = e.target.value.trim();
    setPerpetrator(value);
    handleFormValidation(aggrieved, value, eventDescription);
  };

  const handleEventsChange = (e) => {
    const value = e.target.value.trim();
    setEventDescription(value);
    handleFormValidation(aggrieved, perpetrator, value);
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
    <div className="sorry-form-wrapper">
      <div className="sorry-form-container">
        <form>
          <div class="form-group row">
            <label for="inputAggrieved" class="col-sm-4 col-form-label text-right">Aggrieved</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="inputAggrieved" placeholder="Name" onChange={handleAggrievedChange} />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPerpetrator" class="col-sm-4 col-form-label text-right">Perpetrator</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="inputPerpetrator" placeholder="Name" onChange={handlePerpetratorChange}/>
            </div>
          </div>
          <div class="form-group row">
            {/* <div class="col-sm-4 text-right">I was wronged by the whole team</div>
            <div class="col-sm-6">
              <div class="form-check check-placement">
                <input class="form-check-input" type="checkbox" id="gridCheck1" />
              </div>
            </div>
          </div>
          <div class="form-group row"> */}
            <label for="inputEventDescription" class="col-sm-4 col-form-label text-right">Description of Events</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="inputEventDescription" placeholder="Description" onChange={handleEventsChange} />
            </div>
          </div>
          <div className="sorry-form-submit-container">
            <div class="form-group row">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary" onClick={submitForm} disabled={!formIsValid}>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}