//@flow

import React from 'react';
import InputFormRefs from './InputFormRefs';
import './MenuBar.css';

type Props = {
  onSearch: (string) => void
}

const MenuBar = (props: Props) => (

    <div className="menu-bar">
      <InputFormRefs
        inputMessage="Cerca videos"
        buttonTitle="Cerca"
        onSend={ (value: string) => props.onSearch(value)}/>
    </div>
)

export default MenuBar;
