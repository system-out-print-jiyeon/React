import React from "react";
import { Table, Button } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';


function Cart(props){

    /* state꺼내쓰기 : let 변수 = useSelector(콜백함수) */
    let state = useSelector((state) => state);  /* state : redux에 있던 모든 state */
    /* dispatch하는 더 쉬운 방법 : useDispatch() */
    let dispatch = useDispatch();

    return (
        <div>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.reducer.map((a,i) => {
                            return (
                                <tr key={i}>
                                    <td>{ a.id }</td>
                                    <td>{ a.name }</td>
                                    <td>{ a.quan }</td>
                                    <td>
                                        <Button variant="dark" onClick={() => { dispatch({type : '수량증가', 데이터 : a.id}) }}>+</Button>  {/* 데이터 수정요청을 할 땐 props.dispatch() */}
                                        &nbsp;
                                        {
                                            a.quan <= 1
                                            ? <Button variant="dark" disabled>-</Button>
                                            : <Button variant="dark" onClick={() => { dispatch({type : '수량감소', 데이터 : a.id}) }}>-</Button>
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>

            {   /* state를props화 함수 쓰려면 'props.alert열렸니', 'props.dispatch' 이런식으로 써야됨  */
                state.reducer2 === true
                ? ( <div className="my-alert3">
                        <b>🎉 지금 구매하시면 신규할인 20% 🎉</b> <br/><br/>
                        <Button variant="light" onClick={() => {dispatch({type: '닫기'})}}>닫기</Button>
                    </div>)
                : null
            }
            



        </div>
    )
}

/* 
    --redux store데이터 가져와서 props로 변환해주는 함수
    -- 옛날버전
    --state : store안에 있던 모든 데이터
    
    function state를props화 (state){
    return {
        -- reducer 여러개면 .으로 꺼내와야함
        state : state.reducer,
        alert열렸니 : state.reducer2
    }
}


export default connect(state를props화)(Cart); */

/* ↑ 이 함수보다 state 꺼내 쓰는 더 쉬운 방법 = useSelector() */
export default Cart;














