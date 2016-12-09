import React from 'react';

const ListItem = (props) => {

  return (
    <div style={{zIndex: props.zindex, marginTop: props.marginTop + 'px'}} className={props.animated ? "my-list-item cascaded" : "my-list-item"}>
      <a href={props.href} target="_blank">
        <div style={{opacity: props.textOpacity, textAlign: props.centerText}} className="my-search-result">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
      </a>
    </div>
  );
}

export default ListItem;
