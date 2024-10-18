import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData('user', user);
      navigate('/');
    },
    onError: () => toast.error('Provided email or password are incorrect'),
  });

  return { login, isLoggingIn };
}
