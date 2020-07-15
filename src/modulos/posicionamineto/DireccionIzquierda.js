
import Posicionamiento from "./Posicionamiento";
import Desplazar from "./Desplazar";

class DireccionIzquierda  {
    static posicionar(origen, ele,mueca = false) {
        return Desplazar.ejecutar(origen, ele, Posicionamiento.puedeIzquierda, Posicionamiento.posicionarIzquierda, mueca, "mueca-der")
    }
}

export default DireccionIzquierda;