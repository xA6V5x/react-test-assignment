import { profileProps } from './profile';

export type loginProps = {
     email: string;
     password: string;
};

export type setStateUser = {
     setUser: (n: profileProps) => void;
};
