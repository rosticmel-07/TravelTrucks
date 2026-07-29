'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { createBookingRequest } from '@/lib/api';
import { toast } from 'react-toastify';
import css from './Form.module.css';

type BookingValues = {
  name: string;
  email: string;
};

const initialValues: BookingValues = {
  name: '',
  email: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄ\s]+$/, 'Please enter your name')
    .min(2, 'Please enter your name')
    .required('Please enter your name'),
  email: Yup.string()
    .email('Please enter your email')
    .required('Please enter your email'),
});

type BookingFormProps = {
  camperId: string;
};

export default function BookingForm({ camperId }: BookingFormProps) {
  const handleSubmit = async (
    values: BookingValues,
    { resetForm, setSubmitting }: FormikHelpers<BookingValues>
  ) => {
    try {
      const response = await createBookingRequest(camperId, values);
      toast.success(response.message);
      resetForm();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik<BookingValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.field}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={`${css.input} ${
                  errors.name && touched.name ? css.inputError : ''
                }`}
              />
              <ErrorMessage name="name" component="p" className={css.error} />
            </div>

            <div className={css.field}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={`${css.input} ${
                  errors.email && touched.email ? css.inputError : ''
                }`}
              />
              <ErrorMessage name="email" component="p" className={css.error} />
            </div>

            <button
              type="submit"
              className={css.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
