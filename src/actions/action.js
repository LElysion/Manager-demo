import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'

export const islogin = 'islogin'
//export const getuserlist = 'getuserlist'
export function getLoginAction(login, user){
	return {type: islogin, login:login, user: user}
}
export function notLogin(){
	return {type: islogin, login:false}
}
export function getuser(user){
	return {type: getuser, user: user }
}
export function getuserlist(userlist){
	return {type: getuserlist, userlist: userlist}
}
// export const add = 'add'
// export function getToDoAction(todo) {
// 	return {type: add, todo: todo}
// }



// export function addTextAction(text){
// 	return dispatch => {
// 		return fetch('/v1/todo', {
// 			method: 'post',
// 			credentials: 'include', //配置cookie来获取session
// 			headers: {
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({
// 				text: text
// 			})
// 		}).then(function(response){
// 			return response.json()
// 		}).then(function(json){
// 			if(!json.success){
// 				console.log(json.error)
// 			}else{
// 				dispatch(getToDoAction(json.data))
// 			}
// 		}).catch(function(err){
// 			console.log(err)
// 		})
// 	}
// }

export function addUserAction(user) {
	return dispatch => {
		return fetch('/v1/knows/userdata', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: user
			})
		}).then(function(response){
			//console.log("heyheyhey")
			//browserHistory.push("/")
			return response.json()
		}).then(function(json){
			console.log(json)
			browserHistory.push("/login")
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function loginUserAction(user){
	return dispatch => {
		return fetch('/v1/knows/login', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: user
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.login)
			dispatch(getLoginAction(json.login, json.user))
			console.log("yes")
			if(json.login){
				browserHistory.push("/system")
			}else{
				console.log("username or password wram ")
			}
			//
			
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getUserAtion (user) {
	return dispatch => {
		return fetch('/v1/knows/userdata', {
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(respose){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			dispatch(getuser(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getUserListAction(user){
	return dispatch => {
		return fetch('/v1/knows/userlist',{
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			dispatch(getuserlist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function delUserAction(user) {
	return dispatch => {
		return fetch('/v1/knows/userdata',{
			method: 'delete',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: user
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			dispatch(getuserlist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}