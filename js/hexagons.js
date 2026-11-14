// add the hexagons as divs to the "content" 

//when adding a hexagon or reordering them, edit the displayOrder list.. it displays the hexagons per the orders.

//hexagons

import { displayOrder, panelContent} from "./hexagonContent.js";

function createPanel(charName, char){
    if (!char) char={nameEng: charName}
    return`
        <div class="panel" id="panel-${charName}" style="display:none;">
                <span class="close-btn" data-target="panel-${charName}">&times;</span>
                <h1 class="panel-title">${char.nameEng ? char.nameEng : ""}<br>${char.nameJP ? char.nameJP : ""}</h1>

                <div class="frontback">
                    ${char.frontBackPix ? char.frontBackPix.map(img => `<img src="${img}">`).join('') : ''}
                </div>
                <hr>
                <h3>Age: ${char.age ? char.age : ""}</h3>
                <h3>Affiliation: ${char.affiliation ? char.affiliation : ""}</h3>
                <hr>
                <h3>About:</h3>
                ${char.about ? char.about.map(about => `<p>${about}</p><br><br>`).join('') : ""}
                <div class="headings">
                    <hr>
                    <h2>Abilities</h2>
                </div>
                
                <div class="abilities">
                    ${char.abilities? char.abilities.map(ab =>`
                        <div>
                        <h3 class="abilityname">${ab.title}</h3>
                        <p class="abilitydesc">${ab.desc}</p>
                        <img src="${ab.img}">
                        </div?
                        `).join('') : ""}
                </div>
        </div>
    `
}

document.addEventListener("DOMContentLoaded",() =>{
    const hexagonContent = document.querySelector('.hexagons')
    const panelSection = document.getElementById('panelSection')

    panelSection.innerHTML = displayOrder.map(charName =>{
        const char = panelContent.find(c => c.nameEng && c.nameEng.toLowerCase() === charName)
        return createPanel(charName, char)
    }).join('')

    displayOrder.forEach(charName => {
        const avatar = `img/avatars/${charName}_avatar.gif`;
        const avatarHover = `img/avatars/${charName}_avatar_hover.gif`;
        const placeholder = "img/placeholders/hexagon.gif"

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

    hexElement.addEventListener('click', () =>{
        // console.log(hexElement.dataset)
        const clickedChar = hexElement.dataset.character;
        document.querySelectorAll('.panel').forEach(p => p.style.display = 'none')

        const targetPanel = document.getElementById(`panel-${clickedChar}`)
        if (targetPanel){
            targetPanel.style.display = 'block';
        }
    })

    // Add an onclick thingy here so that when clicked, it creates a panel...
    hexagonContent.appendChild(hexElement)
    })

    document.addEventListener('click', (e) =>{
        if (e.target.classList.contains('close-btn')){
            const panelId = e.target.getAttribute('data-target')
            document.getElementById(panelId).style.display = 'none'
        }
    })

})

// target close-btn class and on click, close the panel.