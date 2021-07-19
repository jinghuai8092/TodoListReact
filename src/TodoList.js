import React, { Component, Fragment } from 'react';

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
    }
    render() {
        return (
            <Fragment>
                {/* Fragment是一个占位符，替代最外层包裹全部的div */}
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    // bind可以设置绑定this指向
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>Submit</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {

        // this.state.inputValue=e.target.value 无法直接赋值
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [
                ...this.state.list,
                this.state.inputValue
            ],
            inputValue: ''
        })
    }
    handleItemDelete(index) {

        // immutable
        //state 不允许我们做任何的改变
        // 下面是拷贝了一个副本出来，然后再赋值
        
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list:list
        })
        // console.log(index)

    }
}

export default TodoList;