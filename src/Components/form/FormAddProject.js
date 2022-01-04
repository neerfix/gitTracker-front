import React, {useState} from 'react';
import {Button, Select, Textarea, TextInput, toaster} from "evergreen-ui";
import * as Fetch from '../../tools/Fetch';
import { useNavigate } from "react-router-dom";

export default function FormAddProject() {
  const [name, setName] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');
  const [shortDescription, setShortDescription] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);

    Fetch.registerFetch(name, githubUrl, content, status, shortDescription)
      .then(user => {
        console.log(user)
        toaster.success('Le projet a bien été créé.');
        navigate("/projects");
      })
      .catch(e => {
        console.error(e)
        toaster.danger('An error has occurred.')
      })
    setIsLoading(false);
  };

  return (
    <>
        <form className={'d-flex justify-content-center align-items-center flex-column w-100'} onSubmit={handleSubmit}>
          <TextInput type='text' name="name" placeholder="gitTracker" value={name} onChange={(e) => setName(e.target.value)}/>
          <TextInput type='text' name="githubUrl" placeholder="https://www.github.com/Neerfix/GitTracker" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)}/>
          <TextInput type='text' name="shortDescription" placeholder="Description" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}/>
          <Textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Votre contenu ici..." />
          <Select onChange={event => alert(event.target.value)}>
            <option value="production" selected>
              En production
            </option>
            <option value="development">En développement</option>
            <option value="abort">Abandonné</option>
            <option value="not-started">Pas commencé</option>
          </Select>
          <Button type="submit" marginRight={16} marginTop={16} appearance="primary" isLoading={isLoading} className='m-1'>
            Créer un projet
          </Button>
        </form>
    </>
  );
}
