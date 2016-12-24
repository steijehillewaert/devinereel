import React, {Component} from 'react';

import StudentList from '../components/StudentList';
import CourseList from '../components/CourseList';
import Display from '../components/Display';

const courses = [
  `FUD`, `BAD`, `MAII`, `MAI`,
  `COD`, `FRD3`, `MAIII`, `WAD`, `ND`, `MAIV`,
  `MAV`, `EXW`,
];

const students = [`thibault.maekelber1`];

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>
          <select className='year-list'>
            <option>Jaar 1</option>
            <option>Jaar 2</option>
            <option>Jaar 3</option>
          </select>
          <CourseList courses={courses} />
          <StudentList students={students} />
        </nav>
        <Display />
      </div>
    );
  }
}
