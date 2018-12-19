/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var joc = {
    mapa: new Array(),
    puntuacio: 0,
    puntuacioMaxima: 0, //guardar en la sesion del navegador
    pecaActual: "",
    pecaSeguent: "",
    nivell: 1,
    direccio: "",
    comptador: {
        i: 0,
        j: 0,
        l: 0,
        o: 0,
        s: 0,
        t: 0,
        z: 0
    },
    inicialitzarJoc: function () {
        this.inicialitzaMapa();
        this.puntuacio = 0;
        this.pecaActual = "";
        this.pecaSeguent = "";
        this.comptador = {
            i: 0,
            j: 0,
            l: 0,
            o: 0,
            s: 0,
            t: 0,
            z: 0,
            total:0
        };
        this.nivell = 1;
    },
    inicialitzaMapa: function () {
        this.mapa = new Array();
        for (var i = 0; i < 25; i++) {
            var fila = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            this.mapa.push(fila);
        }
    },
    calcularSeguentPeca: function () {
        var peces = [
            [[[0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], "blau", 0, 3],
            [[[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]], "rosa", 0, 3],
            [[[0, 1, 1, 0], [1, 1, 0, 0]], "taronja", 0, 3],
            [[[0, 1, 1, 0], [0, 0, 1, 1]], "lila", 0, 3],
            [[[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0]], "vermell", 0, 3],
            [[[0, 1, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0]], "verd", 0, 3],
            [[[0, 0, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0]], "groc", 0, 3]];
        var numeroAleatori = Math.round(Math.random() * 6);
        this.comptador.total = parseInt(this.comptador.total);
        this.comptador.total++;
        switch(numeroAleatori){
            case 0: this.comptador.i++;break;
            case 1: this.comptador.j++;break;
            case 2: this.comptador.l++;break;
            case 3: this.comptador.o++;break;
            case 4: this.comptador.s++;break;
            case 5: this.comptador.t++;break;
            case 6: this.comptador.z++;break;
        }
        console.log(this.comptador.total);
        return peces[numeroAleatori];
    },
    mouPeca: function () {
        window.addEventListener("keydown", this.dealWithKeyboard, false);
        window.setInterval(function () {
            switch (this.direccio) {
                case "a":
                    ;
                    break;
                case "w":
                    ;
                    break;
                case "d":
                    ;
                    break;
                case "s":
                    ;
                    break;
            }
            this.direccio = "";
        }, 1000);

        //clearInterval();
    },
    dealWithKeyboard: function (e) {
        if (e.key == "a") {
            this.direccio = "a";
        }
        if (e.key == "w") {
            this.direccio = "w";
        }
        if (e.key == "d") {
            this.direccio = "d";
        }
        if (e.key == "s") {
            this.direccio = "s";
        }
    },
    mostraMapa: function () {
        var canvas = document.getElementById("espai");
        var ctx = canvas.getContext("2d");
        var img;
        for (var i = 0; i < this.mapa.length; i++) {
            for (var j = 0; j < this.mapa[i].length; j++) {
                if (this.mapa[i][j] === 0) {
                    img = document.getElementById("blanc");
                }
                if (this.mapa[i][j] === "i") {
                    img = document.getElementById("blau");
                }
                if (this.mapa[i][j] === "j") {
                    img = document.getElementById("rosa");
                }
                if (this.mapa[i][j] === "L") {
                    img = document.getElementById("taronja");
                }
                if (this.mapa[i][j] === "o") {
                    img = document.getElementById("lila");
                }
                if (this.mapa[i][j] === "s") {
                    img = document.getElementById("vermell");
                }
                if (this.mapa[i][j] === "t") {
                    img = document.getElementById("verd");
                }
                if (this.mapa[i][j] === "z") {
                    img = document.getElementById("groc");
                }

                ctx.drawImage(img, j * 16, i * 16, 15, 15);
            }
        }
    },
    mostraInfo: function () {
        document.getElementById("nivell").innerHTML = "Nivell: " + this.nivell;
        document.getElementById("puntuacio").innerHTML = "Puntuació: " + this.puntuacio;
        document.getElementById("puntuacioMaxima").innerHTML = "Puntuació màxima: " + this.puntuacioMaxima;
    },
    getPuntuacio: function(){
        if (this.comptador.total > 9) {
            this.comptador.total = 0;
            this.nivell++;
            console.log(this.nivell);
        }
    }
};

var Peca = function (forma, color, x, y)
{
    this.forma = forma;
    this.color = color;
    this.x = x;
    this.y = y;
};

Peca.prototype.rotarDreta = function (peca) {
    var formaNova = new Array();
    for (var i = 0; i < this.forma.length; i++) {
        formaNova[i] = new Array();
        for (var j = 0; j < this.forma[i].length; j++) {
            formaNova[i][j] = this.forma[this.forma[i].length - 1 - j][i];
        }
    }
    this.forma = formaNova;
    return peca;
};

Peca.prototype.pintaPeca = function(){
    var horitzontal = this.x;
    var vertical = this.y;
    
    for (var i = 0; i < this.forma.length; i++) {
        for (var j = 0; j < this.forma[i].length; j++) {
            
            if ((this.forma[i][j] === 1)) {
                switch(this.color){
                    case "blau": joc.mapa[i + horitzontal][j + vertical] = "i";break;
                    case "rosa": joc.mapa[i + horitzontal][j + vertical] = "j";break;
                    case "taronja": joc.mapa[i + horitzontal][j + vertical] = "L";break;
                    case "lila": joc.mapa[i + horitzontal][j + vertical] = "o";break;
                    case "vermell": joc.mapa[i + horitzontal][j + vertical] = "s";break;
                    case "verd": joc.mapa[i + horitzontal][j + vertical] = "t";break;
                    case "groc": joc.mapa[i + horitzontal][j + vertical] = "z";break;
                }
            }else{
                joc.mapa[i + horitzontal][j + vertical] = 0;
            }
        }
    }
};

Peca.prototype.baixaPeca = function (){
    if ((this.x + 2) < 24) {
        this.x ++;
        return true;
    }
    else{
        return false;
    }
};

window.onload = function () {
    joc.inicialitzaMapa();
    joc.mostraInfo();
    var pa = joc.calcularSeguentPeca();
    var p = new Peca(pa[0], pa[1], pa[2], pa[3]);
    
    
    setInterval(function(){
        joc.mostraInfo();
        joc.inicialitzaMapa();
        p.pintaPeca();
        joc.mostraMapa();
        joc.getPuntuacio();
        if (!p.baixaPeca()) {
            pa = joc.calcularSeguentPeca();
            p = new Peca(pa[0], pa[1], pa[2], pa[3]);
        }
        
    }, 100);
    
    
};