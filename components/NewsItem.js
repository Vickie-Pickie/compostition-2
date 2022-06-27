/**
 * Компонент отвечает за отрисовку каждой новости из NewsList
 * @param {string} icon
 * @param {string} title
 * @param {string} link
 */

function NewsItem (props) {
  const { icon, title, link } = props;
  return (
    <li>
      {icon}
      <a src={link}>{title}</a>
    </li>
  );
}

export default NewsItem;
