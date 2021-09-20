import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons';

// Input liked or not?
// Output: raise an onClick event

class Like extends React.Component {
  render() {
    return !this.props.liked ? (
      <FontAwesomeIcon
        onClick={this.props.onClick}
        icon={outlineHeart}
        style={{ cursor: 'pointer' }}
      />
    ) : (
      <FontAwesomeIcon
        onClick={this.props.onClick}
        icon={faHeart}
        style={{ cursor: 'pointer' }}
      />
    );
  }
}

export default Like;
