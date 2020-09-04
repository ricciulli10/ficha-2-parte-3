basic.forever(function () {
    while (input.temperature() < 26) {
        music.playTone(988, music.beat(BeatFraction.Breve))
        basic.showString("baja")
        while (input.temperature() < 34) {
            basic.showString("normal")
        }
        while (input.temperature() > 34) {
            music.playTone(988, music.beat(BeatFraction.Breve))
            basic.showString("alta")
        }
        basic.showString("baja")
    }
})
