import PropTypes from 'prop-types';
import css from "./statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(item => (
          <li key={item.id} className={css.statItem} style={{
          backgroundColor: `${getRandomHexColor()}`
          }}>
            <span>{item.label}</span>
            <span>{item.percentage}</span>
          </li> 
        ))}
      </ul>
    </section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;