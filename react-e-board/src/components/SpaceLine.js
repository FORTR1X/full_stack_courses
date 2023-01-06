import React from 'react';

const SpaceLine = (props) => {
  let width = props.width > 0 ? props.width : 100;
  let height = props.height > 0 ? props.height : 2;
  let marginBottom = props.marginBottom >= 0 ? props.marginBottom : 20;
  let marginTop = props.marginTop >= 0 ? props.marginTop : 0;
  let margin = props.margin ? props.margin : null;

  const style = {
    backgroundColor: "whitesmoke",
    width: `${width}px`,
    height: `${height}px`,
    margin,
    marginBottom: `${marginBottom}px`,
    marginTop: `${marginTop}px`,
  }

  return (
      <div style={style}>
        <br/>
      </div>
  );
};

export default SpaceLine;