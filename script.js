var tree = [];
var counter = 0;

function setup() {
    createCanvas(1200, 900);
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 200);
    var root = new branch(a, b);
    tree[0] = root;
}

function draw() {
    background(51);
    for (var i = 0; i < tree.length; i++) {

        tree[i].show();
    }
}

function mouseWheel(event) {
    //scrollind down
    if (event.delta > 0) {
        counter++;
        for (var i = tree.length - 1; i >= 0; i--) {
            if (!tree[i].finished && counter <= 9) {
                tree[i].defineThickness(9 - counter);
                var tmp = tree[i].generateBranches();

                tree.push(tmp[0]);
                tree.push(tmp[1]);
                tree.push(tmp[2]);
                tree.push(tmp[3]);
            }
            tree[i].finished = true;
        }
    }
    if (event.delta < 0) {

    }
}