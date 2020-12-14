import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

class Demo extends Component {



constructor(props) {
 super(props);
 this.state ={
   data :[]
 }

}

componentDidMount() {
  console.log('componentDidMount');
  this.projectListing();
}

projectListing() {
console.log('projectListing');
//var email = "i@gmail.com";
    fetch("/rest-api/all")
      .then(res => res.json())
      .then(data => {
        console.log("data:------"+JSON.stringify(data));
        this.setState({ data: data})
    console.log(this.state.data)
      })
      .catch(error => {
       // this.setState({ showLoadingComp: false })
      });
  }
    render() {


 
  

  const columns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'email', text: 'Name', sort: true },
    { dataField: 'password', text: 'Project', sort: true },
    { dataField: 'firstName', text: 'Id', sort: true },
    { dataField: 'lastName', text: 'Name', sort: true }
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
            <div>

             <ToolkitProvider
        bootstrap4
        keyField='id'
        data={this.state.data}
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
}

export default Demo;
