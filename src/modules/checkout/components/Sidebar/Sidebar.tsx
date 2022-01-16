import { FC } from 'react';
import { Typography, Divider } from '@mui/material';
import { StyledBox, StyledCard } from './Sidebar.style';
import { sidebarList } from './sidebar.utils';
import { SidebarStep1 } from '../sidebars';
interface Props {
  activeStep: number;
}
function renderStepSidebar(step: number) {
  switch (step) {
    case 0:
      return <SidebarStep1 />;
    case 1:
      return <div>Sideabr 2</div>;
    case 2:
      return <div>Sideabr 3</div>;
    case 3:
      return <div>sIDEBA</div>;
    default:
      return <div>not found</div>;
  }
}
const Sidebar: FC<Props> = ({ activeStep }) => {
  return <StyledCard>{renderStepSidebar(activeStep)}</StyledCard>;
};

export default Sidebar;
