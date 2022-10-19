import React, { useState } from 'react';

import './App.css';
import MusicList from './components/MusicList';
import MusicModel from './models/MusicModel';
import NewMusic from './components/NewMusic';

function App() {

  const [items, setItems] = useState<MusicModel[]>([
    new MusicModel('Krystal'), 
    new MusicModel('Rom-Com Gone Wrong')
  ]);

  const onAddMusicHandler = (newMusic: string) => {
    console.log(newMusic);
    setItems( prev => [
      ...prev,
      new MusicModel(newMusic)
    ])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Matt Maltese's music is awesome</h3>
        <NewMusic onAddMusic={onAddMusicHandler}/>
        <MusicList items={items}/>
      </header>
    </div>
  );
}

export default App;
