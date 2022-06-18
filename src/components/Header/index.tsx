import Image from 'next/image'
import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/my_unsplash_logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import ModalContext from '../../context/ModalContext';

const Header = () => {

  const {handleOpen, setSearch}:any = React.useContext(ModalContext)


  return (
    <section className={styles.container}>
        <div className={styles.header_left}>
            <Image src={Logo}  alt="Logo"/>
            <div className={styles.input_box}>
                <SearchIcon/>
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>

        <button onClick={handleOpen} className="button-green">
            Add a photo
        </button>
    </section>
  )
}

export default Header