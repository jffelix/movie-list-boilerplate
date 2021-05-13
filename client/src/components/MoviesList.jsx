import React from 'react';

var moviesList = (props) => (

  <ul>
    {props.video.map((item, index) =>
    <li>{item.title}</li>)}
  </ul>

)

export default moviesList;