var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Pantera extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 15;
    }

    
        
 
    
    //թարմացնել շրջապատի կոորդինատները
   
    
    //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
    //կերպարը որոշվում է character արգումենտով
   
    

    
    
    //move() շարժվել
    // move() {
        move() {
            //որոնում է դատարկ տարածքներ
            var emptyCells = this.chooseCell(0);
            var cօord = random(emptyCells); // 4,3
    
            if (cօord) {
                var x = cօord[0];
                var y = cօord[1];
    
                //շարժվում է
                matrix[y][x] = 6;
                matrix[this.y][this.x] = 0;
    
                //նոր կորդինատներ է ստանում
                this.x = x;
                this.y = y;
            }
        }
    
    
    //eat()-ուտել
    eat() {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var predatorCells = this.chooseCell(3);
        var aaaaa = this.chooseCell(2);
        var predatorCell = this.chooseCell(4);
        var predatorCel = this.chooseCell(5);
        var final1 = predatorCells.concat(aaaaa); 
        var final2 = aaaaa.concat(predatorCell);
        var final3 = predatorCell.concat(predatorCel);
        var coord = random(final3);
        
        //եթե կա հարմար սնունդ
        if (coord) {
            var x = coord[0];
            var y = coord[1];
            
            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            
            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;
            
            //բազմացման գործակիցը մեծացնում է
            this.multiply++;
            
            //մեծացնում է էներգիան
            this.life++;
            
            // սննդի զանգվածից ջնջում է կերված սնունդը
            for (var i in predatorArr) {
                if (x == predatorArr[i].x && y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                }
            }
            for (var i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                }
            }
            for (var i in menArr) {
                if (x == menArr[i].x && y == menArr[i].y) {
                    menArr.splice(i, 1);
                }
            }
            for (var i in menEaterArr) {
                if (x == menArr[i].x && y == menEaterArr[i].y) {
                    menEaterArr.splice(i, 1);
                }
            }
            //եթե պատրաստ է բազմացմանը, բազմանում է 
            
            
            
            
            // սննդի զանգվածից ջնջում է կերված սնունդը
            
        }
        if (this.multiply == 8) {
            this.mul()
            this.multiply = 0;
        }
        
        
        else {
            //եթե չկա հարմար սնունդ 
            this.move();
            this.life--;
            if (this.life <= 0) { //մահանում է, եթե էներգիան 0֊ից ցածր է
                this.die();
            }
            
        }
        
    }
    
    
    
    //mul() բազմանալ
    mul() {
        //փնտրում է դատարկ տարածք
        var emptyCells = this.chooseCell(0);
        var coord = random(emptyCells);
        
        //եթե կա բազմանում է
        if (coord) {
            var x = coord[0];
            var y = coord[1];
            // this.multiply++;
            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            var newPantera = new Pantera(x, y);
            panteraArr.push(newPantera);
            
            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 6;
        }
    }
    
    //die() մահանալ
    die() {
        //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
        matrix[this.y][this.x] = 0;
        
        //ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (var i in menEaterArr) {
            if (this.x == menEaterArr[i].x && this.y == menEaterArr[i].y) {
                menEaterArr.splice(i, 1);
            }
        }
    }
    
    
    
}