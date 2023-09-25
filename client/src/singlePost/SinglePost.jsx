import "./singlepost.css"
export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
              alt="" 
              className="singlePostImg"
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Spython</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nostrum rem, quae dignissimos odio temporibus vitae corrupti similique, recusandae, 
                illo quos earum unde ipsa ducimus placeat saepe adipisci aspernatur doloremque iste?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nostrum rem, quae dignissimos odio temporibus vitae corrupti similique, recusandae, 
                illo quos earum unde ipsa ducimus placeat saepe adipisci aspernatur doloremque iste?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nostrum rem, quae dignissimos odio temporibus vitae corrupti similique, recusandae, 
                illo quos earum unde ipsa ducimus placeat saepe adipisci aspernatur doloremque iste?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nostrum rem, quae dignissimos odio temporibus vitae corrupti similique, recusandae, 
                illo quos earum unde ipsa ducimus placeat saepe adipisci aspernatur doloremque iste?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nostrum rem, quae dignissimos odio temporibus vitae corrupti similique, recusandae, 
                illo quos earum unde ipsa ducimus placeat saepe adipisci aspernatur doloremque iste?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nostrum rem, quae dignissimos odio temporibus vitae corrupti similique, recusandae, 
                illo quos earum unde ipsa ducimus placeat saepe adipisci aspernatur doloremque iste?
            </p>
        </div>
    </div>
  )
}
