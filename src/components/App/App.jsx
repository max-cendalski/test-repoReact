import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../../pages/Main/Main.js';
import Places from '../../pages/Places/Places.js'
import Games from '../../pages/Games/Games.js'
import Header from '../Header/Header.js'
import Carousel from '../Carousel/Carousel.js';
import FadeTest from '../FadeTest/FadeTest.js';
import Quotes from '../../pages/Quotes/Quotes.js'
import Counter  from '../features/counter/Counter.js';



export default function App() {
  const appTitle = "Test App"
  const data=[{
    country:'Japan',
    city: 'Tokyo'
  },
{
    country:'United States',
    city: 'Los Angeles'
  },
{
    country:'Poland',
    city: 'Lodz'
  },
  {
    country:'Norway',
    city: 'Trondheim'
  },
{
    country:'Australia',
    city: 'Sydney'
  }]

  return (
      <BrowserRouter>
        <Header appTitle={appTitle}/>
        <Routes>
          <Route path="/" element={<Main data={data}/>} />
          <Route path="/places" element={<Places />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/places" element={<Places />} />
          <Route path="/fade" element={<FadeTest />} />
          <Route path="/games" element={<Games />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/test" element={<Counter />} />

        </Routes>
      </BrowserRouter>
  );
}
