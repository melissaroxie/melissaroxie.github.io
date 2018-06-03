import React, { Component } from "react"
import styled from "styled-components"

class IndexPage extends Component {
  render() {
    return (
      <div>
        <div className="mw9 center mb6">
          <div className="flex-l pr3 pr0-l items-end contain">
            <HeaderImageWrapper className="w-100 w-60-l">
              <HeaderImage src="/images/melissa-calamia.jpg" />
            </HeaderImageWrapper>
            <div className="w-100 w-40-l pa3 pa4-l">
              <h1 className="f3 lh-solid mb3 avenir ttu tracked fw1 black-70">Melissa Calamia</h1>
              <h2 className="f1 lh-solid athelas normal fw9 mt0">A New York based intimates & swimwear designer</h2>
              <p className="lh-copy f4-ns avenir mb3">
                Melissa Calamia is an experienced and dedicated fashion designer who has specialized in Intimates, Activewear, Swimwear and Loungewear for over 7 years. 
              </p>
              <p className="lh-copy f4-ns avenir mb0">
                She is ambitious, detail-oriented, friendly and knowledgeable in all areas related to her expertise. Her clean, forward aesthetic applies easily to any market position and her passion for fit and quality influences every part of her design process.
              </p>
            </div>
          </div>
        </div>
        <div className="mw7 center mb4">
          <h2 className="f1 lh-copy-ns mb0 mt0 dib mr3 athelas">About</h2>
          <p className="lh-copy f4-ns avenir mb3">
            Originally from San Francisco, CA where she obtained her BFA in Fashion Design from Academy of Art University, she relocated to NYC to further her career in the fashion industry. 
          </p>
          <p className="lh-copy f4-ns avenir mb5">
            Since then she has worked for a variety of companies, from independent luxury start-ups to Mass-Market Corporate retailers and everything in between. Her work has appeared in the pages of virtually every major fashion publication.
          </p>
        </div>



        <div className="mw8 center mb5">
          <PressWrapper>
            <PressItem>
              <img src="/images/press/vogue.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/thelingerieaddict.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/glamour.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/dazed.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/comopolitan.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/wwd.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/shape.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/refinery29.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/paper.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/nylon.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/fashionista.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/elle.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/brides.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/sportsillustrated.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/nytimes.png"/>
            </PressItem>
            <PressItem>
              <img src="/images/press/id.png"/>
            </PressItem>
          </PressWrapper>
        </div>

        <div className="mw7 center mb4">
          <p className="lh-copy f4-ns avenir mb5">
            Melissa has an extensive technical background in patternmaking, construction, technical documentation as well as overseas and domestic manufacturing. This knowledge informs her decisions at every step, resulting in edited collections with streamlined architecture that translate easily to production and maximize price point.
          </p>
        </div>
        
        <div className="mw8 center mb5">
          <div className="flex">
            <div className="w-60 pa3 mr2">
              <img className="w-100" src="/images/f46964b93ad5ee90e46f1c35a06658d4.jpg" />
            </div>
            <div className="w-40 pa3 mr2">
              <img className="w-100 mb4" src="/images/0df0d3c03c662fb284f8f006d08c865d.jpg" />
              <img className="w-100" src="/images/fleur nyt.jpg" />
            </div>
          </div>
        </div>

        <div className="mw7 center mb4">
          <p className="lh-copy f4-ns avenir mb3">
            With innovation at the forefront of each seasonal concept, she is able to easily identify whitespace opportunities and adapt to ever-changing market trends. 
          </p>
          <p className="lh-copy f4-ns avenir mb3">
            Her reputation for restructuring and revitalizing new or underperforming brands and categories is well-earned, making her an invaluable resource for any design team.
          </p>
          <p className="lh-copy f4-ns avenir mb5">
            As a leader Melissa is charismatic and approachable, highly self-motivated, and a diplomatic liaison between cross-functional team members. She is always eager to share her craft; acting as a mentor to direct reports, a guest-lecturer at FIT, and consultant for brands around the globe. 
          </p>
        </div>

        <div className="mw8 center mb4">
          <img src="/images/NYLON-7-17-1000PX_chromat.jpg" />
          <div className="flex">
            <div className="w-60 pa3 mr2">
              <img className="w-100" src="/images/Vogue-SS17_chromat.jpg" />
            </div>
            <div className="w-40 pa3 mr2">
              <img className="w-100" src="/images/G3-1000PX_chromat.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const HeaderImageWrapper = styled.div`
  max-height: 40rem;
  overflow: hidden;
  position: relative;
  margin-top: 3.5rem;
`

const HeaderImage = styled.img`
  width: 100%;
  height: auto;
`

const PressWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: space-around;
`

const PressItem = styled.li`
  width: 25%;
  height: 60px;
  margin: 15px 0;
  text-align: center;

  @media screen and (max-width: 970px) {
    width: 140px;
    height: 80px;
    margin: 10px;
    text-align: center;
  }

  img {
    filter: grayscale(20%);
    max-width: 140px;
    width:  100%;
    height: auto;
  }
`

export default IndexPage;
