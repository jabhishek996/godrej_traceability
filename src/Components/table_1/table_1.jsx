import React from 'react';
import './table_1.css';

const Table1 = ({ data }) => {
  // Group rows by Battery ID to apply rowSpan
  const groupedData = {};
  data.forEach((row) => {
    const batteryId = row['Battery ID'];
    if (!groupedData[batteryId]) {
      groupedData[batteryId] = [];
    }
    groupedData[batteryId].push(row);
  });

  return (
    <div className="table-wrapper">
     
     
      <table className="responsive-table">
        <thead>
          <tr>
            <th rowSpan={2}>Sr. Nos</th>
            <th rowSpan={2}>Battery ID</th>
            <th rowSpan={2}>Battery OCV</th>
            <th rowSpan={2}>Cell ID</th>
            <th colSpan={4} style={{ backgroundColor: '#1976d2' }}>Testing Parameters</th>
            <th colSpan={3} style={{ backgroundColor: '#1976d2' }}>Filling Parameters</th>
            <th colSpan={2} style={{ backgroundColor: '#1976d2' }}>Assembly Parameters</th>
          </tr>
          <tr>
            <th>Testing Time</th>
            <th>OCV</th>
            <th>IR</th>
            <th>HRD</th>
            <th>Filling Date & Time</th>
            <th>Dry Weight</th>
            <th>Filled Qty</th>
            <th>Jelly Roll Weight</th>
            <th>Jelly Roll Dia</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([batteryId, rows]) =>
            rows.map((row, index) => (
              <tr key={`${batteryId}-${index}`}>
                <td>{row['Sr. Nos']}</td>
                {index === 0 && <td rowSpan={rows.length}>{row['Battery ID']}</td>}
                {index === 0 && <td rowSpan={rows.length}>{row['Battery OCV']}</td>}
                <td>{row['cell ID']}</td>
                <td>{row['Testing time']}</td>
                <td>{row['OCV']}</td>
                <td>{row['IR']}</td>
                <td>{row['HRD']}</td>
                <td>{row['filling date and time']}</td>
                <td>{row['Dry weight']}</td>
                <td>{row['Filled qty']}</td>
                <td>{row['Jelly roll weight']}</td>
                <td>{row['Jelly roll dia']}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;
