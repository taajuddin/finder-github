import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Search extends Component {
    state={
        text:''
    }
    static propTypes={
        searchUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault()
        if(this.state.text===''){
            this.props.setAlert('please enter something', 'light')
        }
        else{
            this.props.searchUsers(this.state.text)
            this.setState({text:''})
        }
        
    }
    render() {
        const {showClear, clearUsers}=this.props
        return (
            <div>
              <form className='form' onSubmit={this.onSubmit}>
                  <input type="text" name="text" placeholder="serch user...." value={this.state.text} onChange={this.onChange}/>
                  <input type="submit" value="search" className="btn btn-block" />
            </form><br/>
            {showClear && (
                     <div>
                     <button className='btn1 btn-grey btn-block' onClick={clearUsers}>clear</button>
                 </div>
            )}   
            </div>
        )
    }
}

export default Search
