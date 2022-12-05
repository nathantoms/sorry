import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { SorryForm } from './SorryForm';
import { SorryLetter } from './SorryLetter';

export const Sorry = () => {
  const [urlParams] = useSearchParams();
  const [aggrieved] = useState(urlParams.get('aggrieved') || "");
  const [perpetrator] = useState(urlParams.get('perpetrator') || "");
  const [eventDescription] = useState(urlParams.get('eventDescription') || "");

  const isFormSubmitted = () => {
    return !(aggrieved === "" || perpetrator === "" || eventDescription === "");
  }

  const onFormSubmit = (aggrieved, perpetrator, eventDescription) => {
    const urlParams = new URLSearchParams(window.location.search);

    urlParams.set('aggrieved', aggrieved);
    urlParams.set('perpetrator', perpetrator);
    urlParams.set('eventDescription', eventDescription);

    window.location.search = urlParams;
  }

  return  (
    <>
      {isFormSubmitted() ? <SorryLetter aggrieved={aggrieved} perpetrator={perpetrator} eventDescription={eventDescription}/> : <SorryForm formSubmitted={onFormSubmit}/>}
    </>
  );
}