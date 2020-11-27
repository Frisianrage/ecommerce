import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'
import Productscreen from './screens/Productscreen'
import CartScreen from './screens/CartScreen'
import {Container} from 'react-bootstrap'


const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
        <Route path='/' component={Homescreen} exact />
        <Route path='/product/:id' component={Productscreen} exact />
        <Route path='/cart/:id?' component={CartScreen} />

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
