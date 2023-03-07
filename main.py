faze = 0
if True:
    if faze == 0 and pins.analog_read_pin(AnalogPin.P0) > 512:
        faze = 1
    if faze == 1 and pins.analog_read_pin(AnalogPin.P0) < 255:
        faze = 2
    if faze == 2 and pins.analog_read_pin(AnalogPin.P1) > 512:
        faze = 3
    if faze == 3 and pins.analog_read_pin(AnalogPin.P1) < 255:
        faze = 4
    if faze == 4 and pins.analog_read_pin(AnalogPin.P2) > 512:
        faze = 5
    if faze == 5 and pins.analog_read_pin(AnalogPin.P2) < 255:
        faze = 0