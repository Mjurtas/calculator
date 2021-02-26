import React from "react";

export const ThemeContext = React.createContext(  
  [{
  id: "ios",
  primaryColor: "rgb(77, 77, 77)",
  onClick: "rgb(39,39,39)",
  secondary: "rgb(221, 144, 0)",
  display: "linear-gradient(white 0%, rgb(189, 189, 189) 100%)"
 },
{
  id: "pink",
  primaryColor: "rgb(255, 191, 245)",
  onClick: "rgb(179, 107, 167)",
  secondary: "rgb(173, 35, 86)",
  display: "linear-gradient(white 0%, rgb(227, 193, 205) 100%)"
},
{

 id: "pastel",
 primaryColor: "rgb(186,255,201)",
 onClick: "rgb(186,225,255)",
 secondary: "rgb(255,179,186)",
 display: "linear-gradient(white 0%, rgb(255,223,186) 100%)" 
}
])


export default ThemeContext;