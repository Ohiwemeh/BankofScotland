import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}
function About() {
  return <h1>About Page</h1>;
}
function NotFound() {
  return <h1>404 Page Not Found</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

