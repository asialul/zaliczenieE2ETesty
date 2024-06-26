import { useEffect, useReducer, useState } from 'react';
import classes from './ContactForm.module.css';

const initialState = {
  name: {
    value: '',
    blurred: false,
  },
  email: {
    value: '',
    blurred: false,
  },

};

const formReducer = (state, action) => {
  if (action.type === 'INPUT_CHANGE') {
    return {
      ...state,
      [action.input]: {
        value: action.value,
        blurred: false,
      },
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      ...state,
      [action.input]: {
        ...state[action.input],
        blurred: true,
      },
    };
  }

  return initialState;
};

function ContactForm() {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { name, email} = formState;
  const nameIsValid = name.value.trim() !== '';
  const emailIsValid = email.value.trim() !== '' && email.value.includes('@');

  const nameIsInvalid = !nameIsValid && name.blurred;
  const emailIsInvalid = !emailIsValid && email.blurred;

  useEffect(() => {
    if (isSubmitting) {
      console.log('Sending message...');
      const timer = setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitting]);

  function changeInputHandler(event) {
    dispatch({
      type: 'INPUT_CHANGE',
      input: event.target.id,
      value: event.target.value,
    });
  }

  function blurInputHandler(event) {
    dispatch({
      type: 'INPUT_BLUR',
      input: event.target.id,
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    setIsSubmitting(true);
  }

  return (
    <>
      <h2 className="center">Zapisz się, aby dostawać nasz newsletter.</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.row}>
          <p className={nameIsInvalid ? classes.invalid : undefined} id="name-input">
            <label htmlFor="name">Twoje Imię</label>
            <input
              type="text"
              id="name"
              onChange={changeInputHandler}
              onBlur={blurInputHandler}
              required
              data-cy="contact-input-name"
            />
          </p>
          <p className={emailIsInvalid ? classes.invalid : undefined} id="email-input">
            <label htmlFor="email">Twój Email</label>
            <input
              type="email"
              id="email"
              onChange={changeInputHandler}
              onBlur={blurInputHandler}
              required
              data-cy="contact-input-email"
            />
          </p>
        </div>
        <p className={classes.actions}>
          <button
            type="submit"
            data-cy="contact-btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Wysyłanie' : 'Wyślij'}
          </button>
        </p>
      </form>
    </>
  );
}

export default ContactForm;
