import React, {Component, PropTypes} from 'react';

export default class StudentList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const {students} = this.props;

    return (
      <select className='student-list'>
        {students.map(student =>
          <option key={Math.random()}>
            {student}
          </option>
        )}
      </select>
    );
  }

  static propTypes = {
    students: PropTypes.array.isRequired,
  };
}
