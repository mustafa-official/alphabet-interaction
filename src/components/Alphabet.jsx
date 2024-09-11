import { useState } from "react";
import clickSoundFile from "../assets/click.wav";
import replaceSoundFile from "../assets/replace.wav";

const Alphabet = () => {
  const [outputString, setOutputString] = useState("");
  const clickSound = new Audio(clickSoundFile);
  const replaceSound = new Audio(replaceSoundFile);
  const handleClick = (key) => {
    clickSound.play();
    const updatedString = outputString + key;
    const pattern = /(.)\1{2,}/g;
    const result = updatedString.replace(pattern, "_");
    if (result !== updatedString) {
      replaceSound.play();
    }

    setOutputString(result);
  };

  return (
    <section className="bg-neutral-800 min-h-screen  flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-violet-600 border bg-neutral-700 rounded-xl flex justify-center items-center w-full sm:min-w-[w-450px] md:min-w-[600px] h-28 sm:h-32 md:h-40 text-4xl sm:text-5xl md:text-6xl px-3 font-semibold uppercase">
          {outputString}
        </h2>

        <div className="w-full sm:w-[w-450px] md:w-[600px]">
          <div className="flex justify-center uppercase gap-1 my-1 w-full">
            {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((key) => (
              <kbd
                key={key}
                id={key}
                className="kbd hover:bg-violet-600 hover:text-white cursor-pointer"
                onClick={() => handleClick(key)}
              >
                {key}
              </kbd>
            ))}
          </div>
          <div className="flex justify-center uppercase gap-1 my-1 w-full">
            {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((key) => (
              <kbd
                key={key}
                id={key}
                className="kbd hover:bg-violet-600 hover:text-white cursor-pointer"
                onClick={() => handleClick(key)}
              >
                {key}
              </kbd>
            ))}
          </div>
          <div className="flex justify-center uppercase gap-1 my-1 w-full">
            {["z", "x", "c", "v", "b", "n", "m"].map((key) => (
              <kbd
                key={key}
                id={key}
                className="kbd hover:bg-violet-600 hover:text-white cursor-pointer"
                onClick={() => handleClick(key)}
              >
                {key}
              </kbd>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alphabet;
