import React, {useRef} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import classes from './SignUpForm.module.css';

const SignUpForm = () => {
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
      <h1 className={classes.form_title}>Create new account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form_fields}>
        <div className={classes.form_field}>
          <label className={classes.form_label}>
          <div className={classes.field_title}>Username</div>
            <input
                className={classes.field_input}
                type='text'
                placeholder='Username'
                {...register('username', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 3,
                    message: 'Минимум 3 символа'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Не больше 20 символов'
                  },
                })}
            />
          </label>
          <div>{errors?.username && <p>{errors?.username?.message || 'Error!'}</p>}</div>
        </div>
        <div className={classes.form_field}>
          <label className={classes.form_label}>
          <div className={classes.field_title}>Email address</div>
            <input
                className={classes.field_input}
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
          <div>{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>
        </div>
        <div className={classes.form_field}>
          <label className={classes.form_label}>
          <div className={classes.field_title}>Password</div>
            <input
                className={classes.field_input}
                type='text'
                placeholder='Password'
                {...register('password', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 6,
                    message: 'Минимум 6 символа'
                  },
                  maxLength: {
                    value: 40,
                    message: 'Не больше 40 символов'
                  },
                })}
            />
          </label>
          <div>{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}</div>
        </div>
        <div className={classes.form_field}>
          <label className={classes.form_label}>
            <div className={classes.field_title}>Repeat password</div>
            <input
                className={classes.field_input}
                type='text'
                placeholder='Password'
                {...register('repeatPassword', {
                  required: 'Поле обязательно к заполнению',
                  validate: (value) => value === password.current
                })}
            />
          </label>
          <div>{errors?.repeatPassword && <p>{errors?.repeatPassword?.type === 'validate' && <p>Пароли не совпадают</p>}</p>}</div>
        </div>
        <div className={classes.form_field}>
          <label className={classes.form_label}>
            <input
                className={classes.form_checkbox}
                type='checkbox'
                {...register('agreement', {
                  required: 'Поле обязательно к заполнению',
                })}
            />
            <span className={classes.form_checkbox_text}>I agree to the processing of my personal information</span>
          </label>
          <div>{errors.agreement && <p>{errors.agreement.message}</p>}</div>
        </div>
        <div className={classes.form_field}>
          <button className={classes.field_button} type='submit' name='submit' disabled={!isValid}>Create</button>
        </div>
        <div className={classes.form_question_container}>
          <span className={classes.form_question_text}>Already have an account? </span>
          <Link to='/sign-in' className={classes.form_question_link}>Sign In</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm;