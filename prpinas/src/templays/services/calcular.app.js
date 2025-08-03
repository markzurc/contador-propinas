const formulaPorcentage = (totalCuenta, porcentaje) => {
    return (totalCuenta * porcentaje) / 100;;
}

const totalApagar = (totalCalculado, propina) => {
    return totalCalculado + propina;
}

const valida = (entrada) => {
    if (entrada == 0) {
        return "red";
    } else { return "#bab3b3"; }
}


const valide = {
    total: formulaPorcentage,
    tatalA: totalApagar,
    validarBasios: valida
};
export default valide;




