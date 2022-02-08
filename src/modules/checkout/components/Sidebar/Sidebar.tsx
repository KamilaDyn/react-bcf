import { FC } from 'react';
import { StyledCard } from './Sidebar.style';
import { SidebarStep1, SidebarStep2and3 } from '../sidebars';
interface Props {
  activeStep: number;
}
function renderStepSidebar(step: number) {
  switch (step) {
    case 0:
      return <SidebarStep1 />;
    case 1:
      return <SidebarStep2and3 />;
    case 2:
      return <SidebarStep2and3 />;
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
