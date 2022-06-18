import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import ModalContext from '../context/ModalContext'
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [search, setSearch] = useState('')

  const [images, setImages] = useState<any[]>([]);



  return (
    <>
    <ModalContext.Provider value={{open, handleOpen, handleClose, setImages, images, search, setSearch}}>
      <Component {...pageProps} />
    </ModalContext.Provider>
    </>
  )
}

export default MyApp
