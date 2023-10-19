import styles from './Form.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';


interface FormProps { }

type FormValues = {
    name: string;
    email: string;
    amount: number;
    currency: string;
    text: string;
    terms: boolean;
  };



export const Form = ({ }: FormProps) => {


    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    });

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div className={'error'}>{formik.errors.name}</div> : null}
            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div className={'error'}>{formik.errors.email}</div> : null}
            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
                placeholder='amount'
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
                        {formik.errors.amount && formik.touched.amount ? <div className={'error'}>{formik.errors.amount}</div> : null}
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            {formik.errors.currency && formik.touched.currency ? <div className={'error'}>{formik.errors.currency}</div> : null}
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
                placeholder='Please enter your message...'
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.text && formik.touched.text ? <div className={'error'}>{formik.errors.text}</div> : null}
            <label className="checkbox">
                <input 
                    name="terms" 
                    type="checkbox"
                    checked={formik.values.terms}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            {formik.errors.terms && formik.touched.terms ? <div className={'error'}>{formik.errors.terms}</div> : null}
            <button type="submit">Отправить</button>
        </form>
      );
}
