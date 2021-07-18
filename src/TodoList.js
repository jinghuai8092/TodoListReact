import React,{Component , Fragment} from 'react';

class TodoList extends Component{
    render(){
        return (
            <Fragment>
                {/* Fragment是一个占位符，替代最外层包裹全部的div */}
               <div> <input /><button>Submit</button></div>
                <ul>
                    <li>Learn English</li>
                    <li>Learn Math</li>
                    <li>Learn Chinese</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;