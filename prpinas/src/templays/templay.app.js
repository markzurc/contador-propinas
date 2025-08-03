import { renderValidadorZero } from "./services/render-componets.app";
import { renderTotales } from "./services/render-componets.app";


export const renderTeamplay = (render) => {

    const teamplay = `
    <form class="contenedor-formulario" action="">
    <h1> Propinas</h1>
    <p>Ingrese el monto de la factura y el porcentaje de propina para calcular el total.</p>
    <label>Importe de la factura:</label>
    <input type="number"  id="cantidad-cuenta" min="0" max="10000">
    <label>Porcentaje de propina:</label>
    <input type="number" name="" id="porcentaje" min="0" max="100">
    <input class="calcular" type="button" value="CALCULAR">
    
    <div class="alinear-totales">
    <div class="total">Propina sugerida: <span class="res"></span></div>
    <div class="total-apa">Total: <span class="render-pagar"></span></div>
    </div>
    </form>

    `;
    render.innerHTML = teamplay;


    const cuentaEntrada = document.querySelector("#cantidad-cuenta"),
        btnCalcular = document.querySelector(".calcular"),
        procentajeEntrada = document.querySelector("#porcentaje"),
        totalApagarr = document.querySelector(".render-pagar"),
        total = document.querySelector(".res");

    const totalCalculado = localStorage.getItem("totalCalculado");
    const cuentaFinals = localStorage.getItem("cuentaFinals");

    if (totalCalculado && cuentaFinals) {
        total.innerText = `$${totalCalculado}`;
        totalApagarr.innerText = `$${cuentaFinals}`;
    }




    btnCalcular.addEventListener('click', () => {
        const entradaCuenta = cuentaEntrada.value * 1;
        const entradaPorcentaje = procentajeEntrada.value * 1;
        renderTotales(totalApagarr, total, entradaCuenta, entradaPorcentaje);
        renderValidadorZero(entradaCuenta, entradaPorcentaje, cuentaEntrada, procentajeEntrada);

    });





}