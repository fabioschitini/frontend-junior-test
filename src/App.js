import React from 'react';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

export default function App() {
  // 👇️ with React router
  const location = useLocation();

  console.log('hash', location.hash);
  console.log('pathnameaaaa', location.pathname);
  console.log('search', location.search);

  return (
    <div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}