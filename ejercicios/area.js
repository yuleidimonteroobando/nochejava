function areaRect(p1, p2, p3, p4) {
    let xs = [p1.x, p2.x, p3.x, p4.x];
    let ys = [p1.y, p2.y, p3.y, p4.y];
    let base = Math.max(...xs) - Math.min(...xs);
    let altura = Math.max(...ys) - Math.min(...ys);
    return base * altura;
}
let A = {x: 25, y: 40};
let B = {x: 10, y: 20};
let C = {x: 25, y: 20};
let D = {x: 10, y: 40};

console.log(areaRectangulo(A, B, C, D));