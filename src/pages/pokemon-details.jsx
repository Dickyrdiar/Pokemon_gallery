import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
// import { ReactComponent as Back } from '../assets/icons/back.svg'

const tabs = [
  { id: 1, label: 'Stock', content: 'Content for Tab 1' },
  { id: 2, label: 'Base Stats', content: 'Content for Tab 2' },
];


export const PokemonDetails = () => {
  const { id: pokemonId } = useParams()
  const [responseDetail, setResponseDetail] = useState([])
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  const ResponseDetailPokemon = JSON.parse(localStorage.getItem('pokemnon'))
  console.log("check response", ResponseDetailPokemon.image)

  const handleClickTab = (tabId) => {
    setActiveTab(tabId)
  }
  
  // fetch(`${process.env.API_URL}/${pokemonId}`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))

  useEffect(() => {
    fetch(`${process.env.API_URL}/${pokemonId}`)
    .then((res) => res.json())
    .then((data) => setResponseDetail(data))
  }, [])

  console.log('pokemonId', pokemonId, responseDetail)

  return (
    <Main>
      <Header>
        {/* <div>PokemonDetails</div> */}
       {/* <Back /> */}
      </Header>

      <CardWrapper>
        <div className="icon">
          <img src={`${process.env.API_URL}/${ ResponseDetailPokemon.image}`} alt={ResponseDetailPokemon.name.english} />
        </div>
      </CardWrapper>

      <CardWrapperCaption>
        <TabWrapper>
          {tabs?.map((tab) => (
            <TabItem
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => handleClickTab(tab.id)}
            >
              <p className="label">
                {tab.label}
              </p>
            </TabItem>
          ))}
        </TabWrapper>

        <TabContent>
          {tabs.map((val) => (
            <div key={val.id} style={{ display: activeTab === val.id ? 'block' : 'none' }} >
              {val.content}
            </div>
          ))}
        </TabContent>
      </CardWrapperCaption>
    </Main>
  )
}

const Main = styled.div`
  justify-content: center;
  align-items: center;
  margin: 64px;
  min-height: 300px;
  width: 375px;
  height: 812px;
  background-color: red;
  box-shadow: 0 2px 4px rgba(0.0.0.1);
`

const Header = styled.header`
  background-color: #ffff;
  padding: 16px;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 60px;
`

const CardWrapper  = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0.0.0.1);
  width: 375px;
  height: 412px;
  background-color: ${type => {
    if (type.type === 'fire') return '#FF5733';
    if (type.type === 'water') return '#3498DB';
    if (type.type === 'grass') return '#2ECC71';
    // Add more types and colors as needed
    return '#ccc'; // Default color
  }};

  >div.icon {
    display: flex;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 1px;
    margin: 40%;
    > img {
      align-items: center;
      width: 270px;
      height: 220px;
      margin: 40px;
    }
  }
`

const CardWrapperCaption = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0.0.0.1);
  width: 375px;
  background-color: #ffff;
  margin-top: -16px;
  height: 355px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const TabWrapper = styled.div`
  display: flex;
  > p.label {
    margin: 0px;
    font-size: 14px;
    font-weight: 700;
    margin-top: 20px;
    /* color: #FAFAFAFA; */
    color: black;
    text-align: center;
  }
`

const TabItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '2px solid #6749DB' : 'none')};
`

const TabContent = styled.div`
  margin-top: 20px;
`

const ArrowStyledBakc = styled.a`
  
`