import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeOne from './components/views/HomeOne';
import HomeTwo from './components/views/HomeTwo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageUpload from './components/ImageUpload';
import TextReverseSplit from './components/TextReverseSplit';
import CounterPractice from './components/CounterPractice';
import CustomAccordion from './components/CustomAccordion';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeOne />} />
          <Route path='/about' element={<HomeTwo />} />
          <Route path='/image' element={<ImageUpload />} />
          <Route path='/split' element={<TextReverseSplit />} />
          <Route path='/counter' element={<CounterPractice />} />
          <Route path='/faq' element={<CustomAccordion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
