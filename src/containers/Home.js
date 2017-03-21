import React, { Component } from 'react'
import { ToDoo } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTextAction } from '../actions/action.js'
import { Carousel } from 'antd';

class Home extends Component {
	constructor(props) {
		super(props)
	}
	onChange(a, b, c) {
	  console.log(a, b, c);
	}
	componentWillMount(){
	}

	render(){
		return (

			<div>
					Home
			</div>
		)
	}
}

function mapStateToProps(state) { 
    return {  
        todo: state.todo 
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({   
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)