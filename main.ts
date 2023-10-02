controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    PacMan.setImage(assets.image`PacMan Left0`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PacMan.setImage(assets.image`PacMan Right0`)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Ghost.setPosition(35, 35)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    if (info.score() == MaxScore) {
        game.gameOver(true)
    }
})
let Prik: Sprite = null
let MaxScore = 0
let Ghost: Sprite = null
let PacMan: Sprite = null
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`level1`)
PacMan = sprites.create(assets.image`PacMan Right0`, SpriteKind.Player)
tiles.placeOnRandomTile(PacMan, assets.tile`transparency16`)
controller.moveSprite(PacMan, 100, 100)
scene.cameraFollowSprite(PacMan)
Ghost = sprites.create(assets.image`Ghost`, SpriteKind.Enemy)
Ghost.setPosition(20, 20)
Ghost.follow(PacMan)
info.setLife(3)
if (info.life() == 0) {
    game.gameOver(false)
}
info.setScore(0)
MaxScore = tiles.getTilesByType(assets.tile`transparency16`).length
for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
    Prik = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Prik, value)
}
