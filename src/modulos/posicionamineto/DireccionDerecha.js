
import Posicionamiento from "./Posicionamiento";
import Desplazar from "./Desplazar";

class DireccionDerecha  {
    static posicionar(origen, ele,mueca = false) {
        return Desplazar.ejecutar(origen, ele, Posicionamiento.puedeDerecha, Posicionamiento.posicionarDerecha, mueca, "mueca-izq")
    }
}

export default DireccionDerecha;