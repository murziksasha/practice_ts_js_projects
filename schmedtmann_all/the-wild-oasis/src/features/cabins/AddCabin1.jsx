import {useState} from 'react';

import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';



function AddCabin() {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClick = () => setIsOpenModal(showForm => !showForm);

  return (
    <div>
      <Button onClick={handleClick}>Add new cabin</Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)}/>
        </Modal>
      )}
    </div>
  )
}




// function AddCabin() {
//   return (
//     <Modal>
//       <Modal.Toggle opens='new-cabin'>
//         <Button>Add new cabin</Button>
//       </Modal.Toggle>
//       <Modal.Window name='new-cabin'>
//         <CreateCabinForm />
//       </Modal.Window>
//     </Modal>
//   );
// }

export default AddCabin;
