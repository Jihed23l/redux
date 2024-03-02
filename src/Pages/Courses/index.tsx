import { NavLink } from "react-router-dom"
import Course from "../../Components/Course"
import { courses } from "../../util/constant"
import './index.css'
export default function Courses(){


   return (
    <div className="courses">
        {
            courses?.length>0 && courses?.map(({title,price,id})=>(
                   <Course title={title} price={price} id={id}/>
            ))
        }
    </div>
   ) 
}