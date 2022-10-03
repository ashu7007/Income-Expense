import React, {useContext} from 'react';
import {TransactionsContext} from '../App.js'


function BalanceComponent(props) {
    const {income, expense} = useContext(TransactionsContext);
    return (
        <div className='Balance'>
            <div id='balhead'>your balance</div>
            <div id="bal">${parseInt(income.current) + parseInt(expense.current)}</div>
        </div>
    );
}

export default BalanceComponent;