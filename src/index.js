import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              id: "name",
              accessor: row =>
                `${row.firstName && row.firstName[0]} ${row.lastName &&
                  row.lastName[0]}`
            },
            {
              Header: "Email",
              id: "email",
              accessor: row => row.email && row.email[0]
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Visits",
              accessor: "visits"
            },
            {
              Header: "Status",
              accessor: "status"
            },
            {
              Header: "Profile Progress",
              accessor: "progress"
            }
          ]}
          defaultSorted={[
            {
              id: "age",
              desc: true
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
