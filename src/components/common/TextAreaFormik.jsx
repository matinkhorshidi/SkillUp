import React from 'react';

// import { useFormik } from 'formik';

import CSS from '../../assets/css modules/TextAreaFormik.module.css';

const TextAreaFormik = (props) => {
  const { name, type, value, handlechange } = props;

  // const formik = useFormik({
  //   initialValues: { text: value },
  // });
  return (
    <div className={CSS.Form}>
      <label htmlFor={name}>{name}</label>
      <textarea
        rows="4"
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

export default TextAreaFormik;
