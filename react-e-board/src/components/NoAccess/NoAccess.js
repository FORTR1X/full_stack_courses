import React from 'react';
import Categories from "../Categories/Categories";

const NoAccess = (props) => {
  return (
      <div>
        <Categories catList={props.catList}/>
        <span style={{width: '1113px', margin: '0 auto', color: 'brown'}}>Ошибка доступа! Для начала нужно авторизоваться.</span>
      </div>
  );
};

export default NoAccess;