import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {  FaColumns, FaPlus } from "react-icons/fa";
import { Sidebar, Menu } from "react-pro-sidebar";
import { Link } from "react-router-dom";


import styled from "styled-components";

const SidebarContainer = styled.div`
  background: linear-gradient(#27212e, #221530);
  height: 145vh;
`;

const CustomMenu = styled(Menu)`
  background-color: '#20caa4'; 
  &.active {
    background-color: #ff0000; 
    color: #ffffff; 
  }
  &:hover {
    background-color: '#20caa4';
    color: #ffffff; 
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const StyledMenuItem = styled.li`
  &:hover {
    transform: translateX(-5px);
    transition: transform 0.2s;
    box-shadow: 0 2px 30px rgba(234, 78, 240, 0.4);
    padding: 5px;
    border-radius: 10px;
    background-color: #20caa4;
  }
  a {
    text-decoration: none;
    color: inherit; 
  }
`;

const SideNavigation = (props) => {
  const [collapsed, setCollapsed] = useState(false);
console.log(props);
  const styles = {
    sideBarHeight: {
      height: "150vh",
      color: "white",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "60px",
      backgroundColor: "#ff9933",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
    },
    listItem: {
      padding:'10px',
      marginTop: "20px",
      marginBottom: "20px", 
    },
    button : {
      marginTop: "20px", 
    },
   
   
  };

  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  return (
    <SidebarContainer>
      <Sidebar style={styles.sideBarHeight} collapsed={collapsed}>
        <div style={styles.header}>
          <div style={styles.menuIcon} onClick={onClickMenuIcon}>
            {collapsed ? <AiOutlineMenu /> : "ContractHero"}
          </div>
        </div>
        <CustomMenu iconShape="square">
          <ul>
            <StyledMenuItem style={styles.listItem}>
            <Link to='/contracts'>
                <FaColumns /> Contracts
                </Link>
            </StyledMenuItem>
         
            <StyledMenuItem style={styles.listItem}>
           
             <Link to="/newContract">
                <FaPlus /> Add new contract
           </Link>
            </StyledMenuItem>
           
          </ul>
        </CustomMenu>
       
      </Sidebar>
    </SidebarContainer>
  );
};

export default SideNavigation;