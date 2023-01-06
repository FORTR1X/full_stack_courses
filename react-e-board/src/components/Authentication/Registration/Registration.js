import React, {useRef, useState} from 'react';

import s from './Registration.module.css';

import AuthInput from "../AuthInput/AuthInput";
import SpaceLine from "../../SpaceLine";

import gmail from "../Login/gmail.svg";
import facebook from "../Login/facebook.svg";
import vk from "../Login/vk.svg";
import axios from "axios";
import FileChooser from "../FileChooser/FileChooser";

const Registration = (props) => {
  let login = props.login;
  const onChangeLogin = (event) => {
    props.changeLogin(event.target.value);
  }

  let email = props.email;
  const onChangeEmail = (event) => {
    props.changeEmail(event.target.value);
  }

  let number = props.number;
  const onChangeNumber = (event) => {
    props.changeNumber(event.target.value);
  }

  let password = props.password;
  const onChangePassword = (event) => {
    props.changePassword(event.target.value);
  }

  let repeatPassword = props.repeatPassword;
  const onChangeRepeatPassword = (event) => {
    props.changeRepeatPassword(event.target.value);
  }

  let toggleRegistration = props.toggleRegistration;
  const onChangeToggleRegistration = () => {
    props.setToggleRegistration(!toggleRegistration);
  }

  const [avatarPath, setAvatarPath] = useState('Файл не выбран');
  const [avatarFile, setAvatarFile] = useState({});

  let avatarPathRef = useRef();

  const setImage = () => {
    setAvatarPath(avatarPathRef.current.files[0].name);
    setAvatarFile(avatarPathRef.current.files[0]);
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const registration = async () => {

    const imageBase64 = await convertBase64(avatarFile);
    props.registration({username: login, email, phoneNumber: number, password, avatar: imageBase64});
    
  }

  return (
      <div className={s.reg}>
        <div className={s.reg__background} onClick={onChangeToggleRegistration}/>
        <div className={s.reg__window}>
          <div className={s.reg__content}>
            <AuthInput name={'Логин'} placeholder={'Придумайте Ваш логин'} value={login} handle={onChangeLogin}/>
            <AuthInput name={'Адрес электронной почты'} placeholder={'example@exmpl.ru'} type={'email'} value={email} handle={onChangeEmail}/>
            <AuthInput name={'Номер телефона'} placeholder={'+7 (111) 222-33-44'} value={number} handle={onChangeNumber}/>
            {number < 10 && <div className={s.reg__error}>Не верный формат номера!</div>}
            <SpaceLine width={300} marginBottom={10} marginTop={10}/>
            <AuthInput name={'Пароль'} placeholder={'Введите пароль'} type={'password'} value={password} handle={onChangePassword}/>
            <AuthInput name={'Повторите пароль'} placeholder={'Повторите пароль'} type={'password'} value={repeatPassword} handle={onChangeRepeatPassword}/>
            {password !== repeatPassword && repeatPassword !== '' && <div className={s.reg__error}>Пароли должны совпадать!</div>}
            <SpaceLine width={300} marginBottom={10} marginTop={10}/>

            <FileChooser list={avatarPath} refer={avatarPathRef} handle={setImage}/>

            <SpaceLine width={300} marginBottom={10} marginTop={10}/>
            <button className={s.reg_btn} onClick={registration}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
  );
};

export default Registration;