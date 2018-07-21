$('#particles-js').css("background-color", "rgb(0,0,0)");
var tree = [];
var counter = 0;
var maxHeight;
var heightSteps = [];

function setup() {
    createCanvas($(document).width() - 200, $(window).height() - 1);
    maxHeight = $(window).height();
    var count = 0;
    heightSteps[0] = maxHeight / 4 - 1;


    this.doMathRecursively = function (input) {
        heightSteps.push((input * 0.67) - 1);
        count++;
        if (count <= 10) {
            doMathRecursively(input * 0.67);
        }
    }

    doMathRecursively(maxHeight / 4);
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
            var a = createVector(width / 2 - 100, height);
            var b = createVector(width / 2 - 100, height - height / 4);
            tree[0] = new branch(a, b, height / 4);
            console.log(height);
        }
        else {
            for (var i = tree.length - 1; i >= 0; i--) {
                if (counter < 8) {
                    var tmp = tree[i].generateBranches();
                    tree.push(tmp[0]);
                    tree.push(tmp[1]);
                    tree.push(tmp[2]);
                    tree.push(tmp[3]);
                    tree.push(tmp[4]);
                }/*
                else if (counter < 7) {
                    var tmp = tree[i].generateBranches();
                    tree.push(tmp[0]);
                    tree.push(tmp[1]);
                    tree.push(tmp[2]);
                }*/
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