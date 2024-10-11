import React, { useState } from 'react';
import PostTypeSelector from './PostTypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import { Container, Button } from 'semantic-ui-react';
import './PostPage.css'; // Import the CSS file

const PostPage = () => {
  const [postType, setPostType] = useState('question');

  return (
    <Container className="container">
      <h1>New Post</h1>
      <PostTypeSelector postType={postType} setPostType={setPostType} />
      
      {postType === 'question' ? <QuestionForm /> : <ArticleForm />}

      <Button primary className="form-button">Post</Button>
    </Container>
  );
};

export default PostPage;
