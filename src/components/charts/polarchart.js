
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Line} from 'react-chartjs-2';
import {Radar} from "react-chartjs-2"
import {Polar} from 'react-chartjs-2';

function PolarChart(props) {
	const data = {
	  datasets: [{
	    data: [
	      11,
	      16,
	      7,
	      3,
	      
	    ],
	    backgroundColor: [
	      '#FF6384',
	      '#4BC0C0',
	      '#FFCE56',
	      '#E7E9ED',
	      
	    ],
	    label: 'My dataset' // for legend
	  }],
	  labels: [
	    'PJR',
	    'PJB',
	    'PJE',
	    'PJA',
	    
	  ]
	};
	
  return (
    <div>
      <Polar data={data} />
    </div>
  );
}
  
  export default PolarChart