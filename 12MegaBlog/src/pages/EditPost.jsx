import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost

//FLow:
// Example Flow

// 1️⃣ You click “Edit Post” on some post with ID = xyz123.
// 2️⃣ React Router navigates to /edit-post/xyz123.
// 3️⃣ useParams() extracts slug = xyz123.
// 4️⃣ useEffect calls appwriteService.getPost('xyz123').
// 5️⃣ Response returns:

// {
//   $id: "xyz123",
//   title: "My first post",
//   content: "<p>Hello world!</p>",
//   featuredImage: "file123",
//   status: "active"
// }


// 6️⃣ State updates: setPosts(post)
// 7️⃣ React re-renders and now displays <PostForm post={post} />
// 8️⃣ PostForm shows the existing post data in the input fields, letting the user modify and save changes.