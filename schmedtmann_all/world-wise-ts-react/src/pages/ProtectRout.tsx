import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/fakeAuthContext";
import { useEffect } from "react";



interface IPropsProtectRoute {
  children: React.ReactNode;
}

export default function ProtectRout({children}: IPropsProtectRoute) {

  const {isAuthenticated} = useAuth();  //custom hook from Context
  const navigate = useNavigate();    //hook from pargmating routing 

  useEffect(() => {
    if(!isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;  // this condition need smooth redirect to HomePage without fast view secret information
}
