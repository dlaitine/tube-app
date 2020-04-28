import React from 'react';

const Error = props => {
  if(!props.errorMessage) {
    return null;
  }

  return <div class="ui negative message">
    <div class="header">
      {props.errorMessage}
    </div>
  </div>
}

export default Error;