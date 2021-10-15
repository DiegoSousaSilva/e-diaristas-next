import type { NextPage } from "next";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "../ui/components/data-display/PageTitle/PageTitle";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais de sua localidade"
        }
      />
      <UserInformation
        name="Diego Sousa"
        rating={4}
        picture="https://github.com/DiegoSousaSilva.png"
        description="Imperatriz MA"
      />
    </div>
  );
};

export default Home;
