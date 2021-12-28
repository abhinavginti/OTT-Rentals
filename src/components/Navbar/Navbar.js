import React, { useContext } from 'react'
import './navbar.css'
import { AiFillPlusCircle, AiOutlineLogout, AiOutlineLogin, AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Auth'
import rentflixT from '../Images/rentflixT.png'

const Navbar = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <nav className='sticky-top row p-2 m-0 bg-ordark text-light w-100 align-items-center'>
                <div className='col-9 col-md-5'>
                    <Link to='/home' className='d-md-flex justify-content-center align-items-center'><img src={rentflixT} alt='' className='img-fluid mx-auto' id='rentflix-logo' style={{ height: '110px' }} /></Link>
                </div>
                <div className={`${currentUser ? 'col-md-4' : 'col'}  detach-nav`}>
                    <ul className='p-0 h-100 m-0 d-flex justify-content-center'>
                        <li><Link to='/home'><AiOutlineHome className='nav-icons' /></Link></li>
                        {currentUser && <li><Link to='/newpost'><AiFillPlusCircle className='nav-icons' /></Link></li>}
                        {currentUser && <li><Link to='/logout'><AiOutlineLogout className='nav-icons' /></Link></li>}
                        {!currentUser && <li><Link to='/login'><AiOutlineLogin className='nav-icons' /></Link></li>}
                    </ul>
                </div>
                {currentUser ? <div className='col'>
                    <Link to='/account' className='d-flex flex-row align-items-center'>
                        <p className='fw-bold me-2 d-none d-md-block text-light px-2 mb-0'>{localStorage.username}</p>
                        <img src={`https://ui-avatars.com/api/?name=${localStorage.username}&size=40&background=C50707&color=fff`} className='rounded-circle' alt='user image' />
                    </Link>
                </div> : ''}
            </nav>
        </>
    )
}

export default Navbar
