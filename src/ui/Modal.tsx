import React, { useEffect, useState } from "react";
import Backdrop from "./Backdrop"; 
import './styles/modal.css';

interface ModalProps {
  open: boolean,
  onCancel: () => void;
  onConfirm: (value: string) => void
}

export default function Modal({open, onCancel, onConfirm}: ModalProps): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(() => open);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  const onCloseHander = (): void => {
    setOpenModal(false);
    setValue('');
    onCancel();
    console.log('cerrando modal');
  };

  const onConfirmHandler = (): void => {
    onConfirm(value);
    onCloseHander();
    console.log('agregando item a la lista');
  }

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement> ): void => {
    setValue(e.target.value);
  }

  return (
    <>
      <Backdrop open={openModal} onClose={onCloseHander} />
      {openModal && (
        <section className='modal-container'>
          <main className='modal-content'>
            <input type='text' placeholder='type an item' value={value} onChange={onChangeInputHandler} />
          </main>
          <section className="modal-actions">
            <button onClick={onCloseHander}>Cancel</button>
            <button onClick={onConfirmHandler}>Add item</button>
          </section>
        </section>
      )}
    </>
  )
}