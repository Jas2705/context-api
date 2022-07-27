import { createContext, useEffect, useState } from "react"
import axios from "axios"

// primer paso: crear el contexto
// puede ser un context global
const NewsContext = createContext()

/*segundo paso: crear el provider (como vamos a llegar al conext) 
y como lo vamos a usar
con el children mostramos todos los hijos

el provider contiene y expone el estado para poder acceder al contexto*/

const NewsProvider = ({children}) => {
  // valor para el estado para la categoria
  const [categoria, setCategoria] = useState("general")

  // estado para guardar las noticias que nos devuelve la API
  const [noticias, setNoticias] = useState([])

  // funcion para manejar el cambio del valor que esta en categoria
  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  }

  /* efecto secundario para que cada que se seleccione una
  categoria, se consulte a la API*/
  useEffect(() => {
    /*promesa consultar la api (se puede cumplir o no)
    axios: codigo asincrono
    async - await: convertir en un codigo mas simple
    llamado async (esperamos una promesa, se queda esperando hasta que resuelva)
    await: resultado de la promesa (esperar a que se resuelva la promesa)*/
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=80a2ecccf1044b75b32556bc5f595605`
      const { data } = await axios(url)
      setNoticias(data.articles)
      // console.log(data.articles)
    };
    consultarAPI()
  }, [categoria])

  return(
    // estados globales (se veran en todos los componentes)
    <NewsContext.Provider value={{categoria, handleChangeCategoria, noticias}}>
      {children}
    </NewsContext.Provider>
  )
}

export {NewsProvider}
export default NewsContext
