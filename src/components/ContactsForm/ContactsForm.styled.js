import styled from 'styled-components';

export const FormWpap = styled.div`
  margin-top: 60px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  font-size: 25px;
`;

export const Label = styled.label`
  display: flex;
  font-size: 15px;

  flex-direction: column;
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 35px;
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;

  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 16px;
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

export const Title = styled.h1`
  font-size: 40px;
  padding: 10px;
`;

// export const LoaderWrap = styled.span`
//   display: inline-block;
//   width: 25px;
//   height: 25px;
// `;

export const BtnNameWrap = styled.span`
  display: inline-block;
  width: 100px;
  height: 25px;
`;
