import React, {useEffect, useRef, useState} from 'react';
import s from "./ProfileSettings.module.css";

import Support from "../../Support/Support";
import SpaceLine from "../../SpaceLine";
import ProfileButton from "../Button/ProfileButton";

import report from "../MyAdverts/report.svg";
import settings from "../MyAdverts/settings.svg";
import info from "../MyAdverts/info.svg";
import exit from "../MyAdverts/exit.svg";
import AuthInput from "../../Authentication/AuthInput/AuthInput";
import FileChooser from "../../Authentication/FileChooser/FileChooser";
import convertToBase64 from "../../../convertToBase64";

import nullAvatar from '../../../null.jpg';
import useLocalStorage from "../../../hooks/useLocalStorage";
import {Navigate} from "react-router-dom";

const ProfileSettings = (props) => {

  let [toggleSupport, setToggleSupport] = useState(false);
  const handleSetToggleSupport = () => {
    setToggleSupport(!toggleSupport);
  }

  const localUsername = props.user.username;
  const dateRegistration = props.user.createdAt;

  const [avatar, setAvatar] = useLocalStorage(nullAvatar, 'avatar');
  const [username] = useLocalStorage(null, 'username');
  const [token] = useLocalStorage(null, 'token');

  useEffect( () => {
    if (username)
      props.getUserProfile({user: username, token});
  }, [props.user]);

  useEffect( () => {
    if (props.deleted) {
      localStorage.clear();
    }
  }, [props.deleted]);

  let password = props.password;
  let confirmPassword = props.confirmPassword;

  const onChangePassword = (value) => {
    props.changePassword(value);
  }

  const onChangeConfirmPassword = (value) => {
    props.changeConfirmPassword(value);
  }

  let avatarRef = useRef();
  const [nameFilesList, setNameFilesList] = useState('Файл не выбран!');

  const onSetAvatar = async () => {
    props.setAvatar(avatarRef.current.files);
    setNameFilesList(avatarRef.current.files[0].name);
    const base64Avatar = await convertToBase64(avatarRef.current.files[0]);

    setAvatar(base64Avatar);
    props.changeUser({id: props.user.id, avatar: base64Avatar, password: "", token});
  }

  let dateArr = [];
  if (dateRegistration)
    dateArr = dateRegistration.match(/^\d{4}.\d{2}.\d{2}/)[0].split('-');

  let date = dateArr.length === 3 ? `${dateArr[2]}.${dateArr[1]}.${dateArr[0]} г.` : dateRegistration;

  const onSetPassword = () => {
    props.changeUser({id: props.user.id, avatar: "", password, token});
  }

  const handleDeleteUser = () => {
    props.deleteProfile(props.user.id);
  }

  return (
      <div className={s.profile}>
        {props.deleted && <Navigate to={'/'}/>}

        <div className={s.profile__container}>
          {toggleSupport && <Support handle={handleSetToggleSupport}/>}
          <div className={s.profile__info}>
            <img className={s.profile__info_avatar} src={avatar} alt="Logo"/>
            <span className={s.profile__info_username}>{localUsername}</span>
            <span className={s.profile__info_dateReg}>Дата регистрации: {date}</span>
            <SpaceLine marginTop={15} height={2} width={220}/>
            <ProfileButton handle={() => {}} to={"/profile/advert"} src={report} text={"Мои объявления"}/>
            <ProfileButton handle={() => {}} to={"/profile/settings"} src={settings} text={"Настройки >"}/>
            <SpaceLine marginTop={15} height={2} width={220}/>
            <ProfileButton handle={handleSetToggleSupport} to={""} src={info} text={"Поддержка"}/>
            <ProfileButton handle={props.setLogout} to={"/"} src={exit} text={"Выход"}/>
          </div>

          <div className={s.profile__settings}>
            <span className={s.profile__settings_h3}>Настройки профиля</span>
            <br/><br/>
            <div className={s.profile__settings_container}>
              <span>Сменить пароль</span>
              <br/>
              <div className={s.profile__settings_inputs}>
                <AuthInput name={'Пароль'} fontSize={14} width={307} placeholder={'Пароль'} type={'password'} value={password} handle={event => onChangePassword(event.target.value)}/>
                <br/>
                <AuthInput name={'Повторите пароль'} fontSize={14} width={307} placeholder={'Повторите пароль'} type={'password'} value={confirmPassword} handle={event => onChangeConfirmPassword(event.target.value)}/>
                {password == confirmPassword && password !== '' && confirmPassword !== '' &&
                    <button className={s.profile__settings_btn} onClick={onSetPassword}>Сменить</button>}

                {password !== confirmPassword && password !== '' && confirmPassword !== '' &&
                  <span className={s.profile__error}>Пароли должны совпадать!</span>
                }
              </div>

              <SpaceLine width={370} marginTop={20} marginBottom={20}/>

              <FileChooser width={238} list={nameFilesList} refer={avatarRef} handle={onSetAvatar}/>

              <SpaceLine width={370} marginTop={20} marginBottom={20}/>

              <div className={s.profile__settings_delete}>
                <span>Удалить профиль</span>
                <br/>
                <div className={s.profile__settings_del}>
                  <span className={s.profile__settings_delText}>После удаления, восстановить аккаунт будет невозможно</span>
                  <button className={s.profile__settings_dangerBtn} onClick={handleDeleteUser}>Удалить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileSettings;