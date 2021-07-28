import React, { Component, Fragment } from 'react';
import TodoItem from "./todoItem";
import './style.css';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            // 如果inputValue 赋值 那么就写死了，永远是这个值
            list: [
                'Learn English',
                'Learn Math',
                'Learn Chinese'
            ]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    // componentWillMount(){
    //     console.log(
    //         'Component Will Mount'
    //     )
    // }

    
    // componentDidMount(){
    //     console.log(
    //         'Component Did Mount'
    //     )
    // }

    render() {
        return (
            <Fragment>
                {/* Fragment是一个占位符，替代最外层包裹全部的div */}
                <div>
                    <label htmlFor='insertArea'> Input:</label>

                    <input
                        id='insertArea'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input)=>{this.input=input}}
                    // bind可以设置绑定this指向
                    //实际上不推荐使用ref在这里
                    />
                    <button onClick={this.handleBtnClick}>Submit</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
                {/* <Test content={this.state.inputValue}/> */}
            </Fragment>
        )
    }
    getTodoItem(){
        return this.state.list.map((item, index) => {
            return (
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
            )
        })
    }

    handleInputChange(e) {
        const value=e.target.value
        this.setState(()=>({
                inputValue:value
        }))
    // handleInputChange() {
    //     const value=this.input.value
    //     this.setState(()=>({
    //             inputValue:value
    //     }))
        // this.state.inputValue=e.target.value 无法直接赋值
    }

    handleBtnClick() {
        this.setState((prevState)=>({
            list:[
                ...prevState.list,
                prevState.inputValue
            ],
            inputValue: ''
        }))
    }
    handleItemDelete(index) {

        // immutable
        //state 不允许我们做任何的改变
        // 下面是拷贝了一个副本出来，然后再赋值
        this.setState((prevState)=>{
            const list=[...prevState.list];
            list.splice(index,1);
            return {list}
        })
        // console.log(index)

    }
}

export default TodoList;