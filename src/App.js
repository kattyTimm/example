import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [style, setStyle] = useState('');
  let [clearText, setClearText] = useState(false);

  const onClearText = e => {
    if(e.keyCode === 32){
      setClearText(true);
    }  
  };

  const onTransparentText = () => setStyle('opacity');

  useEffect(() => {
    document.addEventListener('keydown', e => onClearText(e));

    return () => document.removeEventListener('keydown', onClearText);

  }, [clearText]);

  useEffect(() => {
    document.addEventListener('mousedown', () => onTransparentText());

    return () => document.removeEventListener('mousedown', onTransparentText);

  }, [style]);
 
  return (
    <div className="App" >
      <header className="App-header">
          <div className={style} onMouseOver={() => setStyle('decoreted')} onMouseOut={() => setStyle('')} hidden={clearText}>
             Тимофеева Екатерина Владимировна - Начинающий web-программист / Junior Frontend Developer       
          </div>
          {clearText && <button className="btn btn-dark" onClick={() => setClearText(false)}>Вернуть текст</button>}
      </header>
    </div>
  );
}

export default App;
