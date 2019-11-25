import React, { useState,useEffect } from 'react';

function  Login() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    if(count!==3){
      document.title=`you click ${count} times`
    }    
  });

  return ( 
    <div>    
       <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function useFriendStatus(id){
  if(id%2==0){
     useEffect(()=>{
       document.title=`you click ${id} times`
     })
  }
}

export default Login;
