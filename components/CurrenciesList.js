import CurrencyItem from "./CurrencyItem";

/**
 * Компонент отвечает за отрисовку всего списка валют
 */
function CurrenciesList() {
  const currenciesList = [
    {
      cur: "",
      rate: 10,
      change: 0.5,
    },
  ];
  return (
    <ul>
      {
        currenciesList.map((currency, index) =>
          <CurrencyItem key={index} currency={currency.cur} title={currency.rate} changes={currency.change}/>)
      }
    </ul>
  );
}

export default CurrenciesList;
