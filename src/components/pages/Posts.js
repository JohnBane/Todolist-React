import { useState, useEffect } from 'react'

import PostList from '../PostList'
import Create from '../Create'
import PostFilter from '../PostFilter'
import MyModal from '../UI/MyModal'
import MyButton from '../UI/MyButton/MyButton'
import { usePosts } from '../hooks/usePosts'
import PostService from '../API/PostService'
import MyLoader from '../UI/MyLoader'
import { useFetching } from '../hooks/useFetching'

function Posts() {

    const [posts, setPosts] = useState([])
    const [visible, setVisible] = useState(false)
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


    const [fetchPosts, isLoading, error] = useFetching(async () => {
        const response = await PostService.getAll()
        setPosts(response.data)
    })

    useEffect(() => {
        fetchPosts();
    }, [])


    const createNewPost = (newPost) => {
        setPosts([...posts, newPost])
        setVisible(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App container">
            <MyButton onClick={() => setVisible(true)} style={{ width: '110px' }} >Создать пост</MyButton>
            <MyModal visible={visible} setVisible={setVisible} >
                <Create create={createNewPost} />
            </MyModal>
            <hr style={{ margin: "15px 0" }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {error &&
                <h1 style={{ textAlign: 'center', color: 'red' }}>Произошла ошибка ${error}</h1>
            }
            {isLoading
                ? <MyLoader />
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} create={createNewPost} key={posts.id} />
            }
        </div >
    );
}

export default Posts;
