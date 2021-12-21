import React, {useRef} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import classes from './SignInForm.module.css';

const SignInForm = () => {
  const {
    watch,
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  });
  const password = useRef();
  password.current = watch('password');
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }
  return (
    <div className={classes.form_container}>
      <h1 className={classes.form_title}>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form_fields}>
        <div className={classes.form_field}>
          <label className={classes.form_label}>
            <div className={classes.field_title}>Email address</div>
            <input
                className={`${classes.field_input} ${errors.email && classes.invalid}`}
                type='text'
                placeholder='Email address'
                {...register('email', {
                  required: 'Поле обязательно к заполнению',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i,
                    message: 'Неккоректный email'
                  }
                })}
            />
          </label>
          <div>{errors.email && <p className={classes.error_message}>{errors.email.message || 'Error!'}</p>}</div>
        </div>
        <div className={classes.form_field}>
          <label className={classes.form_label}>
          <div className={classes.field_title}>Password</div>
            <input
                className={`${classes.field_input} ${errors.password && classes.invalid}`}
                type='password'
                placeholder='Password'
                {...register('password', {
                  required: 'Поле обязательно к заполнению',
                })}
            />
          </label>
          <div>{errors.password && <p className={classes.error_message}>{errors.password.message || 'Error!'}</p>}</div>
        </div>
        <div className={classes.form_field}>
          <button className={classes.field_button} type='submit' name='submit' disabled={!isValid}>Login</button>
        </div>
        <div className={classes.form_question_container}>
          <span className={classes.form_question_text}>Don&apos;t have an account? </span>
          <Link to='/sign-up' className={classes.form_question_link}>Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;