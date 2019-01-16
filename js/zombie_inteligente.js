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
    if (distanciaEnX < 200 && distanciaEnY < 250) {
        
        if (distanciaEnX > distanciaEnY) {
            if (this.x > jugador.x) {
                this.x -= this.velocidad;
            } else {
                this.x += this.velocidad;
            }
        } else {
            if (this.y > jugador.y) {
                this.y -= this.velocidad;
            } else {
                this.y += this.velocidad;
            }
        }

    }

    /* En esta parte lo que hacemos es invertir la direccion horizontal si
    toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
    velocidad lo que estamos haciendo es invertir su direccion.*/
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
        this.velocidad *= -1;
    }
    // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
        this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
    }
}