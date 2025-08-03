
import valide from "./calcular.app";

export const renderValidadorZero = (entradaCuenta, entradaPorcentaje, cuentaEntrada, procentajeEntrada) => {
    const balidar = valide.validarBasios(entradaCuenta);
    const balidar2 = valide.validarBasios(entradaPorcentaje);
    cuentaEntrada.style.borderColor = balidar;
    procentajeEntrada.style.borderColor = balidar2;

}

export const renderTotales = (totalApagarr, total, entradaCuenta, entradaPorcentaje) => {
    const totalCalculado = valide.total(entradaCuenta, entradaPorcentaje);
    const cuentaFinals = valide.tatalA(entradaCuenta, totalCalculado) * 1;
    localStorage.setItem("totalCalculado", totalCalculado);
    localStorage.setItem("cuentaFinals",cuentaFinals);
    
    totalApagarr.style.fontSize = "20px";
    totalApagarr.innerText = `$${cuentaFinals}`;
    total.style.fontSize = "20px";
    total.innerText = `$${totalCalculado}`;


}
