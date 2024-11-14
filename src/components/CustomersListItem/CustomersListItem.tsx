import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { useForm } from "react-hook-form";

const CustomersListItem = () => {
  const { t } = useTranslation();
  // const { register, handleSubmit, reset } = useForm();
  return (
    <>
      <Link to="../customers" className="px-3 py-1 font-bold border mb-2">
        {t("ns:text.navigation.back")}
      </Link>
      <Tabs defaultFocus={true} className="">
        <TabList className="flex justify-around">
          <Tab className="focus:bg-accent focus:text-primary focus:font-bold border-solid border-2 border-bgMain w-full text-center">
            {t("ns:text.tabs.main")}
          </Tab>
          <Tab className="focus:bg-accent focus:text-primary focus:font-bold border-solid border-2 border-bgMain w-full text-center">
            {t("ns:text.tabs.contacts")}
          </Tab>
          <Tab className="focus:bg-accent focus:text-primary focus:font-bold border-solid border-2 border-bgMain w-full text-center">
            {t("ns:text.tabs.debts")}
          </Tab>
          <Tab className="focus:bg-accent focus:text-primary focus:font-bold border-solid border-2 border-bgMain w-full text-center">
            {t("ns:text.tabs.contracts")}
          </Tab>
        </TabList>

        <TabPanel>
          <h3>{t("ns:field.name")}</h3>
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
