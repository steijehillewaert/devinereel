import React from 'react';
import {render} from 'react-dom';
import App from 'src/js/containers/App';

const init = () => {
  render(<App />, document.querySelector(`.react-mount`));
};

init();
