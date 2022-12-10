import React, { useState, useEffect } from 'react';
import './SorryLetter.css';
import { getComments } from '../services/AirtableService';
import { WhatsappShare } from './WhatsappShare';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';

export const SorryLetter = ({aggrieved, perpetrator, eventDescription, apologyId}) => {
  const [comments, setComments] = useState([]);
  let commentsLoaded = false;

  useEffect(() => {
    if(!commentsLoaded) {
      fetchComments(apologyId);
      commentsLoaded = true;
    }
  }, [getComments, apologyId]);

  const fetchComments = async () => {
    const data = await getComments(apologyId);
    if(data && data.records) {
      const orderedRecords = orderComments(data.records)
      setComments(orderedRecords);
    }
  }

  const orderComments = (comments) => {
    return comments.sort(function(a,b){
      return new Date(b.createdTime) - new Date(a.createdTime);
    });
  }

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
        <div className="whatsapp-container">
            <div className="whatsapp">
              <WhatsappShare aggrieved={aggrieved} perpetrator={perpetrator} eventDescription={eventDescription}/>
            </div>
          </div>
        <div className="writing-container">{fullLetter()}</div>
        <div className="letter-footer">
          <div className="comments">
            <CommentForm apologyId={apologyId} fetchComments={fetchComments} />
            <CommentList comments={comments}/>
          </div>
        </div>
      </div>
    </div>
  );
}