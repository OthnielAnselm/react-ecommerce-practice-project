import React from 'react';
import {Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import  Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import Navbar from './components2/Navbar'
import ProductList from './components2/ProductList'
import Details from './components2/Details'
import Cart from './components2/Cart'
import Default from './components2/Default'
import Modal from './components2/Modal'


function App() {
 
  return (
    // <div className="App">
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
       {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick />      */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Greet name="Seth" otherName="Lastborn"></Greet>
      <Welcome name="David" otherName="Stranger">
        <p>Children props</p>
      </Welcome> */}
      {/* <Message /> */}
      {/* 
        <p>Children props</p>
      </Greet>
      <Greet name="David">
        <button>Action</button>
      </Greet>
      <Greet name="Fela"/>
      <Welcome name="Seth">
        <p>Children props</p>
      </Welcome>
      
      <Welcome name="Fela">
        <p>Children props</p>
      </Welcome> */}
      {/* <Hello /> */}
    {/* </div> */}

    </React.Fragment>
    
  );
}

export default App;
