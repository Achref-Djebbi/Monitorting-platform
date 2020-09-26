import React from 'react';
import {Link} from 'react-router-dom';

function Overview() {
  return (
    <div className="Overview">
     
     <body>
        <h1><i>Overview</i></h1>
         <Link to="/">
         <button class="button ">Home</button>
         </Link>

        
      </body>
      
    </div>
  );
}

export default Overview;
