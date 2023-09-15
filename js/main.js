//COPIAR DE PARTE 1 EL CONSTRUCTOR LIBRO --> OK
//7. MODIFICAR EL CONSTRUCTOR LIBRO
function libro(titulo, autor, precio, isbn, paginas, idioma, foto, sinopsis){
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio;
    this.isbn = isbn;
    this.paginas = paginas;
    this.idioma = idioma;
    this.foto = foto;
    this.sinopsis = sinopsis;
}

//8. ASIGNARSELOS A PROPIEDADES DEL OBJETO QUE TENGA EL MISMO NOMBRE --> OK
//10. CREAR EN EL CONSTRUCTOR LIBRO EL MÉTODO getHtmlArticle() --> OK
//11. AGREGAR AL CONTENIDO EXISTENTE EN EL <SECTION> DEL DOM EL CONTENIDO GENERADO POR getHtmlArticle() --> OK
libro.prototype.getHtmlArticle = function(){
    let articulo = document.getElementById('articulo')
    articulo.innerHTML +=`
        <h2 id="titulo">${this.titulo}</h2>
        <h3 id="autor"><span class="de">de</span>${this.autor}</h3>
        <div class="informacion">
            <a id="imagen" href="${this.foto}" title="Presioná para ver la imagen en tamaño grande" target="_blank">
                <img id="imagen" src="${this.foto}" alt="Portada de Sol de medianoche">
            </a>
            <p>
                <span id="precio">${this.precio}</span>
            </p>
            <p>
                <span id="isbn">${this.isbn}</span>
            </p>
            <p>
                <span id="paginas">${this.paginas}</span>
            </p>
            <p>
                <span>${this.idioma}</span>
            </p>
        </div>
        <div class="sinopsis">
            <p id="sinopsis">${this.sinopsis}</p>
        </div>
        <div class="gradiente-blanco"></div>   
    `;
} 

//9. CREAR UN NUEVO OBJETO CON ESTA NUEVA INFORMACIÓN DE PRUEBA
//12. INSTANCIAR 4 OBJETOS LIBRO PARA CREAR 4 LIBROS --> OK
let libro1 = new libro(
    'Sol de medianoche',
    'Stephenie Meyer',
    '$4.399,00',
    '9789877387308',
    '800',
    'Español',
    'img/677881.jpg',
    'Cuando Edward Cullen y Bella Swan se conocieron en Crepúsculo; nació una historia de amor icónica. Pero hasta ahora; sus fans solo conocen la historia a través de Bella. Por fin los lectores podrán vivir la versión de Edward en la muy esperada novela Sol de medianoche. La inolvidable historia; contada a través de los ojos de Edward; toma un cariz nuevo y definitivamente oscuro. Conocer a Bella es lo más perturbador e intrigante que le ha sucedido en todos sus años como vampiro. A medida que se nos desvelan detalles fascinantes del pasado de Edward y la complejidad de sus pensamientos más íntimos; entenderemos por qué este es el conflicto interno que define su vida. ¿Cómo puede justificar los impulsos de su corazón si significan poner a Bella en peligro? En Sol de Medianoche; Stephenie Meyer nos transporta de nuevo a un mundo que ha cautivado a millones de lectores y nos trae una novela épica sobre los profundos placeres y las consecuencias devastadoras de un amor inmortal.',
)

let libro2 = new libro(
    'Despierta',
    'Lorena Pronsky',
    '$3.049,00',
    '9789501516227',
    '336',
    'Español',
    'img/677866.jpg',
    'La mayoría de las decisiones que tomamos en nuestra vida las hacemos estando dormidos. Casi arrastrados por un estado de inercia. Cuando reaccionamos; el paso ya está dado y el resto del tiempo nos quedamos ahí -atrapados- intentando hacer algo con eso que ni advertimos haber decidido. Hay cosas que no se deshacen. Querer intentarlo es verle la cara a la frustración. Por el contrario; se hace necesario un viaje a nuestro mundo interior. Si registramos lo que hacemos y sentimos; ganamos libertad y la posibilidad urgente de conocer nuestros deseos más profundos. ¿Quién soy? ¿Qué quiero? ¿Cómo lo quiero? Ser conscientes de lo que sentimos: decirlo; palparlo y nombrarlo son formas en las que logramos adueñarnos de nuestra vida. Cuanto antes despertemos a nuestro mundo interior; más sabias y honestas serán nuestras decisiones. Despierta es el paso hacia una existencia verdadera. Una invitación a conocernos y animarnos a pisar firme y fuerte. Siempre hacia donde nos guíen nuestros latidos. Sí. Los nuestros. Lorena Pronsky.',
)

let libro3 = new libro(
    'Confianza ciega',
    'John Katzenbach',
    '$4.399,00',
    '9789877801668',
    '592',
    'Español',
    'img/678518.jpg',
    'Cuando Maeve desaparece sin dejar rastro, su hija Sloane no se sorprende: si su madre tenía que desaparecer, solo podía ser en extrañas circunstancias. Sin embargo, esta vez es distinto: al cabo de unos días de la desaparición de su progenitora, Sloane recibe un paquete que esta misma le ha mandado, con varios miles de dólares, la escritura de su casa y un arma. También hay una nota con las siguientes palabras: "Vendelo todo. Quedate la pistola. Practica. Huye. Ahora". A solo dos semanas de graduarse como arquitecta y en medio de esta encrucijada personal, Sloane recibe la oferta de trabajo de un misterioso millonario que quiere construir seis memoriales para seis personas que murieron, de nuevo, en extrañas circunstancias. A medida que Sloane investiga esas muertes, el consejo de su madre se hace cada vez más presente. ¿En quién puede confiar ahora Sloane? ¿Tendrá tiempo de seguir las indicaciones de su madre cuando llegue al final del laberinto que ha ido creando su siniestro empleador?.',
)

let libro4 = new libro(
    'Cocinemos juntos',
    'Maru Botana',
    '$3.890,00',
    '9789876378697',
    '220',
    'Español',
    'img/677978.jpg',
    'Maru cocina junto a sus hijos y amigos sus mejores recetas del día a día. Este manual con recetario ayudará a los jóvenes, a los recién mudados y a todo aquel que se inicia en la cocina a preparar los platos más deliciosos: bebidas, entradas, principales, panes, postres y tortas. Todo con los eximios sabores y la simplicidad de Maru Botana.',
)

// 13. LOGRAR QUE EL SIGUIENTE CODIGO MUESTRE TODOS LOS LIBROS
  let htmlNuevosLibros = libro1.getHtmlArticle()+
                         libro2.getHtmlArticle()+
                         libro3.getHtmlArticle()+
                         libro4.getHtmlArticle();
  articulo.innerHTML += htmlNuevosLibros


//14. ELIMINAR TODOS LOS <ARTICLE> QUE ESTAN DE PRUEBA EN EL <SECTION>