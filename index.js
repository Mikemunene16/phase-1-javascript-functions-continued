// code your solution here
function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`;
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symb = "*") {
    return function (string = "special") {
        return `You are ${symb}${string}${symb}!`;
    }
}