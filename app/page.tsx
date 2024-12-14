// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [val, setVal] = useState("");
//   const [img, setImg] = useState("");
//   const [name, setName] = useState("");
//   const [isImageVisible, setIsImageVisible] = useState(false);

//   const fetchApi = async () => {
//     try {
//       const name = val.toLowerCase();
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
//       if (!response.ok) {
//         throw new Error("Could not fetch");
//       }
//       const data = await response.json();
//       const results = await data.result

//       console.log("loading...");
//       console.log(data);

//       const pokImg = data.sprites.front_default;
//       setImg(pokImg);
//       setIsImageVisible(true)

//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   return (
//     <>
//       <div className="p-10 flex gap-5">
//         <input
//           type="text"
//           value={val}
//           onChange={(e) => setVal(e.target.value)}
//           className="border-black p-2 border-2"
//         />
//         <button className="border-black border-2 p-2" onClick={fetchApi}>
//           click
//         </button>
//       </div>
//       <div className="img">
//         <img src={img} id="img" alt="" className = {isImageVisible ? "w-32 h-32": "hidden"}  />
//       </div>
//       <div>
//         <h1>{}</h1>
//       </div>
//     </>
//   );
// }

import React from 'react'
import UserPage from './user/page'

export default function HomePage() {
  return (
    <div>
      <UserPage/>
    </div>
  )
}
