import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    render(){
        const {content}=this.props;
        return (<div 
        onClick={this.handleClick}
        >
           {content}
            </div>)
    }
    handleClick(){
        const {deleteItem,index}=this.props;
        deleteItem(index)
    }
}

TodoItem.propTypes={
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

//propTypes对传值进行一个限制，如果没有传递，就不会提示警告
//但可以用index:PropTypes.number.isRequired进行显示

// TodoItem.defaultProps={}
//     test:'Hello World'
// }

// 给test设置了一个默认值,当没有传递时候，会使用默认值

export default TodoItem;