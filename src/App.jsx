import React from 'react'
import Header from './components/Challenge01/Header/Header'
import Footer from './components/Challenge01/Footer/Footer'
import MainContent from './components/Challenge01/MainContent/MainContent'
import JSXRules from './components/Challenge02/JSXRules'
import Greeting from './components/Challenge03/Greeting'
import ProductInfo from './components/Challenge03/ProductInfo'
import UserList from './components/Challenge04/UserList'
import ProductList from './components/Challenge04/ProductList'

//function will start as function App(){ return (<h1>Hi</h1>) }
//Arrow function as below
const App = () => {

  return (
    <>
      {/* Challenge 01 - Use of react (Understanding the power of components) */}
      {/* <Header />
      <MainContent />
      <Footer /> */}

      {/* Challenge 02 - What is JSX and its rules */}
      {/* <JSXRules /> */}

      {/* Challenge 03 - Expressions in JSX */}
      {/* <Greeting />
      <ProductInfo /> */}

      {/* Challenge 04 - Lists */}
      <UserList />
      <ProductList />

    </>
  )
}

export default App