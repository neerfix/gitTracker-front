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
      mode: "no-cors"
    });

    const data = response.data;

    // console.log(`GET: Here's the list of todos`, user);

    return data;
  } catch (errors) {
    console.log("catch");
    throw new Error(errors);
  }
}

export async function addIssue(title, content, criticity, author, project, createdAt, updateAt) {
  try {
    // FIXME : key pour récupérer token ?
    const token = localStorage.getItem('user');

    const response = await fetch(C.API_URL + `/issue`, {
      method: 'POST',
      data: JSON.stringify({
        title: title,
        content: content,
        criticity: criticity,
        author: author,
        project: project,
        createdAt: createdAt,
        updateAt: updateAt
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token
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

export async function addComment(author, issue, content, createdAt, updateAt) {
  try {
    // FIXME : key pour récupérer token ?
    const token = localStorage.getItem('user');
    let tokenHeader;

    if (token) {
      tokenHeader = `Bearer ${token}`;
    }

    const response = await fetch(C.API_URL + `/comment`, {
      method: 'POST',
      data: JSON.stringify({
        author: author,
        issue: issue,
        content: content,
        createdAt: createdAt,
        updateAt: updateAt
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Authorization': tokenHeader
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