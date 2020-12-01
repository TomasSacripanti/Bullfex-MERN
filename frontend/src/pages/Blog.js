import React, { Component } from 'react';
import Header from '../components/Header';
import BlogSection from '../components/BlogSection';

export class Blog extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <BlogSection></BlogSection>
            </>
        )
    }
}

export default Blog;
