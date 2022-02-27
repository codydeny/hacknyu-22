import ArrowForward from '@mui/icons-material/ArrowForward'
import Verified from '@mui/icons-material/Verified'
import { Alert } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useStore from '../../utlis/customHooks/useStore'
import { processAge } from '../../utlis/proccessor'
import { DATA } from '../../utlis/data'

export default function Onboarding() {
    const [step, setStep] = React.useState(1)
    const [provider, setProvider] = React.useState('NONE')
    const store = useStore()

    return (
    <div class="">
    {step === 1 && <div class="p-4 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" onSubmit={(e)=> {
          store.formSubmit(e)
          setStep(2)
        }}>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Provide Info</h3>
        
        <div>
        <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Age</label>
        <input type="number" name="age" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="9027245324" required="" />
        </div>

        <div>
        <label for="fullName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
        <input type="text" name="fullName" id="fullName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="9027245324" required="" />
        </div>

        <select id="cars">
          <option value="volvo">Select Employement Status</option>
          <option value="saab">Employed</option>
          <option value="vw">Not Employed</option>
          <option value="audi" selected>Self-Employed</option>
        </select>
<br/>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1"> I have a health insurance</label><br/>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2"> I have a Life insurance</label><br/>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3"> I have Crypto</label><br/>

        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3"> I have Stocks</label><br/>

        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next <ArrowForward sx={{fontSize : '19px'}}/> </button>
        </form>
    </div>}

    {step === 2 && <div class="">
    <div class="flex p-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
          <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <div>
            <span class="font-medium">Remember</span>, this is not financial advise.
          </div>
    </div>



    <div class="bg-white dark:bg-gray-800 ">
          <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                  <span class="block">
                      Hi {store.state?.formInputs.fullName ? store.state?.formInputs.fullName : 'John Doe'}, <span className="text-indigo-500"> {store.state?.formInputs.age ? store.state?.formInputs.age : '21'}</span>
                  </span>
              </h2>
              <p class="text-xl mt-4 max-w-md mx-auto text-gray-400">
              The average debt of students when they graduated from college rose from $18,550 (in 2004) to $28,950 (in 2014), an increase of 56 percent.
              </p>
              <div class="lg:mt-0 lg:flex-shrink-0">
                  <div class="mt-12 inline-flex rounded-md shadow">
                  <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                      <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                      New
                    </span>
                  </div>
              </div>
          </div>
    </div>

    <div class="bg-white dark:bg-gray-800 dark:border-gray-700">
    <div class="pt-10 text-center bg-white dark:bg-gray-800 dark:border-gray-700">
          <h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">
            You do not have health insaurance
          </h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Understand your chances of visiting hospital
          </p>
      </div>
      <div className=" p-6 flex flex-row bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700">

        <div class=" mx-5 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="https://taxguru.in/income-tax/5-benefits-health-insurance.html">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Why you should get a health insurance</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It is rightly said that health is wealth. Changing lifestyle habits, increase in pollution levels, and many other factors have a severe impact on an individual’s health. This may cause various health conditions and medical diseases.
</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </div>

      </div>

    </div>

    <div class="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
          <div class="mb-16 text-center">
              <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                 People At {store.state?.formInputs.age ? store.state?.formInputs.age : '21'}
              </h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  What You Can Do
              </p>
          </div>
          
          <div class="flex flex-wrap my-12 dark:text-white">
              {DATA.general_by_age["30s"].map((data)=> (
              <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
              <div class="flex items-center mb-6">
                  <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                      </path>
                  </svg>
                  <div class="ml-4 text-xl">
                      {data.name}
                  </div>
              </div>
              <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                  {data.description}
              </p>
          </div>
              ))}

          </div>
      </div>



      <div class="text-center bg-white dark:bg-gray-800">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
           You Have Invested In Crypto
        </h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Understand the risks of cryptocurrencies
        </p>
    </div>
    <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800 flex flex-row pt-10">
      <div class="container mx-auto px-6 p-6 bg-white dark:bg-gray-800 flex flex-row pt-10">
        {[1,2,3].map((i)=> (

        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="https://seekingalpha.com/article/4438320-what-is-cryptocurrency?external=true&gclid=Cj0KCQiA3-yQBhD3ARIsAHuHT66sglOBPtZkZKd0wys-fb-KFglmb1fuYe2rkqXK1UrSzkuOnenCN_YaAp20EALw_wcB&utm_campaign=14996939668&utm_medium=cpc&utm_source=google&utm_term=133908861732%5Edsa-1427141793820%5E%5E554278381100%5E%5E%5Eg" class="w-full block h-full">
                <img alt="blog photo" src="https://im.indiatimes.in/content/2021/Jul/BIG-IMAGE-_60f6bd4615c20.jpg?w=2184&h=1116&cc=1" class="max-h-40 w-full object-cover"/>
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <p class="text-indigo-500 text-md font-medium">
                        Article
                    </p>
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Risk Of Crypto Currency Trading
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                    From an investor point of view, the biggest threat is the investment risk, meaning risk of loss of value of the digital currency itself, which is borne by any investor in digital currencies. Cryptocurrencies have no fundamental value, and therefore could drop to zero at any time.
                    </p>
                </div>
            </a>
        </div>
        ))}
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 dark:border-gray-700">
    <div class="pt-10 text-center bg-white dark:bg-gray-800 dark:border-gray-700">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            As You are young
          </h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Start Early Investing
          </p>
      </div>
      <div className=" p-6 flex flex-row bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700">

        <div class=" mx-5 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="https://zerodha.com/varsity/module/personalfinance/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Explaining Personal Finance</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Personal Finance revolves around planning your financials today so you can have a better tomorrow. This chapter explains the importance of having a personal financial plan and how you can build the sa ..</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </div>

        <div class="mx-5 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="https://zerodha.com/varsity/module/personalfinance/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Index Funds</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A passive fund or an index fund, on the other hand, simply tracks the performance of a benchmark as closely as possible. It does not try to outperform or underperform the benchmark, but just match the returns before costs (expense ratio). Mutual funds have costs, so the return of an index fund, broadly speaking, will be the benchmark returns minus costs.</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </div>

        <div class="mx-5 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="https://zerodha.com/varsity/chapter/introduction-to-mutual-funds/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Introduction to Mutual Funds</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mutual funds have advantages and disadvantages compared to direct investing in individual securities. A share of a mutual fund represents investments in many different stocks (or other securities) ins ..</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </div>
      </div>

    </div>



    </div>}
    </div>
  )
}
