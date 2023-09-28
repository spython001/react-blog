/* eslint-disable react/prop-types */
import "./post.css"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Post({post}) {
  const PF = axios.post("http://localhost:5000/images/")
  return (
    <div className="post">
      { post.photo && (
        <img
          className="postImg"
          src={PF+post.photo} 
          alt="" 
        />
      )}
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map(c=>(
                <span className="postCat" key={c.name}>{c}</span>
              ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
              <span className="postTitle">{ post.title }</span>
            </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
          {post.desc}
        </p>
    </div>
  )
}
