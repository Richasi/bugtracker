import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 90%;
  margin: auto;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 90%;
  margin: auto;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 92%;
  margin: auto;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
width: 50%;
margin: auto;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

`;

const AddBugForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, severity });
    setTitle("");
    setDescription("");
    setSeverity("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <TextArea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <Select value={severity} onChange={(e) => setSeverity(e.target.value)}>
        <option value="">Select Severity</option>
        <option value="Critical">Critical</option>
        <option value="Major">Major</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </Select>
      <SubmitButton type="submit">Add Bug</SubmitButton>
    </Form>
  );
};

export default AddBugForm;
