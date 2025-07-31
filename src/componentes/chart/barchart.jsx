import React, { useState, useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar componentes necesarios
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  // Estado para el día seleccionado

  // Datos simulados
  const dataValues = [5, 7, 3, 8, 4, 6, 2];




  const data = {
    labels,
    datasets: [
      {
        label: 'Pacientes atendidos',
        data: dataValues,
        backgroundColor: ['#102542',
          '#f5a315',
          '#e5e5e5','#000', '#ff638433',],
        hoverBackgroundColor: '#f51515d7',
        borderWidth: 4,
        barThickness: 30,
        borderRadius: 10,
     // Más espacio entre barras
      },
    ],
  };


  // Opciones con evento onClick
  const options = {
    responsive: true,
      interaction: {
      mode: 'nearest',    
      intersect: true,    
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pacientes atendidos por día',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
