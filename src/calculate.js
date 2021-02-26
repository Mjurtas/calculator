function calculate(one, two, operator) {
    
    switch(operator) {
        case "+": {
          return {next: null, total: (parseInt(two) + parseInt(one)), operator: operator}
        }
        case "-": {
          return {next: null, total: (parseInt(two) - parseInt(one)), operator: operator}
        }
        case "x": {
          return {next: null, total: (parseInt(two) * parseInt(one)), operator: operator}
        }
        case "/": {
            if( one > "0")
          return {next: null, total: (parseInt(two) / parseInt(one)), operator: operator}
          else {
              alert("Dont divide by zero!")
              return {next: null, total: two, operator: operator}
              
          }
        }
        default:
            break;
      
      }
}



export default calculate;
