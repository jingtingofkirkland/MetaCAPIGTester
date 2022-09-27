import React, {useState} from 'react';
import {Card} from 'antd';
import { sha256 } from 'js-sha256';


export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');


  function onLogin(e) {
    e.preventDefault();
    if(username==null || password ==null) {
        console.log(username, password);
        setError("Useranme and password should not be empty");
        return;
    }
    setError('');
    sessionStorage.setItem("userId", sha256(username));
    window.location.href = "/onetrust";
    }
  return(
      <div >
      <Card title="Please Login" size="large">
      <h3 style={{color:'red'}}>{error}</h3>
    <form>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button type="submit" onClick={onLogin}>Submit</button>
      </div>
    </form>
    </Card>
    </div>

  )
}
