// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
//(someValue >= 42) ? (someValue - 42) : (42 - someValue);  
if(someValue >=42){
    return someValue - 42;
}
else{
    return 42 - someValue;
}
}

function distanceFromHqInFeet(someValue){
    let distance = distanceFromHqInBlocks(someValue);
    return distance * 264;
}
function distanceTravelledInFeet(start, destination){
    return Math.abs((start - destination)*264);
}
function calculatesFarePrice(start, destination){
    //first 400 feet are free
    //400-2000 is 2 cents per foot
    //2000-2500 flat fare (?)
    //over 2500 no go
    if(distanceTravelledInFeet(start, destination)<400){
        return 0;
    }
    else if((distanceTravelledInFeet(start, destination) > 400) && (distanceTravelledInFeet(start, destination)<2000)){
        return ((distanceTravelledInFeet(start, destination))-400) * .02;

    }
    else if ((distanceTravelledInFeet(start, destination) >= 2000)&&(distanceTravelledInFeet(start, destination) < 2500)){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}