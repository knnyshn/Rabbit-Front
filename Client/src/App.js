import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import PostDetails from './Components/PostDetails';
import CreatePost from './Components/CreatePost';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burrow/:burrow/:postId/" element={<PostDetails />} />
        <Route path="/CreatePost" element={<CreatePost />} />
      </Routes>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <Routes>

//       </Routes>
//     </>
//   )
// }

export default App;
