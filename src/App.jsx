import './App.css'
import Button from './components/Button/Button'

function App() {
  return (
    <div className='container'>
      <header>
        <h1>Игра мемори</h1>
      </header>
      <main>
        <Button title='заказакть' color="red" rounded="false" />
         <Button  title='купить' color="blue"/>
          <Button  title='войти' color="green"/>
          <button>моя кнопка</button>
      </main>
      <footer>
        <p>&cope; Сухоплюева Екатерина, 2026 г.</p>
      </footer>
    </div>
  )
}

export default App
