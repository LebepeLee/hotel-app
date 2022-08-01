import {useState} from 'react'
import { DateRange } from 'react-date-range'
import {FaBed, FaUser,FaRegCalendarAlt} from 'react-icons/fa';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from 'date-fns'
import './Banner.css'

export default function Banner() {
    const [openDate,setOpenDate] = useState (false)
    const [date,setDate] = useState ([
        {
            startDate: new Date (),
            endDate: new Date(),
            key: 'selection'
        }
    ])

        const [openFilter,setOpenFilter] = useState (false)
        const [filter,setFilter] = useState({
            adult:1,
            children:0,
            room:1

        })

        function handleFilter  (name,operation) {
            setFilter((prev)=>{
            return{
                ...prev,[name]:operation ==='i' ? filter[name] +1: filter[name]-1,
            }
        })}

    return(
        <div className='banner' >
            <div className='bannerContainer'>
                <h3 className='name'>HarmonyBooking.com</h3>
                <div className='bannerItems'>
                    <button className='login'>Login</button>
                    <button className='signUp'>Sign Up</button>
                </div>
            </div>
            <h1 className='headerTitle'>Welcome to HarmonyBooking</h1>
            <p>Find luxurious hotels with us</p>
            <div className='searchBar'>
                <div className='searchBarItems'>
                    <FaBed className='bannerIcon'/>
                    <input type='text' placeholder='Looking for a hotel?' className='searchInput'/>
                </div>
                <div className='searchItems'>
                    <FaRegCalendarAlt className='bannerIcon'/>
                    <span onClick={()=>setOpenDate(!openDate)} className='searchText'>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                    { openDate && <DateRange 
                        editableDateInputs={true}
                        onChange={item=>setDate([item.selecion])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date'
                        />}
                </div>
                        <div className='searchBarItems'>
                        <FaUser className='bannerIcon'/>
                        <span onClick={()=>setOpenFilter(!openFilter)} className='searchText'>{`${filter.adult} adult . ${filter.children} children . ${filter.room}room`}</span>
                        { openFilter && <div className='filters'>
                            <div className='filtersItems'>
                                <span className='filterText'>Adult</span>
                                <div className='filterCounter'>
                                    <button disabled={filter.adult<=1} className='counterBtn' onClick={()=>handleFilter('adult','d')}>-</button>
                                    <span className='counterNo'>{filter.adult}</span>
                                    <button className='counterBtn' onClick={()=>handleFilter('adult','i')}>+</button>
                                </div>
                                </div>
                                <div className='filtersItems'>
                                <span className='filterText'>Children</span>
                                <div className='filterCounter'>
                                    <button disabled={filter.children<=0} className='counterBtn' onClick={()=>handleFilter('children','d')}>-</button>
                                    <span className='counterNo'>{filter.children}</span>
                                    <button className='counterBtn' onClick={()=>handleFilter('children','i')}>+</button>
                                </div>
                                </div>
                                <div className='filtersItems'>
                                <span className='filterText'>Room</span>
                                <div className='filterCounter'>
                                    <button disabled={filter.room<=1} className='counterBtn' onClick={()=>handleFilter('room','d')}>-</button>
                                    <span className='counterNo'>{filter.room}</span>
                                    <button className='counterBtn' onClick={()=>handleFilter('room','i')}>+</button>
                                </div>
                                </div>
                                </div>}
                        </div>
                        <button className='searchBtn'>Search</button>
            </div>
        </div>
    )




}

    
   
