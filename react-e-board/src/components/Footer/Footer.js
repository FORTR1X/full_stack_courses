import React from 'react';
import s from './Footer.module.css';

import copyright from './Copyright.svg';

import whatsApp from './whatsapp.svg';
import vk from './vk.svg';
import facebook from './facebook.svg';
import email from './arroba.svg';

const Footer = () => {
  return (
      <div className={s.footer}>
        <div className={s.copyright}>
          <span><img src={copyright} alt="copyright"/>  2021 - 2022 all right reserved</span>
          <span>design by FORTRIX</span>
        </div>

        <div className={s.contact}>
            <a href={'https://wa.me/79787503236'}>
              <img src={whatsApp} alt="whatsApp"/>
            </a>
            <a href={'https://vk.com/f0rtrix'}>
              <img src={vk} alt="vk"/>
            </a>
            <a href={'https://vk.com/f0rtrix'}>
              <img src={facebook} alt="facebook"/>
            </a>
            <a href="mailto:fortrix07@gmail.com?subject=e-board&body=Здравствуйте, ">
              <img src={email} alt="email"/>
            </a>
        </div>
      </div>
  );
};

export default Footer;