import React, {Component} from 'react';

class SearchForm extends Component{

  constructor(props) {
    super(props);

    this.state = {
      inputValue : ''
    };
  }

  search(value) {
    this.props.onSearch(value);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.search(this.state.inputValue);
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue}
              onKeyPress={(event) => this.handleKeyPress(event)}
              onChange={ (event) => this.setState({
                inputValue : event.target.value
              }) }
        />
        <button onClick={event => { this.search(this.state.inputValue) }}>Search</button>
      </div>
    )
  }
}

export default SearchForm;
