var a = 10;
var height = 12;
var width = 20;
function wallPaint(a, height, width) {  
    var areaOfWall = height * width;   
    if (areaOfWall % a == 0)          
        return areaOfWall / a;
    return (areaOfWall/a)+1;
}
var totalWallPaint = wallPaint(a, height, width);  
console.log(totalWallPaint);