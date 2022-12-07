import axios from "axios";
// import Airtable from "airtable";

export function createRecord(aggrieved, perpetrator, eventDescription) {

  const config = {
    headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}` }
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

  axios.post( 
    'https://api.airtable.com/v0/appQmwSEub5AE32WR/Apology',
    bodyParameters,
    config
  ).then(console.log).catch(console.log);
}