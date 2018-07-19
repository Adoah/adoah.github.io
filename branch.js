function branch(begin, end, len, maxheight) {
    this.begin = begin;
    this.end = end;
    this.len = len;
    this.finished = false;
    this.thickness = 0;
    this.angA = PI / 3;
    this.angB = PI / 6;
    this.color = stroke(255);
    var isHidden = true;

    this.show = function () {
        if (len > heightSteps[0]) { this.thickness = 7; this.color = stroke(193, 76, 254);}
        else if (len > heightSteps[1]) { this.thickness = 6; this.color = stroke(71, 76, 254);}
        else if (len > heightSteps[2]) { this.thickness = 5; this.color = stroke(71, 207, 229); }
        else if (len > heightSteps[3]) { this.thickness = 4; this.color = stroke(28, 207, 80); }
        else if (len > heightSteps[4]) { this.thickness = 3; this.color = stroke(155, 255, 123); }
        else if (len > heightSteps[5]) { this.thickness = 2; this.color = stroke(203, 203, 0); }
        else if (len > heightSteps[6]) { this.thickness = 1; this.color = stroke(255, 0, 0); }
        else if (len > heightSteps[7]) { this.thickness = 1; this.color = stroke(255, 0, 0); }
        strokeWeight(this.thickness);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);

    }
    //creates two additional branch objescts from the current branch object.
    //maybe combine into one function later on 
    this.generateBranches = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);
        var genStraight = new branch(this.end, newEnd, dir.mag(), this.maxheight);
        dir.rotate(this.angA);
        var newEndA = p5.Vector.add(this.end, dir);
        var genA = new branch(this.end, newEndA, dir.mag(), this.maxheight);
        dir.rotate(-this.angA);
        dir.rotate(-this.angA);
        var newEndB = p5.Vector.add(this.end, dir);
        var genB = new branch(this.end, newEndB, dir.mag(), this.maxheight);
        dir.rotate(this.angA);
        dir.rotate(this.angB);
        var newEndC = p5.Vector.add(this.end, dir);
        var genC = new branch(this.end, newEndC, dir.mag(), this.maxheight);
        dir.rotate(-this.angB);
        dir.rotate(-this.angB);
        var newEndD = p5.Vector.add(this.end, dir);
        var genD = new branch(this.end, newEndD, dir.mag(), this.maxheight);
        return [genStraight, genA, genB, genC, genD];
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