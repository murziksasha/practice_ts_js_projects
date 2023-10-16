import styles from './Form.module.scss';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';


interface FormProps { }

type FormValuesInput = {
  label: string; 
  name: string; 
  type: string;
  id: string; 
  placeholder?: string; 
}

  const MyTextInput = ({label, ...props}: FormValuesInput) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.name}>{label}</label>
        <input {...props} {...field}/>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ): null}
      </>
    )
  }

  const MyCheckbox = ({children, ...props}: {children: React.ReactNode | string; name: string}) => {
    const [field, meta] = useField({
      ...props,
      type: 'checkbox'
    });
    return (
      <>
        <label className='checkbox'>
          <input type='checkbox' {...props} {...field}/>
          {children}
        </label>


        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ): null}
      </>
    )
  }


export const MyForm = ({ }: FormProps) => {


    return (
        <Formik
        initialValues = {{
          name: '',
          email: '',
          amount: 0,
          currency: '',
          text: '',
          terms: false
      }}
      validationSchema ={ Yup.object({
        name: Yup.string()
            .min(2, 'Min 2 symbols...')
            .required('Required Field!'),
        email: Yup.string()
            .email('Check the email address...'),
        amount: Yup.number()
            .required('Required Field'),
        currency: Yup.string().required('Выберите валюту!'),
        text: Yup.string()
            .min(10),
        terms: Yup.boolean()
            .required('I need to check terms')
            .oneOf([true], 'Необходимо согласие')
      })}
      onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
              <h2>Отправить пожертвование</h2>
              <MyTextInput
                label='Your name'
                id="name"
                name="name"
                type="text"
                placeholder='Your name'
              />
              <MyTextInput
                  label='Your email'
                  id="email"
                  name="email"
                  type="email"
                  placeholder='email'
              />
              <MyTextInput
                  label='Amount'
                  id="email"
                  name="email"
                  type="email"
              />
              <Field
                  id="currency"
                  name="currency"
                  as='select'
              >
                      <option value="">Выберите валюту</option>
                      <option value="USD">USD</option>
                      <option value="UAH">UAH</option>
                      <option value="RUB">RUB</option>
              </Field>
              <ErrorMessage name='currency' render={msg => <div className='error'>{msg}</div>}/>
              <label htmlFor="text">Ваше сообщение</label>
              <Field 
                  id="text"
                  name="text"
                  as="textarea"
              />
              <ErrorMessage name='text' render={msg => <div className='error'>{msg}</div>}/>
              <MyCheckbox
              children = 'Are you agree with policy confidency?'
              name="terms" 
              />
              <button type="submit">Отправить</button>
          </Form>
        </Formik>
      );
}
