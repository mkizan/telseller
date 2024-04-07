// import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   fetch("https://typically-polite-moray.ngrok-free.app/cards/infocards")
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <div className="my-3 mx-3">
      <p className="text-center">{t("ns:homeTitle")}</p>
    </div>
  );
};

export default Home;
