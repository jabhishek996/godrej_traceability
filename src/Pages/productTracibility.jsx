// import React, { useState, useRef, useEffect } from 'react';
// // import { Line } from 'react-chartjs-2';
// import './about.css';
// // import 'chart.js/auto'; // necessary for Chart.js v3+

// const ProductTracibility = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [sliderStyle, setSliderStyle] = useState({});
//   const btnRefs = useRef([]);
//   const [inputValues, setInputValues] = useState({
//     batteryId: '',
//     batchId: '',
//     dateFrom: '',
//     dateTo: ''
//   });
//   const [showGraph, setShowGraph] = useState(false);

//   const labels = ['Battery ID', 'Batch ID', 'Date'];

//   const handleSelect = (index) => {
//     setSelectedIndex(index);
//     setShowGraph(false); // reset graph on new selection
//   };

//   useEffect(() => {
//     const currentBtn = btnRefs.current[selectedIndex];
//     if (currentBtn) {
//       setSliderStyle({
//         width: `${currentBtn.offsetWidth}px`,
//         left: `${currentBtn.offsetLeft}px`
//       });
//     }
//   }, [selectedIndex]);

//   const handleChange = (e) => {
//     setInputValues({ ...inputValues, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     // You can add API call or logic here
//     setShowGraph(true);
//   };

//   const renderInput = () => {
//     switch (selectedIndex) {
//       case 0:
//         return (
//           <div style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'10px' }}> 
//              <h3>Enter Battery ID</h3>
//             <input
//           type="text"
//           name="batteryId"
//           placeholder="Battery ID"
//           value={inputValues.batteryId}
//           onChange={handleChange}
//         /></div>
         
//         );
//       case 1:
//         return (
//           <div style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'10px' }}> 
//              <h3>Enter Batch ID</h3>
//             <input
//             type="text"
//             name="batchId"
//             placeholder="Enter Batch ID"
//             value={inputValues.batchId}
//             onChange={handleChange}
//           /></div>

//         );
//       case 2:
//         return (
//           <div className="date-inputs"  >
//             <h3>Select Date Range:</h3>
//             <label htmlFor="">From:   </label>
//             <input
//               type="date"
//               name="dateFrom"
//               value={inputValues.dateFrom}
//               onChange={handleChange}
//             />
//             <label htmlFor="">To:   </label>
//             <input
//               type="date"
//               name="dateTo"
//               value={inputValues.dateTo}
//               onChange={handleChange}
//             />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const chartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr'],
//     datasets: [
//       {
//         label: 'Sample Output',
//         data: [12, 19, 3, 5],
//         borderColor: 'rgba(75,192,192,1)',
//         fill: false
//       }
//     ]
//   };

//   return (
//     <div className="product-container">
//       <h1 style={{textAlign:'left'}}>Tracibility Graph</h1> <br />
//       <h3>Selection By:</h3>

//       <div className="btn-group-wrapper">
//         <div className="btn-group">
//           <div className="slider" style={sliderStyle}></div>
//           {labels.map((label, idx) => (
//             <button
//               key={label}
//               ref={(el) => (btnRefs.current[idx] = el)}
//               className={selectedIndex === idx ? 'active' : ''}
//               onClick={() => handleSelect(idx)}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="input-section">{renderInput()}
//       <button className="submit-btn" onClick={handleSubmit}>Generate</button>
//       </div>

//       {/* <button className="submit-btn" onClick={handleSubmit}>Generate</button> */}

//       {showGraph && (
//         <div className="chart-display">
//           {/* <Line data={chartData} /> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductTracibility;
// import React, { useState, useRef, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
// import './about.css';

// const ProductTracibility = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [sliderStyle, setSliderStyle] = useState({});
//   const btnRefs = useRef([]);
//   const [inputValues, setInputValues] = useState({
//     batteryId: '',
//     batchId: '',
//     dateFrom: '',
//     dateTo: ''
//   });
//   const [showGraph, setShowGraph] = useState(false);

//   const labels = ['Battery ID', 'Batch ID', 'Date'];

//   const handleSelect = (index) => {
//     setSelectedIndex(index);
//     setShowGraph(false); // Reset graph
//   };

//   useEffect(() => {
//     const currentBtn = btnRefs.current[selectedIndex];
//     if (currentBtn) {
//       setSliderStyle({
//         width: `${currentBtn.offsetWidth}px`,
//         left: `${currentBtn.offsetLeft}px`
//       });
//     }
//   }, [selectedIndex]);

