import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from './UI/MyButton/MyButton'

const PostItem = ({ post, remove, number }) => {
    const navigate = useNavigate();
    return (
        <div className='todo'>
            <div className='todo__item'>
                <div className='todo__title' key={post.id}><span>{`${number}. `}</span>{post.title}</div>
                <div className='todo__body'>{post.body}</div>
                <div className='todo__desc'>{post.description}</div>
            </div>
            <div className='todo__btns'>
                <div className='todo__open'>
                    <MyButton
                        onClick={() => navigate(`/posts/${post.id}`)}>
                        Подробнее...
                    </MyButton>
                </div>
                <div className='todo__delete'>
                    <MyButton onClick={() => remove(post)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div >
    )
}

export default PostItem