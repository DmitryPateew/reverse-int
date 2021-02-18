module.exports = function reverse(n) {
    let mass = n.toString().split('');
    let revertMass = [];
    for (let i = mass.length-1; i >= 0; i--) {
        if (mass[i] === '-') {
        }else {
            revertMass.push(mass[i]);
        }
    }
    let res='';
    for (let el of revertMass) {
        res += el;
    }
    return Number(res);
}