//   const handleChange = (e) => {
//     setInputValues({ ...inputValues, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     setShowGraph(true); // Trigger graph
//   };

//   const renderInput = () => {
//     switch (selectedIndex) {
//       case 0:
//         return (
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
//             <h3>Enter Battery ID</h3>
//             <input
//               type="text"
//               name="batteryId"
//               placeholder="Battery ID"
//               value={inputValues.batteryId}
//               onChange={handleChange}
//             />
//           </div>
//         );
//       case 1:
//         return (
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
//             <h3>Enter Batch ID</h3>
//             <input
//               type="text"
//               name="batchId"
//               placeholder="Enter Batch ID"
//               value={inputValues.batchId}
//               onChange={handleChange}
//             />
//           </div>
//         );
//       case 2:
//         return (
//           <div className="date-inputs" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//             <h3>Select Date Range:</h3>
//             <label>From:</label>
//             <input
//               type="date"
//               name="dateFrom"
//               value={inputValues.dateFrom}
//               onChange={handleChange}
//             />
//             <label>To:</label>
//             <input
//               type="date"
//               name="dateTo"
//               value={inputValues.dateTo}
//               onChange={handleChange}
//             />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   // Dummy JSON data
//   const dummyData = [
//     { cellId: 'C3212001', OCV: 3.75, IR: 120, HRD: 95 },
//     { cellId: 'C3212002', OCV: 3.78, IR: 110, HRD: 96 },
//     { cellId: 'C3212003', OCV: 3.74, IR: 115, HRD: 94 },
//     { cellId: 'C3212004', OCV: 3.79, IR: 108, HRD: 97 },
//     { cellId: 'C3212005', OCV: 3.74, IR: 115, HRD: 96 },
//     { cellId: 'C3212006', OCV: 3.73, IR: 116, HRD: 94 },
//     { cellId: 'C3212007', OCV: 3.79, IR: 119, HRD: 93 },
//   ];

//   // Generate chart data
//   const generateChartData = () => {
//     return {
//       labels: dummyData.map((entry) => entry.cellId),
//       datasets: [
//         {
//           label: 'OCV (V)',
//           data: dummyData.map((entry) => entry.OCV),
//           borderColor: 'rgba(255, 99, 132, 1)',
//           fill: false
//         },
//         {
//           label: 'IR (mΩ)',
//           data: dummyData.map((entry) => entry.IR),
//           borderColor: 'rgba(54, 162, 235, 1)',
//           fill: false
//         },
//         {
//           label: 'HRD (%)',
//           data: dummyData.map((entry) => entry.HRD),
//           borderColor: 'rgba(75, 192, 192, 1)',
//           fill: false
//         }
//       ]
//     };
//   };

//   return (
//     <div className="product-container">
//       <h1 style={{ textAlign: 'left' }}>Tracibility Graph</h1><br />
//       <h3>Selection By:</h3>

//       <div className="btn-group-wrapper">
//         <div className="btn-group">
//           <div className="slider" style={sliderStyle}></div>
//           {labels.map((label, idx) => (
//             <button
//               key={label}
//               ref={(el) => (btnRefs.current[idx] = el)}
//               className={selectedIndex === idx ? 'active' : ''}
//               onClick={() => handleSelect(idx)}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="input-section">
//         {renderInput()}
//         <button className="submit-btn" onClick={handleSubmit}>Generate</button>
//       </div>

