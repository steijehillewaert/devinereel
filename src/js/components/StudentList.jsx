import React, { PropTypes } from 'react';

const StudentList = ({
  students,
  currentStudent,
  onChangeStudentInput: handleStudentInput,
  }) => {

  return (
    <select className='student-list' onChange={handleStudentInput} value={currentStudent}>
      {students.sort().map(student =>
        <option key={Math.random()}>
          {student}
        </option>
      )}
    </select>
  );
};

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
  currentStudent: PropTypes.string,
  onChangeStudentInput: PropTypes.func,
};

export default StudentList;
