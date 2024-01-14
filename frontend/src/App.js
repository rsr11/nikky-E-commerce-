
import React, { useState } from 'react';
import {Route,Routes} from "react-router-dom";
import './App.css';
import LoadingBar from 'react-top-loading-bar';

// disable eslint
import SetProductState from './Context/ProductContext/SetProductState';
import Alert from './Components/SmallComponents/Alert';
import AddRemoveState from './Context/AddRemove/AddRemoveState';
import ShoppingPage from './Components/Pages/ShoppingPage';
import CheckOutPage from './Components/Pages/CheckOutPage';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
const ProductDetail = React.lazy( ()=>import("./Components/Pages/ProductDetail"));
const SignUp = React.lazy(()=>import('./Components/Auth/SignUp'));
const Login = React.lazy(()=> import("./Components/Auth/Login"))
const CoverPage = React.lazy(()=>  import('./Components/Pages/CoverPage'));



function App() {

  const[progress, setProgress] = useState(0);

  return (
    <div className='' >
    <LoadingBar
        color={'#3CCF4E'}
        height={5}

        progress={progress}
      />
    <SetProductState>
    <AddRemoveState>
    
     <Alert/>
        <React.Suspense fallback={<h1>Loading....</h1>} >
        <div className={`max-w-[90vw] sm:max-w-[80vw] mx-auto`}>
        <Header/>
      <Routes>
        <Route path={`/men/:ProductName`} loader={<h1>Wait...</h1>} element={<ProductDetail setProgress={setProgress} />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<CoverPage/>} />
        <Route path='/men'  element={<ShoppingPage setProgress={setProgress} />} />
        <Route path='*' element={<h1>Page not found</h1>} />
        <Route path='/checkout' element={<CheckOutPage/>}/>
      </Routes>
      </div>
      <Footer/>
        </React.Suspense>
    </AddRemoveState>
    </SetProductState>
    </div>
  );
}

export default App;
