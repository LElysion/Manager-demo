import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTextAction } from '../actions/action.js'
import style from '../public/css/sys.css'


class rootAddUser extends Component {
	constructor(props){
		super(props)
	}

	onTextChange(e) {
	}

	handleClick(text) {
	}

	render() {
		return (
				<p className="">AddUsers T_T</p>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch){
	return {}
}

let addUser = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootAddUser)
export default addUser
