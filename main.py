led_state = 0
previous_millis = 0
current_millis = 0
interval = 1000

def on_forever():
    global current_millis, previous_millis
    current_millis = control.millis()
    if current_millis - previous_millis >= interval:
        previous_millis = current_millis
        if led_state == 0:
            pass
basic.forever(on_forever)
