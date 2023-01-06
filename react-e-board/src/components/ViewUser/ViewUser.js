import React, {useEffect, useState} from 'react';

import s from './ViewUser.module.css';
import {useLocation, useParams} from "react-router-dom";

import nullAvatar from '../../null.jpg';
import mapAdListToAdJSX from "../../mapAdListToAdJSX";

const ViewUser = (props) => {

  const params = useParams();
  const [user, setUser] = useState(props.user);
  const [avatar, setAvatar] = useState(nullAvatar);
  const [date, setDate] = useState('Нет информации');
  const [adverts, setAdverts] = useState([]);
  const [isToggleEmail, setIsToggleEmail] = useState(false);
  const handleSetIsToggleEmail = () => {
    setIsToggleEmail(!isToggleEmail);
  }

  useEffect( () => {

    if (props.user.id === -1)
      props.getUser(parseInt(params.id));

    if (props.user.id >= 0) {

      props.getAdverts(props.user.username);

      setUser(props.user);
      setAvatar(props.user.avatar == null ? nullAvatar : props.user.avatar);

      let dateArr = [];
      if (props.user.createdAt)
        dateArr = props.user.createdAt.match(/^\d{4}.\d{2}.\d{2}/)[0].split('-');

      let date = dateArr.length === 3 ? `${dateArr[2]}.${dateArr[1]}.${dateArr[0]} г.` : props.user.createdAt;
      setDate(date);
    }
  }, [props.user]);

  useEffect( () => {
    if (props.adverts.length > 0) {
      setAdverts(mapAdListToAdJSX(props.adverts));
    }
  }, [props.adverts]);

  return (
      <div className={s.window}>
        <div className={s.window__content}>
          <div className={s.profile__user}>
            <img className={s.profile__info_avatar} src={avatar} alt="Logo"/>
            <span className={s.profile__info_username}>{user.username}</span>
            <span className={s.profile__info_dateReg}>Дата регистрации: {date}</span>
            {!isToggleEmail && <button className={s.profile__info_btn} onClick={handleSetIsToggleEmail}>Написать</button>}
            {isToggleEmail &&
                <a href={`mailto:${user.email}?subject=e-board объявление&body=Здравствуйте, меня зовут `} className={s.profile__info_btn_text}>
                  {user.email}
                </a>}
          </div>

          <div className={s.profile__adverts}>
            <span className={s.profile__adverts_h3}>Объявления пользователя</span>
            <div className={s.profile__adverts_ads}>
              {adverts}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ViewUser;