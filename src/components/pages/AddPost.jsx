import styled from "styled-components";
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom";
import { v4 as generateId } from "uuid";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import PostsContext from "../../contexts/PostsContext";




const values = {
    postText: '',
    tags: '',
}

let postShema = Yup.object({
    postText: Yup.string()
        .min(5, 'Minimum length of post is 5 characters.')
        .max(200, "Maximum length of post is 200 characters")
        .required('Enter post text.'),
    tags: Yup.string()
        .required('Enter a tag.')
});



const AddPost = () => {

    const { currentUser } = useContext(UsersContext)
    const { setPosts, postsActionTypes } = useContext(PostsContext)
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: values,
        validationSchema: postShema,
        onSubmit:(values) => {
            let dateToday = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
            const tagArray = values.tags.split(',')
            const newPost = {
                ...values,
                userId: currentUser.id,
                id: generateId(),
                date: dateToday,
                tags: tagArray
            }
            console.log(newPost)
            setPosts({
                type: postsActionTypes.add,
                data: newPost
            })
            navigate('/')
        }
    });
    return ( 

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="postText">Post text: </label>
                    <textarea type="text" 
                    id="postText" name="postText"
                    value={formik.values.postText}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                {
                    formik.touched.postText && formik.errors.postText &&
                    <p>{formik.errors.postText}</p>
                }
                <div>
                    <label htmlFor="tags">Add a tag:</label>
                    <input type="text" 
                    id="tags" name="tags"
                    value={formik.values.tags}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <span>At least 1 tag, use comma to seperate different tags</span>
                {
                    formik.touched.tags && formik.errors.tags &&
                    <p>{formik.errors.tags}</p>
                }
                <input type="submit" value='Post'/>
            </form>

     );
}
 
export default AddPost;