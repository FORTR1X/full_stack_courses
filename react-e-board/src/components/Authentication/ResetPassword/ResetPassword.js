import React, {useEffect} from 'react';
import s from "./ResetPassword.module.css";
import AuthInput from "../AuthInput/AuthInput";
import {useParams} from "react-router-dom";
import SpaceLine from "../../SpaceLine";

const ResetPassword = (props) => {

  const code = useParams().code;

  const password = props.password;
  const onChangePassword = (password) => props.changePasswordField(password)

  const confirmPassword = props.confirmPassword;
  const onChangeConfirmPassword = (confirmPassword) => props.changeConfirmPasswordField(confirmPassword)

  const status = props.status;
  const error = props.error;

  const onResetPassword = () => {
    if (password.length > 0)
      props.changeUserPassword({code, password});
  }

  return (
      <div className={s.profile__settings_inputs}>
        {status === null && error === null &&
          <div>
            <AuthInput name={'Пароль'} fontSize={14} width={307} placeholder={'Пароль'} type={'password'} value={password} handle={event => onChangePassword(event.target.value)}/>
            <br/>
            <AuthInput name={'Повторите пароль'} fontSize={14} width={307} placeholder={'Повторите пароль'} type={'password'} value={confirmPassword} handle={event => onChangeConfirmPassword(event.target.value)}/>
            {password == confirmPassword && password !== '' && confirmPassword !== '' &&
                <button className={s.profile__settings_btn} onClick={onResetPassword}>Сменить</button>}

            {password !== confirmPassword && password !== '' && confirmPassword !== '' &&
                <span className={s.profile__error}>Пароли должны совпадать!</span>
            }
          </div>
        }
        {status !== null &&
          <div>
            {console.log(status)}
            <span>{status.data.username}, Ваш аккаунт успешно восстановлен! Пожалуйста, авторизуйтесь для дальнейшего пользования сайтом!</span>
          </div>
        }
        {error !== null &&
          <div style={{marginTop: '40px'}}>
            <span>Ошибка! Мы не смогли восстановить Ваш аккаунт, обратитесь в поддержку.</span>
            <SpaceLine width={400} marginTop={20} marginBottom={20}/>
            <span>Код ошибки: {`${error.error} ${error.status}`} | Время: {error.timestamp}</span>
          </div>
        }
      </div>
  );
};

export default ResetPassword;