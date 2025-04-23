import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const HistogramChart = () => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const labels = ['0-10', '10-20', '20-30', '30-40', '40-50','50-60', '60-70', '70-80', '80-90', '90-100'];
    const data = [0.5, 1.0, 2.5, 2.8, 3.7, 2.8, 2.5, 1.0, 0.5, 0.2];
    
    // Optional: This line data could be a moving average, trendline, etc.
    const lineData = [0.5, 1.0, 2.5, 2.8, 3.7, 2.8, 2.5, 1.0, 0.5, 0.2];
    

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            type: 'bar',
            label: 'Frequency',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 0,
            barPercentage: 1.0,
            categoryPercentage: 1.0
          },
          {
            type: 'line',
            label: 'Trend',
            data: lineData,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.3,
            pointRadius: 3,
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Bins'
            },
            grid: {
              display: false
            },
            ticks: {
              align: 'center'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Frequency'
            }
          }
        }
      }
    });

    return () => {
      chartInstanceRef.current.destroy();
    };
  }, []);

  return (
    <div
      className="container"
      style={{
        display:'flex',
        flexDirection:'column',
        width: '100%',
        height: '100vh',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>Histogram</h1>
      <div style={{ width: '50%', height: '50vh',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',padding:'20px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default HistogramChart;
