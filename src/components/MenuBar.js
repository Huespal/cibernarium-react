import React from 'react';
import InputForm from './InputForm';
import './MenuBar.css';

const MenuBar = props => (

    <div className="menu-bar">
      <InputForm
        inputMessage="Cerca videos"
        buttonTitle="Cerca"
        onSend={value => props.onSearch(value)}/>
    </div>
)

export default MenuBar;
