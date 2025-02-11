import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainContent from './components/MainContent/MainContent'

//function will start as function App(){ return (<h1>Hi</h1>) }
//Arrow function as below
const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App