import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

const Data = (props) => {

  const location = useLocation().pathname;

  useEffect(() => {
    if (!props.isContentLoaded) {
      props.getCategories();
      props.getSubcategories();
    }

    if (props.isContentLoaded)
      props.getCurrentCategory(location);

  }, [props.isContentLoaded]);

  return (
      <div/>
  );
};

export default Data;