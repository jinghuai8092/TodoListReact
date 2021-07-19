import React, { Component, Fragment } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:'',

            // 如果inputValue 赋值 那么就写死了，永远是这个值
            list:[]
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
                    />
                    <button>Submit</button>
                </div>
                <ul>
                    <li>Learn English</li>
                    <li>Learn Math</li>
                    <li>Learn Chinese</li>
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        
        // this.state.inputValue=e.target.value
        this.setState({
            inputValue:e.target.value
        })
    }
}

export default TodoList;