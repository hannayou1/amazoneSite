import React from 'react'
import './Home.css'
import Product02 from './product02'
import Header from './header'

function Home(){
  return (
    <>
    <Header />
    <div className='home'>
      
        <div className='home-container'>
            <img className='home-image' src='https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg' alt='' />
           
            <div className='home_row'>
                <Product02 
                    id="2323" 
                    title="제품1 입니다." 
                    price={3000} 
                    image="https://www.motorgraph.com/news/photo/202402/33328_104763_179.jpg"
                    rating={4}
                /> 
                <Product02
                    id="2320" title="제품2"
                    price={200}
                    image="https://www.motorgraph.com/news/photo/201910/24006_75909_4825.jpg"
                    rating={3}/>

            </div>

            <div className='home_row'>
                <Product02
                    id="2321" title="제품3"
                    price={5000}
                    image="https://www.autodaily.co.kr/news/photo/201704/335790_17345_2048.jpg"
                    rating={3}/>
                <Product02
                    id="2322" title="제품4"
                    price={2423115515}
                    image="https://post-phinf.pstatic.net/MjAxNzExMTVfOTcg/MDAxNTEwNzMxMjAxNzMw.55ihPnB6d-Y-MuT3cCIgqAiwNlLR5GOIUfUDHwsw68Eg.S-bPeRceHEq_rjEnOiS1RvjphGgnCjuWp6FQFdcL10cg.JPEG/McLaren-720S-2018-1024-03.jpg?type=w1200"
                    rating={3}/>
              
            </div>

            <div className='home_row'>
                <Product02
                    id="2324" title="제품5"
                    price={2425}
                    image="http://img.danawa.com/cp_images/service/103/4109708/97ee2ca2.jpg"
                    rating={3}/>
            </div>

        </div>
    </div>
    </>
  )
}


export default Home