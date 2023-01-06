import React, {useEffect, useState} from 'react';
import s from './Login.module.css'
import SpaceLine from "../../SpaceLine";

import gmail from './gmail.svg';
import facebook from './facebook.svg';
import vk from './vk.svg';
import AuthInput from "../AuthInput/AuthInput";
import useLocalStorage from "../../../hooks/useLocalStorage";

const Login = (props) => {

  let login = props.login;
  const onChangeLogin = (event) => {
    props.changeLogin(event.target.value);
  }

  let password = props.password;
  const onChangePassword = (event) => {
    props.changePassword(event.target.value);
  }

  let toggleLogin = props.toggleLogin;
  const onChangeToggleLogin = () => {
    props.setToggleLogin(!toggleLogin);
  }

  let toggleRegistration = props.toggleRegistration;
  const onChangeToggleRegistration = () => {
    props.setToggleRegistration(!toggleRegistration);
  }

  let toggleForgorPassword = props.toggleForgorPassword;
  const onChangeToggleForgorPassword = () => {
    props.setToggleForgotPassword(!toggleForgorPassword);
  }

  const onLogin = () => {
    props.getAuth({login, password});
  }

  const [token, setToken] = useLocalStorage(null, 'token');
  const [refreshToken, setRefreshToken] = useLocalStorage(null, 'refreshToken');

  useEffect(() => {
    const token = props.token;
    if (token) {

      setToken(props.token);
      setRefreshToken(props.refreshToken);

      props.getUser({login, token});
    }
  }, [props.token]);

  const [username, setUsername] = useLocalStorage(null, 'username');
  const [id, setId] = useLocalStorage(null, 'id');
  const [avatar, setAvatar] = useLocalStorage(null, 'avatar');

  useEffect( () => {
    if (props.user) {
      setUsername(props.user.username);
      setId(props.user.id);
      setAvatar(props.user.avatar);
      onChangeToggleLogin();
    }
  }, [props.isAuth]);

  return (
      <div className={s.login__outside}>
        <div className={s.background} onClick={onChangeToggleLogin}/>
        <div className={s.login}>
          <div className={s.login__content}>
            <AuthInput name={'Логин'} placeholder={'Имя пользователя или e-mail'} value={login} handle={onChangeLogin}/>
            <br/>
            <AuthInput name={'Пароль'} placeholder={'Введите Ваш пароль'} type={'password'} value={password} handle={onChangePassword}/>
            <br/>
            <button className={s.btn} onClick={onLogin}>Войти</button>
            <button className={`${s.btn} ${s.btnActive}`} onClick={onChangeToggleRegistration}>Регистрация</button>
            <span className={s.forgotPassword} onClick={onChangeToggleForgorPassword}>Забыли пароль?</span>
            <br/>
            <SpaceLine width={280} height={2}/>
            <span className={s.fastRegistration}>Быстрая регистрация</span>

            <div className={s.login__fastRegistration}>
              <img className={s.login__fastRegistration_item} src={gmail} alt="gmail"/>
              <img className={s.login__fastRegistration_item} src={facebook} alt="facebook"/>
              <a href="https://oauth.vk.com/authorize?client_id=8100269&display=popup&redirect_uri=http://localhost:3000/&scope=photos&response_type=token">
                <img className={s.login__fastRegistration_item} src={vk} alt="vk"/>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;