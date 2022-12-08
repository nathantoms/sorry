import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { SorryForm } from './SorryForm';
import { SorryLetter } from './SorryLetter';
import { createRecord } from '../services/AirtableService';

export const Sorry = () => {
  const [urlParams] = useSearchParams();
  const [aggrieved] = useState(urlParams.get('aggrieved') || "");
  const [perpetrator] = useState(urlParams.get('perpetrator') || "");
  const [eventDescription] = useState(urlParams.get('eventDescription') || "");
  const [apologyId] = useState(urlParams.get('apologyId') || "");

  const isFormSubmitted = () => {
    return !(aggrieved === "" || perpetrator === "" || eventDescription === "");
  }

  const onFormSubmit = async (aggrieved, perpetrator, eventDescription) => {
    const urlParams = new URLSearchParams(window.location.search);
   
    const data = await createRecord(aggrieved, perpetrator, eventDescription);

    urlParams.set('apologyId', data.records[0].id)
    urlParams.set('aggrieved', aggrieved);
    urlParams.set('perpetrator', perpetrator);
    urlParams.set('eventDescription', eventDescription);

    window.location.search = urlParams;
  }

  return  (
    <>
      {isFormSubmitted() ? <SorryLetter aggrieved={aggrieved} perpetrator={perpetrator} eventDescription={eventDescription} apologyId={apologyId}/> : <SorryForm formSubmitted={onFormSubmit}/>}
    </>
  );
}