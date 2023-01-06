import React, {useEffect, useState} from 'react';
import s from './MyAdverts.module.css';
import SpaceLine from "../../SpaceLine";
import ProfileButton from "../Button/ProfileButton";

import report from './report.svg';
import settings from './settings.svg';
import info from './info.svg';
import exit from './exit.svg';

import Support from "../../Support/Support";
import Advert from "../../Adverts/Advert/Advert";

import nullAvatar from '../../../null.jpg';
import mapAdListToAdJSX from "../../../mapAdListToAdJSX";
import useLocalStorage from "../../../hooks/useLocalStorage";

const MyAdverts = (props) => {

  let [toggleSupport, setToggleSupport] = useState(false);
  const handleSetToggleSupport = () => {
    setToggleSupport(!toggleSupport);
  }

  const [avatar] = useLocalStorage(nullAvatar, 'avatar');
  const [username] = useLocalStorage(null, 'username');
  const [token] = useLocalStorage(null, 'token');

  const localUsername = props.user.username;
  const dateRegistration = props.user.createdAt;

  useEffect( () => {
    if (username)
      props.getUserProfile({user: username, token});
  }, []);

  const [advertList, setAdvertList] = useState([]);
  useEffect( () => {
    const user = props.user.username;

    if (user)
      props.getAdverts({user: username, token});

  }, [props.user]);

  useEffect( () => {

    if (props.adverts !== null)
      setAdvertList(mapAdListToAdJSX(props.adverts));

  }, [props.adverts])

  let dateArr = [];
  if (dateRegistration)
    dateArr = dateRegistration.match(/^\d{4}.\d{2}.\d{2}/)[0].split('-');

  let date = dateArr.length === 3 ? `${dateArr[2]}.${dateArr[1]}.${dateArr[0]} г.` : dateRegistration;

  return (
      <div className={s.profile}>
        <div className={s.profile__container}>
          {toggleSupport && <Support handle={handleSetToggleSupport}/>}
          <div className={s.profile__info}>
            <img className={s.profile__info_avatar} src={avatar} alt="Logo"/>
            <span className={s.profile__info_username}>{localUsername}</span>
            <span className={s.profile__info_dateReg}>Дата регистрации: {date}</span>
            <SpaceLine marginTop={15} height={2} width={220}/>
            <ProfileButton handle={() => {}} to={"/profile/advert"} src={report} text={"Мои объявления >"}/>
            <ProfileButton handle={() => {}} to={"/profile/settings"} src={settings} text={"Настройки"}/>
            <SpaceLine marginTop={15} height={2} width={220}/>
            <ProfileButton handle={handleSetToggleSupport} to={""} src={info} text={"Поддержка"}/>
            <ProfileButton handle={props.setLogout} to={"/"} src={exit} text={"Выход"}/>
          </div>

          <div className={s.profile__adverts}>
            <span className={s.profile__adverts_h3}>Мои объявления</span>
            <div className={s.profile__adverts_ads}>
              {advertList}
            </div>
          </div>
        </div>
      </div>
  );
};

export default MyAdverts;