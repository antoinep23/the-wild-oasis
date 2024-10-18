import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../ui/Spinner';
import { useUser } from '../features/authentication/useUser';

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isAuthenticated, isPending } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) return navigate('/login');
    },
    [isAuthenticated, isPending, navigate]
  );

  // 3. While loading, show a spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
