function celular(marca,modelo,annio,procesador,RAM){
    this.marca = marca,
    this.modelo = modelo,
    this.annio = annio,
    this.procesador = procesador,
    this.RAM = RAM
};

for(var i=0; i<20; i++){
    this['celular' + i] = new celular("xiaomi"+i,"model"+i,2000+i,"sanpdrago","3GB");   //apunta al objeto windows, solo funciona ens la consola puede no funcionar en node
}