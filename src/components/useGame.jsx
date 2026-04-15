import { useState } from "react";


export default function useGame(images){
    //чписок отгаданых карточек
    const [finishedItems, setfinishedItems] = useState([]) //выбрать из списка
    //счестчик шагов
    const[stepsCount, setStepsCount] = useState(0);
    //функция сравнения 2 карточек
    const checkItems = (firstItem,secondItem) => {
        //находим первую картинку
        const firstImage = images.find (({id}) => id == firstItem)//куча скобок это деструктуризация
        //находим первую картинку
        const secondImage = images.find (({id}) => id == secondItem)
        //условие
        if(firstImage.url == secondImage.url){ //если картинки одинаковые
            //добавляем отгаданные карточки в массив
            setfinishedItems((items)=>[...items,firstItem,secondItem])
        }
        setStepsCount(stepsCount + 1) //увеличиваем счетчик шагов на 1
    }
    //функция сброса игры
    const handleReset = () => {
        setfinishedItems([]) //обнуляем массив с отгаданными карточками
        setStepsCount(0) //обнуляем счетчик шагов
    }
    //проверка конца игры
    const isWin = finishedItems.length == images.length

    // то что мы будем возвращать
    return{
        finishedItems,
        stepsCount,
        isWin,
        handleReset,
        checkItems
    }
}


