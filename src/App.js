import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import Todo from './Todo';
import { Paper, List, Container } from "@material-ui/core";
import AddTodo from './AddTodo';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// 클래스 버전
class App extends React.Component {

  constructor(props) {
    super(props);
    
    // 1. item -> items 배열로
    this.state = {
      items: [
        {id: 0, title: "Hello world 1", done: true},
        {id: 1, title: "Hello world 2", done: false},
      ],
    };
  }

  // 1. 함수 추가
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;   // key를 위한 id 추가
    item.done = false;   // done 초기화
    thisItems.push(item)  // 리스트에 아이템 추가
    this.setState({ items: thisItems });  // 업데이트는 반드시 this.setState로 해야 됨.
    console.log("items : ", this.state.items);
  }

  render() {
    // 2. 자바스크립트가 제공하는 map 함수를 이용하여 배열을 반복해 <Todo .../> 컴포넌트 생성
    // var todoItems = this.state.items.map((item, idx) => (
    //   <Todo item={item} key={item.id} />
    // ));
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );

    // 3. props로 넘겨주기
    return (
      <div className="App">
        <Container maxWidth="md">
          {/* <AddTodo /> */}
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}

export default App;
