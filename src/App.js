import React, {useState, createContext,useRef} from 'react';
import './App.css';

import AddExpenseComponent from './components/AddExpenseComponent';
import SummaryComponent from './components/SummaryComponent';
import BalanceComponent from './components/BalanceComponent';
import HistoryComponent from './components/HistoryComponent';


export const TransactionsContext = createContext();

function App() {

  const [transactions , setTransactions] = useState([]);
  const income = useRef(0);
  const expense = useRef(0);
    
  return (
    <TransactionsContext.Provider value={{transactions, setTransactions, income, expense}}>
    <div className="Expense">
      <h2 id='title'>Expense Tracker</h2>
      <BalanceComponent></BalanceComponent>
      <SummaryComponent></SummaryComponent>
      <h5 id='his'>History</h5>
      <div id='hisDiv'>
        <HistoryComponent />
      </div>
      <h5 id='his'>Add New Transaction</h5>
      <AddExpenseComponent></AddExpenseComponent>
    </div>
    </TransactionsContext.Provider>
  );
}

export default App;
