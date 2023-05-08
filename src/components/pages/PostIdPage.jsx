import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import MyLoader from '../UI/MyLoader'
import MyButton from '../UI/MyButton/MyButton'

const PostIdPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchComments, isCommentLoading, commenterror] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Открыли страницу с ID : {params.id}</h1>
            {error &&
                <h1 style={{ textAlign: 'center', color: 'red' }}>Произошла ошибка {error}</h1>
            }
            {commenterror &&
                <h1 style={{ textAlign: 'center', color: 'red' }}>Произошла ошибка {commenterror}</h1>
            }
            {isLoading
                ? <MyLoader />
                :
                <div className='App container'>
                    <div className='todo__full'>
                        <div className='todo__title container'>
                            {post.title}
                        </div>
                        <div className='todo__body'>
                            {post.body}
                        </div>
                        <div className='todo__btns-back'>
                            <MyButton onClick={() => navigate('../')}>Назад</MyButton>
                        </div>
                    </div>

                </div>
            }
            <h1 style={{ textAlign: 'center' }}>Коментарии</h1>
            {isCommentLoading
                ? <MyLoader />
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id}>
                            <h4>{comm.email}</h4>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage