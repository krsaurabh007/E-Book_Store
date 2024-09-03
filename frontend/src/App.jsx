
import Login from './auth/login'
import SignUp from './auth/signUp'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/dashboard/Home'
import Horror from './pages/fiction/horror'
import Fantasy from './pages/fiction/fantasy'
import Mystery from './pages/fiction/Mystery'
import Novel from './pages/fiction/novel'
import Romance from './pages/fiction/romance'
import Science from './pages/fiction/science'
import Agnosticism from './pages/religion/agnosticism'
import Athesim from './pages/religion/athesim'
import Buddhism from './pages/religion/buddhism'
import Hinduism from './pages/religion/hinduism'
import PersonalDevelopment from './pages/selfHelp/personalDevelopment'
import Sprituality from './pages/selfHelp/sprituality'
import Ethnic from './pages/autobiography.jsx/ethnic'
import Leaders from './pages/autobiography.jsx/leaders'




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Home/>}/>
      <Route path="/horror" element={<Horror/>}/>
      <Route path="/fantasy" element={<Fantasy/>}/>
      <Route path="/Mystery" element={<Mystery/>}/>
      <Route path="/novel" element={<Novel/>}/>
      <Route path="/romance" element={<Romance/>}/>
      <Route path="/science" element={<Science/>}/>
      <Route path="/agnosticism" element={<Agnosticism/>}/>
      <Route path="/athesim" element={<Athesim/>}/>
      <Route path="/buddhism" element={<Buddhism/>}/>
      <Route path="/hinduism" element={<Hinduism/>}/>
      <Route path="/personalDevelopment" element={<PersonalDevelopment/>}/>
      <Route path="/sprituality" element={<Sprituality/>}/>
      <Route path="/ethnic" element={<Ethnic/>}/>
      <Route path="/leaders" element={<Leaders/>}/>



      
    </Routes>

    </BrowserRouter>
  )
}
export default App
