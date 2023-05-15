import React, { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import PostCard from "../PostCard";
import styled from "styled-components";
import PostsContext from '../../contexts/PostsContext'

const StyledMain = styled.main`
min-height: calc(100vh - 100px - 75px - 4rem);
padding: 2rem;
> h1 {
    text-align: center;
    margin-top: 0;
}
> div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}
`;

const Home = () => {

    const {posts} = useContext(PostsContext);
    const { users } = useContext(UsersContext);

    return (
        <>
            {
                posts.lengh === 0 ? 
                <h1>No posts .</h1> :
                <>
                    <h1>Posts:</h1>
                    <div>
                        {
                            posts.map(post =>{
                                const userById = users.find(user => user.id === post.userId)
                                return <PostCard 
                                    key={post.id}
                                    post={post}
                                    userName={userById.userName}
                                />
                            }
                            )
                        }
                    </div>
                </>
            }
    </> );
}
 
export default Home;