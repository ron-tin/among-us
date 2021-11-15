input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("red sus")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 3; index++) {
        basic.showNumber(90)
        basic.clearScreen()
        basic.pause(500)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.NorthWest)
})
for (let index = 0; index < 2; index++) {
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
    basic.showArrow(ArrowNames.South)
    basic.pause(100)
}
basic.forever(function () {
    basic.showString("my heart")
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
