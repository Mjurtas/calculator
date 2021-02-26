import calculate from './calculate'

function logic(state, value) {

    //Handles clearing
    if (value === 'C') {
      return {
        next: null,
        total: null,
        operator: null
      }
    }
 //handles operators and equals
    else if (isNaN(value)) {
      console.log("inget nummer")
      if (!state.operator)  {
       
        let temp = state.next;
        return {next: null, total: temp, operator: value}
      }

      else if (state.operator && !state.next) {
       
        return {...state, operator: value}
      }

      else if (state.operator && state.next) {
        
        state = calculate(state.next, state.total, state.operator)
        return {...state, operator: value}
      }     
    }

    else if (!isNaN(value)) {
      
        if (value === 0 && !state.next) {
            return {...state, next: "0"}
        }
      else if(state.next === 0 && value === 0) {
        return {next: null};
      }

      if (!state.next)
      {
        return {...state, next: String(value) }  //Kom ihåg: "...state" måste vara först
      }
      
      else {
        return {...state, next: String(state.next + value)}
      }
    }
  }

  export default logic;