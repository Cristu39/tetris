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
    comptador : {
        i : 0,
        j : 0,
        l : 0,
        o : 0,
        s : 0,
        t : 0,
        z : 0
    },
    inicialitzaMapa : function(){
        for (var i = 0; i < 25; i++) {
            var fila = [0,0,0,0,0,0,0,0,0,0];
            this.mapa.push(fila);
        }
        console.log(this.mapa);
    },
    calcularSeguentPeca : function(){
        var num = Math.floor(Math.random() * 7); //del 0 al 6
        var forma = new Array();
        switch(num){
            case 0: forma = [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]], "blau"];break; //i
            case 1: forma = [[[0,1,0],[0,1,0],[1,1,0]],["rosa"]];break; //j
            case 2: forma = [[[0,1,0],[0,1,0],[0,1,1]],["taronja"]];break; //L
            case 3: forma = [[[1,1],[1,1]],["lila"]];break; //o
            case 4: forma = [[[0,1,1],[1,1,0]],["vermell"]];break; //s
            case 5: forma = [[[1,1,1],[0,1,0]],["verd"]];break; //t
            case 6: forma = [[[1,1,1],[0,1,0][0,0,0]],["groc"]];break; //z
        }
        return forma;
    },
    mouPeca : function(){
        window.setInterval(function(){  
            
        }, 1000);
    }   
    
};

joc.inicialitzaMapa();