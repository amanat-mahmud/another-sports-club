import React from 'react';
import './Blog.css'
const Blog = (props) => {
    const {ques, ans} = props;
    return (
        <div className='blog'>
            <h1>{ques}</h1>
            <p>{ans}</p>
        </div>
    );
};

export default Blog;