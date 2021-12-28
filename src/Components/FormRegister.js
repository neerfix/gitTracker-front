import React from 'react';
import {TextInput} from "evergreen-ui";

export default function FormRegister() {
  return (
    <>
        <form action="" className={'d-flex justify-content-center align-items-center flex-column'}>
          <TextInput name="email" placeholder="exemple@gittracker.com" />
          <TextInput type='password' name="password" placeholder="********" />
          <TextInput type='password' name="repeat-password" placeholder="********" />
        </form>
    </>
  );
}
