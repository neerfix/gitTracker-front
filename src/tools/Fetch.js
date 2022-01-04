import axios from 'axios';
import C from "./Constants";

export async function loginFetch(email, password) {
  try {
    const response = await axios.post(C.API_URL, {email:email, password:password},
      {
        auth: {
          username: email,
          password: password
        },
        headers: "Access-Control-Allow-Origin: *"
      });

    const todoItems = response.data;

    console.log(`GET: Here's the list of todos`, todoItems);

    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
}

export async function registerFetch(email, password, role, username) {
  try {
    const response = await fetch(C.API_URL + `/users`, {
      method: 'PUT',
      data: JSON.stringify({
        email: email,
        password: password,
        role: role,
        username: username
      }),
      auth: {
        email: email,
        password: password
      },
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      },
    });

    // if (response.status !== 200 || response.status !== 201) {
    //   throw new Error(response.status)
    // }

    return response;
  } catch (errors) {
    console.log("catch");
    throw new Error(errors);
  }
}

export async function getProjects(email, password) {
  try {
    const response = await fetch(C.API_URL + `/projects`, {
      method: 'GET',
      auth: {
        email: email,
        password: password
      },
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      },
    });

    const data = response.data;

    // console.log(`GET: Here's the list of todos`, user);

    return data;
  } catch (errors) {
    console.log("catch");
    throw new Error(errors);
  }
}
