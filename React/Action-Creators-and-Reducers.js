//Action Creater - People Dropping off a form returns a action with a type and a payload
const createPolicy = (name, ammount) => {
   return {//Action(a form in our analogy)
     type: 'CREAT_POLICY',
     payload: {
       name: name,
       ammount: ammount
     } 
   };
};


const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }; 
};

const createClaim = (name, ammountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload{
    name: name,
    ammountOfMoneyToCollect: ammountOfMoneyToCollect
   }
  };
};

//Reducers (Departments)

const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    //we care about this action (FORM!)
    return [...oldListOFClaims, action.payload];
  }
  //we dont care about this action
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM'){
     return bagOfMoney - action.payload.ammountOfMoneyToCollect;
     }
  else if(action.type === 'CREATE_POLICY' ) {
    return bagOfMoney + action.payload.ammount;
  }
  return bagOfMoney;
  
};

const policies = (listOfPolicies = [] ,action) => {
  if(action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name );
  }
  return listOfPolicies;
};

///Create Redux Store with all reducers 

const { createStore, combineReducers } = Redux

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Phil', 100) );
store.dispatch(createPolicy('Tom', 100) );

store.dispatch(createClaim('Phil', 20) );


console.log( store.getState() )