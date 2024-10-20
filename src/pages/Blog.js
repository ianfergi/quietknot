import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideNav from "../components/sideNav";
import { detectMob } from "../utils";
import ScreenContainer, { VARIANT } from "../components/screenContainer";
import yaml from 'js-yaml'; 
import Masonry from 'masonry-layout';

const Container = styled.div`
  display: block;
`;

const Card1 = styled(ScreenContainer)`
  width: 200px; /* Set width for masonry */
  margin-bottom: 20px; /* Space between cards */

  @media (max-width: 724px) {
    width: 97%;
  }
`;

const Screen = styled.div`
  padding: 24px;
  @media (min-width: 724px) {
    padding-left: 10vw;
    padding-right: 10vw;
  }
`;

// Function to format content with a caret on lines with text, and skip empty lines
const formatContentForRendering = (content) => {
  const lines = content.split('\n');
  return lines.map((line) => {
    // Only add ">" to lines that have content; skip empty lines
    if (line.trim() !== '') {
      return `> ${line.trim()}`; // Add caret and trim unnecessary spaces
    } else {
      return ''; // Return empty string for empty lines (no caret)
    }
  }).join('\n'); // Join the lines back together with newlines
};

const Blog = () => {
    const isMobile = detectMob();

    const [blogs, setBlogs] = useState([]);

    const onClose = () => (key) => {
      // Filter out the blog with the given key
      const updatedBlogs = blogs.filter(blog => blog.key !== key);
      setBlogs(updatedBlogs); // Update the state
    };

    useEffect(() => {
      // Fetch the YAML file
      fetch('/blog.yaml')
        .then((response) => response.text())
        .then((text) => {
          const parsedData = yaml.load(text);
          
          // Add a key to each blog item using map
          const blogsWithKeys = parsedData.map((blog, index) => ({
            ...blog,
            key: index // Or any other way to generate unique keys
          }));
          
          setBlogs(blogsWithKeys); // Set blogs with keys in state
        })
        .catch((error) => console.error('Error loading the blogs:', error));
    }, []);

    useEffect(() => {
      const grid = document.querySelector('.grid-container');
      new Masonry(grid, {
        columnWidth: '.card',
        gutter: 20,
        fitWidth: true,
        resize: true,
        initLayout: true,
      });
    }, [blogs])


    return (
        <>  
            <SideNav/>
            <Screen>
              <Container className={'grid-container'} isMobile={isMobile} >
                {blogs.map((blog, index) => (
                  <Card1 key={index} onClose={onClose(blog?.key)} className={'card'} variant={VARIANT.V2} title={blog?.title} size={blog?.size} isDraggable={false}>
                    {blog?.date}
                    <br />
                    <br />
                    {formatContentForRendering(blog?.content)}
                    </Card1>
                ))}
              </Container>
            </Screen>
        </>
    );
};

export default Blog;