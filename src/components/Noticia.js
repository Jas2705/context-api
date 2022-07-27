import { Grid, Link } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

// llega por las props las neww
const Noticia = ({noticia }) => {
  // destructuring de lo que necesitamos de neww
  const { urlToImage, description, url, title, source } = noticia 
  return (
    <Grid lg={2}>
      <Card>
        <CardMedia
          component="img"
          height="250"
          image={urlToImage}
          alt={`imagen ${title}`}
        />
      </Card>
    </Grid>
  )
}

export default Noticia