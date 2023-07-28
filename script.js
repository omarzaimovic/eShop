let allTotal = 0 // sve ukupni total

function addToCart(elemenat){
    let glavni = elemenat.closest(".single-item");//dobijemo citav taj div elemenat
    let main = glavni.querySelector(".price").innerText; //dobijemo $10
    let naziv = glavni.querySelector("h3").innerText; //uzimamo tekst(krompir,paradajz)
    let broj = glavni.querySelector("input").value;//uzimamo brojeve koji se unose
    let karta = document.querySelector(".cart-items");//referenca na HTML dokument

    
    if(parseInt(broj)>0){

        
        main = main.substring(1) // main je $10 a ovo substring(1) stavljamo da izbacimo $
        let total = parseInt(main) * parseInt(broj);
        allTotal += total; // u sveukupni total dodamo i ostale vrijednosti


        karta.innerHTML += `<div class="cart-single-item"> 
                                <h3>${naziv}</h3> 
                                <p>${main}*${broj}= $<span>${total}</span></p>
                                <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>

                            </div>`

        document.querySelector(".total").innerHTML=`Total: $${allTotal}`                    
        elemenat.innerText="Dodato"
        elemenat.setAttribute("disabled","true");
        
    }else{
        alert("Odaberi kolicinu")
    }
    
}

function removeFromCart(dugme){
    let glavni = dugme.closest(".cart-single-item");
    let main = glavni.querySelector("p span").innerText; //ovdje uzimamo broj od totala
    let name = glavni.querySelector("h3").innerText;//npr krompir
    let vegetables = document.querySelectorAll(".single-item");
    main = parseInt(main);
    allTotal -= main;
    document.querySelector(".total").innerText = `Total: $${allTotal}`;
    glavni.remove();//kada se klikne u ukloni nestane to dugme
    vegetables.forEach(function (vege){
        let item = vege.querySelector(".si-content h3").innerText;
        if(item===name){
            vege.querySelector(".actions input").value=0;
            vege.querySelector(".actions button").removeAttribute("disabled");
            vege.querySelector(".actions button").innerText = "Dodaj";
        }

    })
    
}