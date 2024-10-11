import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const ArticleForm = () => {
  return (
    <Form>
      <Form.Input label='Title' placeholder='Article title' />
      <Form.Input label='Abstract' placeholder='Abstract' />
      <Form.Field label='Article Text' control={TextArea} placeholder='Write your article here...' />
    </Form>
  );
};

export default ArticleForm;
