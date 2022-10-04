let buton = document.querySelector('#click') ; 

// buton.onclick = function () {
   

//     let sorgu = new XMLHttpRequest();

//     sorgu.onreadystatechange = function () {

//         if(this.readyState===4 && this.status ===200) {
//             console.log("sorgu qebul olundu")
//             this.responseText
//         }
//         else if (this.status === 404) {
//             console.log('yoxdu');
//         }
        
//     }

//     sorgu.open('GET', "text.txt")
//     sorgu.send();   
    
// }


buton.onclick= function () {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data => {
        let carts = ''

        data.forEach(cart => {
            carts +=`
            <div class="card col-lg-3 mt-4 mb-3 ">
            <img class="card-img-top" src=${cart.image} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
            `
            document.getElementById('box').innerHTML =carts
        });
    })
    .catch(error => console.log(error))
}
