/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const products = JSON.parse(localStorage.getItem('product'));
// console.log(JSON.parse(products));

var showProduct = document.getElementById('showProduct'); 
var productData = '';

products.map((e,i)=>{
    productData +=` <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${e.img}" alt="..." />
                            
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product price-->
                                    $${e.price}
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${e.title}</h5>
                                    
                                </div>
                            </div>
                        </div>
                    </div>`;
});

showProduct.innerHTML= productData;