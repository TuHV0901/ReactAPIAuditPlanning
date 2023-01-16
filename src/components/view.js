import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { useHistory } from "react-router";
import axiosServices from "../services/axios";

export default function View() {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [buCode, setBuCode] = useState("");
  const [buName, setBuName] = useState("");
  const [auditName, setAuditName] = useState("");
  const [auditSchedule, setAuditSchedule] = useState("");
  const [auditPriority, setAuditPriority] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setBuCode(localStorage.getItem("Bu_Code"));
    setBuName(localStorage.getItem("Bu_Name"));
    setAuditName(localStorage.getItem("Audit_Name"));
    setAuditSchedule(localStorage.getItem("Audit_Schedule"));
    setAuditPriority(localStorage.getItem("Audit_Priority"));
    setYear(localStorage.getItem("Year"));
  }, []);

  const goBackHome = () => {
     
        history.push("/read");
     
  };
  return (
    <div className="main-form">
      <Form className="create-form">
        <Form.Field>
          <label>BU Code</label>
          <input disabled
            placeholder="BU Code"
            value={buCode}
            onChange={(e) => setBuCode(e.target.value) }
          />
        </Form.Field>
        <Form.Field>
          <label>BU Name</label>
          <input disabled
            placeholder="BU Name"
            value={buName}
            onChange={(e) => setBuName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Audit Name</label>
          <input disabled
            placeholder="Audit Name"
            value={auditName}
            onChange={(e) => setAuditName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Audit Schedule</label>
          <input disabled
            placeholder="Audit Schedule"
            value={auditSchedule}
            onChange={(e) => setAuditSchedule(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Audit Priority</label>
          <input disabled
            placeholder="Audit Priority"
            value={auditPriority}
            onChange={(e) => setAuditPriority(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Year</label>
          <input disabled
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={goBackHome}>
          Trở về
        </Button>
      </Form>
    </div>
  );
}
