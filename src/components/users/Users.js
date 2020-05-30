import React from 'react'
import UserItem from './UserItem'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.min.css';
const Users =({users,loading})=>{
	if(loading){
		return (
			<i className="fa fa-spinner spinning" />
		)
	}else{
		return(
			<div style={userStyle} className='container'>
			{users.map((user)=>(
				<UserItem key={user.id} user={user}/>
			))}
			</div>
			)
	}
		
}
Users.propType={
	users:PropTypes.array.isRequired,
	loading:PropTypes.bool.isRequired
}
const userStyle={
	display:'grid',
	gridTemplateColumns:'repeat(3,1fr)',
	gridGap:'1rem'
}
export default Users