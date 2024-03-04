import React from 'react'
import Header from './header'
import './checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct02 from './CheckoutProduct02'
import { useStateValue } from './StateProvider'


function Checkout(){
	
 const [{basket}, dispatch] = useStateValue();  //장반구니 정보를 가져오라
 
 return (
    <>
        <Header />
        <div className='checkout'>
            <div className='checkout_left'>
				<img className='checkout_ad' src='https://ssl.pstatic.net/melona/libs/1483/1483564/e709d3a07764a20c3982_20240207160609926.jpg'/> 
				<div>
					<h2 className='checkout_title'>
						장바구니입니다.
					</h2>
					{basket.map(item => (
						<CheckoutProduct02 id={item.id} title={item.title} image={item.image} rating={item.rating} price={item.price} />
					))}
				
					
	
				</div>
			</div>

			<div className='checkout_right'>
				<Subtotal />
			</div>

			
        </div>
    </>
  )
}

export default Checkout