//       {showGraph && (
//         <div className="chart-display">
//           <Line data={generateChartData()} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductTracibility;
import React, { useState, useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import data from '../data/tracibilityData.json'; // Adjust path as needed
import './about.css';

const ProductTracibility = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const btnRefs = useRef([]);
  const [inputValues, setInputValues] = useState({
    batteryId: '',
    batchId: '',
    dateFrom: '',
    dateTo: ''
  });
  const [showGraph, setShowGraph] = useState(false);
  const [selectedParam, setSelectedParam] = useState('OCV');
  const [dummyData, setDummyData] = useState([]);
  const [validInputs, setValidInputs] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const labels = ['Battery ID', 'Batch ID', 'Date'];

  useEffect(() => {
    // Set imported data to state
    setDummyData(data);
  }, []);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    setShowGraph(false); // reset graph on new selection
  };

  useEffect(() => {
    const currentBtn = btnRefs.current[selectedIndex];
    if (currentBtn) {
      setSliderStyle({
        width: `${currentBtn.offsetWidth}px`,
        left: `${currentBtn.offsetLeft}px`
      });
    }
  }, [selectedIndex]);

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validation: check if at least one input is filled based on selected index
    if (selectedIndex === 0 && inputValues.batteryId !== '') {
      setValidInputs(true);
      setErrorMessage('');
    } else if (selectedIndex === 1 && inputValues.batchId !== '') {
      setValidInputs(true);
      setErrorMessage('');
    } else if (selectedIndex === 2 && inputValues.dateFrom !== '' && inputValues.dateTo !== '') {
      setValidInputs(true);
      setErrorMessage('');
    } else {
      setValidInputs(false);
      setErrorMessage('Please Enter Valid value');
    }
    
    setShowGraph(validInputs); // Show graph only if inputs are valid
  };

  const renderInput = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <h3>Enter Battery ID</h3>
            <input
              type="text"
              name="batteryId"
              placeholder="Battery ID"
              value={inputValues.batteryId}
              onChange={handleChange}
            />
          </div>
        );
      case 1:
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <h3>Enter Batch ID</h3>
            <input
              type="text"
              name="batchId"
              placeholder="Enter Batch ID"
              value={inputValues.batchId}
              onChange={handleChange}
            />
          </div>
        );
      case 2:
        return (
          <div className="date-inputs" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Select Date Range:</h3>
            <label>From:</label>
            <input
              type="date"
              name="dateFrom"
              value={inputValues.dateFrom}
              onChange={handleChange}
            />
            <label>To:</label>
            <input
              type="date"
              name="dateTo"
              value={inputValues.dateTo}
              onChange={handleChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const generateChartData = () => {
    let datasets = [];
  
    if (selectedParam === 'OCV' || selectedParam === 'All') {
      datasets.push({
        label: 'OCV (V)',
        data: dummyData.map((entry) => entry.OCV),
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false
      });
    }
  
    if (selectedParam === 'IR' || selectedParam === 'All') {
      datasets.push({
        label: 'IR (mΩ)',
        data: dummyData.map((entry) => entry.IR),
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false
      });
    }
  
    if (selectedParam === 'HRD' || selectedParam === 'All') {
      datasets.push({
        label: 'HRD (%)',
        data: dummyData.map((entry) => entry.HRD),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false
      });
    }
  
    return {
      labels: dummyData.map((entry) => entry.cellId),
      datasets: datasets
    };
  };

  return (
    <div className="product-container">
      <h1 style={{ textAlign: 'left' }}>Tracibility Graph</h1><br />
      <h3>Selection By:</h3>

      <div className="btn-group-wrapper">
        <div className="btn-group">
          <div className="slider" style={sliderStyle}></div>
          {labels.map((label, idx) => (
            <button
              key={label}
              ref={(el) => (btnRefs.current[idx] = el)}
              className={selectedIndex === idx ? 'active' : ''}
              onClick={() => handleSelect(idx)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="input-section">
        {renderInput()}
        <button className="submit-btn" onClick={handleSubmit}>Generate</button>
      </div>

      {errorMessage && !showGraph && (
        <div className="error-message" style={{ color: 'red', textAlign: 'center' }}>
          {errorMessage}
        </div>
      )}

      {showGraph && (
        <div className="chart-display">
          {/* Display selected value dynamically */}
          <h3>Chart for {selectedIndex === 0 ? `Battery ID: ${inputValues.batteryId}` : 
            selectedIndex === 1 ? `Batch ID: ${inputValues.batchId}` : 
            `Date Range: ${inputValues.dateFrom} to ${inputValues.dateTo}`}
          </h3>

          <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
            <button style={{ backgroundColor:'pink' }} className='btn-chart' onClick={() => setSelectedParam('OCV')}>OCV</button>
            <button style={{ backgroundColor:'lightblue' }} className='btn-chart' onClick={() => setSelectedParam('IR')}>IR</button>
            <button style={{ backgroundColor:'lightgreen' }} className='btn-chart' onClick={() => setSelectedParam('HRD')}>HRD</button>
            <button style={{ backgroundColor:'' }} className='btn-chart' onClick={() => setSelectedParam('All')}>All</button>
          </div>

          <Line data={generateChartData()} />
        </div>
      )}
    </div>
  );
};

export default ProductTracibility;
