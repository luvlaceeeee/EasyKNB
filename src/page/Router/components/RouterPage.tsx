import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../../modules/Sidebar/components/Sidebar'
import HomePage from '../../HomePage/components/HomePage'
import WelcomePage from '../../WelcomePage/components/WelcomePage'

const RouterPage: FC = () => {
  return (
    <Routes>
      {/* <Route path="" element={<Navigate to="/welcome" />} /> */}
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/" element={<Sidebar />}>
        <Route path='/home' element={<HomePage/>}/>
      </Route>
    </Routes>
  );
};

export default RouterPage;
