import LoginStyles from './Login.module.css'
// import apiClient from '../../Services/apiClient'
// import { useState, memo } from 'react'

function LoginPage () {
//   const [message, setMessage] = useState('')

//   // FUNCTION : When the login button is clicked, send a call to the backend to verify the information is correct
  // const login = async () => {
  //   const { data, error } = await apiClient.login() // Use api client to call the endpoint I want
  //   if (data) { // If I get data back (successful request)
  //     // redirect to dashboard
  //   }
  //   if (error) { // If I get an error instead from the backend (unsuccessful request)
  //     console.log(error) // Print my error
  //     // display error message to page
  //     // ex: there is no account with this email
  //     // ex: incorrect password
  //   }
  // }

  return (
    <div className={LoginStyles['login-page']}> {/** Example on how to attach your css styling to these components */}
      <div className={LoginStyles['login-header']}>
        <div className={LoginStyles['login-header-name']}>
          <div>Logo</div>
          <div>Name of App</div>
        </div>
        <ul className={LoginStyles['login-header-info']}>
          <li><a href='/#'>About</a></li>
          <li><a href='/login'>Login</a></li>
          <li><a href='/#'>Sign Up</a></li>
        </ul>
      </div>
      <div className={LoginStyles['login-body-container']}>
        <div className={LoginStyles['login-body']}>
          <div>Picture</div>
          <form className={LoginStyles['login-form']}>
            <input type='text'></input>
            <label>Email</label>
            <input type='text'></input>
            <label>Password</label>
            <button>Login</button>
          </form>
        </div>
      </div>
      {/* <button onClick={fetchExampleMessage}> Click this button to show message</button>
      {message && <p>This is my message: {message}</p>} */}
      <div className={LoginStyles['login-footer']}>Footer</div>
    </div>
  )
};

// Explanation : Only apply the memo command when exporting your component if you are using variables that will constantly refresh or change such as useStates etc.
export default LoginPage