import React from 'react';
import SorryForm from './components/SorryForm';

export default class Sorry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formSubmittedFalse: false};
  }

  render() {
    return  (
      <SorryForm />
    );
  }
}