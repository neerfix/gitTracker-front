import React, {useState} from 'react';
import {Button, TextInput} from "evergreen-ui";

export default function FormLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    console.log('')
  };

  return (
    <>
      <form action="" className={'d-flex justify-content-center align-items-center flex-column'} onSubmit={handleSubmit}>
        <TextInput type='email' name="email" placeholder="exemple@gittracker.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextInput type='password' name="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" appearance="primary" isLoading={isLoading} className='m-1'>
          Se connecter
        </Button>
      </form>
    </>
  );
}
