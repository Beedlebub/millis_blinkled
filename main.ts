let previous_millis = 0
let current_millis = 0
let interval = 500
basic.clearScreen()
basic.forever(function () {
    current_millis = control.millis()
    if (current_millis - previous_millis >= interval) {
        previous_millis = current_millis
        if (led.point(0, 0) == false) {
            led.plot(0, 0)
        } else {
            led.unplot(0, 0)
        }
    }
})
