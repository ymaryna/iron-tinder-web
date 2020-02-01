import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import TinderService from '../../services/TinderService'

const Login = () => {
    const [ user, setUser ] = useState({
        data: {
            email: '',
            password: '',
          },
        error: false, 
        loading: false
    })

    const handleChange = (event) => {
        const { name, value } = event.target
    
        setUser({
          data: {
            ...user.data,
            [name]: value
          }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setUser({loading: true, error: false, data: user.data})

        console.log(user.data)

        // TinderService.login(user.data)
    }

    const errorClassName = user.error ? 'is-invalid' : ''

    return(
        <div className="Login">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                value={user.data.email}
                onChange={handleChange}
                autoComplete="off"
                name="email"
                type="email"
                className={`form-control ${errorClassName}`}
                id="email"
                placeholder="Enter email"
                />
            </div>

            <div className="form-group mb-5">
                <label htmlFor="password">Password</label>

                <input
                value={user.data.password}
                onChange={handleChange}
                name="password"
                type="password"
                className={`form-control ${errorClassName}`}
                id="password"
                placeholder="Password"
                />
            </div>
                
            <button
                type="submit"
                className="btn btn-block btn-primary mb-3"
                disabled={user.loading}
            >
                Log in
            </button>

            <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

export default Login