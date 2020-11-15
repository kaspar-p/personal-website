import React from "react";
import TitleBar from "../components/TitleBar";
import axios from "axios";
import _ from "lodash";
import { Table } from "react-bootstrap";

import "../assets/css/updates.css";
import "../assets/css/global.css";
import "../assets/css/global-font.css";

class Updates extends React.Component {
  constructor(props) {
    super(props);

    this.getUpdateData = this.getUpdateData.bind(this);
    this.fillTable = this.fillTable.bind(this);
  }

  fillTable(tableData) {
    // Looping over the rows
    _.forEach(tableData, (updateData, updateName) => {
      const row = document.createElement("tr");
      const index = Object.keys(tableData).indexOf(updateName);

      // To create the number down the side
      const rowNumber = document.createElement("th");
      rowNumber.appendChild(document.createTextNode(index + 1));
      row.appendChild(rowNumber);

      // Fill each cell in this table with the respective data
      const keys = ["title", "date", "desc"];
      for (let i = 0; i < keys.length; i++) {
        const currentKey = keys[i];
        const cell = document.createElement("td");

        // To change from weird dates to a simple format - date only
        let cellData = updateData[currentKey];
        if (currentKey === "date")
          cellData = new Date(cellData).toLocaleDateString();

        // Apply the cells to the entire row
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      }

      document.getElementById("tableBody").appendChild(row);
    });
  }

  async getUpdateData() {
    const response = await axios({
      method: "GET",
      url: "/api/updates",
    });

    return await response.data;
  }

  async componentDidMount() {
    this.fillTable(await this.getUpdateData());
  }

  render() {
    return (
      <div>
        <TitleBar title="recent updates" />
        <div className="container-fluid">
          <div className="custompadding row justify-content-center">
            <div className="col-lg-7 col-md-10 col-sm-12 text-center">
              <Table hover size="sm" className="updateList text-center">
                <thead>
                  <tr align="center">
                    <th scope="col">#</th>
                    <th scope="col">What happened</th>
                    <th scope="col">When it happened</th>
                    <th scope="col">Some details</th>
                  </tr>
                </thead>
                <tbody id="tableBody"></tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Updates;
