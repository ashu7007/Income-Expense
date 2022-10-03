import React, {useState, useEffect, useContext} from 'react';
import {TransactionsContext} from '../App.js'

function SummaryComponent(props) {
    const {income, expense} = useContext(TransactionsContext);

    return (
        <div className='Summary'>
            <div>
                <div> <h3>INCOME</h3></div>
                <div><h3 id='Income'> $ {income.current}</h3></div>
            </div>
            <div> 
                <div> <h3>EXPENSE</h3></div>
                <div> <h3 id='Expense'> $ {expense.current}</h3></div>
            </div>
        </div>
    );
}

export default SummaryComponent;