// @flow

import React, {Component} from 'react';

type Props = {
  onSend        : (string) => void,
  inputMessage  : string,
  buttonTitle   : string
};

type State = {
  inputValue    : string
};

class InputForm extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      inputValue : ''
    };
  }

  search(value: string) {
    this.props.onSend(value);
  }

  render() {
    return (
      <form onSubmit={ e => { e.preventDefault(); this.search(this.state.inputValue) }}>
        <input placeholder={this.props.inputMessage}
               value={this.state.inputValue}
               onChange={ (event) => this.setState({
                inputValue : event.target.value
              }) }
        />
        <button>{this.props.buttonTitle}</button>
      </form>
    )
  }
}

export default InputForm;
