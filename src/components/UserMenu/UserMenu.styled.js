import styled from 'styled-components';

export const HelloPhrase = styled.p`
  padding: 8px 16px;
  font-size: 20px;
  color: #fff;

  font-weight: 500;
  padding: 5px;
`;

export const UserMenuWrap = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 8px 20px;
`;

export const LogOutBtn = styled.button`
  appearance: none;
  background-color: red;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  :hover {
    transform: scale(1.05);
  }
`;
