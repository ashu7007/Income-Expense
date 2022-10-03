import React, {useContext} from 'react';

import {TransactionsContext} from '../App.js'
import ItemComponent from './ItemComponent.js';

function HistoryComponent(props) {
    const {transactions, setTransactions} = useContext(TransactionsContext);

    const onClickHandler = (e)=>{
        console.log(e);
        alert("click OK to delete");
        console.log(transactions);
        transactions.splice(e,1);
        setTransactions(transactions=>[...transactions]);
        console.log(transactions);
    };

    return (
        <div>
            {
                transactions.map((data,index) => {
                    return(<div key={index} onClick={()=>onClickHandler(index)}>
                    <ItemComponent key={index} value={data}></ItemComponent>
                    </div>);
                    })
            }
        </div>
    );
}

export default HistoryComponent;