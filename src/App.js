import logo from './logo.svg';
import './App.css';
import cat1 from './imgSrc.jpg';
import './style.css';

function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Mazen haggui</h1>
      <br />
      <img src={cat1} width={210}height={200} />
      <br />
      <img src="/imageInPublic.jpg" width={210}height={200} />
    </div>
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>
  );
}

export default App;
  