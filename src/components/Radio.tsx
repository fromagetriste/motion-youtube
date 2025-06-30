import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Radio = () => {
  const [selectedOption, setSelectedOption] = useState("orange");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="pt-16 mb-12 pl-4">
      <h1 className="text-4xl text-center font-bold">
        Radio component to be rendered smoothly !
      </h1>
      <div className="w-full max-w-md mx-auto p-4 backdrop-blur-md bg-white/5 border-b border-white/20 shadow-sm rounded-md mb-48 mt-12 flex flex-col items-center ">
        <form className="">
          <label className="mx-2 cursor-pointer">
            <input
              type="radio"
              name="choice"
              value="kiwi"
              checked={selectedOption === "kiwi"}
              onChange={handleChange}
            />
            kiwi
          </label>
          <label className="mx-2 cursor-pointer">
            <input
              type="radio"
              name="choice"
              value="orange"
              checked={selectedOption === "orange"}
              onChange={handleChange}
            />
            orange
          </label>
          <label className="mx-2 cursor-pointer">
            <input
              type="radio"
              name="choice"
              value="pear"
              checked={selectedOption === "pear"}
              onChange={handleChange}
            />
            pear
          </label>
        </form>
        {/* Rendering the image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedOption} // <-- triggers re-animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={`/${selectedOption}.png`}
            alt={selectedOption}
            className="h-48 w-48 mt-4 rounded-md"
          />
        </AnimatePresence>
        
        {/*  */}
      </div>
    </div>
  );
};

export default Radio;

{
  /* AnimatePresence gives us the ability to smoothly remove a component from the DOM, which is impossible to do with React */
}
{
  /* AnimatePresence nous donne la possibilité de retirer un composant du DOM en douceur, ce qui est impossible à faire uniquement avec React. */
}
{
  /* AnimatePresence nos da la posibilidad de eliminar suavemente un componente del DOM, lo cual es imposible de hacer solo con React. */
}

// 🇺🇸 How it works:
// useState tracks the selected radio value.
// Each input type="radio" shares the same name but has a different value.
// The checked attribute checks if this option is selected.
// onChange updates the state (selectedOption).

// 🇫🇷 Comment ça marche :
// useState suit la valeur sélectionnée du bouton radio.
// Chaque <input type="radio"> partage le même nom mais a une valeur différente.
// L’attribut checked vérifie si cette option est sélectionnée.
// onChange met à jour l’état (selectedOption).

// 🇲🇽 Como funciona:
// useState rastrea el valor seleccionado del botón de radio.
// Cada <input type="radio"> comparte el mismo nombre pero tiene un valor diferente.
// El atributo checked comprueba si esa opción está seleccionada.
// onChange actualiza el estado.
