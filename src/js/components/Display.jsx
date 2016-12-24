import React, {PropTypes} from 'react';

const Display = ({
  student,
  course,
  }) => {

  return (
    <iframe src={`https://student.howest.be/${student}/20152016/${course}`}>

    </iframe>
  );

};

Display.propTypes = {
  student: PropTypes.string,
  course: PropTypes.string,
};

export default Display;
