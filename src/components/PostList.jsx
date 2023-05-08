import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, remove }) => {

    if (!posts.length) {
        return (
            <div style={{ textAlign: 'center', fontSize: "19px" }}>Посты не найдены</div>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Todolist</h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} post={post} key={post.id} number={index + 1} />
            )}
        </div>
    )
}

export default PostList