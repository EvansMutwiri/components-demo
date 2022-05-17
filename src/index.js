import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Hello name='Evans'/>
    {/* <Welcome name='Eazy'/> */}
    <Welcome name='Eazy' desc='Developer of sorts'/>
  </>
)
reportWebVitals();
