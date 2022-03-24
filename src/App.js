
import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SkeletonPage from './components/pages/SkeletonPage'
import Spinner from './components/spinner/Spinner.js';
const MainPage = lazy(() => import('./components/pages/MainPage.js'));

const Galary = lazy(() => import('./components/galary/Galary.js'));
function App() {
  
  return (
    <Router>
      <div className="App">
         <Suspense fallback={<Spinner/>}>
           <Routes>
                <Route  path='/' element={<MainPage/>}/>
                <Route  path='/galary' element={<Galary/>}/>
                <Route  path='*' element={<SkeletonPage/>}/>
           </Routes>  
         </Suspense>
      </div>
    </Router>
   
  );
}

export default App;
