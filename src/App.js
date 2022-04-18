import './App.css';
import CounterView from './views/counter/CounterView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from './views/products/Products';
import ProductDetails from "./views/productdetails/ProductDetails";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Erorr from "./views/erorr/Erorr";
import Todo from './components/todoList/Todo'
import Forms from './components/form/Form';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/counter" element={<CounterView/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/products/:id" element={<ProductDetails/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path='/todo' element={<Todo/>} />
                <Route path="/form" element={<Forms />} />
                <Route path="*" element={<Erorr/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
