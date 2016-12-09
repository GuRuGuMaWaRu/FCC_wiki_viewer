import React from 'react';
import ListItem from './list-item.js';

const List = (props) => {

  let itemlist = [],
      i = 0,
      invalidEntry1 = /can mean/,
      invalidEntry2 = /refer to/;

  // function to build a list with search results
  function buildList(iterator) {
    for (let i = iterator, length = props.results[1].length; i < length; i++ ) {
      // remove from the list any entries that are not search results
      if (invalidEntry1.test(props.results[2][i]) || invalidEntry2.test(props.results[2][i])) {
        continue;
      } else {
        // add search results to the list to be displayed
        itemlist.push(<ListItem marginTop={props.marginTop} zindex={100 + 10*i} animated={props.animated} textOpacity={props.textOpacity}
          key={i} title={props.results[1][i]} text={props.results[2][i]}
          href={props.results[3][i]} />);
      }
    }
  }

  // function to build an empty list
  function buildEmptyList() {
    // add an entry with notification
    itemlist.push(<ListItem animated={false} textOpacity={1} key={0} title="" centerText={"center"} text="Please enter a valid search request" />);
    for (let i = 1, length = 5; i < length; i++ ) {
      // add empty items to the list, prevents list collapse
      itemlist.push(<ListItem animated={false} textOpacity={props.textOpacity} key={i} title="" text="" href="#" />);
    }
  }

  // check if there are any search results and build a real or an empty list
  if (props.results.length > 0) {
    if (props.results[1].length === 0) {
      // no results, build an empty list
      buildEmptyList();
    } else {
      // results, build a populated list
      buildList(0);
    }
    return (
      <div className="my-list">
        {itemlist}
      </div>
    );
  } else {
    // build an empty list when no submit request was sent
    buildEmptyList();
    return (
      <div className="my-list">
        {itemlist}
      </div>
    );
  }
}

export default List;
