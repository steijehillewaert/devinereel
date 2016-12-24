import React, {Component} from 'react';

import StudentList from '../components/StudentList';
import CourseList from '../components/CourseList';
import Display from '../components/Display';

const courses = [
  `FUD`, `BAD`, `MAII`, `MAI`,
  `COD`, `FRD3`, `MAIII`, `WAD`, `ND`, `MAIV`,
  `MAV`, `EXW`,
];

const students = [`kevin.meyvaert`];

class App extends Component {

  state = {
    course: `CPIII`,
    student: `kevin.meyvaert`,
  };

  handleCourseInput = courseInput => {
    let {course} = this.state;
    course = courseInput.target.value;
    this.setState({course});
    console.log(this.state);
  }

  handleStudentInput = studentInput => {
    let {student} = this.state;
    student = studentInput.target.value;
    this.setState({student});
  }

  render() {
    const {student, course} = this.state;
    return (
      <div>
        <nav>
          <select className='year-list'>
            <option>Jaar 1</option>
            <option>Jaar 2</option>
            <option>Jaar 3</option>
          </select>
          <CourseList
            courses={courses}
            currentCourse={course}
            onChangeCourseInput={this.handleCourseInput}
          />
          <StudentList
            students={students}
            currentStudent={student}
            onChangeStudentInput={this.handleStudentInput}
          />
        </nav>
        <Display course={course} student={student} />
      </div>
    );
  }
}
export default App;
