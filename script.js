function openPopup(cardId) {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    

    // Set the image source and details based on the card clicked
    switch (cardId) {
        case 'card1':
            popupImage.src = 'images/charmander.jpg';
            
            break;
        case 'card2':
            popupImage.src = 'images/PGO_charmeleon.jpg';
            
            break;
        case 'card3':
            popupImage.src = 'images/PGO_Charizard.jpg';
            
            break;
        case 'card4':
            popupImage.src = 'images/bulbasaur.jpg';
            
            break;
        case 'card5':
            popupImage.src = 'images/PGO_Ivysaur.jpg';
            
            break;
        case 'card6':
            popupImage.src = 'images/PGO_RadiantVenusaur.jpg';
            
            break;
        case 'card7':
            popupImage.src = 'images/squirtle.jpg';
            
            break;
        case 'card8':
            popupImage.src = 'images/PGO_wartortle.jpg';
            
            break;
        case 'card9':
            popupImage.src = 'images/PGO_Blastoise.jpg';
            
            break;
        case 'card10':
                popupImage.src = 'images/PGO_Pikachu.png';
                
            break;
        case 'card11':
                popupImage.src = 'images/PGO_MelmetalVMAX.jpg';
                
            break;
        case 'card12':
                popupImage.src = 'images/SC_GalvantulaEX.jpg';
                
            break;
        case 'card13':
                popupImage.src = 'images/SC_OrthwormEX.jpg';
                
            break;
        case 'card14':
                popupImage.src = 'images/PGO_MewtwoSWHS.jpg';
                
            break;
        case 'card15':
                popupImage.src = 'images/PGO_MelmetalV.jpg';
                
            break;
        case 'card16':
                popupImage.src = 'images/PGO_AlolanExeggutorV.jpg';
                
            break;
        case 'card17':
                popupImage.src = 'images/SC_GrandTree.jpg';
                
            break;
        // Add more cases as necessary
        default:
            popupImage.src = '';
            
            break;
    }

    // Show the popup
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

