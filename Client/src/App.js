import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import PostDetails from './Components/PostDetails';

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetails />} />

      </Routes>
    </>
  )
}

export default App;
