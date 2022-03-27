import React,{useState} from 'react';
import Home from './home';

function Signin(){
    const [logdetails, setLogdetails]=useState({email:"",password:""});
    const [home, setHome]=useState(true);


    const handleSignin = e => {
        e.preventDefault();
        const json=localStorage.getItem(`${logdetails.email}`);
        const pass=JSON.parse(json);
        if(!logdetails.email || !logdetails.password){
            alert("Please fill every field");
            console.log("fill everything");
        }
        else if(pass==null || logdetails.password!=pass.password){
            alert("Wrong email/password");
            console.log("wrong");
        }
        else{
            setHome(!home);
            console.log("signed in!");
        }
    }


    return(
        <div>
            {home ? (
            <form onSubmit={handleSignin}>
                <div className='form-inner'>
                    <h1>Currency Converter</h1>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Id:</label>
                        <input type='email' name='email' id='email' placeholder='example@example.com' onChange={e=>setLogdetails({...logdetails, email:e.target.value})} value={logdetails.email}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' id='password' placeholder='Enter Password' onChange={e=>setLogdetails({...logdetails, password:e.target.value})} value={logdetails.password}/>
                    </div>
                    <input type='submit' value='Sign in' />
                </div>
            </form>
            ):(<Home />)}
        </div>
    )
}


export default Signin