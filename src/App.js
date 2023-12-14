import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav/MyNav';
import MyFooter from './components/MyFooter/MyFooter';
import Welcome from './components/Welcome/Welcome';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';

function App() {
  return (
    <div className="app-container">
      <MyNav/>
      <Welcome/>
      <AllTheBooks/>

      <div className="footer-container">
        <MyFooter name="Albu Cosmin Andrei" />
      </div>
    </div>
  );
}

export default App;
