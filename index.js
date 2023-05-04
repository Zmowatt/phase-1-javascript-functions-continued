function saturdayFun(activity = "roller-skate"){
    return 'This Saturday, I want to ' + activity + '!'
}

saturdayFun("go boxing")

function mondayWork(task = "go to the office"){
    return 'This Monday, I will ' + task + '.'
}

mondayWork("call in sick")

function wrapAdjective(visualFlair = '*') {
    return function(descriptor = "special") {
        return `You are ${visualFlair}${descriptor}${visualFlair}!`
    }
}

wrapAdjective("||")("amazing")

