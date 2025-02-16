let words: string[] = [
    'COMPUTADORA',
    'PROGRAMACION',
    'DESARROLLO',
    'INFORMATICA',
    'TECNOLOGIA',
    'SOFTWARE',
    'HARDWARE',
    'INTERNET',
    'APLICACION',
    'SISTEMA',
    'BASEDEDATOS',
    'ALGORITMO',
    'CIBERNETICA',
    'CRIPTOGRAFIA',
    'SEGURIDAD',
    'REDES',
    'SERVIDOR',
    'NUBE',
    'VIRTUALIZACION',
    'CLOUD',
    'BIGDATA',
    'IA',
    'REALIDADVIRTUAL',
    'REALIDADAUMENTADA',
    'ROBOT',
    'ANIMAL',
    'PLANTA',
    'MINERAL',
    'PAIS',
    'CIUDAD',
    'CONTINENTE',
    'PLANETA',
    'SATELITE',
    'ASTRONAUTA',
    'EXPLORACION',
    'DESCUBRIMIENTO',
    'INVENTO',
    'TEORIA',
    'LEY',
    'PRINCIPIO',
    'CONCEPTO',
    'TEMA',
    'ARGUMENTO',
    'PREGUNTA',
    'RESPUESTA',
    'PROBLEMA',
    'SOLUCION',
    'METODO',
    'TECNICA',
    'HERRAMIENTA',
    'MATERIAL',
    'EQUIPO',
    'INSTRUMENTO',
    'MAQUINA',
    'VEHICULO',
    'TRANSPORTE',
    'COMUNICACION',
    'MENSAJE',
    'INFORMACION',
    'CONOCIMIENTO',
    'SABIDURIA',
    'CULTURA',
    'EDUCACION',
    'ENSEÑANZA',
    'APRENDIZAJE',
    'INVESTIGACION',
    'CIENCIA',
    'TECNOLOGIA',
    'ARTE',
    'MUSICA',
    'PINTURA',
    'ESCRITURA',
    'LECTURA',
    'CINE',
    'TEATRO',
    'DANZA',
    'DEPORTE',
    'JUEGO',
    'RECREACION',
    'DIVERSION',
    'ENTRETENIMIENTO',
    'CONEJO',
    'PERRO',
    'GATO',
    'RATON',
    'ELEFANTE',
    'JIRAFA',
    'COCODRILO',
    'SERPIENTE',
    'TIBURON',
    'PULPO',
    'CANGREJO',
    'CARACOL',
    'ARAÑA',
    'MARIPOSA',
    'ESCORPION',
    'MOSQUITO',
    'MOSCA',
    'ABEJA',
    'HORMIGA',
    'LAGARTIJA',
    'SAPO',
    'RANA',
    'TORTUGA'
];

export function randomWords(): string {
    //floor() -> redondea hacia abajo
    return words[Math.floor(Math.random() * words.length)];

    /* o tambien: const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex]; */
}