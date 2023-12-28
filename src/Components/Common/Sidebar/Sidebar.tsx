import {
  SidebarContainer,
  SidebarItemContainer,
  SidebarItemText,
} from "./Sidebar.style";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItemContainer to={"/"}>
        <SidebarItemText>Navigation</SidebarItemText>
      </SidebarItemContainer>
      <SidebarItemContainer to={"/"}>
        <SidebarItemText>Home</SidebarItemText>
      </SidebarItemContainer>
      <SidebarItemContainer to={"/patientRegistration"}>
        <SidebarItemText>Patient Registration</SidebarItemText>
      </SidebarItemContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
