// src/components/NewsFeed.js
/*
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function NewsFeed() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const { currentUser } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    setPosts([...posts, { user: currentUser.email, text: content }]);
    setContent("");
  }

  return (
    <div>
      <h2>News Feed</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <p><strong>{post.user}:</strong> {post.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
*/

// src/components/NewsFeed.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { TextField, Button, Typography, Box } from "@mui/material";
import UserProfiles from "./UserProfiles";

export default function NewsFeed() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const { currentUser } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    setPosts([...posts, { user: currentUser.email, text: content }]);
    setContent("");
  }

  return (
    <Box display="flex" justifyContent="space-between">
      <Box width="70%">
        <Typography variant="h4" component="h2">
          News Feed
        </Typography>
        <div>
          {posts.map((post, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body1">
                <strong>{post.user}:</strong> {post.text}
              </Typography>
            </Box>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="What's on your mind?"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Post
          </Button>
        </form>
      </Box>
      <Box width="25%">
        <UserProfiles />
      </Box>
    </Box>
  );
}
