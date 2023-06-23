import React,{useState, useEffect} from "react";
import axio from "axios";

const PostList= () => {
    const [post, setPosts] =useState({});

    const fetchPosts =async () => {
        const res = await axio.get("http://localhost:4000/posts");
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map((post) => {
        return(
            <div
                className="card"
                style={{width: "30%", marginBottom: "20px"}}

                key={post.id}>


                <div className="card-body" className="card-body">
                    <h3>{post.title}</h3>
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    );
};

export default PostList;