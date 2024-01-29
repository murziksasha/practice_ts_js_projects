

import toast from 'react-hot-toast';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import { Textarea } from '../../ui/Textarea';
import {useForm} from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCabin } from '../../services/apiCabins';

// We use react-hook-form to make working with complex and REAL-WORLD forms a lot easier. It handles stuff like user validation and errors. manages the form state for us, etc
// Validating the user’s data passed through the form is a crucial responsibility for a developer.
// React Hook Form takes a slightly different approach than other form libraries in the React ecosystem by adopting the use of uncontrolled inputs using ref instead of depending on the state to control the inputs. This approach makes the forms more performant and reduces the number of re-renders.

// Receives closeModal directly from Modal
function CreateCabinForm() {
  const {register, handleSubmit, reset, getValues, formState} = useForm();
  const {errors} = formState;
  const queryClient = useQueryClient();

  const {mutate, isLoading: isCreating} = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created');
      queryClient.invalidateQueries({queryKey:['cabins']});
      reset();
    },
    onError: (err) => toast.error(err.message),
  })

  function onSubmit(data) {
    mutate(data);
  }

  function onError(error){
    // console.log(error)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          {...register('name', {
            required:'This field is required'
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          {...register('maxCapacity', {
            required:'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1'
            }
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          {...register('regularPrice', {
            required:'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1'
            }
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          defaultValue={0}
          {...register('discount', {
            required:'This field is required',
            validate: (value) => value <= getValues().regularPrice || 'Discount should be less than regular price',
          })} 
          disabled={isCreating}       
        />
      </FormRow>

      <FormRow label='Description for website' error={errors?.description?.message}>
        <Textarea
          type='number'
          id='description'
          defaultValue=''
          {...register('description', {
            required:'This field is required'
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label='Cabin photo' error={errors?.image?.message}>
        <FileInput
          id='image'
          accept='image/*'
          
        />
      </FormRow>

      <FormRow>
        <Button
          variation='secondary'
          type='reset'
          // disabled={isWorking}
        >
          Cancel
        </Button>
        <Button 
          disabled={isCreating}
        >
          Add cabin
          {/* {isEditSession ? 'Edit cabin' : 'Create new cabin'} */}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
