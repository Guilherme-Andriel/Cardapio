  
  let btnTop = document.querySelector("#btnTop")
  
  openMenu.addEventListener("click", () => {
    
    if (pedidoAtual) {
      pedidoAtual.remove();
    }
    container.style.opacity = "1"
    btnTop.style.visibility = "hidden";
    navList.style.display = 'flex';
    navList.style.right = (navList.offsetWidth * -1) + "px"
    openMenu.style.display ="none"
    setTimeout(() => {
    navList.style.right = "0"
 
    }, 10)
  })
    
  closeMenu.addEventListener("click", () => {

    navList.style.right = (navList.offsetWidth * -1)+"px"
   

     setTimeout(() => {
    openMenu.removeAttribute('style')
    navList.removeAttribute('style')
    btnTop.style.visibility = "visible";
   
 } , 200)
  })

  let cervejas = document.querySelector("#op1")
  let doses = document.querySelector("#op2")
  let bebidas = document.querySelector("#op3")
  let petiscos = document.querySelector("#op4")
  let almoco = document.querySelector("#op5")
  let feijoada = document.querySelector("#op6")
  let coqueteis = document.querySelector("#op7")


  cervejas.addEventListener("click", () => {
    location.href = '#cervejas'
    openMenu.removeAttribute('style')
    navList.removeAttribute('style')

    btnTop.style.visibility = "visible";

  })

  coqueteis.addEventListener("click", () => {
    location.href = '#coqueteis'
    openMenu.removeAttribute('style')
    navList.removeAttribute('style')

  
   
    btnTop.style.visibility = "visible";

  })

  doses.addEventListener("click", () => {
    location.href = '#doses'
    openMenu.removeAttribute('style')
    navList.removeAttribute('style')

  
    
    btnTop.style.visibility = "visible";

  })

  bebidas.addEventListener("click", () => {
    location.href = '#bebidas'
    openMenu.removeAttribute('style')
    navList.removeAttribute('style')

  
   
    btnTop.style.visibility = "visible";

  })

  petiscos.addEventListener("click", () => {
    location.href = '#petiscos'
    openMenu.removeAttribute('style')
    navList.removeAttribute('style')


    
    btnTop.style.visibility = "visible";
  
  })

  almoco.addEventListener("click", () => {
    location.href = '#almoco'
    openMenu.removeAttribute('style')
    navList.removeAttribute('style')

  
   
    btnTop.style.visibility = "visible";
  
  })

  feijoada.addEventListener("click", () => {
    location.href = '#feijoada'
    openMenu.removeAttribute('style')
    navList.removeAttribute('style')

  
   
    btnTop.style.visibility = "visible";
    
  })


  

  let apresentacao = document.querySelector("#pedido")
let selecionados = document.querySelectorAll(".op")
let container = document.querySelector(".container")

let pedidoAtual = null

selecionados.forEach( (op) => {
  op.addEventListener("click", () =>{
    

    if(pedidoAtual){
      pedidoAtual.remove()
    }


 container.style.opacity = ".4"
    btnTop.style.visibility = "hidden";
    openMenu.removeAttribute('style')
    navList.removeAttribute('style')

  let card = document.createElement("div");
  card.classList.add("pedido", "transicao");

  let voltar = document.createElement("button")
  card.appendChild(voltar)
  voltar.classList.add("voltar")

  let icon = document.createElement("span")
    icon.classList.add("material-symbols-outlined")
    icon.innerText = "arrow_back_ios"
    voltar.appendChild(icon)
    voltar.appendChild(document.createTextNode("Voltar"))
    icon.style.fontSize = "17px"
  voltar.addEventListener("click", () =>{
    card.remove()
    btnTop.style.visibility = "visible";
      container.style.opacity = "1"
  })

  let imagem = document.createElement("img")
  let tipoDeImg = op.getAttribute('data-img')

  imagem.src= `img/${tipoDeImg}`
  card.appendChild(imagem)

  let produto = document.createElement("h2")
  produto.innerText = op.getAttribute('data-name')
  produto.classList.add("product-title")
  card.appendChild(produto)

  let descricao = document.createElement("p")
  descricao.classList.add("descricao")
  descricao.innerText = op.getAttribute('data-description')
  descricao.classList.add("product-description")
  card.appendChild(descricao)

  let fazerPedido = document.createElement("button")
  card.appendChild(fazerPedido)
  fazerPedido.innerText = 'Fazer Pedido'
  fazerPedido.classList.add("fazerPedido")
  // fazerPedido.addEventListener("click", ()=>{
  //   location.href = "https://bit.ly/AmazoniaAzull"
  // })

  let pagamento = document.createElement("p")
  card.appendChild(pagamento)
  pagamento.innerText = 'Aceitamos Pix e Cartão'

  pedidoAtual = card

  apresentacao.appendChild(card)

  setTimeout(() => {
    card.classList.add("ativo");
  }, 10);

})
  
})


const smallScreenIcons = document.querySelectorAll(".material-symbols-outlined.show-on-small-screen")


function iconsRemove(){
  if(window.innerWidth <= 938.98){
    smallScreenIcons.forEach(icon => icon.style.display = "flex");
  }else {
    smallScreenIcons.forEach(icon => icon.style.display ="none");
  }
}

iconsRemove()

window.addEventListener("resize", iconsRemove);



btnTop.addEventListener("click", ()=>{
  window.scrollTo(0,0)
})


function ocultarBtnTop(){
  if(window.scrollY > 10){
    btnTop.style.display ="flex"
  }else{
    btnTop.style.display ="none"
  }
}

ocultarBtnTop()

document.addEventListener("scroll", ocultarBtnTop);

btnTop.addEventListener("click", ()=>{
  document.addEventListener("scroll", ocultarBtnTop())

})



