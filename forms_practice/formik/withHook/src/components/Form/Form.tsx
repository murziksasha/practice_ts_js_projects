import styles from './Form.module.scss';
import { useFormik } from 'formik';



interface FormProps { }

type FormValues = {
    name: string;
    email: string;
    amount: number;
    currency: string;
    text: string;
    terms: boolean;
  };

  const validate = (values: FormValues) => {
    const errors = {name: '', email: ''};
    if(!values.name) {
        errors.name = 'This is required field!'
    } else if (values.name.length < 2) {
        errors.name = `It's too short name. Please check the name!`;
    }

    if(!values.email) {
        errors.name = 'This is required field!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
    }

    return errors;
  }

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
        validate,
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
                //вместо этих пропсов внижу можно обойтись одной строкой из хука
                // {...formik.getFieldProps('name')}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
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
            {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
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
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
                placeholder='Please enter your message...'
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
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
            <button type="submit">Отправить</button>
        </form>
      );
}
