import './App.css';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import Header from './header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
		<div className="App">

			<Routes>	
				<Route exact path='/' element={<Home />}/>	
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/login' element={<Login />} />
			</Routes>

		</div>

	</Router>
    
  );
}

export default App;
