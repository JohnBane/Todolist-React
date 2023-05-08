import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Redirect from './assets/Redirect'
import About from './pages/About'
import Posts from './pages/Posts'
import PostIdPage from './pages/PostIdPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Posts />} />
            <Route path='/about' element={<About />} />
            <Route path='/404' element={<Redirect />} />
            <Route exact path='/posts/:id' element={<PostIdPage />} />
            <Route path='/*' element={<Navigate to='/404' />} />
        </Routes>
    )
}

export default AppRouter