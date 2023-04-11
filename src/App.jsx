import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const App = () => {

  const gridRef = useRef();
  const [rowData, setRowData] = useState([{cell: "OldValue"}]);

  const [columnDefs, setColumnDefs] = useState([
    {field: 'cell', editable: true, singleClickEdit: true},
  ]);

  return (
    <div>
      <div className="ag-theme-alpine" style={{width: 500, height: 500}}>

        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs} // Column Defs for Columns
        />
      </div>
    </div>
  );
};

export default App;