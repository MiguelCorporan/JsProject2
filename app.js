// https://rickandmortyapi.com/api/character/2

// const Letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]



// console.log(Letras);

// const Abecedario = () => {
//     const fragmen = DocumentFragment
// }

// const abecedario = document.querySelector(".Abecedario")

// abecedario.addEventListener("click", (e) => {
    
//     if(e.target.matches(".A")){
//         console.log(e.target.id);
//     }
// })

const Change = document.querySelector(".Change");
const Chien = document.querySelector(".Chien")

const MenuB = document.querySelector(".MenuB");
const MenuX = document.querySelector(".MenuX");

const Menu = document.querySelector('.Part')

const container = document.querySelector(".class")
const parajs = document.querySelector('.ParaJs')


document.querySelector('#tittle').addEventListener("click", () => {
    parajs.classList.remove('None')
    container.classList.add('None')
})





Change.addEventListener("click", () => {
   
    Menu.classList.toggle('Afuera')
    MenuB.classList.toggle("None")
    MenuX.classList.toggle("None")
  
})

Chien.addEventListener("click", () => {
    const Sun = document.querySelector(".Sun");
    const Moon = document.querySelector(".Moon");

    Sun.classList.toggle("None")
    Moon.classList.toggle("None")
} )

/* const Limpiadora = () => {

    while (ParaJs.firstChild) {
        ParaJs.firstChild.remove()
    }
} */

// LLAMADA A LA PINCHI API



const Busca = document.querySelector('.Busca')

Busca.addEventListener('click', (e) => {
    e.preventDefault()

    const Texto = document.querySelector('.input-container').value

    Menu.classList.remove('Afuera')
    MenuB.classList.remove('None')
    MenuX.classList.add('None')

    container.classList.remove('None')
    parajs.classList.add('None')
    
    try {
        const llamadaApi = async () => {
          const llamada = await fetch(` https://pokeapi.co/api/v2/pokemon/`)
          const resul = await llamada.json();

          Creadora(resul)
      }
      llamadaApi()
       } catch (error) {
         console.log(error);
       }
  
       const Creadora = (result) => {
        //    Limpiadora()

            const TituloB = document.createElement('h2')
            // TituloB.classList.add('TituloB')
            // TituloB.textContent = 'Resultados de tu busqueda'
            const allConten = document.createElement('div')
            allConten.classList.add('allConten')
            const fragmen = document.createDocumentFragment()

                result.forEach( Results => {
                    const {episodes, title,images:{webp:{image_url}}} = Results

                    const Conten = document.createElement('div')
                    Conten.classList.add('Conten')
                    const ConImg = document.createElement('div')
                    ConImg.classList.add('ConImg')
                    const Imagen = document.createElement('img')
                    Imagen.classList.add('Image')
                    Imagen.src = image_url
                    const ConP = document.createElement('div')
                    ConP.classList.add('ConP')
                    const ElP = document.createElement('P')
                    ElP.classList.add('ElP')
                    ElP.textContent = title
                    const Elp2 = document.createElement('p')
                    Elp2.classList.add('Elp2')
                    Elp2.textContent = episodes

                    ConP.append(ElP, Elp2)
                    ConImg.appendChild(Imagen)
                    Conten.append(ConImg, ConP)

                    fragmen.appendChild(Conten)
                });

                allConten.appendChild(fragmen)
                
                container.appendChild(allConten)
       }
       

   
})



   


