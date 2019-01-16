/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  this.direccion = direccion;
}

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function() {
  if (this.direccion == 'derecha') {
    this.x += this.velocidad;
    if (this.x >= this.rangoMov.hastaX) {
      this.direccion = 'izquierda';
    }
  } else if (this.direccion == 'izquierda') {
    this.x -= this.velocidad;
    if (this.x <= this.rangoMov.desdeX) {
      this.direccion = 'derecha';
    }
  } else if (this.direccion == 'abajo') {
    this.y += this.velocidad; 
    if (this.y >= this.rangoMov.hastaY) {
      this.direccion = 'arriba';
    }
  } else if (this.direccion == 'arriba') {
    this.y -= this.velocidad;
    if (this.y <= this.rangoMov.desdeY) {
      this.direccion = 'abajo';
    }
  }
}

ZombieConductor.prototype.atacar = function(jugador) {
  jugador.vidas = 0;
}
