import React, { useState } from 'react';
import { login } from '../../api/index';
import { loginProps, setStateApp } from '../../types/login';
//{email: string; password: string;} and {handleSetState: (n: {name=''; avatar=''}) => void;}
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './login.module.css';
import Spinner from '../spinner/spinner';

function Login({ handleSetState }: setStateApp) {
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
               return;
          } else {
               setLoading(true);
               let dataUser = await login(data);
               if (dataUser.error) {
                    setLoading(false);
                    setErrorEmail(true);
                    return alert(dataUser.error);
               } else if (dataUser.data != undefined) {
                    setLoading(false);
                    return handleSetState(dataUser.data);
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
                    <svg
                         className={
                              errors.email || errorEmail === true ? styles.crossRed : styles.none
                         }
                         width="24"
                         height="24"
                         viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path
                              d="M4.69635 3.71966C4.40345 3.42677 3.92858 3.42677 3.63569 3.71966C3.34279 4.01255 3.34279 4.48743 3.63569 4.78032L10.9393 12.0839L3.63628 19.3869C3.34339 19.6798 3.34339 20.1547 3.63628 20.4476C3.92917 20.7405 4.40405 20.7405 4.69694 20.4476L11.9999 13.1446L19.3029 20.4476C19.5958 20.7405 20.0707 20.7405 20.3636 20.4476C20.6565 20.1547 20.6565 19.6798 20.3636 19.3869L13.0606 12.0839L20.3642 4.78033C20.6571 4.48744 20.6571 4.01256 20.3642 3.71967C20.0713 3.42678 19.5964 3.42678 19.3035 3.71967L11.9999 11.0233L4.69635 3.71966Z"
                              fill="#FF0044"
                         />
                    </svg>

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
                    <svg
                         className={errors.password ? styles.crossRed : styles.none}
                         width="24"
                         height="24"
                         viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path
                              d="M4.69635 3.71966C4.40345 3.42677 3.92858 3.42677 3.63569 3.71966C3.34279 4.01255 3.34279 4.48743 3.63569 4.78032L10.9393 12.0839L3.63628 19.3869C3.34339 19.6798 3.34339 20.1547 3.63628 20.4476C3.92917 20.7405 4.40405 20.7405 4.69694 20.4476L11.9999 13.1446L19.3029 20.4476C19.5958 20.7405 20.0707 20.7405 20.3636 20.4476C20.6565 20.1547 20.6565 19.6798 20.3636 19.3869L13.0606 12.0839L20.3642 4.78033C20.6571 4.48744 20.6571 4.01256 20.3642 3.71967C20.0713 3.42678 19.5964 3.42678 19.3035 3.71967L11.9999 11.0233L4.69635 3.71966Z"
                              fill="#FF0044"
                         />
                    </svg>
                    <div className={styles.container_errors}>
                         <label className={styles.errors}>{errors.password?.message}</label>
                    </div>
               </div>

               {loading === false ? (
                    <button className="button" type="submit">
                         <label>Login</label>
                         <svg
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <path
                                   d="M7.2183 10.7775C6.92665 11.0577 6.92732 11.5114 7.2198 11.7908C7.51227 12.0703 7.98579 12.0696 8.27743 11.7894L13.7817 6.50597C14.0728 6.2263 14.0728 5.7737 13.7817 5.49403L8.27743 0.210595C7.98579 -0.0696357 7.51227 -0.0702799 7.2198 0.209157C6.92732 0.488594 6.92665 0.942296 7.2183 1.22253L11.4146 5.25H1C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75H11.4146L7.2183 10.7775Z"
                                   fill="white"
                              />
                         </svg>
                    </button>
               ) : (
                    <Spinner />
               )}
          </form>
     );
}

export default Login;
