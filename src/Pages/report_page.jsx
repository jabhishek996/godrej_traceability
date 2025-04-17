// ReportPage.jsx
import React, { useState } from 'react';
import Table1 from '../Components/table_1/table_1';
import Table2 from '../Components/table_2/table_2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const dummyData = [
  {
    'Sr. Nos': 1,
    'Battery ID': 'BAT1233',
    'Battery OCV': '3.6V',
    'cell ID': 'C23060200153',
    'Testing time': '2025-04-14 10:30',
    'OCV': '3.58',
    'IR': '1.25',
    'HRD': '2.1',
    'filling date and time': '2025-04-13 09:00',
    'Dry weight': '25.6',
    'Filled qty': '27.2g',
    'Jelly roll weight': '22g',
    'Jelly roll dia': '12mm'
  },
  {
    'Sr. Nos': 2,
    'Battery ID': 'BAT1233',
    'Battery OCV': '3.7V',
    'cell ID': 'C23060200153',
    'Testing time': '2025-04-14 11:00',
    'OCV': '3.65',
    'IR': '0.28',
    'HRD': '2.0',
    'filling date and time': '2025-04-13 09:30',
    'Dry weight': '24g',
    'Filled qty': '26.5g',
    'Jelly roll weight': '21.5g',
    'Jelly roll dia': '11.8mm'
  },
  {
    'Sr. Nos': 3,
    'Battery ID': 'BAT1233',
    'Battery OCV': '3.7V',
    'cell ID': 'C23060200153',
    'Testing time': '2025-04-14 11:00',
    'OCV': '3.65',
    'IR': '0.28',
    'HRD': '2.0',
    'filling date and time': '2025-04-13 09:30',
    'Dry weight': '24g',
    'Filled qty': '26.5g',
    'Jelly roll weight': '21.5g',
    'Jelly roll dia': '11.8mm'
  },
  {
    'Sr. Nos': 4,
    'Battery ID': 'BAT1233',
    'Battery OCV': '3.7V',
    'cell ID': 'C23060200153',
    'Testing time': '2025-04-14 11:00',
    'OCV': '3.65',
    'IR': '0.28',
    'HRD': '2.0',
    'filling date and time': '2025-04-13 09:30',
    'Dry weight': '24g',
    'Filled qty': '26.5g',
    'Jelly roll weight': '21.5g',
    'Jelly roll dia': '11.8mm'
  },
  {
    'Sr. Nos': 5,
    'Battery ID': 'BAT1233',
    'Battery OCV': '3.7V',
    'cell ID': 'C23060200153',
    'Testing time': '2025-04-14 11:00',
    'OCV': '3.65',
    'IR': '0.28',
    'HRD': '2.0',
    'filling date and time': '2025-04-13 09:30',
    'Dry weight': '24g',
    'Filled qty': '26.5g',
    'Jelly roll weight': '21.5g',
    'Jelly roll dia': '11.8mm'
  },
  {
    'Sr. Nos': 6,
    'Battery ID': 'BAT1233',
    'Battery OCV': '3.7V',
    'cell ID': 'C23060200153',
    'Testing time': '2025-04-14 11:00',
    'OCV': '3.65',
    'IR': '0.28',
    'HRD': '2.0',
    'filling date and time': '2025-04-13 09:30',
    'Dry weight': '24g',
    'Filled qty': '26.5g',
    'Jelly roll weight': '21.5g',
    'Jelly roll dia': '11.8mm'
  },
  {
    'Sr. Nos': 7,
    'Battery ID': 'BAT1233',
    'Battery OCV': '3.7V',
    'cell ID': 'C23060200153',
    'Testing time': '2025-04-14 11:00',
    'OCV': '3.65',
    'IR': '0.28',
    'HRD': '2.0',
    'filling date and time': '2025-04-13 09:30',
    'Dry weight': '24g',
    'Filled qty': '26.5g',
    'Jelly roll weight': '21.5g',
    'Jelly roll dia': '11.8mm'
  },
  {
    'Sr. Nos': 8,
    'Battery ID': 'BAT1233',
    'Battery OCV': '3.7V',
    'cell ID': 'C23060200153',
    'Testing time': '2025-04-14 11:00',
    'OCV': '3.65',
    'IR': '0.28',
    'HRD': '2.0',
    'filling date and time': '2025-04-13 09:30',
    'Dry weight': '24g',
    'Filled qty': '26.5g',
    'Jelly roll weight': '21.5g',
    'Jelly roll dia': '11.8mm'
  },
  {
    'Sr. Nos': 9,
    'Battery ID': 'BAT1233',
    'Battery OCV': '3.7V',
    'cell ID': 'C23060200153',
    'Testing time': '2025-04-14 11:00',
    'OCV': '3.65',
    'IR': '0.28',
    'HRD': '2.0',
    'filling date and time': '2025-04-13 09:30',
    'Dry weight': '24g',
    'Filled qty': '26.5g',
    'Jelly roll weight': '21.5g',
    'Jelly roll dia': '11.8mm'
  }
];
// -------------------Download PDF function--------------

const handleDownloadPDF = () => {
  const container = document.querySelector('.table-container');

  // Hide all buttons inside the container before capturing
  container.querySelectorAll('.btn').forEach(btn => btn.classList.add('hide-for-print'));

  html2canvas(container, { scale: 1, useCORS: true }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('battery-parameters.pdf');

    // Show buttons again after PDF is downloaded
    container.querySelectorAll('.btn').forEach(btn => btn.classList.remove('hide-for-print'));
  });
};

// ---------------------------


const ReportPage = () => {
  const [searchId, setSearchId] = useState('');
  const [filterType, setFilterType] = useState('Battery ID');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    const result = dummyData.filter(row =>
      row[filterType]?.toString().toLowerCase().includes(searchId.toLowerCase())
    );
    setFilteredData(result);
  };

  return (
    <div className="container" style={{ padding: '20px' }}>
      <h1>Report - Traceability</h1>

      <div className="checkByParam-sec" style={{ marginBottom: '20px' }}>
        <label>Search by: </label>
        <select
          onChange={(e) => setFilterType(e.target.value)}
          value={filterType}
          style={{ margin: '0 10px' }}
        >
          <option>Battery ID</option>
          <option>cell ID</option>
          <option>Sr. Nos</option>
        </select>

        <input
          type="text"
          placeholder="Enter ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <div className="button-sec"><button onClick={handleSearch}>Search</button>
        <button onClick={() => { setSearchId(''); setFilteredData([]); }} style={{ marginLeft: '10px' }}>
          Clear
        </button></div>
        
      </div>

      <div className="table-container">
        {filteredData.length > 0 && (
          <> <div className="download-btn" onClick={handleDownloadPDF}> <h2>Battery Parameters</h2><button className='btn'>Download </button></div>
            <Table1 data={filteredData} />
            <br />
            <Table2 />
          </>
        )}

        {filteredData.length === 0 && searchId && (
          <p style={{ color: 'gray' }}>No matching data found.</p>
        )}
      </div>
    </div>
  );
};

export default ReportPage;
