import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 15vw;
  height: 94vh;
  background-color: #11293f;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;

export const SidebarItemContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
`;

export const SidebarItemText = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    color: #66fcf1;
  }
`;
