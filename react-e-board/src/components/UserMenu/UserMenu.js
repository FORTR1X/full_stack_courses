import React from 'react';
import s from './UserMenu.module.css';
import SpaceLine from "../SpaceLine";

import report from './report.svg';
import settings from './settings.svg';
import info from './info.svg';
import exit from './exit.svg';
import Button from "./Button/Button";

const UserMenu = (props) => {
  return (
      <div className={s.window}>
        <div className={s.menu}>
          <Button to={'/profile/advert'} src={report} alt={''} text={'Мои объявления'} handle={()=>{}} closeMenu={props.closeMenu}/>
          <Button to={'/profile/settings'} src={settings} alt={''} text={'Настройки'} handle={()=>{}} closeMenu={props.closeMenu}/>
          <SpaceLine width={207} height={1} marginBottom={0} marginTop={20}/>
          <Button to={'/'} src={info} alt={''} text={'Поддержка'} handle={props.handleSupport} closeMenu={props.closeMenu}/>
          <Button to={'/'} src={exit} alt={''} text={'Выход'} handle={props.onLogout} closeMenu={props.closeMenu}/>
        </div>
      </div>
  );
};

export default UserMenu;