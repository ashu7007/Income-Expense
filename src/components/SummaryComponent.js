import React, {useState, useEffect, useContext} from 'react';
import {TransactionsContext} from '../App.js'

function SummaryComponent(props) {
    const {transactions,income, expense} = useContext(TransactionsContext);

    // var [summaryIncome, setSummaryIncome] = useState(0);
    // var [summaryExpense, setSummaryExpense] = useState(0);

    // const sumIncome = (summaryIncome,num) =>{
    //     if (parseInt(Object.values(num))>0)
    //     {
    //     return summaryIncome + parseInt(Object.values(num));
    //     }
    //     else{
    //     return summaryIncome
    //     }
    
    // }

    // const sumExpense = (summaryExpense,num) =>{
    //     if (parseInt(Object.values(num))<0)
    //     {
    //     return summaryExpense + parseInt(Object.values(num));
    //     }
    //     else{
    //     return summaryExpense
    //     }
    // }

    // const calIncome = () =>{
        
    //     setSummaryIncome(transactions.reduce(sumIncome,0));
    // }  

    // const calExpense = () =>{
    //     setSummaryExpense(transactions.reduce(sumExpense,0))
    // }  

    // useEffect(()=>{
    //     calIncome();
    //     calExpense()},[transactions]);  

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