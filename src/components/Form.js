import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import useNoticias from '../hooks/useNoticias'

const Categorias = [
  {value:"general", label:"General"},
  {value:"business", label:"Negocios"},
  {value:"entertainment", label:"Entretenimiento"},
  {value:"healths", label:"Salud"},
  {value:"cience", label:"Ciencia"},
  {value:"sports", label:"Deportes"},
  {value:"technology", label:"Tecnología"},
]
const Form = () => {
  // para acceder a hook y luego al estado
  const { categoria, handleChangeCategoria } = useNoticias()

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>
          Categorias
        </InputLabel>
        <Select label="Categorias" value={categoria} onChange={handleChangeCategoria}>
          {Categorias.map((categoria)=>(
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>

      </FormControl>
    </form>
  )
}

export default Form