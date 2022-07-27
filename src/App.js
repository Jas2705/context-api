import { Container, Grid, Typography } from "@mui/material"
import Form from "./components/Form"
import Noticias from "./components/Noticias"
import { NewsProvider } from "./context/NewsProvider"

const App = () => {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align="center" variant="h3" component="h1">
            Buscador Noticias
          </Typography>
        </header>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item md={6} xs={12} lg={4}>
            <Form />
          </Grid>
        </Grid>
        <Noticias />
      </Container>
    </NewsProvider>
  )
}

export default App