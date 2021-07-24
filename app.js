const blackKeys = document.querySelectorAll('.key.black')
const blackOrder = ['Db', 'Eb', 'Gb', 'Ab', 'Bb']
const blackKeyboard = ['2', '3', '5', '6', '7']

const whiteKeys = document.querySelectorAll('.key.white')
const whiteOrder = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const whiteKeyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u']

let audio

blackKeys.forEach((key, index) => {
    key.addEventListener('click', () => {
        audio = new Audio(`./notes/${blackOrder[index]}.mp3`)
        audio.currentTime = 0
        audio.play()
    })
})

whiteKeys.forEach((key, index) => {
    key.addEventListener('click', () => {
        audio = new Audio(`./notes/${whiteOrder[index]}.mp3`)
        audio.currentTime = 0
        audio.play()
    })
})

document.addEventListener('keyup', e => {
    whiteKeyboard.forEach((key, index) => {
        if(key == e.key) {
            audio = new Audio(`./notes/${whiteOrder[index]}.mp3`)
            audio.currentTime = 0
            audio.play()

            whiteKeys[index].style.opacity = '0.7'
            setTimeout(() => whiteKeys[index].style.opacity = '1', 500)
        }
    })
})

document.addEventListener('keyup', e => {
    blackKeyboard.forEach((key, index) => {
        if(key == e.key) {
            audio = new Audio(`./notes/${blackOrder[index]}.mp3`)
            audio.currentTime = 0
            audio.play()

            blackKeys[index].style.opacity = '0.7'
            setTimeout(() => blackKeys[index].style.opacity = '1', 500)
        }
    })
})