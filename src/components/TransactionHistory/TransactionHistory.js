import PropTypes from 'prop-types';
import TransactionItem from "./TransactionItem";
import css from "./transactionHistory.module.css";

export default function TransactionHistory({items}) { 
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableName}>Type</th>
          <th className={css.tableName}>Amount</th>
          <th className={css.tableName}>Currency</th>
        </tr>
      </thead>

    {items.map(transaction => (
        <tbody className={css.tableBody} key={transaction.id}>
            <TransactionItem 
                key={transaction.id}
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
            />   
        </tbody>
    ))}
    </table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })).isRequired
}