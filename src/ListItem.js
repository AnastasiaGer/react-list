import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	this.state = { color: 'black' };
  this.state = { amDone : true };
 
    }

    handleClick() {
      var doneState = !this.state.amDone; 
      this.setState({ amDone: !this.state.amDone});
    }

  render() {
    var item = this.props.item;
    var name = item.name;
    var line =  this.state.amDone ? 'none' : 'line-through';

  
  
    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color, textDecoration:line}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

