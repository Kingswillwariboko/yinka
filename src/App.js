import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
