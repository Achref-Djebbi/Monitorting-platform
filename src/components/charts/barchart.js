
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Line} from 'react-chartjs-2';
import {Radar} from "react-chartjs-2"
import { Bar,Doughnut } from 'react-chartjs-2';

const barData = {
   
  labels: ['PJR', 'PJB', 'PJE', 'PJA'],
  
 
  datasets: [
    {
      
      label:  'Errors',
        
      backgroundColor: [
	      '#FF6384',
	      '#4BC0C0',
	      '#FFCE56',
	      '#E7E9ED',
	      
      ],
     
        
     
   
      data: [20,1,3,30],
     
      borderColor: 'black',
      pointBorderColor: 'blue',
      responsive :true,
      
    }
  ]
}
  
  const BarChart= (props) => {
  
    return (
      <div>
          <Bar data={barData} />
      </div>
    )
  }
  
  export default BarChart