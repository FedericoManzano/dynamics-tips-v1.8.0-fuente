import $ from "jquery";
import Posicionamineto from "./Posicionamiento";


class Desplazar {
    static ejecutar(origen, ele, metodoPreguntar,metodoPosicionar, mueca = false, clase) {
        if(metodoPreguntar(origen, ele)) {
            $(ele).css("left",Posicionamineto.reacomodamientoHorizontal(origen,ele))
            $(ele).css("top",Posicionamineto.reacomodamientoVertical(origen,ele))
            if(mueca) {
                let m = $("<span class="+ clase + "></span>")
                $(ele).append(m)
            }
            metodoPosicionar(origen, ele)
            return true 
        }

        return false
    }
}

export default Desplazar