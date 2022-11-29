import logo from './logo.svg';
import './App.css';

function Article(props){

  return (
    <div className='Article'>
      <div>
        <h2>{props.title}</h2>
        <p>{props.author} | {props.published}</p>
      </div>
    <div className="Article_Body">{props.children}</div>
    </div>
  );
}

function App() {
  const name = "Neville";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is {name} and this is my first app
        </p>
      </header>
      <Article title="Learning React" author="Viktoria Rabakale" published="1990">
      <p>This is a child compenent</p>
      <p>I can add more than one at a time</p>
      </Article>
      <Article title="Learning JSX" author="John Snow" published="2020">
        <p>This is another one</p>
      </Article>
      <Article title= {`${name} is my name`} author ="Lena Lidsell" published="1967"/>
       </div>
  );
}


export default App;
