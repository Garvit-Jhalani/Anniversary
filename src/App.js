import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import {SaveTheDate} from './components/SaveTheDate';
import {Photos} from './components/Photos';
import {Place} from './components/Place';
import {Routine} from './components/Routine';
import {Clothes} from './components/Clothes';
import {Form} from './components/Form';
import {Footer} from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Header />
      <SaveTheDate />
      <Photos />
      <Place />
      <Routine />
      {/* <Clothes />
      <Form />
      <Footer /> */}
    </div>
  );
}

export default App;
