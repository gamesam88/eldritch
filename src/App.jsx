import './App.css';
import Creatures from './components/creatures/Creatures';
import Difficult from './components/difficulties/Difficult';
import PlayingBoard from './components/playing_board/PlayingBoard';
import { useEffect, useState } from 'react';
import ancients from './data/ancients';
import { setShem, createPull, getRandomNum, helperForPull } from './helpers/functions'

function App() {

  const godInit = {
    id: 'init',
    name: 'Select ancient',
    cardFace: '',
    firstStage: {
      greenCards: 0,
      blueCards: 0,
      brownCards: 0,
    },
    secondStage: {
      greenCards: 0,
      blueCards: 0,
      brownCards: 0,
    },
    thirdStage: {
      greenCards: 0,
      blueCards: 0,
      brownCards: 0,
    }
  }

  const [god, setGod] = useState(godInit);
  const [stack, setStack] = useState();
  const [dif, difSet] = useState('normal');

  const [greenPull, setGreenPull] = useState(new Set([]));
  const [brownPull, setBrownPull] = useState(new Set([]));
  const [bluePull, setBluePull] = useState(new Set([]));

  const reset = () => {
    setGod(godInit)
    difSet('normal')
  }

  useEffect(() => {
    someHendle()
  }, [god, dif]);

  const someHendle = () => {
    setGreenPull(new Set([]))
    setBrownPull(new Set([]))
    setBluePull(new Set([]))
  }

  const addRandom = (shema, pull) => {
    let green = []
    let brown = []
    let blue = []

    while (green.length !== shema.greenCards) {
      let randNum = getRandomNum(pull.greenCards.length)
      if (!greenPull.has(pull.greenCards[randNum])) {
        greenPull.add(pull.greenCards[randNum])
        green.push(pull.greenCards[randNum])
      }
    }

    while (brown.length !== shema.brownCards) {
      let randNum = getRandomNum(pull.brownCards.length)
      if (!brownPull.has(pull.brownCards[randNum])) {
        brownPull.add(pull.brownCards[randNum])
        brown.push(pull.brownCards[randNum])
      }
    }

    while (blue.length !== shema.blueCards) {
      let randNum = getRandomNum(pull.blueCards.length)
      if (!bluePull.has(pull.blueCards[randNum])) {
        bluePull.add(pull.blueCards[randNum])
        blue.push(pull.blueCards[randNum])
      }
    }

    let sum = [...green, ...brown, ...blue]
    let result = []

    while (sum.length > 0) {
      let chunk = sum.splice(getRandomNum(sum.length), 1)
      result.push(...chunk)
    }
    return result
  }

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
      const firstSet = createPull(dif, helperForPull(god))
      const secondSet = createPull(dif, helperForPull(god))
      const thirdSet = createPull(dif, helperForPull(god))
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
      <Difficult difHendler={difHendler} dif={dif} god={god} reset={reset} />
      <PlayingBoard stack={stack} god={god} />
    </div>
  );
}

export default App;