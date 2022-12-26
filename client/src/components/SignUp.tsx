import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface SignUpType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(3).max(16),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must not exceed 40 characters')
    .required(),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: SignUpType) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center sign-up pt-6 sm:justify-center sm:pt-0 ">
      <div>
        <a href="/" className="flex items-center">
          <img
            src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/001/955/original/hangman.png"
            className="h-6 mr-3 sm:h-9"
            alt="hang-man logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            HangMan
          </span>
        </a>
      </div>
      <div className="w-full px-6 py-8 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <div className="flex flex-col items-start">
              <input type="text" className="form-input" {...register('name')} />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="flex flex-col items-start">
              <input
                type="email"
                className="form-input"
                {...register('email')}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                className="form-input"
                {...register('password')}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="password_confirmation" className="form-label">
              Confirm Password
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                className="form-input"
                {...register('confirmPassword')}
              />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <button className="form-button">Register</button>
          </div>
        </form>
        <div className="mt-4 text-grey-600">
          Already have an account?{' '}
          <span>
            <a className="text-purple-600 hover:underline" href="#">
              Log in
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
