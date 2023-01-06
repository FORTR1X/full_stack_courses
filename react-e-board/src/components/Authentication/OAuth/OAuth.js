import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";

const OAuth = (props) => {
  const location = useLocation().hash;
  const isAuth = props.isAuth;

  useEffect(() => {
    if (location && props.user === null && props.accessToken === null)
      props.getOAuthData(location);

    if (location && props.user === null && props.accessToken !== null && props.userId !== null)
      props.getOAuthUser({userId: props.userId, accessToken: props.accessToken});

    // todo: получение изображения пользователя (в base64 или src), сохранение токена в localstorage OAuthToken,
  }, [props]);

  useEffect( () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (token !== null && token !== "null" && username !== null && username !== "null" && !isAuth)
      props.checkIsAuth(token);


  }, [isAuth]);

  return (
      <div/>
  );
};

export default OAuth;