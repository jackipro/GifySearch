import React, { Component } from "react";

export class SearchRandom extends Component {
  state = {
    tag: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.searchRandom(this.state.tag);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='tag'
            value={this.state.tag}
            onChange={this.onChange}
            placeholder='Search Tag Name'
          />
        </form>
      </div>
    );
  }
}

export default SearchRandom;
