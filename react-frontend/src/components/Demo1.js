import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';


//https://www.freakyjolly.com/react-bootstrap-table-next-example-pagination-filter-sorting-export-to-excel/#.X9IGgdgzaUk


// App.js



function Demo() {
    
    

  const products = [
    { id: 1, name: 'George', project: 'ID' },
    { id: 2, name: 'Jeffrey', project: 'GIAM' },
    { id: 3, name: 'Alice', project: 'Infra' },
    { id: 4, name: 'Foster', project: 'Infra DevOps' }
  ];

  const columns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'name', text: 'Name', sort: true },
    { dataField: 'project', text: 'Project', sort: true }
  ];

  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 1,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  const { SearchBar, ClearSearchButton } = Search;

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
      </div>
    );
  };

  return (
    <div className="App">
      <h5>React Bootstrap Table Next with Sorting, Pagination and Search</h5>

      <ToolkitProvider
        bootstrap4
        keyField='id'
        data={products}
        columns={columns}
        search
        exportCSV
      >
        {
          props => (
            <div>
              <h6>Input something at below input field:</h6>
              <SearchBar  {...props.searchProps} />
              <ClearSearchButton  {...props.searchProps} />
              <hr />
              <MyExportCSV {...props.csvProps} />
              <BootstrapTable
                defaultSorted={defaultSorted}
                pagination={pagination}
                {...props.baseProps}
              />

            </div>
          )
        }
      </ToolkitProvider>

    </div>
  );
}

export default Demo;