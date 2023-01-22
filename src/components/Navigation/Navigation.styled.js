import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding: 5px;
  font-size: 20px;
  :hover {
    color: green;
  }
`;
export const Nav = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 8px 20px;
`;
