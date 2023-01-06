import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import SpaceLine from "../../SpaceLine";

import s from './ConfirmAccount.module.css';

import verifyImg from './verify.svg';

const ConfirmAccount = (props) => {

  const confirmCode = useParams().code;

  useEffect( () => {
    if (props.user === null && props.error === null)
      props.getActivationCode(confirmCode);
  }, props.user);

  return (
      <div>
        {props.user !== null &&
          <div className={s.success__container}>
            <img className={s.success__img} src={verifyImg} alt="Verified!" width={'64px'}/>
            <span>Благодарим Вас за регистрацию, аккаунт успешно подтвержден и Вы можете пользоваться услугами сайта!</span>
          </div>
        }
        {props.error !== null &&
          <div className={s.error__container}>
            <span>Что-то пошло не так :(</span>
            <span>Нам не удалось активировать Ваш аккаунт. Пожалуйста, обратитесь в поддержку сайта.</span>
            <SpaceLine marginTop={15} marginBottom={15} width={500}/>
            <span>Время: {props.error.response.data.timestamp} | Код ошибки: {props.error.response.status}</span>
          </div>
        }
      </div>
  );
};

export default ConfirmAccount;