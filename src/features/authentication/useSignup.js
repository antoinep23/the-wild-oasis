import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { signup as signupApi } from '../../services/apiAuth';

export function useSignup() {
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),
    onSuccess: () =>
      toast.success(
        "User created successfully! Please verify the new account from the user's email"
      ),
  });

  return { signup, isSigningUp };
}
