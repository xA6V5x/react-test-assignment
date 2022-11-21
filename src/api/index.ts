import { loginProps } from '../types/login';

type dataUserProps = {
     data?: {
          avatar: string;
          name: string;
     };
     error?: string;
};

export function login({ email, password }: loginProps) {
     return new Promise<dataUserProps>((resolve) => {
          setTimeout(() => {
               if (email === 'elon@mercdev.com' && password === 'twitter') {
                    resolve({ data: { avatar: '/avatar.jpeg', name: 'Elon' } });
               } else {
                    resolve({ error: 'Incorrect email or password' });
               }
          }, 1000);
     });
}
