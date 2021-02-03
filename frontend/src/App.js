import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/Productscreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderScreen from './screens/OrderScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import {Container} from 'react-bootstrap'


const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
        <Route path='/order/:id' component={OrderScreen} exact />
        <Route path='/product/:id' component={ProductScreen} exact />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/shipping' component={ShippingScreen} exact />
        <Route path='/placeorder' component={PlaceOrderScreen} exact />
        <Route path='/payment' component={PaymentScreen} exact />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} exact />
        <Route path='/admin/userlist' component={UserListScreen} exact />
        <Route path='/admin/orderlist' component={OrderListScreen} exact />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} exact />
        <Route path='/admin/productlist' component={ProductListScreen} exact />
        <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />
        <Route path='/admin/product/:id/edit' component={ProductEditScreen} exact />
        <Route path='/search/:keyword' component={HomeScreen} exact/>
        <Route path='/page/:pageNumber' component={HomeScreen} exact/>
        <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact/>
        <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
