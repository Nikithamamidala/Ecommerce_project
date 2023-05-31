import './Navbar.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import Product from '../Containers/Product';
import Admin from '../Containers/Admin';
import CustomerDashboard from '../Containers/customerDashboard';
import Productview from '../Containers/Productview';
import Cart from '../Containers/Cart';
import { useSelector } from 'react-redux';


function Navbar() {
    var appState = useSelector(appState => appState);
    var role;
    var isloggedIn;
    if(appState.isUserLoggedIn.value!="notLoggedIn"){
        appState.isUserLoggedIn.then(data=>{
            console.log("data",data);
            if(data.value == "loggedIn"){
               isloggedIn = true;
               role=data.role;
            }
           
        })
        
    }
    else{
        isloggedIn=false;
    }
    
    console.log("Navbar appState",appState);
    return (
        <>
            <Router>
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">E-Commerce</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="/home">Home</a></li>
        <li className="active"><a href="/login">Login</a></li>
        <li className="active"><a href="/register">Register</a></li>
        <li className="active"><a href="/Product">Product</a></li>
        <li className="active"><a href="/logout">Logout</a></li>
        <li className="active"><a href="/cart">Cart</a></li>
        
      </ul>
     
    </div>
  </div>
</nav>

                {/* <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/login">Login</Link>
                <Link className="link" to="/register">Register</Link>
             <Link className="link" to="/Product">Product</Link>
             <Link className="link" to="/logout">Logout</Link> */}
                <Routes>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/Product" element={<Product></Product>}></Route>
                    <Route path="/admin" element={<Product></Product>}></Route>
                    <Route path='/customer' element={<CustomerDashboard></CustomerDashboard>}></Route>
                    <Route path="/productview" element={<Productview></Productview>}></Route>
                    <Route path="/cart" element={<Cart></Cart>}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default Navbar;