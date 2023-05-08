import React from 'react'
import MyInput from './UI/MyInput'
import { useState } from 'react'
import MyButton from './UI/MyButton/MyButton'

const Create = ({ create }) => {

    const [post, setPosts] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPosts({ title: '', body: '' })
    }

    return (
        <div className='create'>
            <div className='create__name'>
                <MyInput
                    value={post.title}
                    onChange={e => setPosts({ ...post, title: e.target.value })}
                    type='text'
                    placeholder='Введите название задачи'
                />
            </div>
            <div className='create__body'>
                <MyInput
                    value={post.body}
                    onChange={e => setPosts({ ...post, body: e.target.value })}
                    type='text'
                    placeholder='Введите описание задачи'
                />
            </div>
            <div className='create__btns'>
                <MyButton onClick={addNewPost}>Добавить</MyButton>
            </div>
        </div>
    )
}

export default Create