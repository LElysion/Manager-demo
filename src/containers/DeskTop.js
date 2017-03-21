import React, { Component } from 'react'
import { Link } from 'react-router'
import style from '../public/css/desktop.css'
import { Menu, Icon, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { notLogin } from '../actions/action.js'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
/*

*/

class rootDeskTop extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){

	}
	handleEsc(login) { /*提交处理*/
		console.log(login)
		const { escnow } = this.props
		escnow()
	}
	render(){
		const { login } = this.props
		return (
			<div>
				<header className="headericon">云医疗健康信息平台</header>
				<Menu mode="horizontal" className="" theme="dark" style={{textAlign: "center"}}>
					<Menu.Item><Link to='/' className="linkitem">home</Link></Menu.Item>
					<Menu.Item><Link to='/about' className="linkitem">about</Link></Menu.Item>
					<Menu.Item><Link to='/user/you' className="linkitem">user</Link></Menu.Item>
					<Menu.Item><Link to='/system' className="linkitem" >system</Link></Menu.Item>
				</Menu>
				<div className="login">
					<Button style={{marginRight:"12px"}} className={login?"hide":"new"}>
						<Link to='/login'>
							login
						</Link>
					</Button>
					<Button className={login?"hide":"new"}>
						<Link to='/register'>
							register
						</Link>
					</Button>
					<span style={{marginRight:"12px",right:"15px"}} className={login?"newesc":"hide"} onClick={this.handleEsc.bind(this,login)}>
						<Link to='/login'>
							esc
						</Link>
					</span>
				</div>
				{ this.props.children }
			</div> 
		)
	}
}

function mapStateToProps(state) { 
    return {
        login: state.login
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      escnow:notLogin
    }, dispatch)
}

let DeskTop = connect(
    mapStateToProps,
    mapDispatchToProps
)(rootDeskTop)

export default  DeskTop