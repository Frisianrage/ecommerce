import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'
import {Container} from 'react-bootstrap'


const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
        <Homescreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
