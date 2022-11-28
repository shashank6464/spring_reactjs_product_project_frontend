
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import AboutUs from './Components/Aboutus';
import AllProductsTable from './Components/AllProductsTable';
import ProductByNameTable from './Components/ProductByNameTable';
import ProductByCategoryTable from './Components/ProductByCatgeoryTable';
import ProductByPriceRangeTable from './Components/ProductByPriceRangeTable';
import AdminLogin from './Components/AdminLogin';
import AdminPage from './Components/AdminPage';
import AllProductsWithIdTable from './AdminOperations/AllProductsWithIdTable';


function App() {
  return (
    <div className="App" >
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home style={{ mt: "30px" }} />}/>
          <Route exact path="/about" element={<AboutUs/>}/>
          <Route exact path="/getAllProducts" element={<AllProductsTable/>}/>
          <Route exact path="/getProductByName" element={<ProductByNameTable/>}/>
          <Route exact path="/getProductByCategory" element={<ProductByCategoryTable/>}/>
          <Route exact path="/getProductByPriceRange" element={<ProductByPriceRangeTable/>}/>
          <Route exact path="/loginAsAdmin" element={<AdminLogin/>}/>
          <Route exact path="/adminPage" element={<AdminPage/>}/>
          <Route exact path="/getAllProductsWithId" element={<AllProductsWithIdTable/>}/>
         
        </Routes>


      </Router>

    </div>
  );
}

export default App;
