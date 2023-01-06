import React, {useState} from 'react';
import s from './Navbar.module.css'

import LoginContainer from "../Authentication/Login/LoginContainer";
import RegistrationContainer from "../Authentication/Registration/RegistrationContainer";
import ForgotPasswordContainer from "../Authentication/ForgotPassword/ForgotPasswordContainer";
import UserMenu from "../UserMenu/UserMenu";
import Support from "../Support/Support";
import Hint from "../Hint/Hint";

import nullAvatar from '../../null.jpg';
import useLocalStorage from "../../hooks/useLocalStorage";

const Navbar = (props) => {

  const adSearch = props.adSearch;
  const mainPage = props.mainPage;

  let request = props.request;
  const onChangeRequest = (value) => {
    props.changeRequest(value);
  }

  let toggleLogin = props.toggleLogin;
  const onChangeToggleLogin = () => {
    props.setToggleLogin(!toggleLogin);
  }

  let toggleUserMenu = props.toggleUserMenu;
  const onChangeToggleUserMenu = () => {
    props.setToggleUserMenu(!toggleUserMenu);
  }

  let toggleSupport = props.toggleSupport;
  const onChangeToggleSupport = () => {
    props.setToggleSupport(!toggleSupport);
  }

  let toggleHint = props.toggleHint;
  let [emailForHint, setMmailForHint] = useState('');
  const onChangeToggleHint = (email) => {
    setMmailForHint(email);
    props.setToggleHint(!toggleHint);
  }

  const [avatar] = useLocalStorage(nullAvatar, 'avatar');

  let isAuth = props.isAuth;

  const onLogout = () => {
    localStorage.clear();
    props.setIsAuth(false);
    props.setLogout();
  }

  let toggleRegistration = props.toggleRegistration;
  let toggleForgorPassword = props.toggleForgorPassword;

  return (
        <nav className={s.navbar}>
          {toggleLogin && <LoginContainer/>}
          {toggleRegistration && <RegistrationContainer/>}
          {toggleForgorPassword && <ForgotPasswordContainer handle={onChangeToggleHint}/>}
          {toggleUserMenu && <UserMenu closeMenu={onChangeToggleUserMenu} handleSupport={onChangeToggleSupport} onLogout={onLogout}/>}
          {toggleSupport && <Support handle={onChangeToggleSupport}/>}
          {toggleHint && <Hint text={`Инструкция по восстановлению пароля отправлена Вам на почту ${emailForHint}`} handle={onChangeToggleHint}/>}

          <a className={s.logo} href={mainPage.url}>
            <span className={s.logoLetterE}>e</span>-board
          </a>

          <input className={s.input} type="text" placeholder={'Поиск'} value={request} onChange={event => onChangeRequest(event.target.value)}/>

          <a className={s.btnLink} href={request === "" || request === " " ? "" : `${adSearch.url}?=${request}`}>
            <button className={`${s.btn} ${s.button}`}>Поиск</button>
          </a>

          <a className={s.btnLink} href={'/ad/create'}>
            <button style={{width: '210px'}} className={`${s.btn} ${s.button}`}>Разместить объявление</button>
          </a>

          {isAuth && <img src={avatar} alt={"avatar"} className={s.auth__user} onClick={onChangeToggleUserMenu}/>}
          {!isAuth && <button className={`${s.btn} ${s.buttonActive}`} onClick={onChangeToggleLogin}>Войти</button>}
        </nav>
  );
};

export default Navbar;