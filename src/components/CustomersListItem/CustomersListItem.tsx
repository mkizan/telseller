import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { useForm } from "react-hook-form";

const CustomersListItem = () => {
  // const { register, handleSubmit, reset } = useForm();
  return (
    <>
      <button type="button" className="px-3 py-1 font-bold border mb-2">
        <Link to="../customers">Back</Link>
      </button>
      <Tabs defaultFocus={true} className="">
        <TabList className="flex justify-around">
          <Tab className="focus:bg-accent focus:text-primary focus:font-bold border-solid border-2 border-bgMain w-full text-center">
            Основні
          </Tab>
          <Tab className="focus:bg-accent focus:text-primary focus:font-bold border-solid border-2 border-bgMain w-full text-center">
            Контакти
          </Tab>
          <Tab className="focus:bg-accent focus:text-primary focus:font-bold border-solid border-2 border-bgMain w-full text-center">
            Взаєморозрахунки
          </Tab>
          <Tab className="focus:bg-accent focus:text-primary focus:font-bold border-solid border-2 border-bgMain w-full text-center">
            Договори
          </Tab>
        </TabList>

        <TabPanel>
          <p>Вкладка Основні</p>
        </TabPanel>
        <TabPanel>
          <p>Вкладка Контакти</p>
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
