import React, {useState} from 'react';
import {Button, TextInput, toaster} from "evergreen-ui";
import * as Fetch from '../../tools/Fetch';
import { useNavigate } from "react-router-dom";

export default function FormAddComment({authorId, issueId}) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);

    Fetch.addComment(authorId, issueId, content, new Date.now(), new Date.now())
        .then(comment => {
          console.log(comment)
          toaster.success('Your comment have been created');
          navigate("/projects/");
        })
        .catch(e => {
          console.error(e)
          toaster.danger('An error has occurred.')
        })
    setIsLoading(false);

  };

  return (
      <>
        <form className={'d-flex justify-content-center align-items-center flex-column'} onSubmit={handleSubmit}>
          <TextInput type='text' name="title" placeholder="gitTracker issue" value={content}
                     onChange={(e) => setContent(e.target.value)}/>
          <Button type="submit" marginRight={16} marginTop={16} appearance="primary" isLoading={isLoading}
                  className='m-1'>
            Add Comment
          </Button>
        </form>
      </>
  );
}
