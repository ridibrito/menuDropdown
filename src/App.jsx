import { useState } from "react";
import { GiClick } from "react-icons/gi";
import { GrFormClose } from 'react-icons/gr'
import { BsWhatsapp, BsFillFilePersonFill } from 'react-icons/bs'
import { AiFillFilePpt  } from 'react-icons/ai'
import { SiTailwindcss  } from 'react-icons/si'


function App() {
  const [OpenMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(true);
  }

  function handleClose() {
    setOpenMenu(false)
  }

  return (
    <div>
      <button
        onClick={handleOpenMenu}
        className="bg-indigo-500 rounded text-white px-8 py-3 text-center flex justify-center mx-auto mt-10 items-center gap-3"
      >
        Menu dropdown <GiClick className="w-6 h-6" />
      </button>
      <div style={{ opacity: OpenMenu ? "1" : "0" }}>
        <ul className="bg-gradient-to-t from-indigo-800 to-indigo-500 text-white font-semibold space-y-3 p-3 mt-2 transition-all duration-300 w-56 cursor-pointer rounded shadow-xl mx-auto text-center">
          <a target='_blank' className="flex items-center gap-4 mt-2" href="https://ricardoalbuquerque.com">
            <BsFillFilePersonFill />
            <li>Portfólio Ricardo</li>
          </a>
          <a target='_blank' className="flex items-center gap-4 mt-2" href="https://curriculo-three-mauve.vercel.app/">
            <AiFillFilePpt />
          <li>Visualizar curricúlo</li>
          </a>
          <a target='_blank' className="flex items-center gap-4 mt-2"href="https://tailwindcss.com/">
            <SiTailwindcss />
          <li>Tailwindcss</li>
          </a>
          <a target='_blank' className="flex items-center gap-4 mt-2" href="https://wa.me/5561983555195">
            <BsWhatsapp />
          <li>fale comigo</li>
          </a>
          <li onClick={handleClose} className='flex justify-end'><GrFormClose /></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
