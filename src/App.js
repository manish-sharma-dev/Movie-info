
import './App.css';
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Recently from './components/recentlyView/Recently';
// import Movieinfo from './components/movieInfo/Movieinfo';


function App() {
  return (
   <div className='main_all'>
    <Navbar />
    <Header />
    <Recently />
    <Main />
    <Footer />
    {/* <Movieinfo /> */}

   </div>
  );
}

export default App;
