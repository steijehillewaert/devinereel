import React, {Component} from 'react';

import StudentList from '../components/StudentList';
import CourseList from '../components/CourseList';
import Display from '../components/Display';

import Courses from '../static/courses';
import Students from '../static/students';

class App extends Component {

  state = {
    course: `BAD`,
    student: `kevin.meyvaert`,
    year: 20142015,
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

  handleYearInput = yearInput => {
    let {year} = this.state;
    year = yearInput.target.value;
    this.setState({year});
  }

  render() {
    const {student, course, year} = this.state;
    return (
      <div>
        <nav>
          <div className='nav-inputs'>
            <select className='year-list' onChange={this.handleYearInput} value={year}>
              <option value='20142015'>2014-2015</option>
              <option value='20152016'>2015-2016</option>
              <option value='20162017'>2016-2017</option>
            </select>
            <CourseList
              courses={Courses}
              currentCourse={course}
              onChangeCourseInput={this.handleCourseInput}
            />
            <StudentList
              students={Students}
              currentStudent={student}
              onChangeStudentInput={this.handleStudentInput}
            />
          </div>
          <button>
            Add yourself!
          </button>
        </nav>
        <Display course={course} student={student} year={year} />
      </div>
    );
  }
}

export default App;
