import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalContext from '../../context/ModalContext';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import styles from './ModalAdd.module.css'


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 620,
  bgcolor: '#FFF',
  borderRadius: "12px",
  p: 4,
};

type Inputs = {
  label: string,
  image: string,
};

export default function ModalAdd() {

  const { open, handleClose, setImages }: any = React.useContext(ModalContext)

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    axios.post('https://my-unsplash-prisma-nextjs.herokuapp.com/api/images/create',{image: data.image, label: data.label}).then(response => {
      setImages(response.data.result);      
    }).finally(() => {
      reset()
    })
    
  };





  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className={styles.title}>Add a new photo</h1>


          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label className={styles.label}>
              Label
            </label>
            <br />
              <input className={styles.input} {...register("label", { required: true })} />
            </div>

            <div>
            <label className={styles.label}>
              PhotoURL
            </label>
            <br />
              <input className={styles.input} {...register("image", { required: true })} />
            </div>
            <div className={styles.buttons}>
              <button onClick={handleClose}  className='button-transparent' type="submit">Cancel</button>
              <button className='button-green' type="submit">Submit</button>
            </div>
          </form>


        </Box>
      </Modal>
    </div>
  );
}