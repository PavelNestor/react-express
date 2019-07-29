import React, { Component } from 'react';
import './text.css';

class Text extends Component {
  constructor() {
    super();
    this.state = {
      text: []
    };
  }

  componentDidMount() {
    fetch('/api/text')
      .then(res => res.json())
      .then(text => this.setState({ text }, () => console.log('text fetched...', text)));
  }

  render() {
    return (
      <div>
        <h2>Text</h2>
      </div>
    );
  }
}

export default Text;
