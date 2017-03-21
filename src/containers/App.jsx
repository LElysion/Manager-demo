import React , {Component} from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { About, Home, DeskTop, Register, Login, User, System } from './index.js'
import { showUsers, addUser, modifyUser, powerUser,  } from '../components'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/reducer.js'

var initState = {
	todo: {
		list: []
	},
	login: false,
	user: {
		login: false,
		username: "",
		email: "",
		mobile: "",
		gender: ""
	},
	edituser: {
		login: false,
		username: "",
		email: "",
		mobile: "",
		gender: ""
	},
	userlist:{
		list: []
	}
}

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(
	thunk,
	logger
)(createStore)

let store = createStoreWithMiddleware(reducer, initState)

class App extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<Provider store={store}>
				<div>
		            <Router history={ browserHistory }>
		              <Route path="/" component={ DeskTop }>  
		                <IndexRoute component={ Home }/>  
		                <Route path="/user/:username" component={ User }/>
		                <Route path="/about" component={ About }/>  
		                	<Route path="/system" component={ System }>
		                		<Route path="/system/showusers" component={ showUsers }/> 
		                		<Route path="/system/modifyuser" component={ modifyUser }/>
		                		<Route path="/system/adduser" component={ addUser }/>
		                		<Route path="/system/poweruser" component={ powerUser }/>
		                		<Route path="/system/showmodule" component={ powerUser }/>
		                		<Route path="/system/addmodule" component={ powerUser }/>
		                		<Route path="/system/powermodule" component={ powerUser }/>
		                		<Route path="/system/poweemoduleuser" component={ powerUser }/>
		                		<Route path="/system/showadmin" component={ powerUser }/>
		                		<Route path="/system/showsystem" component={ powerUser }/>
		                		<Route path="/system/about" component={ About }/>
		                	</Route>
		              </Route>  
		              <Route path="/register" component={ Register } />   
		              <Route path="/login" component={ Login } />
		            </Router>  
	          </div>
          </Provider> 
		)
	}
}

export default App