const redux=require('redux');
const createstore=redux.createStore;

/// first step for redux is create Store.

///// second step for redux is create action or function to return dispatch function.
function Buybooks(){

    return{
        type:'buybook',
        info:"my first Redux React"
    }
}
/// intialize store data for redux.
 const initialState = {
    numberofbook:10
}
 /// third step for redux create Reducer for calling create store.
const Reducer =(state = initialState, action) => {
    switch (action.type) {

    case 'buybook':
        
        return {
            ...state,
            numberofbook:state.numberofbook-1};

    default:
        return state; 
    }
}
const store=createstore(Reducer);
console.log('initial store',store.getState());
const unsubscribe=store.subscribe(()=>{console.log('update the store value',store.getState())});
store.dispatch(Buybooks());
store.dispatch(Buybooks());
store.dispatch(Buybooks());
unsubscribe();