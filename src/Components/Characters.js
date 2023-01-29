import React, {useState} from "react";

export default function Characters(props) {
    const {characters, setCharacters} = props;
    const [inputValue, setInputValue] = useState('');
    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(inputValue.toLowerCase()));

    const resetCharacters = () => {
        setCharacters(null);
    };

    console.log(characters);

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <div>
                <form>
                    <input type={"text"} onChange={(e) => setInputValue(e.target.value)} placeholder={"Busca por nombre de personaje..."}/>
                </form>
            </div>
            <span className="back-home" onClick={resetCharacters} >Volver a la home</span>

            <div className="container-characters">
                {filteredCharacters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}/>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="alive"/>
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead"/>
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>
        Volver a la home
      </span>
        </div>
    );
}
