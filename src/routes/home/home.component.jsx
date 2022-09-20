import { Outlet } from 'react-router-dom';
import '../../App.css';
import '../../categories.style.scss';
import Directory from '../../Component/directory/directory.component';


const Home = () => {
  
  return (
    <div>
    <Outlet/>
    <Directory />
    </div>
    
  );
}

export default Home;
