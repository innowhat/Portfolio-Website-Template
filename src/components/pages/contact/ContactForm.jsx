import React from "react";
import Button from "../../styles/Button";
import styled from "styled-components";


const Form = styled.form`
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  font-size: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  font-size: 20px;
`;

const ContactForm = props => {
  const componentData = props.appData.formLabel;

  return (
    <Form name="contact" method="post">
      <Input type="hidden" name="form-name" value="contact" />
      <Input
        required
        type="text"
        id="name"
        name="name"
        placeholder={componentData.name}
      />

      <Input
        type="text"
        id="email"
        name="email"
        placeholder={componentData.email}
        required
      />

      <Textarea
        required
        id="message"
        name="message"
        placeholder={componentData.message}
        style={{ height: "200px" }}
      />

      <Button big type="submit">
        {componentData.submit}
      </Button>
    </Form>
  );
};

export default ContactForm;
