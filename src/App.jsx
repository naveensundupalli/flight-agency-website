import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Subscriber from './Components/Subscribers/Subscriber';
import Lounge from './Components/Lounge/Lounge';
import Search from './Components/Search/Search';
import Info from './Components/Info/Info';
import Support from './Components/Support/Support';
import Footer from './Components/Footer/Footer';
import Travellers from './Components/Travellers/Travellers';



const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travellers/>
      <Subscriber/>
      <Footer/>

    </>
  )
}

export default App;