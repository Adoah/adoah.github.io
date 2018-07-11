var tree = [];
var counter = 0;

function setup() {
    createCanvas(1200, 900);
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
        if (counter == 0) {
            var a = createVector(width / 2, height);
            var b = createVector(width / 2, height - 200);
            tree[0] = new branch(a, b, 200);
        }
        else {
            for (var i = tree.length - 1; i >= 0; i--) {
                if (counter <= 9) {
                    var tmp = tree[i].generateBranches();

                    tree.push(tmp[0]);
                    tree.push(tmp[1]);
                    tree.push(tmp[2]);
                    tree.push(tmp[3]);
                }
                tree[i].finished = true;
            }
        }
        counter++;
    }
    if (event.delta < 0) {
        console.log(counter);
        for (var i = tree.length - 1; i >= 0; i--) {
            if (8 - tree[i].getThickness() == counter) {
                tree.splice(i, 1);
            }
        }
        if (counter >= 0) {
            counter--;
        }
    }
}