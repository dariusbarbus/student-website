import { BrowserRouter } from "react-router-dom";
import {About, Hero, Navbar, Tech, Works} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#F7F7F7]">
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' > */}
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
      </div>
    </BrowserRouter>
  )
}

export default App
