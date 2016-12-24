import React, {PropTypes} from 'react';

const CourseList = ({
  courses,
  currentCourse,
  onChangeCourseInput: handleCourseInput,
  }) => {

  return (
    <select className='course-list' onChange={handleCourseInput} value={currentCourse}>
      {courses.map(course =>
        <option key={Math.random()}>
          {course}
        </option>
      )}
    </select>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  currentCourse: PropTypes.string,
  onChangeCourseInput: PropTypes.func,
};

export default CourseList;
