import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';

export default class TodoList extends Component {
	constructor(props) {
        super(props);
		console.log(this.props);
	}
	
	onSubmit(event) {
		const input = event.target;
		const text = input.value;
		const isEnterKey = (event.which == 13);
		const isLongEnough = text.length > 0;

		if (isEnterKey && isLongEnough) {
		  input.value = '';
		  this.props.dispatch(addTodo(text));
		}
	};
	
	toggleTodo(id, event) {
		this.props.dispatch(toggleTodo(id));
	}
	
    render() {
		return (
			<div className='todo'>
				<div>
				  <input type='text'
						 className='todo__entry'
						 placeholder='Add todo'
						 onKeyDown={this.onSubmit.bind(this)} />
				  <ul className='todo__list'>
					{this.props.todos.map(t => (
					  <li key={t.id}
						  className='todo__item'
						  onClick={this.toggleTodo.bind(this, t.id)}>
							{ t.completed 
							?  <strike>{t.text}</strike>
							: <span>{t.text}</span>
							}
					  </li>
					)) }
				  </ul>
				</div>  
			</div>
		);
	};	
};

var mapStateToProps = function mapStateToProps(state) {
	return { todos: state };
};
  
export default connect(mapStateToProps)(TodoList);