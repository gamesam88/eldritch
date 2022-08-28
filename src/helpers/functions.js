import { blueCards, greenCards, brownCards } from '../data/mythicCards/index'

export const setShem = (god) => {
    if (god) {
        let first = god.firstStage
        let second = god.secondStage
        let third = god.thirdStage
        return { first, second, third }
    }
}

export function getRandomNum(num) {
    return Math.floor(Math.random() * num);
}

export const helperForPull = (god) => {
    if (god) {
        let amountColors = {
            amountGreen: god.firstStage.greenCards + god.secondStage.greenCards + god.thirdStage.greenCards,
            amountBrown: god.firstStage.brownCards + god.secondStage.brownCards + god.thirdStage.brownCards,
            amountBlue: god.firstStage.blueCards + god.secondStage.blueCards + god.thirdStage.blueCards
        }
        return amountColors
    }
}

export const createPull = (key, amountColors) => {
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

        case 'veryhard':
            for (let item of greenCards) {
                if (item.difficulty === 'hard') {
                    greenPull.add(item)
                }
            }

            for (let item of brownCards) {
                if (item.difficulty === 'hard') {
                    brownPull.add(item)
                }
            }
            for (let item of blueCards) {
                if (item.difficulty === 'hard') {
                    bluePull.add(item)
                }
            }

            while (greenPull.size < amountColors.amountGreen) {
                let someCard = greenCards[getRandomNum(greenCards.length)]
                if (someCard.difficulty === 'normal' && !greenPull.has(someCard)) {
                    greenPull.add(someCard)
                }
            }

            while (brownPull.size < amountColors.amountBrown) {
                let someCard = brownCards[getRandomNum(brownCards.length)]
                if (someCard.difficulty === 'normal' && !brownPull.has(someCard)) {
                    brownPull.add(someCard)
                }
            }
            break;

        case 'veryeasy':
            for (let item of greenCards) {
                if (item.difficulty === 'easy') {
                    greenPull.add(item)
                }
            }

            for (let item of brownCards) {
                if (item.difficulty === 'easy') {
                    brownPull.add(item)
                }
            }
            for (let item of blueCards) {
                if (item.difficulty === 'easy') {
                    bluePull.add(item)
                }
            }

            while (greenPull.size < amountColors.amountGreen) {
                let someCard = greenCards[getRandomNum(greenCards.length)]
                if (someCard.difficulty === 'normal' && !greenPull.has(someCard)) {
                    greenPull.add(someCard)
                }
            }

            while (brownPull.size < amountColors.amountBrown) {
                let someCard = brownCards[getRandomNum(brownCards.length)]
                if (someCard.difficulty === 'normal' && !brownPull.has(someCard)) {
                    brownPull.add(someCard)
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

