/**
 * Компонент отвечает за отрисовку каждой валюты
 * @param {string} cur
 * @param {number} rate
 * @param {number} change
 */
function CurrencyItem (props) {
  const { cur, rate, change } = props;
  return (
    <li>{cur}{rate}{change}</li>
  );
}

export default CurrencyItem;
