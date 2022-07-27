// hook para consumir el provider para devolver el estado

import { useContext } from "react"
import NewsContext from "../context/NewsProvider"

// 
const useNoticias = () => {
    // recibe el contexto que creamos en el paso 1
  return useContext(NewsContext)
}

export default useNoticias