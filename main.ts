maqueen.servoRun(maqueen.Servos.S2, 100)
basic.forever(function () {
    basic.pause(500)
    maqueen.servoRun(maqueen.Servos.S2, 0)
    basic.pause(500)
    maqueen.servoRun(maqueen.Servos.S2, 100)
})
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
})
