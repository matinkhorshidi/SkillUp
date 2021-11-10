import React from 'react';
// import ReactDOM from 'react-dom';
// import { useFormik } from 'formik';
import CSS from '../../assets/css modules/InputFormik.module.css';

const InputFormik = (props) => {
  const { name, type, value, handlechange } = props;

  return (
    <div className={CSS.Form}>
      <label htmlFor={name}>{name}</label>
      <input
        className={CSS.Input}
        id={name}
        type={type}
        name={value}
        value={value}
        onChange={handlechange}
      />
    </div>
  );
};

export default InputFormik;
