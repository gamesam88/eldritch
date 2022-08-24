import './App.css';
import Creatures from './components/creatures/Creatures';
import Difficult from './components/difficulties/Difficult';
import PlayingBoard from './components/playing_board/PlayingBoard';
import { useEffect, useState } from 'react';
import ancients from './data/ancients';
import { setShem, addRandom } from './helpers/functions'

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

  useEffect(() => {
    let newShema = setShem(god)
    if (newShema) {
      let newStack = addRandom(newShema.third).concat(addRandom(newShema.second)).concat(addRandom(newShema.first))
      setStack(newStack)
    }
  }, [god]);

  return (
    <div className="App">
      <Creatures godHandler={godHandler} />
      <Difficult />
      <PlayingBoard stack={stack} god={god} />
    </div>
  );
}

export default App;
