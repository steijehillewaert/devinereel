import React, { PropTypes } from 'react';

const Display = ({ student, course, year }) => {
  return (
    student && course && student !== `---`
    ? <iframe src={`https://student.howest.be/${student}/${year}/${course}`}></iframe>
    : <section className='no-input'>Kies een jaar, vak en student!</section>
  );
};

Display.propTypes = {
  student: PropTypes.string,
  course: PropTypes.string,
  year: PropTypes.string.isRequired,
};

export default Display;
