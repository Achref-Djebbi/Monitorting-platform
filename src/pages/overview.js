import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Line} from 'react-chartjs2';

import '../components/charts/chart.css';
import BarChart from '../components/charts/barchart';

import PolarChart from '../components/charts/polarchart';


function Overview() {




  return (
    <div className="Overview">
     
     <body>
        <h1><i>Overview</i></h1>
        <p>Viewing the last data reported</p>
        <p>Date:   Team:    Shift:</p>
       
       <div className='chart'>
         <div className='st' style={{width : 800}}>
         <h2>ST22 in CCBJI Systems</h2>
         <BarChart /> 
         </div>
         <div id='sm' style={{width : 800}}>
         <h2>SM12 in CCBJI Systems</h2>
         <p>Number of lock entries that did pass 2 days</p>
         <PolarChart/> 
         </div>
       
         
       
       </div>
       
          
         <Link to="/">
         <button class="button ">Home</button>
         </Link>

        
      </body>
      
    </div>
  );
}

export default Overview;
