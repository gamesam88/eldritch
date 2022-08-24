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

export const addRandom = (shema, pull) => {
    let green = []
    let brown = []
    let blue = []

    while (green.length !== shema.greenCards) {
        let randNum = getRandomNum(pull.greenCards.length)
        if (greenPull.indexOf(randNum) === -1) {
            greenPull.push(randNum)
            green.push(pull.greenCards[randNum])
        }
    }

    while (brown.length !== shema.brownCards) {
        let randNum = getRandomNum(pull.brownCards.length)
        if (brownPull.indexOf(randNum) === -1) {
            brownPull.push(randNum)
            brown.push(pull.brownCards[randNum])
        }
    }

    while (blue.length !== shema.blueCards) {
        let randNum = getRandomNum(pull.blueCards.length)
        if (bluePull.indexOf(randNum) === -1) {
            bluePull.push(randNum)
            blue.push(pull.blueCards[randNum])
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

export const createPull = (key) => {
    let greenPull = new Set()
    let brownPull = new Set()
    let bluePull = new Set()

    switch (key) {
        case 'easy':
            for (let item of greenCards) {
                if (item.difficulty !== 'hard') {
                    greenPull.add(item)
                }
            }
            for (let item of brownCards) {
                if (item.difficulty !== 'hard') {
                    brownPull.add(item)
                }
            }
            for (let item of blueCards) {
                if (item.difficulty !== 'hard') {
                    bluePull.add(item)
                }
            }
            break;

        case 'normal':
            for (let item of greenCards) {
                if (item) {
                    greenPull.add(item)
                }
            }
            for (let item of brownCards) {
                if (item) {
                    brownPull.add(item)
                }
            }
            for (let item of blueCards) {
                if (item) {
                    bluePull.add(item)
                }
            }
            break;

        case 'hard':
            for (let item of greenCards) {
                if (item.difficulty !== 'easy') {
                    greenPull.add(item)
                }
            }
            for (let item of brownCards) {
                if (item.difficulty !== 'easy') {
                    brownPull.add(item)
                }
            }
            for (let item of blueCards) {
                if (item.difficulty !== 'easy') {
                    bluePull.add(item)
                }
            }
            break;
        default:
            console.log('Wrong data!')
            break;
    }

    return {
        greenCards: Array.from(greenPull),
        brownCards: Array.from(brownPull),
        blueCards: Array.from(bluePull)
    }
}

