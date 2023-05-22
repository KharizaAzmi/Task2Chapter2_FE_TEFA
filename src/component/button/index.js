import React from 'react';

const Button = ({ children, color, ...props }) => {
  console.log(props);

  // const BUTTON_COLOR = {
  //   PRIMARY: 'btn-primary',
  // };

  // const colorClassName = BUTTON_COLOR[color || 'PRIMARY'];

  return (
    <button className="btn btn-primary btn-sm" {...props}>
      {children}
    </button>
  );
};

export default Button;
