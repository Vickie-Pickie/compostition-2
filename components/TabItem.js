/**
 * Компонент отвечает за отрисовку каждого заголовка из TabList
 * @param {string} title
 * @param {string} link
 */

function TabItem (props) {
  const { title, link } = props;
  return (
    <li>
      <a src={link}>
        {title}
      </a>
      </li>
  );
}

export default TabItem;
