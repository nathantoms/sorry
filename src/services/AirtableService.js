import axios from "axios";

export async function createRecord(aggrieved, perpetrator, eventDescription) {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    }
  };

  const bodyParameters = {
    "records": [
      {
        "fields": {
          "Aggrieved": aggrieved,
          "Perpetrator": perpetrator,
          "Event Description": eventDescription
        }
      }
    ]
  };

  const { data } = await axios.post( 
    'https://api.airtable.com/v0/appQmwSEub5AE32WR/Apology',
    bodyParameters,
    config
  );

  return data;
};

export async function addComment(apologyId, comment) {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    }
  };

  const bodyParameters = {
    "records": [
      {
        "fields": {
          "Apology": [apologyId],
          "Comment": comment
        }
      }
    ]
  };

  const { data } = await axios.post( 
    'https://api.airtable.com/v0/appQmwSEub5AE32WR/Comments',
    bodyParameters,
    config
  );

  return data;
};

export async function getComments(apologyId) {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    }
  };

  const { data } = await axios.get( 
    `https://api.airtable.com/v0/appQmwSEub5AE32WR/Comments?filterByFormula=%7BApology%7D%3D%22${apologyId}%22`,
    config
  );

  return data;
};