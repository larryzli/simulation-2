import URL from '../api';
import axios from 'axios';

const initialState = {
    homes:[],
    desiredRent:0,
    newPropertyName:'',
    newPropertyDescription:'',
    newPropertyAddress:'',
    newPropertyCity:'',
    newPropertyState:'',
    newPropertyZip:'',
    newPropertyImageUrl:'',
    newPropertyLoanAmount:0,
    newPropertyMortgage:0,
    newPropertyDesiredRent:0

};
//getting homes
const SET_DESIREDRENT = "SET_DESIREDRENT";
const GET_HOMES = "GET_HOMES";


//making new home
const SET_NEWPROPERTYNAME_DESC = "SET_NEWPROPERTYNAME_DESC";
const SET_NEWPROPERTYLOCATION = "SET_NEWPROPERTYLOCATION";
const SET_NEWPROPERTYIMAGE = "SET_NEWPROPERTYIMAGE";
const SET_NEWPROPERTYFINANCES = "SET_NEWPROPERTYFINANCES";
const SET_HOME = "SET_HOMES";

export default function(state = initialState, action){
    let {payload} = action;
    switch(action.type){

//getting homes

        case SET_DESIREDRENT + '_FULFILLED':
        return Object.assign({}, state, {desiredRent: payload.desiredRent})
    

        case GET_HOMES + '_FULFILLED':
            return Object.assign({}, state, {homes: payload.homes})

    //making new home


        case SET_NEWPROPERTYNAME_DESC + '_FULFILLED':
            return Object.assign({}, state, {
                newPropertyName: payload.newPropertyName, 
                newPropertyDescription: payload.newPropertyDescription
            })

        case SET_NEWPROPERTYLOCATION + '_FULFILLED':
            return Object.assign({}, state, {
                newPropertyAddress:payload.newPropertyAddress,
                newPropertyCity:payload.newPropertyCity,
                newPropertyState:newPropertyState,
                newPropertyZip:payload.newPropertyZip
            })
        case SET_NEWPROPERTYIMAGE + '_FULFILLED':
            return Object.assign({}, state, {newPropertyImageUrl:payload.newPropertyImageUrl})

        case SET_NEWPROPERTYFINANCES + '_FULFILLED':
            return Object.assign({}, state, {newPropertyLoanAmount:payload.newPropertyLoanAmount, newPropertyMortgage:payload.newPropertyMortgage})

        case SET_HOME + '_FULFILLED':
            return Object.assign({}, state, {
            newPropertyName:payload.newPropertyName,
            newPropertyDescription:payload.newPropertyDescription,
            newPropertyAddress:payload.newPropertyAddress,
            newPropertyCity:payload.newPropertyCity,
            newPropertyState:payload.newPropertyState,
            newPropertyZip:payload.newPropertyZip,
            newPropertyImageUrl:payload.newPropertyImageUrl,
            newPropertyLoanAmount:payload.newPropertyLoanAmount,
            newPropertyMortgage:payload.newPropertyMortgage
        })

        default:return state;
    }
}

function set_DesiredRent(obj, history){
    return{
        type: SET_DESIREDRENT,
        payload: axios.post(URL.set_DesiredRent, obj).then(response =>{
            history.push('')
        }
        
        )
    }
}