const products = [
    'Dell heard in 120GB on the Laptop',
    'Asos vivobook in the great laptop',
    'Iphone is the best phone',
    'Redmi new 50mp camera Phone',
    'Dell 1277 new laptop',
    'Lenovo is lower laptop',
    'Lg supperfirst Laptop',
    'ss laptop in Phone'
]
const searching = 'Dell';

//indexOf
const outPut = [];
for(const product of products){
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // outPut.push(product);
    }
}
// console.log(outPut);

// includes
for (const product of products){
    if (product.toLowerCase().includes(searching.toLowerCase())){
        // outPut.push(product)
    }
}
// console.log(outPut)

// starts With
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        outPut.push(product);
    }
}
  console.log(outPut)

