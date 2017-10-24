import React, {Component} from 'react';

class InputForm extends Component{

  constructor(props) {
    super(props);

    this.state = {
      inputValue : ''
    };
  }

  search(value) {
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
