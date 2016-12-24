import React, {Component, PropTypes} from 'react';

export default class CourseList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const {courses} = this.props;

    return (
      <select className='course-list'>
        {courses.map(course =>
          <option key={Math.random()}>
            {course}
          </option>
        )}
      </select>
    );
  }

  static propTypes = {
    courses: PropTypes.array.isRequired,
  };
}
