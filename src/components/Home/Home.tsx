import Header from './Header/Header.tsx';
import './Home.css';
import Homecontent from './HomeContent/Homecontent.tsx';

const Home = () => {
  return (
    <section className='homepage'>
      <Header />
      <Homecontent />
    </section>
  );
};

export default Home;
