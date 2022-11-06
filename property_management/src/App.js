/**
 * Import the dependencies needed to run the app
 * Here we need react and useState in order to uodate the rerenders
 * import bootstrap for styling as well
 */
 import './App.css';
 import React from 'react'; 
 import {Navbar, Nav, Container} from 'react-bootstrap'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {
   BrowserRouter,
   Routes,
   Route,
   Link
 } from "react-router-dom";
 import ViewProperty from './components/ViewProperty';
 import Home from './components/Home';
 import SignOut from './components/SignUp';
 import SearchBar from './components/SearchBar';
 import Reviews from './components/Reviews';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
 
 function App() {
   return (
     /**
      * Create a navbar to navigate to each functionality seemlessly 
      */
     <BrowserRouter>
       <div className="App">
         <>
         {/**Create a callapsable navbar */}
           <Navbar bg="dark" variant="dark" expand="lg">
             <Container fluid>
               {/**Set up the name of the nav bar */}
             <Navbar.Brand>Property Management</Navbar.Brand>
             <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
               <Nav 
                   className="me-auto my-2 my-lg-0"
                   style={{ maxHeight: '100px' }}
                   navbarScroll
               >
                 <Nav.Link as={Link} to="/">Home</Nav.Link>
                 <Nav.Link as={Link} to="/popular">Search property</Nav.Link>
                 <Nav.Link as={Link} to="/popular">ViewProperty</Nav.Link>
                 <Nav.Link as={Link} to="/search">Reviews</Nav.Link>
                 <Nav.Link as={Link} to="/signin">Sign out</Nav.Link>
               </Nav>
             </Navbar.Collapse>
             </Container>
           </Navbar>
         </>
 
         <div>
           <Routes>
             {/**Set up all of the routes to navigate to the proper pages */}
             {/**Navigate to the home page*/}
             <Route path="/" element={<Home/>}/>
             <Route path="/popular" element={<SearchBar/>}/>
             <Route path="/search" element={<ViewProperty/>}/>
             <Route path="/critics" element={<Reviews/>}/>
             <Route path="/signin" element={<SignIn/>}/>
             <Route path="/signout" element={<SignUp/>}/>
             <Route path="/signup" element={<SignOut/>}/>
           </Routes>
         </div>
       </div>
     </BrowserRouter>
   );
 }
 
 export default App;