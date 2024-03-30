import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

export const Categories = () => {
    return (
        <div className='categories'>
            <div className='col'>
                <div className='row'>
                    <img src='https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    <button><Link className='link' to='/products/1'>Women</Link></button>
                </div>
                <div className='row'>
                    <img src='https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    <button><Link className='link' to='/products/1'>Men</Link></button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img src='https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                    <button><Link className='link' to='/products/1'>New Arrival</Link></button>
                </div>
            </div>
            <div className='col col-l'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <img src='https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                            <button><Link className='link' to='/products/1'>Shoes</Link>
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <img src='https://images.unsplash.com/photo-1612902457652-33aff0a641fa?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                            <button>
                                <Link className='link' to='/products/1'>Accesories</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <img src='https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=1507&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                    <button><Link className='link' to='/products/1'>Electronics</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
