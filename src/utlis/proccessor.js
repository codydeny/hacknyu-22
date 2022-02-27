

let formInputs = {
    age : 18,
    name : 'nameadsdasd'
}

export const processAge = (formInputs)=> {
    console.log(formInputs)
    if(parseInt(formInputs.age) >= 18) {
        return {
            'description' : 'You are 18, some fact',
            type : 'AGE'
        }
    }
    else if(parseInt(formInputs.age) < 18) {
        return {
            'description' : 'You are under 18, some fact',
            type : 'AGE'
        }
    }
}



// export const processAge = (proos.age) =>{
//     if(props.age < 18)
//     {
//         return "minor ";
//     }
//     else if ()
// }

// export const policies = (props.policiy) => {

// }

// export const income = (props.income) => {
//     return income;
// }

// export const instruments = (props.instruments) => {


// }

// export const family = (props.family ) => {

// }