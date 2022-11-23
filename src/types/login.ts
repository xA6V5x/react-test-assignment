import { profileProps } from './profile';

export type loginProps = {
     email: string;
     password: string;
};

export type setStateApp = {
     handleSetState: (n: profileProps) => void;
};
