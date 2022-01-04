import React, {useState} from 'react';
import {Button, TextInput, toaster} from "evergreen-ui";
import * as Fetch from '../tools/Fetch';
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPwd, setRepeatPwd] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);

    if (repeatPwd !== password) {
      toaster.danger('Passwords not match');
      setIsLoading(false);
    } else {
      Fetch.registerFetch(email, password, "MEMBER", username)
        .then(user => {
          console.log(user)
          toaster.success('You have been registered.');

          //TODO REPLACE fake-user by user after fetch working
          localStorage.setItem('user', 'fake-user')
          navigate("/projects");
        })
        .catch(e => {
          console.error(e)
          toaster.danger('An error has occurred.')
        })
      setIsLoading(false);
    }
  };

  return (
    <>
        <form className={'d-flex justify-content-center align-items-center flex-column'} onSubmit={handleSubmit}>
          <TextInput type='text' name="username" placeholder="gitTracker" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <TextInput type='email' name="email" placeholder="exemple@gittracker.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <TextInput type='password' name="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <TextInput type='password' name="repeat-password" placeholder="********" value={repeatPwd} onChange={(e) => setRepeatPwd(e.target.value)}/>
          <Button type="submit" marginRight={16} marginTop={16} appearance="primary" isLoading={isLoading} className='m-1'>
            S'inscrire
          </Button>
        </form>
    </>
  );
}
