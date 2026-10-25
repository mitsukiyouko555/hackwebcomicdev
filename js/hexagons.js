// add the hexagons as divs to the "content" 

//when adding a hexagon or reordering them, edit the displayOrder list.. it displays the hexagons per the orders.

//hexagons


const displayOrder = [
    "maxus",
    "sally",
    "jolly",
    "kale",
    "ziah",
    "hydra",
    "sai",
    "aeru",
    "ransom",
    "kobe",
    "spydr",
    "kali",
    "mouse",
    "chestil",
    "bank",
    "cody",
    "alis",
    "cheshire",
    "dormouse",
    "boshi",
    "mal",
    "hockt",    
    "lexo",
    "badely",
    "gillian",
    "inko",
    "musashi",
    "codec",
    "melody",
    "bones",
    "cheesecake",
    "shiro_nori",
]


document.addEventListener("DOMContentLoaded",() =>{
    const hexagonContent = document.querySelector('.hexagons')

    displayOrder.forEach(charName => {
        const avatar = `/img/avatars/${charName}_avatar.gif`;
        const avatarHover = `/img/avatars/${charName}_avatar_hover.gif`;
        const placeholder = "/img/placeholders/hexagon.gif"

    const hexElement = document.createElement('div')
    hexElement.classList.add('hexagons')
    hexElement.dataset.character = charName;

    const image = charName ? avatar : placeholder;

    hexElement.innerHTML =
        `
        <img src="${image}" class="hexagons">
        `

    hexElement.addEventListener('mouseenter', () =>{
        hexElement.querySelector("img").src = avatarHover
    })
    hexElement.addEventListener('mouseleave', () =>{
        hexElement.querySelector("img").src = avatar
    })

    hexagonContent.appendChild(hexElement)

    })
})