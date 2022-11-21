import React, { useState } from 'react';
import { login } from '../../api/index';
import { loginProps } from '../../types/login'; //{email: string; password: string;}
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './login.module.css';

function Login() {
     const {
          register,
          formState: { errors },
          handleSubmit,
          watch,
     } = useForm<loginProps>();

     const [errorEmail, setErrorEmail] = useState(false);

     const [loading, setLoading] = useState(false);

     const onSubmit: SubmitHandler<loginProps> = async (data) => {
          if (errorEmail === true) {
               alert('resuelve los errores');
          } else {
               setLoading(true);
               let dataUser = await login(data);
               if (dataUser.error) {
                    setLoading(false);
                    setErrorEmail(true);
                    return alert(dataUser.error);
               } else {
                    setLoading(false);
                    return console.log(dataUser);
               }
          }
     };

     // Callback version of watch
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

               {loading === false ? (
                    <button className={styles.button} type="submit">
                         Login
                    </button>
               ) : (
                    <div className={styles.button}>Loading...</div>
               )}
          </form>
     );
}

export default Login;
