import axios from "axios";

export async function createRecord(aggrieved, perpetrator, eventDescription) {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    }
  };

  // const config = {
  //   headers: { 
  //     Authorization: `Bearer pat2BtoVOcXBzjgmw.945f8f60a60e461a5b8663c1b54fbc1fe01111b56d0c309ef584f7f98ca1992b`,
  //     'Content-Type': 'application/json'
  //   }
  // };

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

  await axios.post( 
    'https://api.airtable.com/v0/appQmwSEub5AE32WR/Apology',
    bodyParameters,
    config
  ).then(console.log).catch(console.log);
}