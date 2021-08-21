input.onButtonPressed(Button.A, function () {
    music.setVolume(music.volume() - 10)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(music.volume() + 10)
})
basic.forever(function () {
    serial.writeLine("" + (input.rotation(Rotation.Pitch)))
    if (input.rotation(Rotation.Pitch) > -180 && input.rotation(Rotation.Pitch) < -128) {
        music.ringTone(262)
    } else if (input.rotation(Rotation.Pitch) > -128 && input.rotation(Rotation.Pitch) < -77) {
        music.ringTone(294)
    } else if (input.rotation(Rotation.Pitch) > -77 && input.rotation(Rotation.Pitch) < -25) {
        music.ringTone(330)
    } else if (input.rotation(Rotation.Pitch) > -25 && input.rotation(Rotation.Pitch) < 25) {
        music.ringTone(349)
    } else if (input.rotation(Rotation.Pitch) > 25 && input.rotation(Rotation.Pitch) < 77) {
        music.ringTone(392)
    } else if (input.rotation(Rotation.Pitch) > 77 && input.rotation(Rotation.Pitch) < 128) {
        music.ringTone(440)
    } else if (input.rotation(Rotation.Pitch) > 128 && input.rotation(Rotation.Pitch) < 180) {
        music.ringTone(494)
    }
})
