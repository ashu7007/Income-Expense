import React, {useContext} from 'react';

import {TransactionsContext} from '../App.js'
import ItemComponent from './ItemComponent.js';

function HistoryComponent(props) {
    const {transactions, setTransactions} = useContext(TransactionsContext);

    const onClickHandler = (e)=>{
        alert("click OK to delete");
        setTransactions([...transactions.splice(parseInt(e),1)]);
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