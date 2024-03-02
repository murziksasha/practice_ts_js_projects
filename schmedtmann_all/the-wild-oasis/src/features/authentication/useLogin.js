import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {mutate: login, isLoading} = useMutation({
    mutationFn: ({email, password}) => loginApi({email, password}),
    onSuccess: (user) => {
      console.log(user);
      navigate('/dashboard', {replace: true});
    },
    onError: err => {
      console.log('ERROR', err);
      toast.error('Provided email or password are incorrect');
    }
  });

  return {login, isLoading};
}