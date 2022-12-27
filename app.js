// 1. Définissez une variable products qui est un objet avec des propriétés qui correspondent aux noms de produits et des
// valeurs qui sont les prix de chaque produit. Par exemple :

let products = {
    "vestes": 49.99, "pantalon": 29.99, "chemise": 15.99
    }
console.log(products)

// 2. Définissez une fonction getProductPrice qui prend en entrée un nom de produit et qui renvoie son prix. 
// Utilisez la variable products pour accéder au prix du produit. 

// Fonction qui cible un nom de produit de la liste products
function getProductPrice(productName) {
    productNamePrice = Object.values(products)
    return productNamePrice[productName];
}
console.log(getProductPrice(0))

// 3. Définissez une fonction getProductInfo qui prend en entrée une liste de noms de produits 
// (une chaîne de caractères séparée par des virgules) et qui renvoie une chaîne de caractères 
// avec le nom de chaque produit suivi de son prix. Utilisez la fonction getProductPrice pour 
// obtenir les prix de chaque produit. Par exemple, si la liste de produits est 
// "chaussures de sport, pantalon, chemise" , la fonction doit renvoyer "Les chaussures de sport 
// coûtent 49.99€, le pantalon coûte 29.99€ et la chemise coûte 15.99€." 

//Fonction qui transforme un objet en chaine de caractère

function getProductInfo(productList) {
    let productNameList = Object.keys(productList);
    let result = "";
    for (let i = 0; i < productNameList.length; i++) {  
    if (productNameList[i] == "vestes") {
        result += `Les ${productNameList[i]} coûtent ${getProductPrice([i])}€, `;
    }
    if (productNameList[i] == "pantalon") {
        result += `Le ${productNameList[i]} coûte ${getProductPrice([i])}€, `;
    }
    if (productNameList[i] == "chemise") {
        result += `La ${productNameList[i]} coûte ${getProductPrice([i])}€. `;
    }
}
    return result;
}
console.log(getProductInfo(products))


// 4. Définissez une fonction getTotalPrice qui prend en entrée une liste de noms de produits 
// (sous la même forme que dans la fonction getProductInfo ) et qui renvoie le prix total de tous ces produits.
//  Utilisez la fonction getProductPrice pour obtenir les prix de chaque produit. 

// Fonction qui donne le total d'une liste 
function getTotalPrice(productList) {
    let result = 0;
    for (let i = 0; i < productList.length; i++) {   
    result += getProductPrice([i]) 
    }
    
    return result
    
}
console.log(getTotalPrice(products))





// 5. Définissez une fonction applyDiscount qui prend en entrée un prix et un taux de réduction (en pourcentage) 
// et qui renvoie le prix après application de la réduction. Par exemple, si le prix est de 100€
// et que le taux de réduction est de 10%, la fonction doit renvoyer 90€. 

// Fonction qui prend un prix et un taux de réduction pour appliqué des promotions
function applyDiscount(price, discount){
    let discountedPrice = price * (1 - (discount/100));
    return discountedPrice;
}
console.log(applyDiscount(100,10))



// 6. Modifiez la fonction getProductInfo pour qu'elle utilise la fonction applyDiscount pour appliquer un taux de réduction de 10%
//  sur les prix de chaque produit si le prix de ce produit est supérieur à 50€. 
//  Utilisez une condition if pour vérifier si le prix d'un produit est supérieur à 50€. 

// Fonction qui modifie la fonction getProductInfo en ajoutant la fonction Applydiscount

