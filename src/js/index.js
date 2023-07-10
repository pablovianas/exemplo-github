const characters = document.querySelectorAll('.character')

characters.forEach((character) => {
        character.addEventListener('mouseenter', () => {

                const characterSelected = document.querySelector('.selected')
                characterSelected.classList.remove('selected');

                character.classList.add('selected');


                const imagemCharacterBig = document.querySelector('.big-character');

                const idCharacter = character.attributes.id.value;
                imagemCharacterBig.src = `./src/imagens/card-${idCharacter}.png`;

                const nameCharacter = document.getElementById('character-name');
                nameCharacter.innerText = character.getAttribute('data-name');

                const descriptionCharacter = document.getElementById('character-description')
                descriptionCharacter.innerText = character.getAttribute('data-description')
        })
})
