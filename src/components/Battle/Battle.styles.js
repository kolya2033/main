import styled from "styled-components";
import {Link} from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BattleLink = styled(Link)`
  color: #e6e6e6;
  background: #0a0a0a;
  border: none;
  font-size: 16px;
  border-radius: 3px;
  width: 200px;
  text-align: center;
  display: block;
  padding: 7px 0;
  margin: 10px auto;
`
export const BattonBattle = styled.button`
  color: #e6e6e6;
  background: #0a0a0a;
  border: none;
  font-size: 16px;
  border-radius: 3px;
  width: 200px;
  text-align: center;
  display: block;
  padding: 7px 0;
  margin: 10px auto;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Reset = styled.button`
  border: none;
  background: transparent;
  color: #d0021b;
  display: block;
  width: 100%;
  text-align: center;
  outline: none;
`

export const Btn = styled(Link)`
  color: #e6e6e6;
  background: #0a0a0a;
  border: none;
  font-size: 16px;
  border-radius: 3px;
  width: 200px;
  text-align: center;
  display: block;
  padding: 7px 0;
  margin: 10px auto;
  &:hover {
    background: linear-gradient(#1a1a1a,#0a0a0a);
    color: #fff;
    text-decoration: none;
  }
  &:active {
    transform: translateY(1px);
  }
`
export const Column = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
`

export const Header = styled.label`
  text-align: center;
  font-size: 30px;
  font-weight: 200;
`

export const InputHeader = styled.input`
  border-radius: 3px;
  margin: 10px 0;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.43);
  font-size: 16px;
  width: 80%;
`

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`
