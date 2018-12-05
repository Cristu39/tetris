/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var joc = {
    mapa : new Array(),
    puntuacio : 0,
    puntuacioMaxima : 0, //guardar en la sesion del navegador
    pecaActual : "",
    pecaSeguent : "",
    nivell : 1,
    direccio : "",
    comptador : {
        i : 0,
        j : 0,
        l : 0,
        o : 0,
        s : 0,
        t : 0,
        z : 0
    },
    inicialitzarJoc : function(){
        this.inicialitzaMapa();
        this.puntuacio = 0;
        this.pecaActual = "";
        this.pecaSeguent = "";
        this.comptador =    {
                        i : 0,
                        j : 0,
                        l : 0,
                        o : 0,
                        s : 0,
                        t : 0,
                        z : 0
                            };
        this.nivell = 1;
    },
    inicialitzaMapa : function(){
        this.mapa = new Array();
        for (var i = 0; i < 25; i++) {
            var fila = [0,0,0,1,0,0,0,0,0,0];
            this.mapa.push(fila);
        }
        console.log(this.mapa);
    },
    calcularSeguentPeca : function(){
        var num = Math.floor(Math.random() * 7); //del 0 al 6
        var forma = new Array();
        switch(num){
            case 0: forma = [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]], "blau"];break; //i
            case 1: forma = [[[0,"j",0],[0,"j",0],["j","j",0]],["rosa"]];break; //j
            case 2: forma = [[[0,"L",0],[0,"L",0],[0,"L","L"]],["taronja"]];break; //L
            case 3: forma = [[["o","o"],["o","o"]],["lila"]];break; //o
            case 4: forma = [[[0,"s","s"],["s","s",0]],["vermell"]];break; //s
            case 5: forma = [[["t","t","t"],[0,"t",0]],["verd"]];break; //t
            case 6: forma = [[["z","z","z"],[0,"z",0][0,0,0]],["groc"]];break; //z
        }
        return forma;
    },
    mouPeca : function(){
        window.addEventListener("keydown", this.dealWithKeyboard, false);
        window.setInterval(function(){  
            switch(this.direccio){
                case "a": ;break;
                case "w": ;break;
                case "d": ;break;
                case "s": ;break;
            }
            this.direccio = "";
        }, 1000);
        
        //clearInterval();
    },
    dealWithKeyboard : function(e){
        if (e.key == "a") {
            this.direccio = "a";
            //console.log("<-");
        }
        if (e.key == "w") {
            this.direccio = "w";
            console.log("->");
        }
        if (e.key == "d") {
            this.direccio = "d";
            console.log("amun");
        }
        if (e.key == "s") {
            this.direccio = "s";
            console.log("avall");
        }
    },
    mostraMapa : function(){
        var row = "";
        var canvas = document.getElementById("espai");
        var ctx = canvas.getContext("2d");
        var img;
        for (var i = 0; i < this.mapa.length; i++) {
            for (var j = 0; j < this.mapa[i].length; j++) {
                if (this.mapa[i][j] == 1) {
                    img = document.getElementById("blau"); 
                }
                row += this.mapa[i][j];
                console.log(img);
                img = document.getElementById("blau"); 
                ctx.drawImage(img, 0, 0, 75, 75 );
            }
            document.write(row);
            document.write("</br>");
            row = "";
        }
    }
};

joc.inicialitzaMapa();
joc.mouPeca();
joc.mostraMapa();