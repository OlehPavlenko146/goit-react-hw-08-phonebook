import styled from 'styled-components';

export const ContactListWrap = styled.div`
  width: 420px;
`;

export const ListOfContacts = styled.ul`
  display: flex;
  padding: 10px;

  flex-direction: column;
  gap: 10px;
`;

export const Contact = styled.li`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const ContactDetails = styled.p`
  width: calc(100% / 3);
  font-size: 16px;
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 35px;
  min-width: 35px;
  appearance: none;
  background-color: salmon;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;

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

export const ContactsTitle = styled.h2`
  margin: 0 auto;
  font-size: 40px;
  padding: 5px;
`;

// export const LoaderWrapDel = styled.span`
//   display: inline-block;
//   width: 25px;
//   height: 25px;
// `;

export const BtnNameWrapDel = styled.span`
  display: inline-block;
  min-width: 25px;
  height: 25px;
`;
