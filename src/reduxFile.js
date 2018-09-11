import React, { Component } from 'react';
import {createStore} from 'redux';
export class reduxFile extends Component {
  constructor (props) {
    super(props);
    
  }

  render() {

    //Step 2: Reducer-state n action
    const reducer=function(state,action){
      console.log("action.type,store "+action.type+","+store);
        if(action.type==="ATTACK"){
          console.log("action.type: "+action.type);
            return action.name;
        }
        if(action.type==="GREENATTACK"){
          console.log("action.type: "+action.type);
            return action.name;
        }
        console.log("action.type: "+state);
        return state;
    }

      //Step 1: Store-reducer n state
      const store=createStore(reducer,"Peace");
   
    //Step 3: Subscribe-base
    store.subscribe(()=>{
        console.log("Store is Now: " +store.getState());
    });
    //Step 4: Dispatch action
    store.dispatch({type:"ATTACK",name:"Iron Man"});
    //store.dispatch({type:"GREENATTACK",payload:"HULK"});

    return (
      <div>
        Test
      </div>
    )
  }
};

export default reduxFile;
