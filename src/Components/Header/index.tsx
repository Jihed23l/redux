import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom'
import './index.css'
import { RootState } from '../../data/store'
import {useSelector} from 'react-redux'
import { useEffect} from 'react'

export default function Header(){
    const {addedItems} = useSelector((state:RootState)=>state.courses)
    
    useEffect( ()=>{
        console.log('ITEMS HAS BEEN CHANGED',addedItems)
    },[addedItems])
  
    return (
        <header>
        <h1>LOGO</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home </NavLink></li> 
                    <li><NavLink to="/aboutus">about us</NavLink></li> 
                    <li><NavLink to="/contactus">contact us</NavLink></li> 
                    <li><NavLink to="/courses">courses</NavLink></li> 
                </ul>     
           </nav>   
        <div className="buttons">
            <button>sign in</button>
            <button>sign up</button>
        </div>
        <div className='cart'>
                <FontAwesomeIcon icon={faCartShopping}/>
                <div id="added-items">{Object.keys(addedItems).length}</div>
        </div>
        </header>
    )
}