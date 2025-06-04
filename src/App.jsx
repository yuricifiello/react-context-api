import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostsProvider } from "./contexts/PostsContext";
import PostsPage from "./pages/PostsPage";
import PostDetail from "./pages/PostDetail";

export default function App() {
  return (
    <BrowserRouter>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </PostsProvider>
    </BrowserRouter>
  );
}
