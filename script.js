var tree = [];
var counter = 0;
var maxHeight;

function setup() {
    createCanvas($(document).width(), $(window).height());
    console.log(heightSteps);
}

function draw() {
    background(51);
    for (var i = 0; i < tree.length; i++) {

        tree[i].show();
    }
}

function mouseWheel(event) {
    //scrolling down
    if (event.delta > 0) {
        if (counter == 0) {
            maxHeight = (height / 3);
            var a = createVector(width / 2, height);
            var b = createVector(width / 2, height - height / 3);
            tree[0] = new branch(a, b, height / 3);
            console.log(height);
        }
        else {
            for (var i = tree.length - 1; i >= 0; i--) {
                if (counter < 9) {
                    var tmp = tree[i].generateBranches();
                    tree.push(tmp[0]);
                    tree.push(tmp[1]);
                    tree.push(tmp[2]);
                    tree.push(tmp[3]);
                    tree.push(tmp[4]);
                }
                tree[i].finished = true;
            }
        }
        counter++;
    }
    if (event.delta < 0) {
        console.log(counter);
        console.log(heightSteps);
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





/*
(len > this.maxheight * Math.pow(0.67, 1)) { this.thickness = 8; this.color = stroke('#8000ff') }
        else if (len > this.maxheight * Math.pow(0.67, 2)) { this.thickness = 7; this.color = stroke('#0080ff'); }
        else if (len > this.maxheight * Math.pow(0.67, 3)) { this.thickness = 6; this.color = stroke('#00ffff'); }
        else if (len > this.maxheight * Math.pow(0.67, 4)) { this.thickness = 5; this.color = stroke('#8000ff'); }
        else if (len > this.maxheight * Math.pow(0.67, 5)) { this.thickness = 4; this.color = stroke(0, 255, 255, 130); }
        else if (len > this.maxheight * Math.pow(0.67, 6)) { this.thickness = 3; this.color = stroke(0, 200, 200, 100); }
        else if (len > this.maxheight * Math.pow(0.67, 7)) { this.thickness = 2; this.color = stroke(0, 150, 150, 70); }
        else if (len > this.maxheight * Math.pow(0.67, 8)

        */