function sockMerchant(n, ar = []) {
    
    let pares = 0;

    for (let i = 0; i < n; i++) {
        for (let c = 1; c < ar.length; c++) {
            if (i !== c && ar[i] === ar[c] && ar[i] !== undefined) {
                pares++;
                delete ar[i];
                delete ar[c];
            }
        }
    }
    console.log(pares);
}

sockMerchant(13, [1, 2, 3, 4, 5, 6, 7, 1, 1, 2, 3, 3, 3]);