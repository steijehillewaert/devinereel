import React, { PropTypes } from 'react';

const Display = ({ url, course, year }) => {
  return (
    url && course && url !== `---`
    ? <iframe src={`https://student.howest.be/${url}/${year}/${course}`}></iframe>
    : <section className='no-input'>Kies een jaar, vak en student!</section>
  );
};

Display.propTypes = {
  url: PropTypes.string,
  course: PropTypes.string,
  year: PropTypes.string.isRequired,
};

export default Display;
