import  {Auto}  from "./autouserreducers"
import  {Autodashbord}  from "./autodashbordreducers"


import { combineReducers } from "redux";
const rootreducer=combineReducers({Auto,Autodashbord});
export default rootreducer
