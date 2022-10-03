import React, {useState, useEffect, useContext} from 'react';
import {TransactionsContext} from '../App.js'


function BalanceComponent(props) {
    const {transactions,setTransactions, income, expense} = useContext(TransactionsContext);
    // var [balance, setBalance] = useState(0);

    // const sumVal = (total,num) =>{
    //     return total + parseInt(Object.values(num));
    //   }

    // const calBalance = () =>{
    //     setBalance(transactions.reduce(sumVal,0))
    // } 

    // useEffect(calBalance,[transactions]);
    return (
        <div className='Balance'>
            <div id='balhead'>your balance</div>
            <div id="bal">${parseInt(income.current) + parseInt(expense.current)}</div>
        </div>
    );
}

export default BalanceComponent;