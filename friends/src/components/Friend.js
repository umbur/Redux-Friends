import React from 'react';
import { connect } from 'react-redux';

import { deleteFriend } from '../actions';

function Friend({friend, deleteFriend}) {

  return (

    <div className='friend'>
        <h2>{friend.name}</h2>
        <p>Age: {friend.age}</p>
        <a href={`mailto:${friend.email}`}>{friend.email}</a>
        <button  onClick={() => deleteFriend(friend)} className='deleteBtn'>Delete</button>
    </div>
  );
}

export default connect(null, { deleteFriend })(Friend);