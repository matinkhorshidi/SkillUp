import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  //   margin: 5px;
  //   padding-top: 15px;
  margin-top: 0px;
  margin-bottom: -20px;
  padding-left: 10px;
  z-index: 5;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: ${(props) => (props.checked ? 'white' : '#4BB543')};
  border-radius: 3px;
  transition: all 150ms;
  box-shadow: 0 0 0 1px #9e9e9e;

  ${HiddenCheckbox}:focus + & {
    //     box-shadow: 0 0 0 1px black;
  }
`;

const CheckBox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}></StyledCheckbox>
  </CheckboxContainer>
);

export default CheckBox;
