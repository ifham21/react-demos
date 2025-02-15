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
import UserStatus from './components/Challenge06/UserStatus'
import Greetings from './components/Challenge06/Greetings'
import StyledCard from './components/Challenge07/StyledCard'
import ProfileCard from './components/Challenge07/ProfileCard'
import IconComponent from './components/Challenge07/IconComponent'
import Button from './components/Challenge08/Button'
import Copy from './components/Challenge08/Copy'
import Move from './components/Challenge08/Move'
import StateExp1 from './components/Challenge09/Explanation/StateExp1'
import StateExp2 from './components/Challenge09/Explanation/StateExp2'
import StateExp3 from './components/Challenge09/Explanation/StateExp3'
import StateExp4 from './components/Challenge09/Explanation/StateExp4'
import StateExp5 from './components/Challenge09/Explanation/StateExp5/StateExp5'
import Counter from './components/Challenge09/Challenges/Counter'
import TodoList from './components/Challenge09/Challenges/TodoList'
import Profile from './components/Challenge09/Challenges/Profile'
import ShoppingList from './components/Challenge09/Challenges/ShoppingList'
import PortalExp from './components/Challenge10/PortalExp'

//function will start as function App(){ return (<h1>Hi</h1>) }
//Arrow function as below
const App = () => {

  return (
    <>
      {/********************************************/}
      {/* Challenge 01 - Use of react (Understanding the power of components) */}
      {/* <Header />
      <MainContent />
      <Footer /> */}


      {/********************************************/}
      {/* Challenge 02 - What is JSX and its rules */}
      {/* <JSXRules /> */}


      {/********************************************/}
      {/* Challenge 03 - Expressions in JSX */}
      {/* <Greeting />
      <ProductInfo /> */}


      {/********************************************/}
      {/* Challenge 04 - Lists */}
      {/* <UserList />
      <ProductList /> */}


      {/********************************************/}
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


      {/********************************************/}
      {/* Challenge 06 - Conditional Rendering */}
      {/* Numerincal props and condition for it */}
      {/* <Weather temperature={1} />  */}
      {/* Boolean props and conditions for it */}
      {/* <UserStatus loggedIn = {true} isAdmin = {false} /> */}
      {/* Text props and coditions */}
      {/* <Greetings timeOfDay="afternoon" /> */}


      {/********************************************/}
      {/* Challenge 07 - Styling */}
      {/* installed react-icons for this section */}
      {/* <StyledCard />
      <br />
      <ProfileCard />
      <IconComponent /> */}


      {/********************************************/}
      {/* Challenge 08 - Button */}
      {/* <Copy />
      <Move />
      <Button /> */}


      {/********************************************/}
      {/* Challenge 09 - State and Hooks */}
      {/* <StateExp1 />
      <StateExp2 />
      <StateExp3 />
      <StateExp4 />
      <StateExp5 /> */}
      {/* <Counter />
      <hr />
      <TodoList />
      <hr />
      <Profile />
      <hr />
      <ShoppingList /> */}


      {/********************************************/}
      {/* Challenge 10 - Portal (used for => Modals, Tooltips, or for Dropdowns) */}
      {/* <PortalExp /> */}


      {/********************************************/}
      {/* Challenge 11 - UseEffect Hooks */}



    </>
  )
}

export default App