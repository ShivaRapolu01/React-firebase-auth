import './css/App.css'
import {Routes,Route} from 'react-router-dom'
import { Container,Row,Col} from 'react-bootstrap';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
     <Container>
       <Row>
          <Col>
             <Routes>
               <Route path="/" element={<Login/>} />
               <Route path="/signup" element={<SignUp/>} />
             </Routes>
          </Col>
       </Row>
     </Container>
  )
}

export default App;
