


        
window.onload = function(){

    var mainDiv = document.getElementById('main')   
    var canvas = document.createElement('canvas')
    canvas.id = "stage";
    canvas.width = "400";
    canvas.height = "400";

    mainDiv.appendChild(canvas)


    var scorenumber = 0;
    function inicializar(){
        px = py = 10; 
        vx = vy = 0;
        tail = 5;

        
    }

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    var score = document.getElementById('score');
    
    var started = false;
    var spawnAple = false;
    var speedsnake = 100;
    var test = 0;

   
    document.addEventListener("keydown",keypush);
    
    //tempo em que a aplicação vai ser atualizada
    setInterval(game, speedsnake);

    const vel = 1;

    //ponto inicial da cobra
    var vx = vy = 0;
    var px = py = 10;

    //tamanho de cada quadrado do tabuleiro
    var tp = 20;
    var qp = 20;

    //onde vai aparcer a maçã
    var ax=ay=15;

    //rastro da cobra
    var trail = [];
    tail = 5;

    function game (){

        if (!started ){
            inicializar()
            started = true;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);
            
        }

        //velocidade da cobra
        px += vx;
        py += vy;

        //caso chege no final do tabuleiro o que fazer
        if(px < 0) {
            px = qp-1;
        }
        if(px > qp -1) {
            px = 0;
        }
        if(py < 0){
            py = qp - 1;
        }
        if(py > qp - 1){
            py = 0;
        }

        //pintando o canvas
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.width, stage.height);

        //pintando a maçã
        ctx.fillStyle = "purple";
        ctx.fillRect(ax*tp ,ay*tp, tp,tp);

        //pitando o rastro da cobra
        ctx.fillStyle = "green";
        for( var i = 0; i< trail.length; i++ ){
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp -1, tp -1);

            if(trail[i].x == px && trail[i].y == py && started){
                starded = false;
                inicializar();
                scorenumber = 0;
                score.textContent = `${scorenumber}`
             
            }   
        }
        
        trail.push({x:px,y:py})
        while (trail.length > tail){
            trail.shift();

        }

        if ( ax == px && ay == py ){
            tail++;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);
            scorenumber  = scorenumber + 10;
            score.textContent = `${scorenumber}`
        }

        

    }

    function keypush(event){
        switch (event.keyCode){
            case 37: //left arrow
            if (vx == vel){
                vx = vel;
                vy = 0;
                break;
            }else
            {
                vx = -vel;
                vy=0;
                break;
            }
            
            case 38: //up arrow

            if (vy == vel){
                vy = vel;
                vx = 0;
                break;
            }else
            {
                vy = -vel;
                vx=0;
                break;
            }
           
            case 39: //rigth arrow

            if (vx == -vel){
                vx = -vel;
                vy = 0;
                break;
            }else
            {
                vx = vel;
                vy=0;
                break;
            }

           

            case 40: //down arrow

            if (vy == -vel){
                vy = -vel;
                vx = 0;
                break;
            }else
            {
                vy = vel;
                vx=0;
                break;
            }
           

        }
    }

}
