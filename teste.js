function birthdayCakeCandles(candles = []) {

    let velas = 0;
    const valorMaximo = Math.max(...candles);

    candles.forEach((valor) => { 
        velas = valorMaximo === valor ? ++velas : velas;
    });

    return velas;
}

console.log(birthdayCakeCandles([1, 2]));