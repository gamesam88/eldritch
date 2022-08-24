import './App.css';
import Creatures from './components/creatures/Creatures';
import Difficult from './components/difficulties/Difficult';
import PlayingBoard from './components/playing_board/PlayingBoard';
import { useEffect, useState } from 'react';
import ancients from './data/ancients';
import { setShem, addRandom, createPull } from './helpers/functions'

function App() {

  const [god, setGod] = useState(ancients[0]);
  const [stack, setStack] = useState();
  const [dif, difSet] = useState('normal');

  const godHandler = (id) => {
    ancients.forEach(el => {
      if (el.id === id) {
        setGod(el)
      }
    })
  }

  const difHendler = (difficalt) => {
    difSet(difficalt)
  }

  useEffect(() => {
    let newShema = setShem(god)
    if (newShema) {
      const firstSet = createPull(dif)
      const secondSet = createPull(dif)
      const thirdSet = createPull(dif)
      const newStack = addRandom(newShema.third, thirdSet).concat(addRandom(newShema.second, secondSet)).concat(addRandom(newShema.first, firstSet))
      setStack(newStack)
    }
    difSet(dif)
  }, [god, dif]);

  useEffect(() => {
    console.log(createPull(dif))
  }, [dif]);



  return (
    <div className="App">
      <Creatures godHandler={godHandler} />
      <Difficult difHendler={difHendler} dif={dif} />
      <PlayingBoard stack={stack} god={god} />
    </div>
  );
}

export default App;
