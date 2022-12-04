import React from 'react';

export default class SorryForm extends React.Component {
  render() {
    return  (
      <form>
        <div class="form-group">
          <label for="inputName1">Name of the aggrieved</label>
          <input type="text" class="form-control" id="inputName1" aria-describedby="nameHelp" placeholder="Aggrieved" />
          <label for="inputName2">Name of the perpetrator</label>
          <input type="text" class="form-control" id="inputName2" aria-describedby="nameHelp" placeholder="Perpetrator" />
          <label for="inputActions">Description of the events</label>
          <input type="text" class="form-control" id="inputActions" aria-describedby="nameHelp" placeholder="Events" />

        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
  }
}