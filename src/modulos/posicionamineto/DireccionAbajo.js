
import Posicionamiento from "./Posicionamiento";
import Desplazar from "./Desplazar";

class DireccionAbajo  {
    static posicionar(origen, ele,mueca = false) {
        return Desplazar.ejecutar(origen, ele, Posicionamiento.puedeAbajo, Posicionamiento.posicionarAbajo, mueca, "mueca-arr")
    }
}

export default DireccionAbajo;