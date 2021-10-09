namespace SpriteKind {
    export const Life = SpriteKind.create()
    export const Planet = SpriteKind.create()
    export const Planet1 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.startCountdown(0.2111111111111111)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
    music.baDing.play()
})
info.onCountdownEnd(function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 4 c b 4 . . . . . . . 
        . . . . . 4 c b 4 . . . . . . . 
        . . . . . 5 c b 5 . . . . . . . 
        `, mySprite, 0, -100)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 4 c b 4 . . . . . . . 
        . . . . . 4 c b 4 . . . . . . . 
        . . . . . 5 c b 5 . . . . . . . 
        `, mySprite, 1, -100)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 2 c b 2 . . . . . . . 
        . . . . . 4 c b 4 . . . . . . . 
        . . . . . 4 c b 4 . . . . . . . 
        . . . . . 5 c b 5 . . . . . . . 
        `, mySprite, -1, -100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Life, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.powerDown.play()
    info.changeLifeBy(-0.11)
    scene.cameraShake(4, 500)
})
let Heart: Sprite = null
let asteroid: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
mySprite = sprites.create(assets.image`Space ship`, SpriteKind.Player)
mySprite.setPosition(76, 72)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
info.setLife(9)
info.setScore(0)
game.onUpdateInterval(5000, function () {
    asteroid = sprites.createProjectileFromSide(img`
        . . . . . . c c c . . . . . . . 
        . . . . . a a a c c c . . . . . 
        . . . c a c f a a a a c . . . . 
        . . c a c f f f a f f a c . . . 
        . c c a c c f a a c f f a c . . 
        . a b a a c 6 a a c c f a c c c 
        . a b b b 6 a b b a a c a f f c 
        . . a b b a f f b b a a c f f c 
        c . a a a c c f c b a a c f a c 
        c c a a a c c a a a b b a c a c 
        a c a b b a a 6 a b b 6 b b c . 
        b a c b b b 6 b c . c c a c . . 
        b a c c a b b a c . . . . . . . 
        b b a c a b a a . . . . . . . . 
        a b 6 b b a c . . . . . . . . . 
        . a a b c . . . . . . . . . . . 
        `, 0, 50)
    asteroid.x = randint(0, scene.screenWidth())
    asteroid.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(2000, function () {
    asteroid = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c b a c . . . . . . 
        . . . . c c b c f a c . . . . . 
        . . . . a f b b b a c . . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c . . . . . 
        . . . . . b b a f a . . . . . . 
        . . . . . . c b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    asteroid.x = randint(0, scene.screenWidth())
    asteroid.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(1000, function () {
    asteroid = sprites.createProjectileFromSide(img`
        . . . . . . . c c c a c . . . . 
        . . c c b b b a c a a a c . . . 
        . c c a b a c b a a a b c c . . 
        . c a b c f f f b a b b b a . . 
        . c a c f f f 8 a b b b b b a . 
        . c a 8 f f 8 c a b b b b b a . 
        c c c a c c c c a b c f a b c c 
        c c a a a c c c a c f f c b b a 
        c c a b 6 a c c a f f c c b b a 
        c a b c 8 6 c c a a a b b c b c 
        c a c f f a c c a f a c c c b . 
        c a 8 f c c b a f f c b c c c . 
        . c b c c c c b f c a b b a c . 
        . . a b b b b b b b b b b b c . 
        . . . c c c c b b b b b c c . . 
        . . . . . . . . c b b c . . . . 
        `, 0, 50)
    asteroid.x = randint(0, scene.screenWidth())
    asteroid.setKind(SpriteKind.Enemy)
})
forever(function () {
    music.playMelody("C5 C C5 C C5 B C5 C ", 500)
})
game.onUpdateInterval(10000, function () {
    Heart = sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . 2 2 . . . . . . 2 2 . . . . 
        . . 2 2 2 2 . . . . 2 2 2 2 . . . 
        . 2 2 1 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 1 1 2 2 2 2 4 2 2 2 2 2 2 2 2 
        2 1 1 1 2 2 c 2 2 2 5 2 2 2 2 2 2 
        2 2 1 1 2 2 2 2 7 2 2 2 2 2 2 2 2 
        . 2 2 1 2 b 2 7 7 7 2 9 2 2 2 2 . 
        . . 2 2 2 2 2 2 7 2 2 2 2 2 2 . . 
        . . . 2 2 2 d 2 2 2 6 2 2 2 . . . 
        . . . . 2 2 2 2 8 2 2 2 2 . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . 2 . 
        . . . . . . . 2 2 2 . . . . . . . 
        `, SpriteKind.Life)
    asteroid.x = randint(0, scene.screenWidth())
    Heart.setKind(SpriteKind.Life)
    mySprite.sayText("+1 Heart Added", 2000, true)
})