function getProductInfo(productList, yourRate) {
    let productNameList = Object.keys(productList);
    let result = "";
    for (let i = 0; i < productNameList.length; i++) {  
    if (productNameList[i] == "vestes") {
        result += `Les ${productNameList[i]} coûtent ${getProductPrice([i]) -  applyDiscount(getProductPrice([i]), yourRate)}€, `;
    }
    if (productNameList[i] == "pantalon") {
        result += `Le ${productNameList[i]} coûte ${getProductPrice([i]) -  applyDiscount(getProductPrice([i]), yourRate)}€, `;
    }
    if (productNameList[i] == "chemise") {
        result += `La ${productNameList[i]} coûte ${getProductPrice([i]) -  applyDiscount(getProductPrice([i]), yourRate)}€. `;
    }
}
    return result;
}
console.log(getProductInfo(products, 100))




// 7. Modifiez la fonction getTotalPrice pour qu'elle utilise la fonction applyDiscount pour appliquer un taux de réduction de 10%
//  sur le prix total si ce prix est supérieur à 50€. Utilisez une condition if pour vérifier si le prix total est supérieur à 50€. 

// Modifie la fonction get TotalPrice avec l'ajout de la fonction applyDiscount
function getTotalPrice(productList) {
    let productNameList = Object.keys(productList);
    let result = 0;
    for (let i = 0; i < productNameList.length; i++) {   
    result += getProductPrice([i]) 
    }
    if (result > 50) {
        result = applyDiscount(result , 10)
    }
    return result
}
console.log(getTotalPrice(products))


// 8. Définissez une fonction filterByPrice qui prend en entrée une liste de noms de produits et un prix maximum et qui renvoie
//  une liste de noms de produits qui ont un prix inférieur ou égal au prix maximum donné. Utilisez la fonction getProductPrice
//   pour obtenir les prix de chaque produit et utilisez une boucle for pour parcourir la liste de produits.
 
// Fonction qui filtre les prix d'une liste par une valeur
function filterByPrice(productList,maxPrice) {
    let productKeysList = Object.keys(productList);
    let result = "";
    for (let i = 0; i < productKeysList.length; i++) {
        if (getProductPrice([i]) <= maxPrice) {
            result += productKeysList[i] + "\n"
        }
    }
    return result
}
console.log(filterByPrice(products,30))

// 9. Modifiez la fonction getProductInfo pour qu'elle utilise la fonction filterByPrice pour ne prendre en compte que les produits qui ont un prix inférieur ou égal à 50€.
//  Utilisez la fonction filterByPrice en lui passant en entrée la liste de produits et le prix maximum de 50€. 

// Modifie la fonction getProductInfo avec l'ajout de la fonction filterByPrice
function getProductInfo(productList, yourRate) {
    let productNameList = Object.keys(productList);
    let result = "";
    for (let i = 0; i < productNameList.length; i++) {  
    if (productNameList[i] <= filterByPrice(products, 50)) {
    if (productNameList[i] == "vestes") {
        result += `Les ${productNameList[i]} coûtent ${getProductPrice([i]) -  applyDiscount(getProductPrice([i]), yourRate)}€, `;
    }
    if (productNameList[i] == "pantalon") {
        result += `Le ${productNameList[i]} coûte ${getProductPrice([i]) -  applyDiscount(getProductPrice([i]), yourRate)}€, `;
    }
    if (productNameList[i] == "chemise") {
        result += `La ${productNameList[i]} coûte ${getProductPrice([i]) -  applyDiscount(getProductPrice([i]), yourRate)}€. `;
    }
}
}
    return result;
}
console.log(getProductInfo(products, 100))
// 10. Définissez une fonction addProduct qui prend en entrée un nom de produit et un prix et qui ajoute ce produit à la variable products.
//  Assurez-vous de mettre à jour la variable products de manière permanente. 

// Fonction qui ajoute un élement à l'object
function addProduct(key, value) {
    products[key] = value;
    console.log(products)
}
addProduct("chien", 8)
// 11. Définissez une fonction removeProduct qui prend en entrée un nom de produit et qui supprime ce produit de la variable 

// Fonction qui supprime un produit par la key 
function removeProduct(value) {
    delete products[value];
    console.log(products)
}
removeProduct("vestes")