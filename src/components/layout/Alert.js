import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
 const Alert = ({alert}) => {
    return (
        alert !==null &&(
            <div>
               <p className="fa fa-exclamation-circle " style={{backgroundColor:'lightGrey'}}>{alert.msg}</p>
            </div>
        )
    )
}
export default Alert