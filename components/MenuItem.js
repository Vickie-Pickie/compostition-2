/**
 * Компонент отвечает за отрисовку каждого пункат меню из списка MenuList
 * @param {string} title
 * @param {string} link
 */

function MenuItem(props) {
  const { title, link } = props;
  return (
    <li>
      <a src={link}></a>
      {title}
    </li>
  );
}

export default MenuItem;
