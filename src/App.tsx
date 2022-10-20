import { useState } from 'react'
import { Modal } from './ui';
import './App.css'

function App(): JSX.Element {
  const [items, setItems] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onAddItemHandler = (newItem: string): void => {
    setItems(prevItems => ([
      newItem,
      ...prevItems
    ]));
  };

  const onRemoveItem = (removedItem: string):  void => {
    setItems(prevItems => prevItems.filter(item => item !== removedItem));
  };

  const onCloseModal = (): void => {
    setOpenModal(false);
    console.log('cerramos el backdrop');
  };

  const onOpenModalHandler = (): void => setOpenModal(true);

  return (
    <>
      <div className="container">
        <h1>Supermarket list</h1>
        <p>{items.length} items(s)</p>

        {items.length > 0 && (
          <ul className='list'>
            { items.map(item => <li key={`${item}-${items.length}`} className='list-item'>
                <span>{item}</span>
                <button onClick={() => onRemoveItem(item)}>x</button>
                </li>
              ) 
            }
          </ul>
        )}

        <button onClick={onOpenModalHandler}>Add item</button>
      </div>
      <Modal open={openModal} onCancel={onCloseModal} onConfirm={onAddItemHandler} />
    </>
  );
};

export default App
