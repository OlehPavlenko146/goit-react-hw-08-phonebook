import styled from 'styled-components';

export const LogForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 70px;
`;

export const LogLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 5px;
`;

export const LogBtn = styled.button`
  appearance: none;
  background-color: #2ea44f;
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
