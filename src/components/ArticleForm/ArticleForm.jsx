import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import PropTypes from 'prop-types';
import classes from './ArticleForm.module.css';

const ArticleForm = ({ article, onSubmitArticle }) => {

  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({
    defaultValues: {...article, tagList: [...article.tagList.map((tag) => ({ tagName: tag }))] }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tagList'
  })

  const onSubmit = (data) => {
    onSubmitArticle({
      ...data,
      tagList: data.tagList.reduce((acc, tag) => (tag.tagName.length ? [...acc, tag.tagName] : acc), [])
    });
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form__fields}>
        <div className={classes.form__field}>
          <label className={classes.form__label}>
            <div className={classes.form__field__title}>Title</div>
            <input
              className={`${classes.form__field__input} ${errors.title && classes.invalid}`}
              type='text'
              placeholder='Title'
              {...register('title', {
                required: 'Поле обязательно к заполнению'
              })}
            />
          </label>
          <div>{errors.title && <p className={classes.error__message}>{errors.title.message || 'Error!'}</p>}</div>
        </div>

        <div className={classes.form__field}>
          <label className={classes.form__label}>
            <div className={classes.form__field__title}>Short description</div>
            <input
              className={`${classes.form__field__input} ${errors.description && classes.invalid}`}
              type='text'
              placeholder='Short description'
              {...register('description', {
                required: 'Поле обязательно к заполнению'
              })}
            />
          </label>
          <div>{errors.description && <p className={classes.error__message}>{errors.description.message || 'Error!'}</p>}</div>
        </div>

        <div className={classes.form__field}>
          <label className={classes.form__label}>
            <div className={classes.form__field__title}>Text</div>
            <textarea
              className={`${classes.form__field__textarea} ${errors.body && classes.invalid}`}
              type='text'
              placeholder='Text'
              {...register('body', {
                required: 'Поле обязательно к заполнению'
              })}
            />
          </label>
          <div>{errors.body && <p className={classes.error__message}>{errors.body.message || 'Error!'}</p>}</div>
        </div>

        <div className={classes.form__field}>
          <label className={classes.form__label} htmlFor='tag'>
            <div className={classes.form__field__title}>Tags</div>
            <div className={classes.form__tags__container}>
              <ul className={classes.form__tagList}>
                {fields.map((item, index) => (
                  <li className={classes.form__tagItem} key={item.id}>
                    <input
                      className={`${classes.form__field__input} ${classes.form__tagInput}`}
                      type='text'
                      name='tag'
                      placeholder='tag'
                      {...register(`tagList.${index}.tagName`)}
                    />
                    <button type='button' className={classes.form__tagDelete__button} onClick={() => remove(index)}>Delete</button>
                  </li>
                ))}
              </ul>
              <button type='button' className={classes.form__tagAdd__button} onClick={() => append({ tagName: ''})}>Add tag</button>
            </div>
          </label>
        </div>

        <div className={classes.form__field}>
          <button className={classes.form__field__button} type='submit' name='submit'>Send</button>
        </div>
      </form>
  )
}

export default ArticleForm;

ArticleForm.propTypes = {
  onSubmitArticle: PropTypes.func.isRequired,
  article: PropTypes.shape({ tagList: PropTypes.arrayOf(PropTypes.string) }).isRequired,
};