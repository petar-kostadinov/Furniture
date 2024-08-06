import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./components/home/Home"
import AboutBtn from "./components/about-btn/AboutBtn"
import CatalogBtn from "./components/catalog-btn/CatalogBtn"
import CategoriesBtn from "./components/categories-btn/CategoriesBtn"
import ContactBtn from "./components/contact-btn/ContactBtn"
import LoginForm from "./components/login/Login"
import RegisterForm from "./components/register/Register"
import FurnitureDetails from "./components/furniture-details/FurnitureDetails"
import Footer from "./components/footer/Footer"
import { AuthContext } from "./contexts/AuthContexts"
import AddNew from "./components/add/AddNew"
import Edit from "./components/edit/Edit"
import Logout from "./components/logout/Logout"



function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {

    localStorage.setItem('accessToken', state.accessToken);

    setAuthState(state);
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  }

  return (
    <AuthContext.Provider value={contextData}>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutBtn />} />
          <Route path='/catalog' element={<CatalogBtn />} />
          <Route path='catalog/furnitures/:furnitureId/details' element={<FurnitureDetails />} />
          <Route path='/categories' element={<CategoriesBtn />} />
          <Route path='/contact' element={<ContactBtn />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/add-new' element={<AddNew />} />
          <Route path='/catalog/furnitures/:furnitureId/details/edit' element={<Edit />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </AuthContext.Provider>
  )
}

export default App
