import React, { useState } from 'react' 

function Character({ character, planet }) { // ❗ Add the props
  const [showHomeworld, setShowHomeWorld] = useState (false);
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
   const toggleHomeworld = () => {
    setShowHomeWorld(prevState => !prevState);
   };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h2 className='character-name'>{character.name}</h2>
      {showHomeworld && (
       <p className='character-planet'>Planet: {planet}</p> 
      )}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  );
}

export default Character;
