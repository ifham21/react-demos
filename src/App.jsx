import React from 'react'
import Header from './components/Challenge01/Header/Header'
import Footer from './components/Challenge01/Footer/Footer'
import MainContent from './components/Challenge01/MainContent/MainContent'
import JSXRules from './components/Challenge02/JSXRules'
import Greeting from './components/Challenge03/Greeting'
import ProductInfo from './components/Challenge03/ProductInfo'
import UserList from './components/Challenge04/UserList'
import ProductList from './components/Challenge04/ProductList'
import Person from './components/Challenge05/Person'
import Product from './components/Challenge05/Product'
import Card from './components/Challenge05/Card'
import Weather from './components/Challenge06/Weather'

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
      {/* <UserList />
      <ProductList /> */}

      {/* Challenge 05 - Props */}
      {/* <Person name = "Ahmed" age = {25} />
      <Product name="Laptop" price = {1200} /> 
      <Card>
        <h2>Card 1</h2>
        <p>content of Card 1</p>
      </Card>
      <Card>
        <h2>Card 2</h2>
        <p>content of Card 2</p>
      </Card> */}

      {/* Challenge 06 - Conditional Rendering */}
      <Weather temperature={1} />

    </>
  )
}

export default App