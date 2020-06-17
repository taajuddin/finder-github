import React,{ useState } from 'react'
import PropTypes from 'prop-types'
const Search =({searchUsers,setAlert,showClear,clearUsers})=>{
   const [text, setText]=useState('')
    const onChange=(e)=> setText(e.target.value);
    
    const onSubmit=(e)=>{
        e.preventDefault()
        if(text===''){
            setAlert('please enter something', 'light')
        }
        else{
            searchUsers(text)
            setText('')
        }
        
    }
        return (
            <div>
              <form className='form' onSubmit={onSubmit}>
                  <input type="text" name="text" placeholder="serch user...." value={text} onChange={onChange}/>
                  <input type="submit" value="search" className="btn btn-dark btn-block" />
            </form><br/>
            {showClear && (
                     <div>
                     <button className='btn btn-light btn-block' onClick={clearUsers}>clear</button>
                 </div>
            )}   
            </div>
        )
    }

Search.propTypes={
    searchUsers:PropTypes.func.isRequired,
    clearUsers:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired
}
export default Search
