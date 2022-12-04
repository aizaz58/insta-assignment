import {useRef,useReducer,useState} from "react"
import { useQuery } from 'react-query'
import axios from '../api/axios'
import { initialState, userReducer } from "../features/useReducer"
const LOGIN_URL="users"
const UseUserDetail = (id) => {
      
    const query= useQuery(["userDetail",id],async(id)=>{
        const res=await axios.get(`${LOGIN_URL}/${id}`)
        debugger
        return res.data
    })
  return query
}

export default UseUserDetail