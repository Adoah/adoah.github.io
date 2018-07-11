function branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
    this.thickness = 0;

    this.show = function () {
        strokeWeight(this.thickness);
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);

    }
    //creates two additional branch objescts from the current branch object.
    //maybe combine into one function later on 
    this.branchA = function () {

        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI/5);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);
        var A = new branch(this.end, newEnd);
        return A;
    }
    this.branchB = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI/5);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);
        var B = new branch(this.end, newEnd);
        return B;
    }
    this.branchC = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI/8);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);
        var C = new branch(this.end, newEnd);
        return C;
    }
    this.branchD = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI/8);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);
        var D = new branch(this.end, newEnd);
        return D;
    }
    this.defineThickness = function(thickness){
        this.thickness = thickness;
    }
    this.getThickness = function(){
        return this.thickness;
    }
}