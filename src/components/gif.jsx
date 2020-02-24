import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    if (this.props.selectGif) {
      console.log(this.props.id)
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
