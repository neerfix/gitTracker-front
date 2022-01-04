import { useNavigate } from "react-router-dom";

const checkAuth = () => store => next => action => {

  let result;
  const navigate = useNavigate;

  result = next(action);
  let user = localStorage.getItem('user');
  if(user === null){
    navigate('/')
  } else {
    navigate('/projects')
  }
  return result;

};

export default checkAuth;
