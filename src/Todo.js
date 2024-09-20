import React from "react";
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {item: props.item};
  }

  render() {
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked={item.done} disableRipple />
        <ListItemText>
          <InputBase
            inputProps={{ "aria-label": "naked:" }}
            type="text"
            id={item.id}    // 각 리스트를 구분하려고 id를 연결
            name={item.id}  // 각 리스트를 구분하려고 id를 연결
            value={item.title}
            multiline={true}
            fullWidth={true}
           />
        </ListItemText>
      </ListItem>
      // <div className="Todo">
      //   <input type="checkbox"
      //       id={this.state.item.id}
      //       name={this.state.item.id}
      //       checked={this.state.item.done} />
      //   <label htmlFor={this.state.item.id}>{this.state.item.title}</label>
      // </div>
    );
  }
}

export default Todo;
