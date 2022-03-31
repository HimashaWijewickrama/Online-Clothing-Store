import React from 'react';

function  welcome(){
    return(
       <div className='welcome'>
        <div className='adminimg'>
            <img src='./images/logo.png' width="150px" height="120px"></img>
        </div><br></br>
        <div className='content'>
            <img src='./images/admin.jpg' width="650px" height="290px"/>
        </div>
       </div>
    )

}
export default welcome;