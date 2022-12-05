import React from 'react';
import './SorryLetter.css'

export const SorryLetter = ({aggrieved, perpetrator, eventDescription}) => {
  
  const fullLetter = () => {
    return (
      <>
        <p>Dear <strong>{aggrieved}</strong>,</p>
        <p><strong>{perpetrator}</strong>, and all of the Sonning Men's 2nd XI would like to formally apologise for <strong>"{eventDescription}"</strong>.</p>
        <p><strong>{perpetrator}</strong> is working hard to correct this character flaw and the whole team will be supporting him wherever they can with this endeavour.</p>
        <p>If you would like to suggest further corrective measures/methods of apologies you can do so below.</p>
        <p>Warmest and sincerest apologies,</p>
        <p>Sonning Men's 2nd XI</p>
      </>
    )
  };

  return (
    <>
      <div className="letter">
        {fullLetter()}
      </div>
    </>
  );
}