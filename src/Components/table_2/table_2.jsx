// ElectrodeTable.jsx
import React from 'react';
import './table_2.css';

const ElectrodeTable = () => {
  const data = [
    {
      id1: 'EID1522',
      weight1: 25,
      thickness1: 2.3,
      temp1: 63,
      batch1: 'B023665',
      moisture1: 2,
      density1: 36,
      pasteMoisture1: 25,
      pasteDensity1: 10,
      penetration1: 3.5,

      id2: 'EID2635',
      weight2: 25,
      thickness2: 2.0,
      temp2: 60,
      batch2: 'B020365',
      moisture2: 2.5,
      density2: 35,
      pasteMoisture2: 26,
      pasteDensity2: 11,
      penetration2: 3.2
    }
  ];

  return (
    <div className="table-container">
      <div style={{display:'flex', gap:'40px',alignContent:'center'}}> <h2>Electrode Parameters for Cell ID:</h2>
      <select   
          style={{ padding: '8px 12px', fontSize: '16px' }}
        >
          <option>C23060200153</option>
          <option>C23060200154</option>
          <option>C23060200155</option>
          <option>C23060200156</option>
          <option>C23060200157</option>
          <option>C23060200158</option>
          <option>C23060200159</option>
          <option>C23060200160</option>
          <option>C23060200161</option>
          <option>C23060200162</option>
          <option>C23060200163</option>
          <option>C23060200164</option>
        </select></div>
     
      <table className="responsive-table">
        <thead>
          <tr>
            <th colSpan={10} style={{ backgroundColor: '#1976d2' }}> Anode</th>
            <th colSpan={10} style={{ backgroundColor: '#1976d2' }}> Cathode</th>
          </tr>
          <tr>
            <th>electrode ID</th>
            <th>weight</th>
            <th>thickness</th>
            <th>max temp</th>
            <th>batch ID</th>
            <th>moisture</th>
            <th>density</th>
            <th>paste moisture</th>
            <th>paste density</th>
            <th>penetration</th>
            <th>electrode ID</th>
            <th>weight</th>
            <th>thickness</th>
            <th>max temp</th>
            <th>batch ID</th>
            <th>moisture</th>
            <th>density</th>
            <th>paste moisture</th>
            <th>paste density</th>
            <th>penetration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.id1}</td>
              <td>{row.weight1}</td>
              <td>{row.thickness1}</td>
              <td>{row.temp1}</td>
              <td>{row.batch1}</td>
              <td>{row.moisture1}</td>
              <td>{row.density1}</td>
              <td>{row.pasteMoisture1}</td>
              <td>{row.pasteDensity1}</td>
              <td>{row.penetration1}</td>

              <td>{row.id2}</td>
              <td>{row.weight2}</td>
              <td>{row.thickness2}</td>
              <td>{row.temp2}</td>
              <td>{row.batch2}</td>
              <td>{row.moisture2}</td>
              <td>{row.density2}</td>
              <td>{row.pasteMoisture2}</td>
              <td>{row.pasteDensity2}</td>
              <td>{row.penetration2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ElectrodeTable;
