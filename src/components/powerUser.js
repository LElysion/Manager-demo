import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTextAction } from '../actions/action.js'
import style from '../public/css/sys.css'


class rootPowerUser extends Component {
	constructor(props){
		super(props)
	}

	onTextChange(e) {
	}

	handleClick(text) {
	}

	render() {
		return (
				<p className="">PowerUser T_T</p>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch){
	return {}
}

let PowerUser = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootPowerUser)
export default PowerUser
