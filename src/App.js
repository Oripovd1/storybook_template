import { useState } from 'react'
import './App.css'
import { Button } from './stories/Button/Button'
import Input from './stories/Input/Input'

function App() {
  const [values, setValues] = useState({
    name: 'blablabla',
    password: 'Doni1234',
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('values => ', values)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={handleSubmit}>
          <Input
            id='name'
            name='name'
            type='text'
            label='Login'
            value={values.name}
            boxStyles={{ marginBottom: 16 }}
            onChange={handleChange}
          />
          <Input
            id='password'
            name='password'
            type='password'
            label='Password'
            value={values.password}
            boxStyles={{ marginBottom: 16 }}
            onChange={handleChange}
          />
          <Button primary label='Submit' size='large' type='submit' />
        </form>
      </header>
    </div>
  )
}

export default App
