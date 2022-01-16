import { FC } from 'react';
import { Typography, Divider } from '@mui/material';
import { StyledBox, StyledCard } from './Sidebar.style';
import { sidebarList } from './sidebar.utils';

const Sidebar: FC = () => {
  return (
    <StyledCard>
      {sidebarList.map(({ id, text, values }) => (
        <StyledBox key={id}>
          <Typography color="textSecondary">{text}</Typography>
          <Typography variant="h6">{values}</Typography>
        </StyledBox>
      ))}
      <Divider light />
      <StyledBox>
        <Typography variant="h4">Razem:</Typography>
        <Typography variant="h2" color="primary">
          3000$
        </Typography>
      </StyledBox>
    </StyledCard>
  );
};

export default Sidebar;
