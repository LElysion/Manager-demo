import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import style from '../public/css/desktop.css'
import { getUserListAction } from '../actions/action.js'

const SubMenu = Menu.SubMenu;
class rootSystem extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){

	}

	state = {
	    current: '1',
	    openKeys: [],
	  }
	  handleClick = (e) => {
	    console.log('Clicked: ', e);
	    this.setState({ current: e.key });
	  }
	  onOpenChange = (openKeys) => {
	    const state = this.state;
	    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
	    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

	    let nextOpenKeys = [];
	    if (latestOpenKey) {
	      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	    }
	    if (latestCloseKey) {
	      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
	    }
	    this.setState({ openKeys: nextOpenKeys });
	  }
	  getAncestorKeys = (key) => {
	    const map = {
	      sub3: ['sub2'],
	    };
	    return map[key] || [];
	  }

	handleloginnow(){
		browserHistory.push("/login")
	}

	handletoshowuserlist(userlist){
		console.log(userlist)
		const { handleuserlist } = this.props
		handleuserlist(userlist)
	}

	render(){
		var hight = window.innerHeight
		const { login, children,userlist } = this.props
		if(login){
			return (
				<div>
					<div>
						<Menu
					        mode="inline" theme="dark"
					        openKeys={this.state.openKeys}
					        selectedKeys={[this.state.current]}
					        style={{ width: 200, height: hight }}
					        onOpenChange={this.onOpenChange}
					        onClick={this.handleClick}
					      >
					        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户管理</span></span>}>
					          <Menu.Item key="1"><Link to='/system/showusers' onClick={this.handletoshowuserlist.bind(this, userlist)}>查看用户</Link></Menu.Item>
					          <Menu.Item key="2"><Link to='/system/modifyuser'>查看管理员</Link></Menu.Item>
					          <Menu.Item key="3"><Link to='/system/adduser'>权限管理</Link></Menu.Item>
					        </SubMenu>
					        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>板块管理</span></span>}>
					          <Menu.Item key="5"><Link to='/system/showusers'>查看板块</Link></Menu.Item>
					          <Menu.Item key="6"><Link to='/system/showusers'>添加板块</Link></Menu.Item>
					          <SubMenu key="sub3" title="权限管理">
					            <Menu.Item key="7"><Link to='/system/showusers'>板块权限</Link></Menu.Item>
					            <Menu.Item key="8"><Link to='/system/showusers'>管理员权限</Link></Menu.Item>
					          </SubMenu>
					        </SubMenu>
					        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>系统设置</span></span>}>
					          <Menu.Item key="9"><Link to='/system/showusers'>管理员资料</Link></Menu.Item>
					          <Menu.Item key="10"><Link to='/system/showusers'>系统配置</Link></Menu.Item>
					          <Menu.Item key="11"><Link to='/system/about'>关于</Link></Menu.Item>
					        </SubMenu>
					      </Menu>
			 			</div>
			 			<div className="syscontent">
				            {children}
				         </div>
				</div>
			)
		}else{
			return (
				<div>
					<span className="sysloginnow">
					please <a href="javascript:;" onClick={this.handleloginnow.bind(this)}>login</a>
					</span>
				</div>	
			)
		}
		
	}
}

function mapStateToProps(state) { 
    return {
        login: state.login,
        power: state.user.power,
        userlist: state.userlist
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		handleuserlist: getUserListAction
	}, dispatch)
}

let System = connect(
    mapStateToProps,
    mapDispatchToProps
)(rootSystem)

export default System