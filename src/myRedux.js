import React, { Component } from 'react';
import {createStore} from 'redux';
export default class myRedux extends Component {

    constructor (props) {
      super(props)
      this.state={
          name:'initial'
      }
    }
  render() {
      //2. create reducer and pass state,action
     const reducer = (state = this.state, action) => {
          switch (action.type) {
              case "ATTACK":{
                    return Object.assign({storage:'RAM'},...state,{name:action.payload})
              }
             
              default:
                  return state;
          }
      }
      //1 create Store
    const store=createStore(reducer,this.state);//1. create store and pass reducer and state

    //3. get the state
      store.subscribe(()=>{
          console.log("Store state is: "+JSON.stringify(store.getState()));
      });
    //4. dispatch action
      store.dispatch({type:"ATTACK",payload:"IRON MAN"});
      //console.log("Store state is: "+JSON.stringify(store.getState()));
    return (
      <div>
        My Redux
      </div>
    )
  }
};
