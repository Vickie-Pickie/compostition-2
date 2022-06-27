import NewsItem from "./NewsItem";

/**
 * Компонент отвечает за отрисовку всех новостей из списка
 */
function NewsList() {
  const newsList = [
    {
      icon: "",
      title: "",
      link: ""
    },
  ];
  return (
    <ul>
      {
        newsList.map((news, index) =>
          <NewsItem key={index} icon={news.icon} title={news.title} link={news.link}/>)
      }
    </ul>
  );
}

export default NewsList;
