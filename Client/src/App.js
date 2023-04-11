// import { Routes, Route, useNavigate } from 'react-router-dom';
// import React, { createContext, useEffect, useState } from 'react';
// import Home from './Components/Home';
// import PostDetails from './Components/PostDetails';
// import Login from './Components/Login';
// import Signup from './Components/Signup';

// const AuthenticationContext = createContext();


// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     const local = localStorage.getItem("TOKEN");
//     if (local) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }
//   const handleSignUp = () => {
//     const local = localStorage.getItem("TOKEN");
//     if (local) {
//       setIsAuthenticated(true)
//     } else {
//       setIsAuthenticated(false);
//     }
//   }

//   useEffect(() => {
//     handleSignIn();
//   }, []);

//   useEffect(() => {
//     handleSignUp()
//   }, []);

//   return (
//     <>
//       <AuthenticationContext.Provider value={isAuthenticated}>
//         {isAuthenticated ? (
//           <>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/post/:postId" element={<PostDetails />} />
//               <Route path='/auth/login' element={<Login />} />
//               <Route path='/auth/signup' element={<Signup />} />
//             </Routes>
//           </>
//         ) : (
//           <Routes>
//             <Route path='/' element={<Login onSignIn={handleSignIn} />} />
//             <Route
//               path='auth/signup/'
//               element={<Signup onSignUp={handleSignUp} />}
//             />
//           </Routes>
//         )}
//       </AuthenticationContext.Provider>
//     </>
//   );
// }


// export default App;
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

export default App;