import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import classes from './SignUpForm.module.css';
import { loginUser } from '../../redux/actions/authActions';
import ApiService from '../../services/apiService';

const SignUpForm = () => {
  const apiService = new ApiService();

  const [serverError, setServerError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: 'all'
  });

  const password = useRef();
  password.current = watch('password');

  const onSubmit = (data) => {
    apiService.registerUser(data).then((response) => {
      if(response.user) {
        dispatch(loginUser(response.user));
        localStorage.setItem('user', JSON.stringify(response.user));
        navigate('/');
      }
      if(response.errors) {
        setServerError(response.errors);
      }
    })
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
                className={`${classes.field_input} ${errors.username && classes.invalid}`}
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
          <div>{errors.username && <p className={classes.error_message}>{errors.username.message || 'Error!'}</p>}</div>
        </div>
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
          <div>{errors.password && <p className={classes.error_message}>{errors.password.message || 'Error!'}</p>}</div>
        </div>
        <div className={classes.form_field}>
          <label className={classes.form_label}>
            <div className={classes.field_title}>Repeat password</div>
            <input
                className={`${classes.field_input} ${errors.repeatPassword && classes.invalid}`}
                type='password'
                placeholder='Password'
                {...register('repeatPassword', {
                  required: 'Поле обязательно к заполнению',
                  validate: (value) => value === password.current
                })}
            />
          </label>
          <div>{errors.repeatPassword && <p className={classes.error_message}>{errors.repeatPassword.type === 'validate' && <p>Пароли не совпадают</p>}</p>}</div>
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
          <div>{errors.agreement && <p className={classes.error_message}>{errors.agreement.message}</p>}</div>
          {serverError && <div className={classes.error_message}>Пользователь с таким логином или почтой уже существует</div>}
        </div>
        <div className={classes.form_field}>
          <button className={classes.field_button} type='submit' name='submit' >Create</button>
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