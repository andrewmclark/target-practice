controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myBall2 = carnival.createProjectileBallFromSprite(assets.image`ball-blue`, myBall)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Booth, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    info.changeScoreBy(1)
    music.play(music.stringPlayable("C5 A B B C5 - - - ", 1000), music.PlaybackMode.UntilDone)
})
let projectile: Sprite = null
let myBall2: Ball = null
let myBall: Ball = null
scene.setBackgroundImage(assets.image`wildWest`)
myBall = carnival.create(assets.image`cowboy bigger`, SpriteKind.Player)
myBall.setPosition(80, 90)
myBall.controlBallWithArrowKeys()
myBall.setTraceMulti(carnival.Tracers.Cross)
let my_booth = sprites.create(assets.image`booth`, SpriteKind.Booth)
my_booth.z = 20
let statusbar = statusbars.create(120, 6, StatusBarKind.Energy)
statusbar.setColor(5, 10)
statusbar.setBarBorder(2, 1)
statusbar.bottom = 115
myBall.variablePower(statusbar, 30, 60)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`target`, 52, 0)
    projectile.bottom = 56
    projectile.setKind(SpriteKind.Enemy)
    pause(randint(500, 2000))
})
