import { Button, CircularProgress, Container, Typography } from "@mui/material";
import {
  FormElementsContainer,
  ProfessionalsPaper,
} from "@styles/pages/index.style";
import type { NextPage } from "next";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "../ui/components/data-display/PageTitle/PageTitle";
import TextFieldMask from "../ui/components/inputs/TextFieldMask/TextFieldMask";
import { ProfessionalsContainer } from "../ui/styles/pages/index.style";
import useIndex from "../data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    searchProfessionals,
    error,
    diarist,
    searched,
    loading,
    diaristRemainder,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais de sua localidade"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            variant="outlined"
            label={"Digite seu CEP"}
            fullWidth
            mask={"99.999-999"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {error && <Typography color="error">{error}</Typography>}

          <Button
            onClick={() => searchProfessionals(cep)}
            variant="contained"
            color="secondary"
            sx={{ width: "220px" }}
            disabled={!cepValido || loading}
          >
            {loading ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {searched &&
          (diarist.length > 0 ? (
            (console.log(diarist),
            (
              <ProfessionalsPaper>
                <ProfessionalsContainer>
                  {diarist.map((item, index) => {
                    return (
                      <UserInformation
                        key={index}
                        name={item.nome_completo}
                        rating={item.reputacao}
                        picture={item.foto_usuario}
                        description={item.cidade}
                      />
                    );
                  })}
                </ProfessionalsContainer>
                <Container sx={{ textAlign: "center" }}>
                  {diaristRemainder > 0 && (
                    <Typography sx={{ mt: 5 }}>
                      ...e mais {diaristRemainder}{" "}
                      {diaristRemainder > 1
                        ? "profissionais atendem"
                        : "profissional atende"}{" "}
                      ao seu endereço.
                    </Typography>
                  )}
                  ;
                  <Button variant="contained" color="secondary" sx={{ mt: 5 }}>
                    Contratar um Profissional
                  </Button>
                </Container>
              </ProfessionalsPaper>
            ))
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista na sua região!
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
