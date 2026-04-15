import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import useGame from "../../components/useGame";

import data from "../../data.json"
import Modal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";

export default function PageGame() {
  const [images, setImages] = useState([]);
  useEffect(() =>{
    setImages(data.sort(() => Math.random() - 0.5));
  },[]); //работает один раз при загрузке компонента


  const { finishedItems,
    stepsCount,
    isWin,
    handleReset,
    checkItems } = useGame(images) //импортируем с деструктуризацией

  const handlBtnReset = () => {
    handleReset();
    //перемешивать массив
    images.sort(() => Math.random() - 0.5)
  }

  return (
    <div className='container'>
      <Header />
      <main>
        <div className="steps">{stepsCount}</div>

        <Grid
          images={images}
          finishedItems={finishedItems}
          checkItems={checkItems}
        />
        {
          isWin && (
            <Modal>
              <h3 className="modal-caption">Победа!</h3>
              <p className=".modal-description"> Вы собрали все пары за {stepsCount} шагов</p>
              <button
                className="button modal-button"
                onClick={handlBtnReset}
                type="Button">новая игра</button>
            </Modal>
          )
        }

      </main>
      <footer>
        <p>&cope; Сухоплюева Екатерина, 2026 г.</p>
      </footer>
    </div>
  )
}