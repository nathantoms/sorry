import React from 'react';
import './WhatsappShare.css';
import { ReactComponent as WhatsappIcon } from '../assets/whatsapp.svg';

export const WhatsappShare = ({aggrieved, perpetrator, eventDescription}) => {
  const fullUrl = () => {
    const baseUrl = "https://api.whatsapp.com/send?text=";
    const apologyText = `Dear%20${aggrieved}%2C%0A%0A${perpetrator}%2C%20and%20all%20of%20the%20Sonning%20Men's%202nd%20XI%20would%20like%20to%20formally%20apologise%20for%20%22${eventDescription}%22.%0A${perpetrator}%20is%20working%20hard%20to%20correct%20this%20character%20flaw%20and%20the%20whole%20team%20will%20be%20supporting%20him%20wherever%20they%20can%20with%20this%20endeavour.%0A%0AWarmest%20and%20sincerest%20apologies%2C%0ASonning%20Men's%202nd%20XI`;
    const linkUrl = encodeURIComponent(`https://www.verysorry.uk${window.location.search}`);
    const shareText = `%0A%0AShared%20from%20${linkUrl}`;

    return `${baseUrl}${apologyText}${shareText}`;
  }

  return (
    <>
      <a href={fullUrl()}>Share to Whatsapp <WhatsappIcon className="whatsapp-icon" /></a>
    </>
  );
}