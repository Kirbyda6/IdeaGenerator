import React from 'react';
import { useNavigate } from "react-router-dom";

function Login({ username, password, setUsername, setPassword, setCollection }) {

    const navigate = useNavigate()

    const makeUser = async (i) => {
        i.preventDefault();

        let url = '/user?' + encodeURIComponent('username') + '=' + encodeURIComponent(username);

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(data => data.json())
        .then(res => {
            if(res !== null) {
                alert("There is already a user with this username!");
            }
            else {
                const inp = {'username': username, 'password': password}
                fetch('/users', {
                    method: 'POST',
                    body: JSON.stringify(inp),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(() => {navigate('/Home')})
            }
        });
        return;
    }

    const checkUser = async (i) => {
        i.preventDefault();
        const inp = {'username': username, 'password': password};

        let query = Object.keys(inp)
            .map(x => encodeURIComponent(x) + '=' + encodeURIComponent(inp[x]))
            .join('&');

        let url = '/users?' + query;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(data => data.json())
        .then(res => {
            if(res === null) {
                alert("Either the Username/Passord are incorrect OR this User does not exist!");
            }
            else {
                setCollection(res.ideaCollection);
                navigate('/Home');
            }
        })
        return;
    }

    return(
        <div className="main">
            <h1>Login</h1>
            Please Log In or Create A Profile Below
            <section>
                <p>Username: <input className='login'
                    type="text"
                    placeholder="Hello there!"
                    value={username}
                    onChange={user => {setUsername(user.target.value)}}/>
                </p>
                <p>Password: <input className='login'
                    type="password"
                    placeholder="*******"
                    value={password}
                    onChange={pass => {setPassword(pass.target.value)}}/>
                </p>
                <button onClick={checkUser} className='button'><span>Login </span></button>
                <button onClick={makeUser} className='button'><span>Sign Up </span></button>
            </section>
        </div>
    );
}

export default Login;