import React from 'react';
import { useSearchParams } from "react-router-dom";
import SorryForm from './SorryForm';
import { SorryLetter } from './SorryLetter';

export const Sorry = () => {
  const [urlParams] = useSearchParams();


  const isFormSubmitted = () => {
    const aggrieved = urlParams.get('aggrieved')
    const perpetrator = urlParams.get('perpetrator')
    const events = urlParams.get('events')

    return false;
  }

  return  (
    <>
      {isFormSubmitted() ? <SorryLetter /> : <SorryForm />}
    </>
  );
}