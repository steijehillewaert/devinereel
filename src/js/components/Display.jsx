import React, {Component} from 'react';

export default class Display extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const {student, course} = this.state;

    return (
      <iframe src={`https://student.howest.be/${student}/${course}`}>

      </iframe>
    );
  }
}
