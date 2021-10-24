import { Button, Typography } from "@mui/material";
import { FormElementsContainer } from "@styles/pages/index.style";
import type { NextPage } from "next";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "../ui/components/data-display/PageTitle/PageTitle";
import TextFieldMask from "../ui/components/inputs/TextFieldMask/TextFieldMask";

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
      <FormElementsContainer>
        <TextFieldMask
          variant="outlined"
          label={"Digite seu CEP"}
          fullWidth
          mask={"99.999-999"}
        />
        <Typography color="error">CEP Invalido!</Typography>

        <Button variant="contained" color="secondary" sx={{ width: "220px" }}>
          Buscar
        </Button>
      </FormElementsContainer>

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
