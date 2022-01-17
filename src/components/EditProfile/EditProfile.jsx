import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/actions/authActions';
import ApiService from "../../services/apiService";
import classes from './EditProfile.module.css';

const EditProfile = () => {
  const apiService = new ApiService();

  const [serverError, setServerError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);
  const { username, email, token } = userData;

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
    apiService.updateUser(data, token).then((response) => {
      if(response.user) {
        dispatch(loginUser(response.user));
        console.log(response.user);
        navigate('/');
      }
      if(response.errors) {
        setServerError(response.errors);
      }
    })
    reset();
  };

  return (
    <div className={classes.form_container}>
      <h1 className={classes.form_title}>Edit Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form_fields}>
        <div className={classes.form_field}>
          <label className={classes.form_label}>
          <div className={classes.field_title}>Username</div>
            <input
                className={`${classes.field_input} ${errors.username && classes.invalid}`}
                type='text'
                placeholder='Username'
                defaultValue={username}
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
                defaultValue={email}
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
          <div className={classes.field_title}>New password</div>
            <input
                className={`${classes.field_input} ${errors.password && classes.invalid}`}
                type='password'
                placeholder='New password'
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
            <div className={classes.field_title}>Avatar image (url)</div>
            <input
                className={`${classes.field_input} ${errors.avatar && classes.invalid}`}
                type='text'
                placeholder='Avatar image'
                {...register('image', {
                  pattern: {
                    value: /(http?|https?):\/\/(www\.)?[-\w@:%\\.\\+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-\w()@:%\\.\\+~#=//?&]*)/i,
                    message: 'Неккоректный url'
                  }
                })}
            />
          </label>
          <div>{errors.image && <p className={classes.error_message}>{errors.image.message || 'Error!'}</p>}</div>
          {serverError && <div className={classes.error_message}>Ошибка</div>}
        </div>
        <div className={classes.form_field}>
          <button className={classes.field_button} type='submit' name='submit' >Save</button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile;