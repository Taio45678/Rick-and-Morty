import Card from "../Card/Card";
import style from "../styles/Cards.module.css";
import { useSelector } from "react-redux";
import Paginate from "../Paginate/Paginate";

export default function Cards({ onClose }) {
  const { characters } = useSelector((state) => state);
  const { numPage } = useSelector((state) => state);

 
  let desde = (numPage - 1) * 8; // 5
  let hasta = numPage * 8; // 10

  
  let cantPages = Math.floor(characters.length / 8);

  let viewCharacters = characters?.slice(desde, hasta);

  return (
    console.log("--->", characters),
    (
      <div>
        <div className={style.cards_container}>
          {viewCharacters &&
            viewCharacters.map((element, index) => {
              return (
                <Card
                  key={index}
                  id={element.id}
                  name={element.name}
                  status={element.status}
                  species={element.species}
                  gender={element.gender}
                  origin={element.origin.name}
                  image={element.image}
                  onClose={onClose}
                ></Card>
              );
            })}
        </div>
       
        <Paginate cantPages={cantPages}></Paginate>
      </div>
    )
  );
}
