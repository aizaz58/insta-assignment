import React ,{useEffect,useState, useReducer}from 'react'
import { getUser } from '../features/reducers'
import { useSelector } from "react-redux";
import style from "../styles/Login.module.css"
import styles from "../styles/Login.module.css"
import { Col,Card, Container, Row, CardHeader, CardBody, CardTitle, ListGroup, ListGroupItem, CardSubtitle, Button, CardText, Form, Label, Input } from 'reactstrap';
import avatar from "../assests/avatar.jpg"
import test1 from "../assests/test1.png"
import {AiOutlineHome,AiOutlineSearch,AiOutlineHeart,AiOutlineCompass,AiOutlineMenu} from "react-icons/ai"
import {BiMessageRoundedMinus,} from "react-icons/bi"
import {FiPlusSquare} from "react-icons/fi"
import {BsThreeDots} from "react-icons/bs"
import Image from 'next/image';
import { initialState, userReducer } from '../features/useReducer';





import { CgHeart as HeartIcon } from "react-icons/cg";
import { FaHeart as HeartFillIcon } from "react-icons/fa";
import { RiChat3Line as CommentIcon } from "react-icons/ri";
import { FiSend as SendIcon } from "react-icons/fi";
import { BsBookmark as TagIcon } from "react-icons/bs";
import { BsBookmarkFill as TagFillIcon } from "react-icons/bs";
import { IoEllipsisHorizontalSharp as PostMenuIcon } from "react-icons/io5";
import { AiOutlineSmile as SmileIcon } from "react-icons/ai";
import { GoChevronRight as NextIcon } from "react-icons/go";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { useRouter } from "next/router";
import SideMenu from './SideMenu';
import FeedCard from './FeedCard';
import RightCard from './RightCard';
import SearchCard from './SearchCard';
import { UseFetchImages } from '../hooks/useFetchImages';







const PostCard = () => {





const user=useSelector(state=>state.userInfo)
const router=useRouter()
console.log(router)
const [state,dispatch]=useReducer(userReducer,initialState)
const [searchItem, setsearchItem] = useState("")
console.log(state.searchImage ,"postcard")
console.log(searchItem,"ser")
let query
useEffect(() => {
  
}, [searchItem])

query=UseFetchImages(searchItem)

console.log( query?.data?.hits)
  return (
    <>
   
       <SearchCard setSearch={setsearchItem}/>
       {query?.isLoading?<p>loading...</p>:
    query?.data?.hits.map(image=>(
      <FeedCard key={image.id}{...image} />
    ))}
      

    
    </>
  )
}

export default PostCard