import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <p>
                        총액 ({basket.length} items) : <strong>{value} 원</strong>

                    </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' />체크박스 입니다
                        </small>
                    </>
                )}

                decimalScale={2}    //소수점 둘째자리까지 보여준다
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator = {true}
                prefix={'|'}        

            /> 
            <button>결제하기</button>

            
        </div>
    )
}

export default Subtotal