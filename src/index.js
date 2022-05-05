import React from 'react';
import { ReactDOM } from 'react';
const Reason = () => {
   return (
      <div>
         <h1>I love Coding React</h1>
         <p>I want to get a job</p>
         <ul>
            <li>React is cool</li>
            <li>React is fun</li>
            <li>React is a hireable job</li>
         </ul>
      </div>
   );
};
ReactDOM.render(Reason, document.getElementById('root'));

export default Reason;
