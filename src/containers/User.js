import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'antd'

class rootUser extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){
	}

	handleclick(user) {
		console.log(user)
	}

	render(){
		const { user } = this.props
		return (
			<div>
				<h2>hi,{this.props.params.username}</h2>
				<Button onClick={this.handleclick.bind(this,user)}>clickme</Button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch){
	return {

	}
}

let User = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootUser)


export default User