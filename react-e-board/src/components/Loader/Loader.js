import React from 'react';

import s from './Loader.module.css';

const Loader = () => {
  return (
      <div>
        <div className={s.lds_ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span className={s.text}>Прогрузка...</span>
      </div>
  );
};

export default Loader;