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
    newPropertyDesiredRent:0,
    homesAreLoading:false

};
//getting homes
const SET_DESIREDRENT = "SET_DESIREDRENT";
const GET_HOMES = "GET_HOMES";

const DELETE_HOME = "DELETE_HOME";
//making new home
const SET_NEWPROPERTYNAME_DESC = "SET_NEWPROPERTYNAME_DESC";
const SET_NEWPROPERTYLOCATION = "SET_NEWPROPERTYLOCATION";
const SET_NEWPROPERTYIMAGE = "SET_NEWPROPERTYIMAGE";
const SET_NEWPROPERTYFINANCES = "SET_NEWPROPERTYFINANCES";
const SET_NEWPROPERTYDESIREDRENT ="SET_NEWPROPERTYDESIREDRENT";
const SET_HOME = "SET_HOMES";

export default function(state = initialState, action){
    let {payload} = action;
    switch(action.type){

    //getting homes

        case SET_DESIREDRENT:
        return Object.assign({}, state, {desiredRent: payload})
    
        case GET_HOMES +'_PENDING':
            return Object.assign({},state, {homesAreLoading:true})


        case GET_HOMES + '_FULFILLED':
            return Object.assign({}, state, {homes: payload, homesAreLoading:false})

        case GET_HOMES + '_REJECTED':
            return Object.assign({}, state, {didError:true, homesAreLoading:false, err:payload})




        case DELETE_HOME +'_PENDING':
            return Object.assign({},state, {homesAreLoading:true})


        case DELETE_HOME + '_FULFILLED':
            return Object.assign({}, state, {homes: payload, homesAreLoading:false})

        case DELETE_HOME + '_REJECTED':
            return Object.assign({}, state, {didError:true, homesAreLoading:false, err:payload})


    //making new home


        case SET_NEWPROPERTYNAME_DESC:
            return Object.assign({}, state, {
                newPropertyName: payload.newPropertyName, 
                newPropertyDescription: payload.newPropertyDescription
            })

        case SET_NEWPROPERTYLOCATION:
            return Object.assign({}, state, {
                newPropertyAddress:payload.newPropertyAddress,
                newPropertyCity:payload.newPropertyCity,
                newPropertyState:newPropertyState,
                newPropertyZip:payload.newPropertyZip
            })
        case SET_NEWPROPERTYIMAGE:
            return Object.assign({}, state, {newPropertyImageUrl:payload.newPropertyImageUrl})

        case SET_NEWPROPERTYFINANCES:
            return Object.assign({}, state, {newPropertyLoanAmount:payload.newPropertyLoanAmount, newPropertyMortgage:payload.newPropertyMortgage})


        case SET_NEWPROPERTYDESIREDRENT:
            return Object.assign({}, state, {newPropertyDesiredRent:payload})
        

        case SET_HOME:
            return Object.assign({}, state, {
            // newPropertyName:payload.newPropertyName,
            // newPropertyDescription:payload.newPropertyDescription,
            // newPropertyAddress:payload.newPropertyAddress,
            // newPropertyCity:payload.newPropertyCity,
            // newPropertyState:payload.newPropertyState,
            // newPropertyZip:payload.newPropertyZip,
            // newPropertyImageUrl:payload.newPropertyImageUrl,
            // newPropertyLoanAmount:payload.newPropertyLoanAmount,
            // newPropertyMortgage:payload.newPropertyMortgage

            homes: payload
        })

        default:return state;
    }
}

export function set_DesiredRent(num){
    return{
        type: SET_DESIREDRENT,
        payload: num
    }
}

export function get_Homes(){
    return{
        type:GET_HOMES,
        payload: axios.get('/api/homes').then(response =>{
            console.log(response);
            return response;
        })
    }
}
export function delete_Home(home_id){
    return{
        type:DELETE_HOME,
        payload: axios.delete('/api/homes', {home_id}).then(response =>{
            console.log(response)
            return response;
        })
    }
}
export function step1(name, desc){
    return{
    type:SET_NEWPROPERTYNAME_DESC,
    payload: {
        newPropertyName:name,
        newPropertyDescription:desc
    }
}
}
export function step2(address, city, state, zip){
    return{
        type:SET_NEWPROPERTYLOCATION,
        payload: {
            newPropertyAddress: address,
            newPropertyCity:city,
            newPropertyState:state,
            newPropertyZip:zip
        }
    }
}
export function step3(imageurl){
    return{
        type:SET_NEWPROPERTYIMAGE,
        payload:{
            newPropertyImageUrl:imageurl
        }
    }
}
export function step4(loan, mortgage){
    return{
        type:SET_NEWPROPERTYFINANCES,
        payload:{
            newPropertyLoanAmount: loan,
            newPropertyMortgage:mortgage
        }
    }
}
export function step5(num){
    return{
        type:SET_NEWPROPERTYDESIREDRENT,
        payload:num
    }
}
// export function setNewHome(state){
    
//     return {
//         type: SET_NEWPROPERTYDESIREDRENT,
//         payload: axios.post('/api/homes', {})
//     }
// }