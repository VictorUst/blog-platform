import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/actions/authActions';
import ApiService from "../../services/apiService";
import classes from './SignInForm.module.css';

const SignInForm = () => {
  const apiService = new ApiService();

  const [serverError, setServerError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: 'all'
  });

  const onSubmit = (data) => {
    apiService.loginUser(data).then((response) => {
      if (response.user) {
        dispatch(loginUser(response.user));
        localStorage.setItem('user', JSON.stringify(response.user));
        navigate('/');
      }
      if (response.errors) {
        setServerError(response.errors);
      }
    })
    reset();
  };

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
          {serverError && <div className={classes.error_message}>Неправильный логин или пароль</div>}
        </div>
        <div className={classes.form_field}>
          <button className={classes.field_button} type='submit' name='submit' >Login</button>
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