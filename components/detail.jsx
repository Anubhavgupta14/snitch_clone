import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { FiMinus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const detail = () => {
    const [qty, setqty] = useState(1);
    const [active, setactive] = useState(false);
    const [active_offer, setactive_offer] = useState(false);
    const [active_desc, setactive_desc] = useState(false);
    const qty_change=()=>{

    }
    const data = [
        {
            img:'https://www.snitch.co.in/cdn/shop/files/NOTAGT-SHIRT163.jpg?v=1691775881&width=1800'
        },
        {
            img:'https://www.snitch.co.in/cdn/shop/files/CloseCall.jpg?v=1691679665&width=1800'
        },
        {
            img:'https://www.snitch.co.in/cdn/shop/files/4MSS2199-07-M149.jpg?v=1691775881&width=1800'
        },
        {
            img:'https://www.snitch.co.in/cdn/shop/files/4MSS2199-07-M138.jpg?v=1691775881&width=1800'
        },
    ]
  return (
    <div className='detail-main'>
        <div className='div-photo'>
            <div className='more-img'>
            {data.map((el, i) => (
                <div className='imgs' >
                    <Image src={el.img} width={87} height={130}/>
                </div>
            ))}
                
            </div>
            <div className='main-img'>
                <Image width={604} height={906} src='https://www.snitch.co.in/cdn/shop/files/CloseCall.jpg?v=1691679665&width=1800'/>
            </div>
        </div>
        <div className='detail'>
            <div className='heading'>
                <h2 className='detail-head'>CLOSE CALL</h2>
                <p className='detail-p'>Rs.1,199</p>
                <div className='br2'></div>
                <p className='detail-p2'>QUANTITY</p>
                <div className='qty-detail'>
                    <div className='btn' onClick={()=>{setqty(qty+1)}} style={{cursor:'pointer'}}><FaPlus /></div>
                    <div className='btn1'><p>{qty}</p></div>
                    <div className='btn' onClick={()=>{if(qty>1){setqty(qty-1)}}} style={{cursor:'pointer'}}><FiMinus /></div>
                </div>
                <p className='detail-p2'>SIZE</p>
                <div className={active ? 'detail-size sz':'detail-size'} onClick={()=>{setactive(true)}} >100ml</div>
                <div className='desc matter'>
                    <p style={{textAlign:'center', marginBlock:'2vh', cursor:'pointer'}} onClick={()=>{setactive_offer(!active_offer)}} className='detail-p2'>OFFERS FOR YOU <span><IoIosArrowDown className={active_offer?'detail-arrow arrow':'detail-arrow'}/></span></p>
                    <div className={active_offer?'matter':'matter dis'}>
                        <p style={{fontSize:'16px', fontWeight:'600', marginBottom:'1vh'}}>BUY 1 GET 1 FREE!</p>
                        <p style={{fontSize:'16px', marginBottom:'1vh'}}>Use Code : LIKEABOSS</p>
                        <p style={{fontSize:'16px', marginBottom:'1vh'}}>Hurry! Limited Period Offer.</p>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default detail