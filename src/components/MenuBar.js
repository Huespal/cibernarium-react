//@flow

import React from 'react';
import InputForm from './InputForm';
import './MenuBar.css';

type Props = {
  onSearch: (string) => void
}

const MenuBar = (props: Props) => (

    <div className="menu-bar">
      <InputForm
        inputMessage="Cerca videos"
        buttonTitle="Cerca"
        onSend={ (value: string) => props.onSearch(value)}/>
    </div>
)

export default MenuBar;
