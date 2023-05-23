

 function findWord(dog_string, dog_names){
    let new_string = dog_string.split(/(\w+)/);

    for (let i = 0; i < new_string.length; i++){
        for(let k = 0; k < dog_names.length; k++){
            if (dog_names[k] == new_string[i]){
                console.log( 'Matched dog_name')
                return undefined
            }
        }
    }
    console.log( 'No matches')
    return undefined
 }

 let findWord2 = (dog_string, dog_names) =>{
    let new_string = dog_string.split(/(\w+)/);

    for (let i = 0; i < new_string.length; i++){
        for(let k = 0; k < dog_names.length; k++){
            if (dog_names[k] == new_string[i]){
                console.log( 'Matched dog_name')
                return undefined
            }
        }
    }
    console.log( 'No matches')
    return undefined
 }


 let findWord3 = function(dog_string, dog_names){
    let new_string = dog_string.split(/(\w+)/);

    for (let i = 0; i < new_string.length; i++){
        for(let k = 0; k < dog_names.length; k++){
            if (dog_names[k] == new_string[i]){
                console.log( 'Matched dog_name')
                return undefined
            }
        }
    }
    console.log( 'No matches')
    return undefined
 }
let string = "Hello Max, my name is Dog, and I have purple eyes!";
let names = ["Max","HAS","PuRple","dog"];

console.log(findWord(string, names))
console.log(findWord2(string, names))
console.log(findWord3(string, names))

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}

let replaceEvens1 = function(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}


let replaceEvens2 = arr =>{
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}


let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

console.log(replaceEvens(given_arr))
console.log(replaceEvens1(given_arr))
console.log(replaceEvens2(given_arr))

