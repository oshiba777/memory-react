import'./Button.css'

export default function Button ({title = "кнопка", color = "red"}){
    return (
        <button className={color}>{title}</button>
    )
}

