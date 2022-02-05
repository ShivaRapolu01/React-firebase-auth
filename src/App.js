import './css/App.css'
import {Routes,Route} from 'react-router-dom'
import { Container,Row,Col} from 'react-bootstrap';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
     <Container >
       <Row>
          <Col>
             <Routes>
             <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
               <Route path="/" element={<Login/>} />
               <Route path="/signup" element={<SignUp/>} />
             </Routes>
          </Col>
       </Row>
     </Container>
  )
}

export default App;
