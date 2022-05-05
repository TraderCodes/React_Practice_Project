import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Gay() {
   return (
      <div className="mainnav">
         <nav className="spacing">
            <h4 className="logo">cool dude</h4>

            <div className="navbar">
               <li>Home</li>
               <li>Image</li>
               <li>Space</li>
               <li>Class</li>
            </div>
         </nav>
      </div>
   );
}

ReactDOM.render(<Gay />, document.getElementById('root'));
