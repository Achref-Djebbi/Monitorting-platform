import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
     
     <body>
        <h1><i>Welcome to the monitoring platform</i></h1>
         <Link to="/monitoring">
         <button class="button ">Monitoring Rapport</button>
         </Link>

         <Link to="/overview">
         <button class="button ">Systems overview</button>
         </Link>
      </body>
      
    </div>
  );
}

export default Home;


