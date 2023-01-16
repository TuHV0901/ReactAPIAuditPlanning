import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();
    const [buCode, setBuCode] = useState('');
    const [buName, setBuName] = useState('');
    const [auditName, setAuditName] = useState('');
    const [auditSchedule, setAuditSchedule] = useState('');
    const [auditPriority, setAuditPriority] = useState('');
    const [year, setYear] = useState('');
    
    const postData = () => {
        axios.post(`/Primary/?FlowAlias=create_new_data_annual_planning&action=api`, {
            guest: true,
            outputtype: "RawJson",
            bu_code: buCode,
            bu_name: buName,
            audit_name: auditName,
            audit_schedule: auditSchedule,
            audit_priority: auditPriority,
            year: year
          }).then(() => {
            history.push('/read')
        })
    }
    const goBackHome = () => {
     
        history.push("/read");
     
  };
    return (
        <div className='main-form'>
            <Form className="create-form">
                <Form.Field>
                    <label>BU Code</label>
                    <input placeholder='BU Code' onChange={(e) => setBuCode(e.target.value)}/>
                </Form.Field>
                <Form.Field >
                    <label>BU Name</label>
                    <input placeholder='BU Name' onChange={(e) => setBuName(e.target.value)}/>
                </Form.Field>
                <Form.Field >
                    <label>Audit Name</label>
                    <input placeholder='Audit Name' onChange={(e) => setAuditName(e.target.value)}/>
                </Form.Field>
                <Form.Field >
                    <label>Audit Schedule</label>
                    <input placeholder='Audit Schedule' onChange={(e) => setAuditSchedule(e.target.value)}/>
                </Form.Field>
                <Form.Field >
                    <label>Audit Priority</label>
                    <input placeholder='Audit Priority' onChange={(e) => setAuditPriority(e.target.value)}/>
                </Form.Field>
                <Form.Field >
                    <label>Year</label>
                    <input placeholder='Year' onChange={(e) => setYear(e.target.value)}/>
                </Form.Field>
                
                <Button onClick={postData} type='submit'>Submit</Button>
                <Button onClick={goBackHome} type='submit'>Cancle</Button>
            </Form>
        </div>
    )
}
