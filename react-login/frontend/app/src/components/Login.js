function Login(){
  return(
     <div className='login-form-wrap'>
          <h2>Login3</h2>
          <form className='login-form'>
            <input type='email' name='email' placeholder='Email' required/>
            <input type='password' name='password' placeholder='Password' required/>
            <button type='submit' className='btn-login'>Login</button>
          </form>
        </div>
        );

}

export default Login;