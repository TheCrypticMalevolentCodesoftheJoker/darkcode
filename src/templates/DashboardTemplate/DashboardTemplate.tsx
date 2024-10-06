import React from 'react';
import './DashboardTemplate.scss';

interface DashboardTemplateProps {
  children: React.ReactNode;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({children}) => {
  return (
    <div className='container__dashboardTemplate'>
      {children}
    </div>
  );
};

export default DashboardTemplate;
