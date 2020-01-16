import React from 'react'

// this component will take props(posts,loading) from app component
 const Posts = ({posts, loading}) => {
    //  we first check if the posts array is already populated from the api
    if (loading){
        // we can add a spinner here
        return<h2>Loading...</h2>
    }
    // if loading is false that means the data is already populated therefore do the following
    return (
        <ul className="list-group mb-4">
            {/* map through the posts */}
            {posts.map(post =>(
                <li key={post.id} className="list-group-item">{post.title}</li>
            ))}

        </ul>
    )
}
export default Posts