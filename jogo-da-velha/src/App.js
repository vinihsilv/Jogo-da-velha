import React from 'react';
import Head from './Components/Header/Head';
import Painel from './Components/Painel/Painel';
import Player from './Components/Player/index';


function App() {
  return (
    <fragments>
    <Head/>
    <Painel>
    <Player player='x'/>
    <Player player='o'/>
    <Player player='x'/>
    <Player player='o'/>
    <Player player='x'/>
    <Player player='o'/>
    <Player player='x'/>
    <Player player='o'/>
    <Player player='x'/>
    </Painel>
    </fragments>
  );
}

export default App;
