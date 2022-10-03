import React, {useState, useEffect, useContext} from 'react';
import {TransactionsContext} from '../App.js'

function AddExpenseComponent(props) {
    const {transactions, setTransactions, income, expense} = useContext(TransactionsContext);
    const [formData, setFormData] = useState({"Text":"","Amount":0})

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});

    }

    const addItems = (item)=>{
        let {Amount, Text} = item
        setTransactions([...transactions,{[Text]:Amount}])
        if (parseInt(Amount)>0){
            console.log(parseInt(Amount)>0);
            debugger;
            income.current =income.current + parseInt(Amount);
        }
        else{
            expense.current =expense.current + parseInt(Amount);
        }
    } 

    const onClickHandler = () => {
        addItems(formData);
        setFormData({"Text":"","Amount":0})
    }

   
    return (
        <div>
                <label for="fname">Text </label><br/>
                <input placeholder='Enter text...' className='Addinput' type="text" id="text" name="Text" value={formData.Text} onChange={onChangeHandler}/><br/>

                <label for="lname">Amount (negative-expense, positive-income)</label><br/>
                <input className='Addinput' type="number" min="-999999" max="999999" id="amount" name="Amount" value={formData.Amount} onChange={onChangeHandler}/><br/><br/>
                <input type="submit" onClick={onClickHandler} id="addbutton" value="Add Transaction"/>
           
        </div>
    );
}

export default AddExpenseComponent;