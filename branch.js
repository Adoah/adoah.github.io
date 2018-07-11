function branch(begin, end, len) {
    this.begin = begin;
    this.end = end;
    this.len = len;
    this.finished = false;
    this.thickness = 0;

    this.show = function () {
        if (len > 199) { this.thickness = 8; }
        else if (len > 132) { this.thickness = 7; }
        else if (len > 87) { this.thickness = 6; }
        else if (len > 58) { this.thickness = 5; }
        else if (len > 38) { this.thickness = 4; }
        else if (len > 25) { this.thickness = 3; }
        else if (len > 16) { this.thickness = 2; }
        else if (len > 10) { this.thickness = 1; }
        strokeWeight(this.thickness);
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);

    }
    //creates two additional branch objescts from the current branch object.
    //maybe combine into one function later on 
    this.generateBranches = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.mult(0.67);
        dir.rotate(PI / 5);
        var newEndA = p5.Vector.add(this.end, dir);
        var genA = new branch(this.end, newEndA, dir.mag());
        dir.rotate(-PI / 5);
        dir.rotate(-PI / 5);
        var newEndB = p5.Vector.add(this.end, dir);
        var genB = new branch(this.end, newEndB, dir.mag());
        dir.rotate(PI / 5);
        dir.rotate(PI / 8);
        var newEndC = p5.Vector.add(this.end, dir);
        var genC = new branch(this.end, newEndC, dir.mag());
        dir.rotate(-PI / 8);
        dir.rotate(-PI / 8);
        var newEndD = p5.Vector.add(this.end, dir);
        var genD = new branch(this.end, newEndD, dir.mag());
        return [genA, genB, genC, genD];
    }


    /*  DEPRECEATED
        this.branchA = function () {
    
            var dir = p5.Vector.sub(this.end, this.begin);
            dir.rotate(PI / 5);
            dir.mult(0.67);
            var newEnd = p5.Vector.add(this.end, dir);
            var A = new branch(this.end, newEnd);
            return A;
        }
        this.branchB = function () {
            var dir = p5.Vector.sub(this.end, this.begin);
            dir.rotate(-PI / 5);
            dir.mult(0.67);
            var newEnd = p5.Vector.add(this.end, dir);
            var B = new branch(this.end, newEnd);
            return B;
        }
        this.branchC = function () {
            var dir = p5.Vector.sub(this.end, this.begin);
            dir.rotate(PI / 8);
            dir.mult(0.67);
            var newEnd = p5.Vector.add(this.end, dir);
            var C = new branch(this.end, newEnd);
            return C;
        }
        this.branchD = function () {
            var dir = p5.Vector.sub(this.end, this.begin);
            dir.rotate(-PI / 8);
            dir.mult(0.67);
            var newEnd = p5.Vector.add(this.end, dir);
            var D = new branch(this.end, newEnd);
            return D;
        }
        */
    this.defineThickness = function (thickness) {
        this.thickness = thickness;
    }
    this.getThickness = function () {
        return this.thickness;
    }
}