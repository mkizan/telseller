import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const CustomersListItem = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Основні</Tab>
          <Tab>Контакти</Tab>
          <Tab>Взаєморозрахунки</Tab>
          <Tab>Договори</Tab>
        </TabList>

        <TabPanel>
          <p>Вкладка основні</p>
        </TabPanel>
        <TabPanel>
          <p>Вкладка контакти</p>
        </TabPanel>
        <TabPanel>
          <p>Вкладка Взаєморозрахунки</p>
        </TabPanel>
        <TabPanel>
          <p>Вкладка Договори</p>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default CustomersListItem;
