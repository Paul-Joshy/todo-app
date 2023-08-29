import { useEffect, useRef, useState } from 'react';
// import '../styles/globals.css';



function List(props) {
	const [item, setItem] = useState('');
	const [items, setItems] = useState([]);


    const elementToFocus = useRef(null);

    const [mode, setMode] = useState('normal');

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, []);


	// event handler for keyPress
	function handleKeyPress(e) {

        // Adding task on insert Mode
        if(mode === "insert"){
            if (e.key === 'Enter' || e.which == 13) {
                setItems([...items, item]);
                setItem("");
            }
        }

        // Insert Mode
        if(mode === "normal" && e.key === "i" || e.key === "I"){
            console.log("insert mode");
            setMode("insert");
            if(elementToFocus.current){
                elementToFocus.current.focus();
            }
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
		<input ref={elementToFocus} onKeyPress={handleKeyPress} type="text" value={item} onChange={e => setItem(e.target.value)}></input>
		</div>

		</div>
	)
}

function Header() {
	return (<div>
		<h2>Todo List</h2>
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
