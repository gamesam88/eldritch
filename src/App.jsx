import './App.css';
import Creatures from './components/creatures/Creatures';
import Difficult from './components/difficulties/Difficult';
import PlayingBoard from './components/playing_board/PlayingBoard';
import { useEffect, useState } from 'react';
import ancients from './data/ancients';
import { setShem, addRandom, createPull } from './helpers/functions'

function App() {

  const [god, setGod] = useState();
  const [stack, setStack] = useState();
  const [dif, difSet] = useState('normal');

  const godHandler = (id) => {
    ancients.forEach(el => {
      if (el.id === id) {
        setGod(el)
      }
    })
  }

  // const stagesHandler = (newStage) => {
  //   setStages(newStage)
  // }

  // useEffect(() => {
  //   stagesHandler
  // }, [stages]);

  const difHendler = (difficalt) => {
    difSet(difficalt)
  }

  useEffect(() => {
    let newShema = setShem(god)
    if (newShema) {
      const firstSet = createPull(dif)
      const secondSet = createPull(dif)
      const thirdSet = createPull(dif)
      const newStack = {
        first: addRandom(newShema.first, firstSet),
        second: addRandom(newShema.second, secondSet),
        third: addRandom(newShema.third, thirdSet)
      }
      setStack(newStack)
    }
  }, [god, dif]);

  return (
    <div className="App">
      <Creatures godHandler={godHandler} god={god} />
      <Difficult difHendler={difHendler} dif={dif} />
      <PlayingBoard stack={stack} god={god} />
    </div>
  );
}

export default App;