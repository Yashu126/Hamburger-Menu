import './App.css'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <div className="background-con">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
