// 🐨 you'll need to import React and ReactDOM up here
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'
// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'
import '@reach/dialog/styles.css'

const LoginForm = ({onSubmit, buttonText}) => {
  const handleSubmit = event => {
    event.preventDefault()
    const {username, password} = event.target.elements
    onSubmit({username: username.value, password: password.value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
const App = () => {
  const [openModal, setOpenModal] = useState('none')
  const close = () => setOpenModal('none')

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={event => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={event => setOpenModal('register')}>Register</button>
      </div>

      <Dialog
        aria-label="Login form"
        isOpen={openModal === 'login'}
        onDismiss={close}
      >
        <div>
          <button onClick={close}>Close</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>

      <Dialog
        aria-label="Register form"
        isOpen={openModal === 'register'}
        onDismiss={close}
      >
        <div>
          <button onClick={close}>Close</button>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </div>
  )
}
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked
const root = document.getElementById('root')
ReactDOM.render(<App />, root)
// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
