import styled from "styled-components";
import {v4 as generateId} from 'uuid'

const PostCard = ({post, userName}) => {
    return (  
        <>
            <div>
                <h3>{userName}</h3>
                <p>{post.date}</p>
            </div>
            <p>{post.postText}</p>
            <div>
                {
                    post.tags.map((tag, i) =>{
                        return <button key={generateId()}>{tag}</button>
                    })
                }
            </div>
            </>
    );
}
 
export default PostCard;