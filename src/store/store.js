import axios from 'axios';
import React from 'react';
import { withSnackbar } from 'notistack';
import {Auth, Firestore as db} from "../firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const StoreContext = React.createContext();

// Then create a provider Component
class StoreProvider extends React.Component {
  constructor(props){
    super(props);
    // Application Global State
    this.state = {
        // State Examples
        mongoAPIKey : "",
        isLoggedIn : localStorage.getItem('token') ? true : false,
        user : [],
        data : "I am Loaded From Global State",
        errors : {},
        firestore : {},
        marketData : {},
        pairsToTrack : [],
        loading : false,
        formInputs : {}

    }
}

  render() {
    return (
      <StoreContext.Provider value = {{ 
        state: this.state,


        formSubmit : (e) => {
          e.preventDefault();
          let formInputToJSON = Object.fromEntries(new FormData(e.target));
          this.setState({formInputs : formInputToJSON })
        },
        // Actions
        // State Mutations
        changeState :(data)=> {
            // change state
            // this.setState({
            //     token : "",
            //     isLoggedIn : true
            //   })
        }, 
      }} 	
        >
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export {StoreContext};

export default withSnackbar(StoreProvider);