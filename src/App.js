import React from 'react';
import Header from './components/Header/Header';
import PlayingField from './components/PlayingField/PlayingField';
import { cardSets } from "./cardSets";

const theme = {
  color: 'green',
  background: 'aliceblue'
};

const size = 12;
const cardType = 'color'

function App() {
  console.log(cardSets);
  return (
    <>
      <Header theme={theme} />
      <PlayingField 
        size={size} 
        cardSet={cardSets[0]} 
        cardType={cardType} 
      />
    </>
  );
}

export default App;
