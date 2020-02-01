import axios from 'axios'

const http = axios.create({ baseURL: process.env.REACT_APP_API_URL, withCredentials: true })

http.interceptors.response.use(
    response => response.data,
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear()
        window.location.assign('/login')
      }
  
      return Promise.reject(error)
    }
)

const register = (user) => http.post('/register', user)
const updateProfile = (user) => http.patch('/profile', user)
const profile = () => http.get('/profile')
const login = ({ mail, password }) => http.post('/login', { mail, password })
const logout = () => http.post('/logout')
const recommendations = () => http.get('/recommendations')
const like = (id) => http.post(`/users/${id}/like`)
const pass = (id) => http.post(`/users/${id}/pass`)
const matches = () => http.get('/matches')

export default {
    register,
    updateProfile,
    profile,
    login,
    logout,
    recommendations,
    like,
    pass,
    matches
}
