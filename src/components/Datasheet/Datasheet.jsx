import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import "./Datasheet.css";
import pulseDataCSV from "../../img/pulse-data.csv";

function Datasheet() {
  const [csvData, setCSVData] = useState([]);
  const [inputNumber, setInputNumber] = useState('');
  const [teamName, setTeamName] = useState('');
  const [roomno, setRoomNo] = useState('');

  useEffect(() => {
    Papa.parse(pulseDataCSV, {
      download: true,
      complete: handleFileLoaded,
      header: true,
      skipEmptyLines: true,
    });
  }, []); // Run only once on component mount

  const handleFileLoaded = (result) => {
    setCSVData(result.data);
  };

  const handleSearch = () => {
    const foundRow = csvData.find(row => row.BillNo === inputNumber);
    if (foundRow) {
      setTeamName(foundRow.TeamName);
      setRoomNo(foundRow.RoomNo)
    } else {
      setTeamName('Team Not Found ... Try Again !!');
    }
  };

  return (
    <div className="data section" id="datasheet">
      <div className="data-content container">
        <div className='datasheet'>
          <div>
            <h1 className='title'>Team Room Allotment</h1>
            <label>Enter BillNo: </label>
            <input
              type="number"
              value={inputNumber}
              onChange={(e) => setInputNumber(e.target.value)}
            />
            <button className="datasheet-btn" onClick={handleSearch}>Search</button>
          </div>
          <div>
          {teamName && (
            <div>
              <h2 className='data-heading'>Team Name</h2>
              <p>{teamName}</p>
            </div>
          )}
          {roomno && (
            <div>
              <h2 className='data-heading'>Room Number</h2>
              <p>{roomno}</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datasheet;
