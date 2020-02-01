import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Register = () => {

    
    const [ user, setUser ] = useState({
        data: {
            name: '',
            email: '',
            password: '',
            avatar: null,
            preferences_genre: '',
            preferences_distance: '',
            preferences_age_min: '',
            preferences_age_max: '',
            age: '',
            genre: '',
            bio: '',
        },
        error: false, 
        loading: false,
        success: false
    })

    const handleChange = (event) => {
        const { name, value, files } = event.target
    
        setUser({
          data: {
            ...user.data,
            [name]: files ? files[0] : value
          }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setUser({loading: true, error: false, data: user.data})

        console.log(user.data)

        // TinderService.register(user.data)
    }
    
    if (user.success) {
        return <Redirect to="/login"/>
    }

    const errorClassName = user.error ? 'is-invalid' : ''

    return (
        <div className="Register">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                    value={user.data.name}
                    onChange={handleChange}
                    autoComplete="off"
                    name="name"
                    type="text"
                    className={`form-control ${errorClassName}`}
                    id="name"
                    placeholder="Enter name"
                />
                </div>

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

                <div className="form-group">
                <label htmlFor="avatar">Avatar</label>

                <input
                    onChange={handleChange}
                    name="avatar"
                    type="file"
                    className={`form-control ${errorClassName}`}
                    id="avatar"
                />
                </div>

                <div className="form-group">
                    <label htmlFor="preferences_genre">Genre preferences</label>
                    <select className="form-control" name="preferences_genre" value={user.data.preferences_genre} onChange={handleChange}>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Both'>Both</option>
                    </select>
                </div>

                <div className="form-group">
                <label htmlFor="distance">Distance</label>

                <input
                    value={user.data.preferences_distance}
                    onChange={handleChange}
                    autoComplete="off"
                    name="preferences_distance"
                    type="number"
                    className={`form-control ${errorClassName}`}
                    id="preferences_distance"
                    placeholder="Enter distance"
                />
                </div>

                <div className="form-group">
                <label htmlFor="age_min">Age min</label>

                <input
                    value={user.data.preferences_age_min}
                    onChange={handleChange}
                    autoComplete="off"
                    name="preferences_age_min"
                    type="number"
                    className={`form-control ${errorClassName}`}
                    id="preferences_age_min"
                    placeholder="Enter age_min"
                />
                </div>

                <div className="form-group">
                <label htmlFor="age_max">Age max</label>

                <input
                    value={user.data.preferences_age_max}
                    onChange={handleChange}
                    autoComplete="off"
                    name="preferences_age_max"
                    type="number"
                    className={`form-control ${errorClassName}`}
                    id="preferences_age_max"
                    placeholder="Enter age_max"
                />
                </div>

                <div className="form-group">
                <label htmlFor="age">Age</label>

                <input
                    value={user.data.age}
                    onChange={handleChange}
                    autoComplete="off"
                    name="age"
                    type="number"
                    className={`form-control ${errorClassName}`}
                    id="page"
                    placeholder="Enter age"
                />
                </div>

                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <select className="form-control" name="genre" value={user.data.genre} onChange={handleChange}>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </div>

                <div className="form-group">
                <label htmlFor="Bio">Bio</label>

                <textarea
                    rows="4"
                    value={user.data.bio}
                    onChange={handleChange}
                    autoComplete="off"
                    name="bio"
                    className={`form-control ${errorClassName}`}
                    id="bio"
                    placeholder="Enter bio"
                />
                </div>

                <button
                type="submit"
                className="btn btn-block btn-primary mb-3"
                disabled={user.loading}
                >
                Sign up
                </button>
            </form>
        </div>
    )
}

export default Register