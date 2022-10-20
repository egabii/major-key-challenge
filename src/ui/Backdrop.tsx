import { useEffect, useState } from 'react'
import './styles/backdrop.css'

interface BackdropProps {
  open: boolean,
  onClose: () => void;
}

export default function Backdrop({open = false, onClose}: BackdropProps): JSX.Element | null {

  const [isOpen, setIsOpen] = useState<boolean>(() => open);
   
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const onCloseHandler = () => {
    setIsOpen(false);
    onClose();
  }

  return isOpen ? <div className='backdrop' onClick={onCloseHandler}></div>: null; 
}