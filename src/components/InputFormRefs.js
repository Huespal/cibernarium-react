// @flow

import React, {Component} from 'react';

type Props = {
  onSend        : (string) => void,
  inputMessage  : string,
  buttonTitle   : string
};

class InputFormRefs extends Component<Props, void> {

  form: ?HTMLFormElement;

  constructor(props: Props) {
    super(props);
    this.form = null;
  }

// Els if's sobren. Es perquè flow no es queixi. Flow = Drama.
  search() {
    if(!!this.form) { // or this.form instanceOf HTMLFormElement
      const input = this.form.querySelector("input[name=term]");
      if (input instanceof HTMLInputElement) {
        console.log(`Searching using refs ${input.value}`);
        this.props.onSend(input.value);
      }
    }
  }

  render() {
    return (
      <form onSubmit={ e => {
              e.preventDefault();
              this.search()
            }}
            ref={(form) => this.form = form}>
        <input name="term" placeholder={this.props.inputMessage}/>
        <button>{this.props.buttonTitle}</button>
      </form>
    )
  }
}

export default InputFormRefs;
