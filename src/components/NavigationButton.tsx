import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

interface NavigationButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string,
  isEnabled: boolean
}
export const NavigationButton = (props: NavigationButtonProps) => {
  const {value: value, isEnabled: isEnabled, ...rest} = props;
  return isEnabled ? (
    <NavigationButtonEnabled
    {...rest}
    >
      {value}
    </NavigationButtonEnabled>
  ) : (
    <NavigationButtonNone>{value}</NavigationButtonNone>
  );
}


const NavigationButtonNone = styled.button`
  color: black;
  border: none;
  background-color: white;
  margin: 20px;
`;

const NavigationButtonEnabled = styled.button`
  color: #43D2A0;
  border: none;
  background-color: white;
  margin: 20px;
`;