import React, { useState, useRef } from 'react';

import './accordion.css';
import Chevron from './Chevron';
import CheckBox from './CheckBox';

function Accordion(props) {
  const [setActive, setActiveState] = useState('');
  const [Checked, setChecked] = useState(true);
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion__icon');

  const content = useRef(null);

  const handleCheckboxChange = (event) => {
    // console.log(event);
    setChecked(!Checked);
  };
  let acardeoncontent;
  if (setActive) {
    acardeoncontent = {
      backgroundColor: 'white',
      overflow: 'hidden',
      transition: 'display 0.6s ease',
      display: 'block',

      visibility: 'visible',
      opacity: '1',
      transform: 'scale(1)',
    };
  } else {
    acardeoncontent = {
      backgroundColor: 'white',
      overflow: 'hidden',
      transition: 'display 0.6s ease',
      display: 'none',
      visibility: 'hidden',
      opacity: '0',
      transform: 'scale(0.75)',
      transition:
        'opacity 350ms cubic-bezier(0.19, 1, 0.22, 1) 0ms,transform 350ms cubic-bezier(0.19, 1, 0.22, 1) 0ms',
    };
  }
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'activeAcca' : '');
    setRotateState(
      setActive === 'activeAcca' ? 'accordion__icon' : 'accordion__icon rotate'
    );
  }
  return (
    <div className="accordion__section">
      {props.content == null ? (
        <>
          <div className="subaccordion">
            <p className="accordion__title" onClick={handleCheckboxChange}>
              {props.title}
            </p>
            <label>
              <CheckBox checked={Checked} onChange={handleCheckboxChange} />
            </label>
            <div ref={content} style={{ ...acardeoncontent }}>
              <div className="accordion__text" onClick={handleCheckboxChange}>
                {props.content}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            className={`accordion ${setActive}`}
            onClick={toggleAccordion}
          >
            <Chevron className={`${setRotate}`} width={10} fill={'#777'} />

            <p className="accordion__title">{props.title}</p>
            <label>
              <CheckBox checked={Checked} onChange={handleCheckboxChange} />
            </label>
          </button>
          <div ref={content} style={{ ...acardeoncontent }}>
            <div className="accordion__text">{props.content}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Accordion;
