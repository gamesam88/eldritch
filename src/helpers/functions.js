import { blueCards, greenCards, brownCards } from '../data/mythicCards/index'

export const setShem = (god) => {
    if (god) {
        let first = god.firstStage
        let second = god.secondStage
        let third = god.thirdStage
        return { first, second, third }
    }
}

function getRandomNum(num) {
    return Math.floor(Math.random() * num);
}

let greenPull = []
let brownPull = []
let bluePull = []

export const addRandom = (shema) => {
    let green = []
    let brown = []
    let blue = []

    while (green.length !== shema.greenCards) {
        let randNum = getRandomNum(greenCards.length)
        if (greenPull.indexOf(randNum) === -1) {
            greenPull.push(randNum)
            green.push(greenCards[randNum])
        }
    }

    while (brown.length !== shema.brownCards) {
        let randNum = getRandomNum(brownCards.length)
        if (brownPull.indexOf(randNum) === -1) {
            brownPull.push(randNum)
            brown.push(brownCards[randNum])
        }
    }

    while (blue.length !== shema.blueCards) {
        let randNum = getRandomNum(blueCards.length)
        if (bluePull.indexOf(randNum) === -1) {
            bluePull.push(randNum)
            blue.push(blueCards[randNum])
        }
    }

    greenPull = []
    brownPull = []
    bluePull = []

    let sum = [...green, ...brown, ...blue]
    let result = []

    while (sum.length > 0) {
        let chunk = sum.splice(getRandomNum(sum.length), 1)
        result.push(...chunk)
    }
    return result
}