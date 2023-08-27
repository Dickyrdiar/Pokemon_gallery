import React, { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ReactComponent as BackIcon } from '../assets/icons/back.svg'
const itemPerpage = 10

export const PokemonList = () => {
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)
  const [visibleItems, setVisibleItems] = useState(itemPerpage)
  const history = useNavigate()

  // fetch(`${process.env.API_URL}/pokemons`)
  //   .then((res) => res.json())
  //   .then((data) => setResponse(data))

  useEffect(() => {
    fetch(`${process.env.API_URL}/pokemons`)
    .then((res) => res.json())
    .then((data) => setResponse(data))
  }, [])


  const handeCliclCard = (data) => {
    console.log(data, 'data check')
    history(`/pokemons/${data.id}`)
    localStorage.setItem("pokemnon", JSON.stringify(data))
  }

  const loadMore = () => {
    setVisibleItems((prevVisibleItem) => prevVisibleItem + itemPerpage)
  }
    console.log("data poke", response?.map((val) => val))

  return (
    <>
      <Main>
        <Header>
            <div className="label">Pokemon</div>
        </Header>
        <Wrapper>
          <Container>
            {response.slice(0, visibleItems).map((val, index) => (
              <Card key={index} onClick={ () => handeCliclCard(val)} type={val.type[0]}>
                <div className="icon"><img src={`${process.env.API_URL}/${val.image}`} type={val?.type[0]} /></div>
                <p className="label">{val.name.english}</p>
              </Card>
            ))}
          </Container>
          {visibleItems < response.length && (
            <ButtonLoad onClick={loadMore}>Load more</ButtonLoad>
          )}
        </Wrapper>
      </Main>
    </>
  )
}

const Main = styled.div`
  justify-content: center;
  align-items: center;
  margin: 64px;
  min-height: 300px;
  width: 375px;
  height: 812px;
  background-color: #ebebe0;
  box-shadow: 0 2px 4px rgba(0.0.0.1);
`

const IconHeader = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 1px;
  margin: 4px;
  > img {
    width: 55px;
    height: 55px;
  }
`

const Header = styled.header`
 background-color: #ffff;
 padding: 16px;
 align-items: center;
 justify-content: center;
 height: 60px;
 width: 380px;
 /* background-color: yellow; */
 p.label {
   color: black;
   font-size: 18px;
   font-weight: bold;
 }
`

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 380px;
  display: grid;
  background-color: #ffff;
  /* border: 1px solid #ccc; */
  padding: 10px;
  /* padding: 40px; */
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0px;
  padding: 20px;
  margin: 0 auto;
  gap: 20px;
`

const Card = styled.div`
  width: 168px;
  height: 113px;
  border-radius: 4px;
  display: flex;
  border: 1px solid #E6EAF3;
  box-shadow: 0px 3px 10px rgba(188, 200, 231, 0.2);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background-color: ${type => {
    if (type.type === 'fire') return '#FF5733';
    if (type.type === 'water') return '#3498DB';
    if (type.type === 'grass') return '#2ECC71';
    // Add more types and colors as needed
    return '#ccc'; // Default color
  }};
  gap: 20px;
  > p.label {
    margin: 0px;
    font-size: 14px;
    font-weight: 700;
    margin-top: 20px;
    /* color: #FAFAFAFA; */
    color: black;
    text-align: center;
  }
  >div.icon {
    display: flex;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 1px;
    margin: 4px;
    > img {
      width: 55px;
      height: 55px;
    }
  }
  >p.tag {
    width: 70px;
    height: 40px;
    border-radius: 45px;
    color: black;
  }
`

const ButtonLoad = styled.button`
  height: 30px;
  width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: 40px;
  background-color: #6749DB;
  color: #FFF;
`

