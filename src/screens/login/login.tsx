import React, { useState } from 'react';
import { login } from '../../api/index';
import { loginProps, setStateUser } from '../../types/login';
//{email: string; password: string;} and {handleSetState: (n: {name=''; avatar=''}) => void;}
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './login.module.css';
import Spinner from '../../components/spinner/spinner';
import Swal from 'sweetalert2';
import { CrossRed, ArrowWhite } from '../../components/logos/logos';

function Login({ setUser }: setStateUser) {
     const {
          register,
          formState: { errors },
          handleSubmit,
          watch,
     } = useForm<loginProps>();

     const [errorEmail, setErrorEmail] = useState(false);

     const [invalidUser, setInvalidUser] = useState(false);

     const [loading, setLoading] = useState(false);

     const onSubmit: SubmitHandler<loginProps> = async (data) => {
          if (errorEmail === true || invalidUser === true) {
               let inputEmail = document.getElementById('inputEmail')?.focus();
               return inputEmail;
          } else {
               setLoading(true);
               let dataUser = await login(data);
               if (dataUser.error) {
                    setLoading(false);
                    setInvalidUser(true);
                    return Swal.fire({
                         icon: 'error',
                         title: 'Oops...',
                         text: dataUser.error,
                         confirmButtonColor: '#2f7bff',
                         confirmButtonText: 'Try again',
                    });
               } else if (dataUser.data != undefined) {
                    setLoading(false);
                    return setUser(dataUser);
               }
               return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    confirmButtonColor: '#2f7bff',
               });
          }
     };

     // Callback version of watch
     React.useEffect(() => {
          let email = watch('email');

          watch((e) => {
               setInvalidUser(false);
          });

          if (
               email == '' ||
               // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
               /^\S+@\S+$/.test(email)
          ) {
               return setErrorEmail(false);
          }
          return setErrorEmail(true);
     });

     return (
          <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
               <div className={styles.text_container}>
                    <h2 className="title">Welcome, Stranger!</h2>
                    <label className="sub_title">
                         Please log in to this form if you wish to pass the exam.
                    </label>
               </div>
               <div className={styles.container_input}>
                    <input
                         id="inputEmail"
                         className={
                              errors.email || errorEmail === true || invalidUser === true
                                   ? styles.inputError
                                   : styles.input
                         }
                         autoComplete="off"
                         type="text"
                         placeholder="Email"
                         {...register('email', {
                              required: {
                                   value: true,
                                   message: 'This field is required',
                              },
                         })}
                    />
                    <div
                         className={
                              errors.email || errorEmail === true || invalidUser === true
                                   ? styles.crossRed
                                   : styles.none
                         }
                    >
                         <CrossRed />
                    </div>

                    <div className={styles.container_errors}>
                         <label className={styles.errors}>
                              {errors.email?.message}
                              {errorEmail == true ? 'Incorrect email' : ''}
                         </label>
                    </div>
               </div>
               <div className={styles.container_input}>
                    <input
                         className={
                              errors.password || invalidUser === true
                                   ? styles.inputError
                                   : styles.input
                         }
                         type="password"
                         placeholder="Password"
                         {...register('password', {
                              required: {
                                   value: true,
                                   message: 'This field is required',
                              },
                         })}
                    />
                    <div
                         className={
                              errors.password || invalidUser === true
                                   ? styles.crossRed
                                   : styles.none
                         }
                    >
                         <CrossRed />
                    </div>
                    <div className={styles.container_errors}>
                         <label className={styles.errors}>{errors.password?.message}</label>
                    </div>
               </div>

               {loading === false ? (
                    <button className="button" type="submit">
                         <label style={{ marginRight: '10px' }}>Login</label>
                         <div style={{ display: 'flex', justifyContent: 'center' }}>
                              <ArrowWhite />
                         </div>
                    </button>
               ) : (
                    <Spinner />
               )}
          </form>
     );
}

export default Login;
