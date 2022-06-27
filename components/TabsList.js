import TabItem from "./TabItem";

/**
 * Компонент отвечает за отрисовку всего списка заголовков TabItem
 */
function TabsList() {
  const titlesList = [
    {
      title: "",
      link: "",
    },
  ];
  return (
    <ul>
      {
        titlesList.map((title, index) =>
          <TabItem key={index} title={title.title} link={title.link} />)
      }
    </ul>
  );
}

export default TabsList;
