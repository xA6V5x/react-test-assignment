export type profileProps =
     | {
            name: string;
            avatar: string;
       }
     | {};

export type profilePropsFunction = {
     name: string;
     avatar: string;
     setUser: (n: profileProps) => void;
};
