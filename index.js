// Code your solution in this file!
function distanceFromHqInBlocks(blockNum) {
    return Math.abs(blockNum - 42);
}

function distanceFromHqInFeet(blockNum) {
    return  distanceFromHqInBlocks(blockNum) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}