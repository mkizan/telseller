import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="my-3 mx-3">
      <p className="text-center">{t("ns:homeTitle")}</p>
    </div>
  );
};

export default Home;
