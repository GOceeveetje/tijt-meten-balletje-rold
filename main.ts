let tijt5 = 0
let tijt4 = 0
let tijt3 = 0
let tij2 = 0
let tijt1 = 0
let tijt0 = 0
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
let faze = 0
let laag = 255
let hoog = 512
serial.writeLine("READY")
if (true) {
    if (faze == 0 && pins.analogReadPin(AnalogPin.P0) > hoog) {
        tijt0 = input.runningTimeMicros()
        faze = 1
        led.plot(0, 0)
    }
    if (faze == 1 && pins.analogReadPin(AnalogPin.P0) < laag) {
        tijt0 = input.runningTimeMicros()
        tijt1 = 2
        led.plot(1, 0)
    }
    if (faze == 2 && pins.analogReadPin(AnalogPin.P1) > hoog) {
        faze = 3
        tij2 = input.runningTimeMicros()
        led.plot(2, 0)
    }
    if (faze == 3 && pins.analogReadPin(AnalogPin.P1) < laag) {
        tijt3 = 4
        tijt0 = input.runningTimeMicros()
        led.plot(3, 0)
    }
    if (faze == 4 && pins.analogReadPin(AnalogPin.P2) > hoog) {
        tijt4 = input.runningTimeMicros()
        faze = 5
        led.plot(4, 0)
    }
    if (faze == 5 && pins.analogReadPin(AnalogPin.P2) < laag) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        tijt5 = input.runningTimeMicros()
        serial.writeNumber(tijt0)
        serial.writeLine("")
        serial.writeNumber(tijt1)
        serial.writeLine("")
        serial.writeNumber(tij2)
        serial.writeLine("")
        serial.writeNumber(tijt3)
        serial.writeLine("")
        serial.writeNumber(tijt4)
        serial.writeLine("")
        serial.writeNumber(tijt5)
        serial.writeLine("")
        faze = 0
    }
}
