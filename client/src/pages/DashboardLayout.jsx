import { Outlet, redirect, useLoaderData } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, Navbar, SmallSidebar } from "../components"
import { createContext, useContext, useState } from "react"


export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext() 

const DashboardLayout = ({ isDarkThemeEnabled }) => {

  const {user} = useLoaderData();
  
  const [showSidebar,setShowSidebar] = useState(false);
  const [isDarkTheme,setIsDarkTheme] = useState(isDarkThemeEnabled);


  const toggleDarkTheme = () => {
    const newDarkThem = !isDarkTheme;
    setIsDarkTheme(newDarkThem);
    document.body.classList.toggle('dark-theme', newDarkThem);
    localStorage.setItem('darkTheme', newDarkThem);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  };

  const logoutUser = async () => {
    console.log('logout user')
  };

  return (
  <DashboardContext.Provider 
  value={{
    user,
    showSidebar,
    isDarkTheme,
    toggleDarkTheme,
    toggleSidebar,
    logoutUser,
  }}>
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet context={{ user }}/>
          </div>
        </div>
      </main>
    </Wrapper>
  </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;