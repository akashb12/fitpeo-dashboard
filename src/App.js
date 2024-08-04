import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Shared/Home';
import DashBoard from './Components/DashBoard';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route index element={<DashBoard />} />
            <Route path='products' element={<UrlNotSet />} />
            <Route path='orders' element={<UrlNotSet />} />
            <Route path='customers' element={<UrlNotSet />} />
            <Route path='transactions' element={<UrlNotSet />} />
            <Route path='login' element={<UrlNotSet />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const UrlNotSet = ()=> {
  return (
    <div className='text-white'>
      This is dummy page
    </div>
  )
}
