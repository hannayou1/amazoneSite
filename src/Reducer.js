export const initialState = {
    basket : [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0) 
    //0이 초기값 basekt에 있는 값을 다 더해서 하나의 값을 반환해라 

const reducder = (state, action) => {

    console.log(action);

    switch (action.type) {

        // 장바구니에 더하기
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],    //기존 바스켓 플러스 내가 추가한 아이템을 넣어주겠다
            };

        // 장바구니에서 빼기
        // case 'REMOVE_FROM_BASKET':
        //     console.log(state)
        //     console.log(action)

        //    const index = state.basket.findIndex(
        //     (basketItem) => basketItem.id === action.id
        //    );

        //    let newBasket = [...state.basket];

        //    if(index >= 0){
        //     newBasket.splice(index, 1)
        //    }else{
        //         console.warn(
        //             ' (id: ' +
        //             action.id + 
        //             ')이 장바구니에 존재하지 않습니다.'
        //         )            
        //    }

        //    return {
        //     ...state,
        //        basket: newBasket
        //    }

        case 'REMOVE_FROM_BASKET':
            console.log(state);
            console.log(action);

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    ' (id: ' +
                    action.id +
                    ')이 장바구니에 존재하지 않습니다 '
                )
            }

            return {
                ...state,
                basket: newBasket
            }




            default:
                return state;
    }
}

export default reducder;