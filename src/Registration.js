import React,{ useState } from 'react';
import GoogleLogin from 'react-google-login';
import Signin from './Signin';
import './index.css';

function Registration(){
    const [details, setDetails]=useState({name:"",email:"",password:""});
    const [login, setLogin]=useState(true);

    const submitHandler = e => {
        e.preventDefault();
        const json=localStorage.getItem(`${details.email}`);
        const check=JSON.parse(json);
        if(!details.name || !details.email || !details.password)
        {
            alert("Please fill every field");
        }
        else if(!check){
            localStorage.setItem(`${details.email}`,JSON.stringify(details));
            setLogin(!login);
        }
        else{
            alert("This email Id has an account. Please use a different email Id");
        }
    }

    function handleClick(){
        setLogin(!login);
    }

    const handleFailure=(result)=>{
        alert(result);
    };

    const handleLogin=(googleData)=>{
        console.log(googleData);
        setLogin(!login);
    };

    return(
        <div>
            {login ? (
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Currency Converter</h2>
                    <div className='form-group'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' id='name' placeholder='Enter Name' onChange={e=>setDetails({...details, name:e.target.value})} value={details.name}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Id:</label>
                        <input type='email' name='email' id='email' placeholder='example@example.com' onChange={e=>setDetails({...details, email:e.target.value})} value={details.email}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' id='password' placeholder='Enter Password' onChange={e=>setDetails({...details, password:e.target.value})} value={details.password}/>
                    </div>
                    <div>
                    <GoogleLogin className='form-group'
                    clientId='867171041538-48a14ql35thvaa2vrqe7h0v3kq80d1js.apps.googleusercontent.com'
                    buttonText='Sign Up with Google'
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                    />
                    </div>
                    <input type='submit' value='Sign up' />
                    <p className='forgot' onClick={handleClick}>Have an account? Sign in</p>
                </div>
            </form>
            ):(<Signin />)}
        </div>
    )
}

export default Registration