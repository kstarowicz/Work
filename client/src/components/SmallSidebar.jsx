import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar"
import { useDashboardContext } from '../pages/DashboardLayout'
import Logo from "./Logo";

const SmallSidebar = () => {
  const data = useDashboardContext();
  console.log(data);
  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className="content">
          <button type="button" className="close-btn">
            <FaTimes/>
          </button>
          <header>
            <Logo />
          </header>
        </div>

      </div>
    </Wrapper>
  )
}

export default SmallSidebar;