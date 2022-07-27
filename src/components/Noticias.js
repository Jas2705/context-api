import { Grid, Typography } from "@mui/material"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack";
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

const Noticias = () => {
  // traigo lo que necesito del context
  const {noticias} = useNoticias()
  console.log(noticias)

  return (
    <>
      <Typography align="center" marginY={5} component="h1" variant="h3">
        Listado Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} key={noticia.publishedAt} />
        ))}
      </Grid>
    </>
  );
}

export default Noticias