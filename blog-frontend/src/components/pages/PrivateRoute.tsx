import React, {FC, ReactNode} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '../../context/auth0-context';

interface Props{
    children: ReactNode,
    isAuthenticated?: boolean,
	user?: any,
	isLoading?: boolean,
	handleRedirectCallback?: () => void,
	getIdTokenClaims?: (...p: any) => any,
	loginWithRedirect?: (...p: any) => any,
	getTokenSilently?: (...p: any) => any,
	logout?: (...p: any) => any
}

function PrivateRoute({children, ...props}: Props): JSX.Element {

  const {
    isAuthenticated,
    user
  } = useAuth0()

  return (
    <Route {...props} render={() => {
      return isAuthenticated? 
              children:
              <Redirect to="/" />
    }}>
    </Route>
  )
}
export default PrivateRoute;
