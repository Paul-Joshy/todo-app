// index.html
import { useState } from 'react';
// import styles from './Global.module.css';
import '../styles/globals.css';



function List(props) {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);


    // event handler for adding task
    function handleKeyPress(e) {
        if (e.key === 'Enter' || e.which === 13) {
            setItems([...items, item]);
            setItem("");
        }
    }

    // event handler for deleting task
    function deleteTask(e) {
        setItems(items.filter((val, i) => (
            i != e.target.value
        )));

    }

    return (
        <div>
            <div className="inline-flex-item">

                {
                    items.map((item, index) => <div key={index}>
                        {/* <input type="checkbox"></input> */}
                        <span>{item}</span>
                        <button value={index} onClick={deleteTask}>X</button>
                    </div>)
                }
            </div>
            <div>
                <input onKeyPress={handleKeyPress} type="text" value={item} onChange={e => setItem(e.target.value)}></input>
            </div>

        </div>
    )
}

function Header() {
    return (<div>
        <h1>Todo List</h1>
        <p>Because fuck Notion, that's why.</p>
    </div>)
}


export default function App() {
    return (
        <div className="main">
            <div className="container">
                <Header />
                <List />
            </div>
        </div>
    );
}