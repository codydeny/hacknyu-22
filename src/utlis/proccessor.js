let majorFact='You are 18,'
let nonMajorFact='You are under 18,'
let loanFact=''
let nonLoanFact=''
let employedFact=''
let nonEmployedFact=''
let financialInstruments=''
let nonFinancialInstrumentsFact=''
let familyFact=''
let nonFamilyFact=''
let insuranceFact=''
let nonInsurancesFact=''
let carFact=''
let nonCarFact=''
let incomeFact=''
let nonIncomeFact=''
let houseFact=''
let nonHouseFact=''
class Person {
    constructor(props)
    {
        console.log(props)
        const {age,employed,mutualFunds,loan,family,insurance,car,income,house} = props
        // const {age,employed,loan,financialInstruments,family,insurance,car,income,house} = props

    }
    
    isMajor() {
        if(parseInt(this.age) >=18)
        {
            return true
        }
      return false
    }
    processAge(){
        if(this.isMajor()) {
            return {
                'description' : majorFact,
                type : 'AGE'
            }
        }
        else{
            return {
                'description' : nonMajorFact,
                type : 'AGE'
            }
        }
    }
    isEmployed()
    {
        if(this.employed === 'on') {
            return true
        }
        return false
    }
    processEmployed()
    {
        if(this.isEmployed()) {
            return {
                'description' : employedFact,
                type : 'Employed'
            }
        }
        else{
            return {
                'description' : nonEmployedFact,
                type : 'Employed'
            }
        }
    }
    processLoan()
    {
        if(this.loan === 'on') {
            return {
                'description' : loanFact,
                type : 'Loan'
            }
        }
        else{
            return {
                'description' : nonLoanFact,
                type : 'Loan'
            }
        }
    }
    
    processFinancialInstruments()
    {
        if(this.mutualFunds == 'on') {
            console.log('Debugging If statements work properly')
            return {
                'description' : financialInstruments,
                type : 'Finanical'
            }
        }
        else{
            return {
                'description' : nonFinancialInstrumentsFact,
                type : 'Finanical'
            }
        }
    }
    processFamily()
    {
        if(this.family === 'on') {
            return {
                'description' : familyFact,
                type : 'Family'
            }
        }
        else{
            return {
                'description' : nonFamilyFact,
                type : 'Family'
            }
        }
    }
    processInsurance()
    {
        if(this.insurance === 'on') {
            return {
                'description' : insuranceFact,
                type : 'Family'
            }
        }
        else{
            return {
                'description' : nonInsurancesFact,
                type : 'finanical'
            }
        }
    }
    processCar()
    {
        if(this.car === 'on') {
            return {
                'description' : carFact,
                type : 'Car'
            }
        }
        else{
            return {
                'description' : nonCarFact,
                type : 'Car'
            }
        }
    }
    processIncome()
    {
        if(this.income === 'on') {
            return {
                'description' : incomeFact,
                type : 'Income'
            }
        }
        else{
            return {
                'description' : nonIncomeFact,
                type : 'Income'
            }
        }
    }
    processHouse()
    {
        if(this.house === 'on') {
            return {
                'description' : houseFact,
                type : 'House'
            }
        }
        else{
            return {
                'description' : nonHouseFact,
                type : 'House'
            }
        }
    }
  }
  



export const processObject = (formInputs) =>{
    const obj = new Person(formInputs);
    return obj
}

// export const policies = (props.policiy) => {

// }

// export const income = (props.income) => {
//     return income;
// }

// export const instruments = (props.instruments) => {


// }

// export const family = (props.family ) => {

// }