import styled from "styled-components";

export const Item = styled.li`
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  position: relative;
`;

export const Header = styled.h2`
  font-size: 12pt;
`;

export const Dietaries = styled.p`
  margin: 0;
`;

export const Dietary = styled.span`
  font-size: 10pt;
  border-radius: 100%;
  background: #a0c9cd;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
  width: 26px;
  height: 26px;
  text-align: center;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  color: #FFF;
`;

export const Button = styled.button`
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-appearance: none;
  border: 2px solid #000;
  background: #fff;
  font-weight: bold;
  width: 26px;
  height: 26px;
  line-height: 0px;
  border-radius: 100%;
  padding: 0;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;
