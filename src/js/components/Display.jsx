import React, {PropTypes} from 'react';

const Display = ({
  student,
  course,
  year,
  }) => {

  return (
    year && course && student ?
    <iframe src={`https://student.howest.be/${student}/${year}/${course}`}>

    </iframe>
    :
    `Kies een jaar, vak en student!`
  );

};

Display.propTypes = {
  student: PropTypes.string,
  course: PropTypes.string,
  year: PropTypes.number,
};

export default Display;
