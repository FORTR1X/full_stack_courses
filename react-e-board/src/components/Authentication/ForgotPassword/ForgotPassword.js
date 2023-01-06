import React from 'react';

import s from './ForgotPassword.module.css';
import AuthInput from "../AuthInput/AuthInput";

const ForgotPassword = (props) => {

  let email = props.email;
  const onChangeEmail = (event) => {
    props.changeEmail(event.target.value);
  }

  let toggleForgorPassword = props.toggleForgorPassword;
  const onChangeToggleForgorPassword = () => {
    props.setToggleForgotPassword(!toggleForgorPassword);
  }

  const resetPassword = () => {

    props.sendEmailCode(email);
    props.handle(email);
    onChangeToggleForgorPassword();

  }

  return (
      <div className={s.fp}>
        <div className={s.fp__background} onClick={onChangeToggleForgorPassword}/>
        <div className={s.fp__window}>
          <div className={s.fp__content}>
            <AuthInput name={'Логин или email'} placeholder={'Имя пользователя или email'} value={email} handle={onChangeEmail}/>
            <button className={s.fp__btn} onClick={resetPassword}>Сменить пароль</button>
            <span className={s.fp__description}>Укажите адрес электронной почты или имя пользователя к которому привязан аккаунт</span>
          </div>
        </div>
      </div>
  );
};

export default ForgotPassword;