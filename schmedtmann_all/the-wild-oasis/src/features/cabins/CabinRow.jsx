import styled from 'styled-components';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import { HiPencil, HiTrash, HiSquare2Stack } from 'react-icons/hi2';
import { useCreateCabin } from './useCreateCabin';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';


const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  /* transform: scale(1.66666) translateX(-2px); */
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {

  const {isDeleting, deleteCabin} = useDeleteCabin();
  const {isCreating, createCabin} = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description
  } = cabin;

  function handleDublicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description
    })
  }

  return (
      <Table.Row>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity}</div>
        <Price>{regularPrice}</Price>
        {discount ? <Discount>{discount}</Discount> : <span>&mdash;</span>}
          <Modal>

          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>
            <Menus.Button icon={<HiSquare2Stack />} onClick={handleDublicate}>Duplicate</Menus.Button>
            
            <Modal.Open opens='edit'>
              <Menus.Button icon = {<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>

            <Modal.Open opens='delete'>              
              <Menus.Button icon = {<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>

            </Menus.List>
          </Menus.Menu>

            <Modal.Window name='edit'>
              <CreateCabinForm cabinToEdit={cabin}/>
            </Modal.Window>


            <Modal.Window name='delete'>
              <ConfirmDelete 
                resource={'cabins'}
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Modal>
      </Table.Row>
  );
}

export default CabinRow;
