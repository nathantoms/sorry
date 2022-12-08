import React, { useState } from 'react';
import './SorryLetter.css';
import { WhatsappShare } from './WhatsappShare';
import { CommentForm } from './CommentForm';

export const SorryLetter = ({aggrieved, perpetrator, eventDescription, apologyId}) => {
  const fullLetter = () => {
    return (
      <>
        <p>Dear <strong>{aggrieved}</strong>,</p>
        <p><strong>{perpetrator}</strong>, and all of the Sonning Men's 2nd XI would like to formally apologise for <strong>"{eventDescription}"</strong>.</p>
        <p><strong>{perpetrator}</strong> is working hard to correct this character flaw and the whole team will be supporting him wherever they can with this endeavour.</p>
        <p className="small-break">Warmest and sincerest apologies,</p>
        <p>Sonning Men's 2nd XI</p>
      </>
    )
  };

  return (
    <div className="letter-container">
      <div className="letter">
        {fullLetter()}
        <div className="letter-footer">
          <div className="comments">
            <CommentForm apologyId={apologyId} />
          </div>
          <div className="whatsapp">
            <WhatsappShare aggrieved={aggrieved} perpetrator={perpetrator} eventDescription={eventDescription}/>
          </div>
        </div>
      </div>
    </div>
  );
}