import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const QuestionForm = () => {
  return (
    <Form>
      <Form.Input label='Title' placeholder='What do you want to ask?' />
      <Form.Field label='Describe your problem' control={TextArea} placeholder='Describe your issue...' />
      <Form.Input label='Tags' placeholder='Add tags (optional)' />
    </Form>
  );
};

export default QuestionForm;
