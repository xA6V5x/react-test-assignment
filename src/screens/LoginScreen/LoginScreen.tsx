import React, { useState } from 'react';
import { login, UserData } from '../../api/index';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './LoginScreen.module.css';
import Spinner from '../../components/spinner/spinner';
import Swal from 'sweetalert2';
import { CrossRed, ArrowWhite, CompanyLogo } from '../../components/logos/logos';
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer';
import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';
import { Button } from '../../components/Button/Button';

interface LoginScreenProps {
     onSuccess: (user: UserData) => void;
}

interface loginSendValues {
     email: string;
     password: string;
}

export function LoginScreen({ onSuccess }: LoginScreenProps) {
     const {
          register,
          formState: { errors },
          handleSubmit,
          watch,
     } = useForm<loginSendValues>();

     const [isLoading, setLoading] = useState(false);

     const [isInvalidUser, setInvalidUser] = useState(false);

     React.useEffect(() => {
          watch(() => {
               setInvalidUser(false);
          });
     });

     const onSubmit: SubmitHandler<loginSendValues> = async (data) => {
          if (isInvalidUser) {
               return;
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
               } else if (dataUser.data) {
                    setLoading(false);
                    const user = dataUser.data;
                    return onSuccess(user);
               }
               return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    confirmButtonColor: '#2f7bff',
               });
          }
     };

     return (
          <ScreenContainer>
               <CompanyLogo />
               <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.text_container}>
                         <Title title={'Welcome, Stranger!'} />
                         <SubTitle subTitle="Please log in to this form if you wish to pass the exam." />
                    </div>
                    <div className={styles.container_input}>
                         <input
                              id="inputEmail"
                              className={
                                   errors.email || isInvalidUser ? styles.inputError : styles.input
                              }
                              autoComplete="off"
                              type="text"
                              placeholder="Email"
                              {...register('email', {
                                   required: {
                                        value: true,
                                        message: 'This field is required',
                                   },
                                   pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Incorrect email',
                                   },
                              })}
                         />
                         <div
                              className={
                                   errors.email || isInvalidUser ? styles.crossRed : styles.none
                              }
                         >
                              <CrossRed />
                         </div>

                         <div className={styles.container_errors}>
                              <label className={styles.errors}>{errors.email?.message}</label>
                         </div>
                    </div>
                    <div className={styles.container_input}>
                         <input
                              className={
                                   errors.password || isInvalidUser
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
                                   errors.password || isInvalidUser ? styles.crossRed : styles.none
                              }
                         >
                              <CrossRed />
                         </div>
                         <div className={styles.container_errors}>
                              <label className={styles.errors}>{errors.password?.message}</label>
                         </div>
                    </div>

                    {isLoading === false ? (
                         <Button
                              type="submit"
                              name="Login"
                              icon={<ArrowWhite />}
                              iconPosition="right"
                              className="button"
                         />
                    ) : (
                         <Spinner />
                    )}
               </form>
          </ScreenContainer>
     );
}
