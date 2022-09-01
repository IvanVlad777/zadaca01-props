import { Component } from 'react';

export default class ImeGodineKlasa extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <p>Ime: {this.props.ime}</p>
        <p>Godine: {this.props.dob}</p>
      </div>
    );
  }
}
