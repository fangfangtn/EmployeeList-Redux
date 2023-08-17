import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';

function App () {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={< EmployeeList />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/edit-employee/:id" element={<AddEmployee />} />
        </Routes>
    </div>
  );
}

export default App;
