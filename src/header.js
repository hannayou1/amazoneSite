import React from 'react'
import './header.css';
import { IoSearchOutline } from "react-icons/io5";
import { IoBasket } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

	const [{basket}, dispatch] = useStateValue();


  return (
    <div className='header'>
		<Link to='/'>
        	<img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
        </Link>
		<div className='header_search'>
          <input className='header_search_input' type='text' placeholder='검색어를 입력하세요.' />
       
          <IoSearchOutline className='header_searchIcon' />

        </div>
		<div className='header_nav'>
			<div className='header_option'>
				<span className='header_optionLineOne'>안녕하세요!</span>
				<Link to='/login' className='homelogin'>
					<span className='header_optionLineTwo'>로그인하기</span>
				</Link>
			</div>

			<div className='header_option'>
				<span className='header_optionLineOne'>돌아가기</span>
				<span className='header_optionLineTwo'>주문내역</span>
			</div>

			<div className='header_option'>
				<span className='header_optionLineOne'>반가워요</span>
				<span className='header_optionLineTwo'>구독과좋아요</span>
			</div>

			<Link to='/checkout'>
				<div className='header_optionBasket'>
					<IoBasket className='header_basketIcon' />
					<span className='header_optionLineTwo header_basketCount'>
						{basket?.length}
					</span>
				</div>	
			</Link>
		</div>
    </div>
  )
}

export default Header