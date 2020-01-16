import React,{useState,useEffect} from 'react';
import axios from "axios"
import Posts from "./components/Posts"
import './App.css';
import Paginate from "./components/Paginate"

function App() {
  // initial state of the posts we are fetching is a blank array
  const [posts, setPosts]= useState([])
  // since we are fetching data from an api we need a loader 
  const [loading, setLoading]= useState(false)
  // for pagination, we require it to always start at page 1
  const[currentPage, setCurrentPage]= useState(1)
  // the number of posts we want per page
  const [postsPerPage, setPostsPerPage]=useState(10)

  // make request to api
  useEffect(()=>{
   const fetchPosts=async()=>{
    //  set loading to true until data is fetched from api
     setLoading(true);
     const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
     setPosts(res.data)
    //  when data has been successfully fetched we set laoding back to false
    setLoading(false)
   }
  //  call the function fetchPosts we created above
   fetchPosts()
  },[])


  // get the number of posts(currentpage=1xpostsperpage=10)
  // this give the index of last post in each page(1st page=10, second page= 20.....)
  const indexOfLastPost =currentPage*postsPerPage 

  // gets the index of first post in each page(page1=1, page2=11....)
  const indexOfFirstPost = indexOfLastPost-postsPerPage

  // could not think of a comment for this
  const currentPosts= posts.slice(indexOfFirstPost,indexOfLastPost)


  // change page by clicking on the paginate links
  const paginate=(pageNumber)=>setCurrentPage(pageNumber)
  return (
    <div className="container mt-5">
     <h1 className="text-primary mb-3">My Posts</h1>
     <Posts posts={currentPosts} loading={loading}/>
     <Paginate postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
