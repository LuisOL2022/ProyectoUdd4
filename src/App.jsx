import './App.css'
import Navbar from './components/navbar'
import Principal from './components/principal'
import Menu from './components/menu'
import ReservationForm from './components/reservationform'
import Footer from './components/footer'


const App = () => {

  return (
    <>
    <header className='nav'>
      <Navbar/>
    </header>
      <div>
        <Principal/>
      </div>
      <div>
        <Menu/>
      </div>
      <div>
        <ReservationForm/>
      </div>
      <div>
        <Footer/>
      </div>

    </>
  )
}

export default App;
