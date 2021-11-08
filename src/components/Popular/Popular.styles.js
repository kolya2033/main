import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
`

export const Item = styled.li`
  color: ${props => props.isSelectedLanguage ? '#d0021b' : '#000000'};
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
`
export const PopularList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const PopularItem = styled.li`
  margin: 20px;
  text-align: center;
`
export const PopularRank = styled.div`
  font-size: 20px;
  margin: 10px;
`
export const SpaceListItems = styled.ul`
  margin-bottom: 7px;
`
export const Avatar = styled.img`
    width: 150px;
    border-radius: 50%;
`
