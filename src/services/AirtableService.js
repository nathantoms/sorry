import Airtable from "airtable";

export async function createRecord(aggrieved, perpetrator, eventDescription) {
  const base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base('appQmwSEub5AE32WR');

  base('Apology').create([
    {
      "fields": {
        "Aggrieved": aggrieved,
        "Perpetrator": perpetrator,
        "Event Description": eventDescription,
      }
    },
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
}