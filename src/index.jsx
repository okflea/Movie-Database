import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App/App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App2 /> */}
    <App />
  </React.StrictMode>
)
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';

// import App from './Components/App/App.jsx ';
// const root = ReactDOM.createRoot(document.querySelector('#root'));

// // Initial render. Container is implicitly accessed.
// root.render(<App name="Hello" />);

// // Subsequent renders. Container is implicitly accessed.
// root.render(<App name="Hello world!" />);
