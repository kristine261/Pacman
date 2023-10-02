// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020000000000000000000000000000020200010101010100010101010101000202000100000001000000000100000002020001010100010001010101010100020200000001000100000000000001000202000101010001000101010101010002020001000000010000000000000000020200010101000100010101000101000202000000000000000100010000010002020001010101010001000101000100020200000101000100010001010001000202000000010000000100000000010002020001010101010001010101010100020200000000000000000000000000000202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 . 2 2 2 2 2 2 . 2 
2 . 2 . . . 2 . . . . 2 . . . 2 
2 . 2 2 2 . 2 . 2 2 2 2 2 2 . 2 
2 . . . 2 . 2 . . . . . . 2 . 2 
2 . 2 2 2 . 2 . 2 2 2 2 2 2 . 2 
2 . 2 . . . 2 . . . . . . . . 2 
2 . 2 2 2 . 2 . 2 2 2 . 2 2 . 2 
2 . . . . . . . 2 . 2 . . 2 . 2 
2 . 2 2 2 2 2 . 2 . 2 2 . 2 . 2 
2 . . 2 2 . 2 . 2 . 2 2 . 2 . 2 
2 . . . 2 . . . 2 . . . . 2 . 2 
2 . 2 2 2 2 2 . 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,sprites.builtin.forestTiles10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myLabyrint":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
