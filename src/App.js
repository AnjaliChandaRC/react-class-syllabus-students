import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeOne from './components/views/HomeOne';
import HomeTwo from './components/views/HomeTwo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageUpload from './components/ImageUpload';
import TextReverseSplit from './components/TextReverseSplit';
import CustomAccordion from './components/CustomAccordion';
import UseSearchParamsPractice from './components/UseSearchParamsPractice';
import ParamsWithIndex from './components/ParamsWithIndex';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeOne />} />
          <Route path='/about' element={<HomeTwo />} />
          <Route path='/image' element={<ImageUpload />} />
          <Route path='/split' element={<TextReverseSplit />} />
          {/* Pass Dynamic Routes */}
          <Route path='/faq/:title' element={<CustomAccordion />} />
          <Route path='/params' element={<UseSearchParamsPractice />} />
          <Route path='/index' element={<ParamsWithIndex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
