basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.StickFigure)
    } else {
        basic.showIcon(IconNames.TShirt)
        basic.pause(1000)
        music.ringTone(131)
        basic.pause(500)
        music.ringTone(131)
        basic.pause(500)
        music.ringTone(165)
        basic.pause(500)
        music.ringTone(196)
        basic.pause(500)
        music.ringTone(196)
        basic.pause(500)
        music.ringTone(220)
    }
})
