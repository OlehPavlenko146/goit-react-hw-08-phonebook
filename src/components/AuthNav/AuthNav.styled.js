import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 20px;
  display: block;
  min-width: 100px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding: 5px;
  :hover {
    color: green;
  }
`;
