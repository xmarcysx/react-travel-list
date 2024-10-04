import './styles.css';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import {useState} from "react";

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems(items => items.filter(item => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems(items => items.map(item => item.id === id ? {
            ...item,
            packed: !item.packed
        } : item));
    }

    function handleClearList() {
        setItems([]);
    }

    return (
        <div className="app">
            <Logo/>
            <Form onAddItem={handleAddItem}/>
            <PackingList onClearList={handleClearList} onToggleItem={handleToggleItem} onDeleteItem={handleDeleteItem} items={items}/>
            <Stats items={items}/>
        </div>
    );
}








