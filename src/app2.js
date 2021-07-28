import React,{Component,Fragment} from 'react';
import './style.css';
import {CSSTransition,TransitionGroup} from 'react-transition-group';


class App2 extends Component {

    constructor(props){
        super(props);
        this.state={
            list:[]
        }
        this.handleAddItem=this.handleAddItem.bind(this)
    }
    render(){
        return (
        <Fragment>
        <TransitionGroup>
        {
        this.state.list.map((item)=>{
            return (
                        <CSSTransition  timeout={1000} classNames='fade'
        unmountOnExit
        onEntered={(el)=>{el.style.color='blue'}}
        appear={true}
        >
                <div>{item}</div>
                </CSSTransition>
            )
        })
        }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
        </Fragment>
        )
    }
    handleAddItem(){
        this.setState((preState)=>{
            return {
                list:[...preState.list,'item']
            }
        })
    }

}

export default App2;
