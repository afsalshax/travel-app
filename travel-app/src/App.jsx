import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Activitiesdetails from './pages/activities-details'
import Activity from './pages/Activity'
import Blogdetails from './pages/blog-details'
import Header from './components/Header'
import Footer from './components/Footer'
import Servicedetails from './pages/Service-details'
import Blog from './pages/blog'
import Service from './pages/Service'
import Faq from './pages/faq'
import Contact from './pages/contact'
import Destination from './pages/Destination'
import Destinationdetails from './pages/Destination-details'
import Tourdetails from './pages/tour-details'
import Tour from './pages/Tour'
import Tourguiderdetails from './pages/Tour-guider-details'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/activities-details' element={<Activitiesdetails />}></Route>
          <Route path='/activity' element={<Activity />}></Route>
          <Route path='/blog-details' element={<Blogdetails />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/service-details' element={<Servicedetails />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/destination' element={<Destination />}></Route>
          <Route path='/destination-details' element={<Destinationdetails />}></Route>
          <Route path='/tour-details' element={<Tourdetails />}></Route>
          <Route path='/tour' element={<Tour />}></Route>
          <Route path='/tour-guider-details' element={<Tourguiderdetails />}></Route>

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
