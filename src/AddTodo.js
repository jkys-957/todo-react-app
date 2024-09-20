import React from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "" } };   // 사용자의 입력을 저장할 오브젝트
        this.add = props.add;  // props의 함수를 this.add 에 연결
    }

    // 1. 함수 작성
    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    // 부모 컴포넌트 App에서 props를 통해 add() 를 넘겨받아 사용하는 함수 작성
    onButtonClick = () => {
        this.add(this.state.item);   // add 함수 사용
        this.setState({ item: { title: "" } });
    }

    // Enter 키 처리를 위한 핸들러 작성
    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {

        // 2. 함수 연결
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={11} item style={{ paddingRight: 16 }}>
                        <TextField placeholder="Add Todo Here"
                                fullWidth
                                onChange={this.onInputChange}
                                value={this.state.item.title}
                                //onKeyPress={this.enterKeyEventHandler}  // 17버전 이후부터 권장하지 않음.
                                onKeyDown={this.enterKeyEventHandler}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button 
                                fullWidth
                                color="secondary"
                                variant="outlined"
                                onClick={this.onButtonClick}
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;