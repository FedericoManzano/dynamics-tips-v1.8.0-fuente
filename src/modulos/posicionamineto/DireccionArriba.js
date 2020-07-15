
import Posicionamiento from "./Posicionamiento";
import Desplazar from "./Desplazar";

class DireccionArriba  {
    static posicionar(origen, ele,mueca = false) {
        return Desplazar.ejecutar(origen, ele, Posicionamiento.puedeArriba, Posicionamiento.posicionarArriba, mueca, "mueca-aba")
    }
}

export default DireccionArriba;