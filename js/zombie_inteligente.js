var ZombieInteligente = function(sprite, x, y, ancho, alto, velocidad, rangoMov){
    /* ZombieCaminante llama al constructor de Enemigo utilizando los parametros
    necesarios */
    Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
}

/* Completamos la creacion del objeto asignando su prototipo y la funcion
constructor para poder usarla con 'new' al crear nuevos Zombies Inteligentes */
ZombieInteligente.prototype = Object.create(Enemigo.prototype);
ZombieInteligente.prototype.constructor = ZombieInteligente;

// Persigue al jugador
ZombieInteligente.prototype.mover = function(jugador = Jugador) {

    var distanciaEnX = Math.abs(this.x - jugador.x);
    var distanciaEnY = Math.abs(this.y - jugador.y);

    //FALTA: pasar rango de alcance por parametro (ahora fijo en 200)
    if (distanciaEnX < 220 && distanciaEnY < 250) {
        
        if (distanciaEnX > distanciaEnY) {
            if (this.x > jugador.x) {
                this.x -= this.velocidad;
                this.sprite = 'imagenes/perro_izquierda.png';
            } else {
                this.x += this.velocidad;
                this.sprite = 'imagenes/perro_derecha.png';
            }
        } 
        if (distanciaEnY > distanciaEnX) {
            if (this.y > jugador.y) {
                this.y -= this.velocidad;
            } else {
                this.y += this.velocidad;
            }
        }

    }
}