export interface UserData {
     avatar: string;
     name: string;
}

interface LoginRequest {
     email: string;
     password: string;
}

type Response<T> = {
     data?: T;
     error?: string;
};

type LoginResponse = Response<UserData>;

export function login({ email, password }: LoginRequest) {
     return new Promise<LoginResponse>((resolve) => {
          setTimeout(() => {
               if (email === 'elon@mercdev.com' && password === 'twitter') {
                    resolve({ data: { avatar: '/avatar.jpeg', name: 'Elon' } });
               } else {
                    resolve({ error: 'Incorrect email or password' });
               }
          }, 1000);
     });
}
