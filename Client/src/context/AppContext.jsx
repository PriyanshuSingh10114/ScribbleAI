import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [credit, setCredit] = useState(false);
  const backendUrl = 'http://localhost:5000';

  const navigate=useNavigate();

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/credits', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (data.success) {
        setCredit(data.data.creditBalance);
        setUser({ name: data.data.name });
      }
    } catch (error) {
      console.log(error);
      const errorMsg = error.response?.data?.message || error.message;
      toast.error(errorMsg);
    }
  }

  const generateImage=async(prompt)=>{
    try{
      const {data}=await axios.post(backendUrl + '/api/ai/generate-image',{prompt},{headers: { Authorization: `Bearer ${token}` }})

      if(data.success){
        loadCreditsData()
        return data.data.resultImage
      }
    }catch(error){
      const errorMsg = error.response?.data?.message || error.message;
      toast.error(errorMsg);
      loadCreditsData();
      if(error.response?.status === 402 || error.response?.data?.message === 'Insufficient credits'){
        navigate('/buy-credit')
      }
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    setToken('');
    setUser(null);
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;