import React from 'react'
import './product02.css';
import { useStateValue } from './StateProvider';

function Product02({id, title , image, price, rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        console.log("장바구니", basket);
    };


	const ar = Array(rating);
	// console.log('어레이는 이겁니다' + ar.fill("ㅋ"));

  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>가격</small>
                <strong>{price}</strong>
                <small>원</small>
            </p>

            <div className='product_rating'>
                {
					Array(rating)
					    .fill()
						.map(() => (
							<p>★</p>
						))
				}
            </div>
        </div>

        <img src={image} alt='' />
        <button className='product_button' onClick={addToBasket}>장바구니에 담기</button>
    </div>
  )
}

export default Product02