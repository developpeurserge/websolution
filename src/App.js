

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'

const data = [
  {
    title: "Basilic",
    description:
      "Le basilic est une plante aromatique originaire d'Inde et d'autres régions tropicales d'Asie. Il a des feuilles vertes oblongues ou ovales, souvent légèrement dentelées sur les bords.",
    image: image1,
  },
  {
    title: "Monstera",
    description:
      "Le Monstera est originaire des régions tropicales d'Amérique centrale et du Sud, où il pousse dans les forêts humides et ombragées. Il préfère un emplacement lumineux mais indirect, avec un sol bien drainé et humide.",
    image: image2,
  },
  {
    title: "Menthe",
    description:
      "La menthe, également connue sous le nom de mentha, est une plante herbacée vivace appartenant à la famille des Lamiacées (ou Labiées). La menthe est utilisée dans une variété de plats et de boissons à travers le monde. ",
    image: image3,
  },
  {
    title: "Olivier",
    description:
      " L'olivier est un arbre à feuilles persistantes. L'olivier prospère dans les climats méditerranéens. Dans la mythologie grecque, l'olivier était sacré pour la déesse Athéna et était un symbole de victoire et de gloire.",
    image: image4,
  },
];

export default function Home() {
  const [active, setActive] = useState('');
  const handleShow = (index) => {
    setActive(index);
  };
  return (
    <main className="d-flex min-vh-100 align-items-center justify-content-center p-5 bg-white">
      <div className="position-relative z-10 container-xl gap-3 d-flex w-100 align-items-center justify-content-between">
        <div className="col-5">
          {data.map((item, index) => (
            <div
              key={index}
              className={`border border-secondary rounded-3 p-4 shadow-sm cursor-pointer transition duration-300 mb-3 ${
                active === index ? "bg-success w-100" : "bg-white w-75"
              }`}
              onMouseEnter={() => handleShow(index)}
            >
              <h1 className="fs-5 fw-bold text-gray-800 mb-3">{item.title}</h1>
              <div className={`description ${active === index && "active"} mb-3`}>
                <p className="fs-sm text-gray-600 mb-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-75 rounded-3 border border-secondary overflow-hidden bg-white flex-column" 
        style={{height: '560px' }}>
          {data.map((item, index) => (
            <div
              key={index}
              className="w-100 h-100 d-flex align-items-center justify-content-center p-4 transition duration-300"
              style={{
                transform: `translateY(-${active * 100}%)`,
              }}
            >
              <img
                alt="img"
                src={item.image}
                width={1469}
                height={954}
                className="rounded-2 w-100 h-100 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
