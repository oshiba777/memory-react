import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";

export default function PageMain() {
    return (
        <div>
            <Header/>
            <main>
                <p>правила игры:</p>
                <ol className="rules">
                    <li>правило 1</li>
                    <li>правило 2</li>
                    <li>правило 3</li>
                </ol>
                <Link to="/game"> Начать играть</Link>
            </main>
            <footer>
                <p>&cope; Сухоплюева Екатерина, 2026 г.</p>
            </footer>
        </div>
    );
}