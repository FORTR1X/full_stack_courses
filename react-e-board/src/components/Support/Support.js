import React from 'react';
import s from './Support.module.css';

import vk from './VK.svg';
import mail from './mail.svg';
import whatsapp from './whatsapp.svg';
import Button from "./Button/Button";

const Support = (props) => {
  return (
      <div className={s.supp__window}>
        <div className={s.supp__background} onClick={props.handle}/>

        <div className={s.supp__modal}>
          <div className={s.supp__content}>

            <Button text={'ВКонтакте'} src={vk} to={'https://vk.com/f0rtrix'}/>
            <Button text={'Почта'} src={mail} to={'mailto:fortrix07@gmail.com?subject=e-board&body=Здравствуйте, '}/>
            <Button text={`What's App`} src={whatsapp} to={'https://wa.me/79787503236'}/>

          </div>
        </div>
      </div>
  );
};

export default Support;