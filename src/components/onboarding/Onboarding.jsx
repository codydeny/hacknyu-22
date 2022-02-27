import ArrowForward from '@mui/icons-material/ArrowForward'
import Verified from '@mui/icons-material/Verified'
import { Alert } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useStore from '../../utlis/customHooks/useStore'
import { processAge } from '../../utlis/proccessor'

export default function Onboarding() {
    const [step, setStep] = React.useState(1)
    const [provider, setProvider] = React.useState('NONE')
    const store = useStore()


    const getAgeFact  = () => {
      let ageFact = processAge(store.state.formInputs)
      return ageFact.description
    }

    return (
    <div class="bg-red-500">
    {step === 1 && <div class="p-4 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" onSubmit={store.formSubmit}>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
        
        <div>
        <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Age</label>
        <input type="number" name="age" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="9027245324" required="" />
        </div>

        <div>
        <label for="fullName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
        <input type="text" name="fullName" id="fullName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="9027245324" required="" />
        </div>

        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next <ArrowForward sx={{fontSize : '19px'}}/> </button>
        </form>
    </div>}

    {store.state?.formInputs.age && <p>{getAgeFact()}</p>}
    {store.state?.formInputs.name}
    </div>
  )
}
