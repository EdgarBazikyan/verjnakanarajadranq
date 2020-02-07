var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Predator extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 20;
    }

    
        
 
    
    //թարմացնել շրջապատի կոորդինատները
   
    
    //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
    //կերպարը որոշվում է character արգումենտով
   
    

    
    
    //move() շարժվել
    move() {
        //որոնում է դատարկ տարածքներ
        var emptyCells = this.chooseCell(0);
        var cօord = random(emptyCells); // 4,3

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];

            //շարժվում է
            matrix[y][x] = 4;
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
        var final = predatorCells.concat(aaaaa);
        var coord = random(final);
        
        //եթե կա հարմար սնունդ
        if (coord) {
            var x = coord[0];
            var y = coord[1];
            
            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 4;
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
            var newMen = new Men(x, y);
            menArr.push(newMen);
            
            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 4;
        }
    }
    
    //die() մահանալ
    die() {
        //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
        matrix[this.y][this.x] = 0;
        
        //ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (var i in menArr) {
            if (this.x == menArr[i].x && this.y == menArr[i].y) {
                menArr.splice(i, 1);
            }
        }
    }
    
    
    
}