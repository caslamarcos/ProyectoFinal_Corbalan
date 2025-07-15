const products = [
    {
        id: 1, 
        name: "Teclado Blackdragon",
        description: "Uno de los mejores teclados del mercado, ruidoso y funcionable",
        price: 500,
        stock: 5,
        image: "/img/teclado_blackdragon.png",
        category: "teclados"
    },

     {
        id: 2, 
        name: "Teclado Whitedragon",
        description: "Teclado para Gamer Profesional, funcionabilidad y rendimiento de muy alto nivel",
        price: 1000,
        stock: 10,
        image: "/img/teclado_whitedragon.png",
        category: "teclados"
    },

     {
        id: 3, 
        name: "Mouse BlackDragon",
        description: "Mouse sencillo para trabajar desde casa",
        price: 500,
        stock: 20,
        image: "/img/mouse_blackdragon.png",
        category: "mouses"
        
    },

    {
        id: 4, 
        name: "Mouse WhiteDragon",
        description: "Mouse especial para todo un GamerProfesional",
        price: 750,
        stock: 11,
        image: "/img/mouse_whitedragon.png",
        category: "mouses"
        
    },

      {
        id: 5, 
        name: "Auriculares BlackDragon",
        description: "Auriculares para escuchar tus reuniones y jugar cualquier tipo de Videojuego",
        price: 350,
        stock: 30,
        image: "/img/auriculares_blackdragon.png",
        category: "auriculares"
        
    },

     {
        id: 6, 
        name: "Auriculares WhiteDragon",
        description: "Los mejores Auriculares del mercado, perfectos para todo tipo de audios y con una alta calidad de volumen",
        price: 1050,
        stock: 19,
        image: "/img/auriculares_whitedragon.png",
        category: "auriculares"
        
    },

];

const getProducts = () => {

    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (products);

        }, 2000);
        
    });
};

const getProductsById = (productId) => {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            //filtrar lista de productos y traer 1 por su id nada mas.
            const product = products.find((product) => product.id === productId );
            resolve (product);
        }, 2000);


    })

}

export {getProducts, getProductsById};