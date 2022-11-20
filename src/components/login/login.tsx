import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './login.module.css';

type Inputs = {
     email: string;
     password: string;
};

function Login() {
     const {
          register,
          formState: { errors },
          handleSubmit,
          watch,
     } = useForm<Inputs>();

     const [errorEmail, setErrorEmail] = useState(false);

     const onSubmit: SubmitHandler<Inputs> = (data) => {
          if (errorEmail === true) {
               console.log(errors);
          } else {
               console.log(data);
          }
     };

     // Callback version of watch.  It's your responsibility to unsubscribe when done.
     React.useEffect(() => {
          let email = watch('email');

          if (email == '' || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
               return setErrorEmail(false);
          } else {
               return setErrorEmail(true);
          }
     });

     return (
          <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
               <div className={styles.text_container}>
                    <h5 className="title">Welcome, Stranger!</h5>
                    <label className="sub_title">
                         Please log in to this form if you wish to pass the exam.
                    </label>
               </div>
               <div className={styles.container_input}>
                    <input
                         className={
                              errors.email || errorEmail === true ? styles.inputError : styles.input
                         }
                         autoComplete="off"
                         type="text"
                         placeholder="Email"
                         {...register('email', {
                              required: {
                                   value: true,
                                   message: 'This field is required',
                              },
                              // pattern: {
                              //      value: /^\S+@\S+$/i,
                              //      message: 'Incorrect email',
                              // },
                         })}
                    />
                    <div className={styles.container_errors}>
                         <label className={styles.errors}>
                              {errors.email?.message}
                              {errorEmail == true ? 'Incorrect email' : ''}
                         </label>
                    </div>
               </div>
               <div className={styles.container_input}>
                    <input
                         className={errors.password ? styles.inputError : styles.input}
                         type="password"
                         placeholder="Password"
                         {...register('password', {
                              required: {
                                   value: true,
                                   message: 'This field is required',
                              },
                         })}
                    />
                    <div className={styles.container_errors}>
                         <label className={styles.errors}>{errors.password?.message}</label>
                    </div>
               </div>

               <button className={styles.button} type="submit">
                    Login
               </button>
          </form>
     );
}

export default Login;
