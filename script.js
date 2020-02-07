
//! Setup function fires automatically
function setup() {

    var socket = io();

    var side = 30;

    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');

    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        console.log(data.weather)
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "summer"){
                        fill("green");
                    }else if(data.weather == "autumn"){
                        fill("#caedab");
                    }else if(data.weather == "winter"){
                        fill("#ecffdb");
                    } else if(data.weather == "spring"){
                        fill("#8dff26");
                    } 
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('#ffe387');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('#2200ff');
                    rect(j * side, i * side, side, side);
                }else if (matrix[i][j] == 6) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}