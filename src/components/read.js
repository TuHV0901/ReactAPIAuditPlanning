import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axiosServices from "../services/axios";


export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `/Primary/?FlowAlias=get_all_data_annual_planning&Guest=true&outputtype=RawJson&action=api`
      )
      .then((response) => {  
        setAPIData(response.data.data);
        console.log(response.data.data.Bu_Code);
      });
  }, []);

  const setData = (data) => {
      let { id, Bu_Code, Bu_Name, Audit_Name, Audit_Schedule, Audit_Priority, Year } = data;
      localStorage.setItem("id", id);
      localStorage.setItem("Bu_Code", Bu_Code);
      localStorage.setItem("Bu_Name", Bu_Name);
      localStorage.setItem("Audit_Name", Audit_Name);
      localStorage.setItem("Audit_Schedule", Audit_Schedule);
      localStorage.setItem("Audit_Priority", Audit_Priority);
      localStorage.setItem("Year", Year);
    };

  const getData = () => {
    axiosServices
      .get(`/Primary/?FlowAlias=get_all_data_annual_planning&Guest=true&outputtype=RawJson&action=api`)
      .then((response) => {
        setAPIData(response.data.data);
      });
    
  };

  const onDelete = (id) => {
    axiosServices
      .post(`/Primary/?FlowAlias=delete_audit_by_id&action=api`,{
        guest: true,
        outputtype: "RawJson",
        id: id
      })
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });;
  };

  return (
    <div className="main-view">
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>BU Code</Table.HeaderCell>
            <Table.HeaderCell>BU Name</Table.HeaderCell>
            <Table.HeaderCell>Audit Name</Table.HeaderCell>
            <Table.HeaderCell>Audit Schedule</Table.HeaderCell>
            <Table.HeaderCell>Audit Priority</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
            <Table.HeaderCell>View</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data, index) => (
            <Table.Row key={index}>
              <td>{data.Bu_Code}</td>
              <td>{data.Bu_Name}</td>
              <td>{data.Audit_Name}</td>
              <td>{data.Audit_Schedule}</td>
              <td>{data.Audit_Priority}</td>
              <td>{data.Year}</td>
              <td>
                <Link to="/view">
                  <Button onClick={() => setData(data)}>View</Button>
                </Link>
              </td>
              <td>
                <Link to="/update">
                  <Button onClick={() => setData(data)}>Update</Button>
                </Link>
              </td>
              <td>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
              </td>
            </Table.Row>
          ))}   
        </Table.Body>
      </Table>
    </div>
  );
}
