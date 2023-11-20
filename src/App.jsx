import './App.css'
import Header from './components/Header/Header';
import nate from "./assets/nate.jpg"

function App() {

  return (
    <>
      <Header/>
      <div className='artists'>
        <div id='NateWinter'>
          <a href="https://www.natewintermusic.com/" target="_blank">
            <img src={nate} className="logo" alt="Nate Winter Profile" />
          </a>
        </div>
      </div>
    </>
  )
}

export default App
