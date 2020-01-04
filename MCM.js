export default `var M, S;

async function MCM(p) {
    var n = p.length

    let tmp = new Array(n);
    M = new Array(n);
    S = new Array(n);

    for (let i=0;i<n;++i){
        M[i] = new Array(n);
        S[i] = new Array(n);
        for (let j=0;j<n;++j){
            M[i][j] = 0;
            S[i][j] = 0;
        }
    }

    console.table(M);

    for (let l=2;l<n;++l){
        for (let i=1;i<(n-l+1);++i){
            let j = l + i - 1;
            M[i][j] = Number.POSITIVE_INFINITY;
            for(let k=i;k<j;++k){
                let q = M[i][k] + M[k+1][j] + (p[i-1]*p[k]*p[j]);
                // console.table(M);
                // console.log(\"i\"+ i + \"j\" + j + \"q = \" + q)
                if (q < M[i][j]){
                    M[i][j] = q;
                    S[i][j] = k;
                }
            }
        }
    }
}

async function PrintMCS (i,j){
    if(i == j){
        process.stdout.write(\"A\" + i);
    }
    else {
        process.stdout.write('(');
        await PrintMCS(i,S[i][j]);
        await PrintMCS(S[i][j]+1, j);
        process.stdout.write(')');
    }
}

(async () => {
    var p = [1,2,3,4];
    await MCM(p);
    console.table(M);
    console.table(S);
    await PrintMCS(0,3);
})();
`;