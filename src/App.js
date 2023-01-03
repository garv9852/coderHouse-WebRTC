import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Home from './pages/Home/Home';
import Navigation from './components/shared/navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
import {useSelector} from "react-redux"
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import Loader from './components/shared/Loader/Loader';
function App() {
  const {loading}=useLoadingWithRefresh();
  return loading?<Loader text={"Loading Please Wait!!"}/>:(
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<GuestRoute>
          <Home/>
        </GuestRoute>}/>
        <Route path="/authenticate" element={<GuestRoute>
          <Authenticate/>
        </GuestRoute>}/>
        <Route path="/activate" element={<SemiRoute>
          <Activate/>
        </SemiRoute>}/>
        <Route path="/rooms" element={<ProtectRoute>
          <Rooms/>
        </ProtectRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute=({children})=>{
  const {user,isAuth}=useSelector((state)=>state.auth)
  return(
    <>
    {
      !isAuth?children:user.activated?<Navigate to="/rooms"/>:<Navigate to="/activate"/>
    }
    </>
  )
}
const SemiRoute=({children})=>{
  const {user,isAuth}=useSelector((state)=>state.auth)
  return(
    <>
    {
      !isAuth?<Navigate to="/authenticate"/>:user.activated?<Navigate to="/rooms"/>:children
    }
    </>
  )
}

const ProtectRoute=({children})=>{
  const {user,isAuth}=useSelector((state)=>state.auth)
  return(
    <>
    {
      !isAuth?<Navigate to="/authenticate"/>:user.activated?children:<Navigate to="/activate"/>
    }
    </>
  )
}
export default App;
