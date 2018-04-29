import React, { Component } from "react"
import Masonry from 'react-masonry-css'
import { Style } from "react-style-tag"

const elements = [
  { src: "https://i.pinimg.com/564x/7a/9a/4d/7a9a4d35d53f1bc948c2e087af57d175.jpg" },
  { src: "https://i.pinimg.com/564x/c0/df/1d/c0df1d8220dcb38bb1a8f28ee9631cbb.jpg" },
  { src: "https://i.pinimg.com/564x/cb/c3/b2/cbc3b2f116364c837acee38d807e94f2.jpg" },
  { src: "https://i.pinimg.com/564x/cf/77/de/cf77dee732f48e666d04eb257354dcbc.jpg" },
  { src: "https://i.pinimg.com/564x/f1/78/c5/f178c50e8f2db8f66eea584055c2ef5c.jpg" },
  { src: "https://i.pinimg.com/564x/61/0f/00/610f005fe589a47307b88b103b6df2ed.jpg" },
  { src: "https://i.pinimg.com/564x/d3/d8/2a/d3d82a695bb854d3d4bd26f0dd84b6dd.jpg" },
  { src: "https://i.pinimg.com/564x/cf/77/de/cf77dee732f48e666d04eb257354dcbc.jpg" },
  { src: "https://i.pinimg.com/564x/61/0f/00/610f005fe589a47307b88b103b6df2ed.jpg" },
  { src: "https://i.pinimg.com/564x/d3/d8/2a/d3d82a695bb854d3d4bd26f0dd84b6dd.jpg" },
  { src: "https://i.pinimg.com/564x/cf/77/de/cf77dee732f48e666d04eb257354dcbc.jpg" },
  { src: "https://i.pinimg.com/564x/61/0f/00/610f005fe589a47307b88b103b6df2ed.jpg" },
  { src: "https://i.pinimg.com/564x/d3/d8/2a/d3d82a695bb854d3d4bd26f0dd84b6dd.jpg" },
  { src: "https://i.pinimg.com/564x/cf/77/de/cf77dee732f48e666d04eb257354dcbc.jpg" },
  { src: "https://i.pinimg.com/564x/95/d2/a5/95d2a50a40d825e88f068266d2a54d28.jpg" },
  { src: "https://i.pinimg.com/564x/29/9f/0e/299f0e647324c0fad36156c980944eee.jpg" },
  { src: "https://i.pinimg.com/564x/d3/d8/2a/d3d82a695bb854d3d4bd26f0dd84b6dd.jpg" },
  { src: "https://i.pinimg.com/564x/95/d2/a5/95d2a50a40d825e88f068266d2a54d28.jpg" },
  { src: "https://i.pinimg.com/564x/29/9f/0e/299f0e647324c0fad36156c980944eee.jpg" },
  { src: "https://i.pinimg.com/564x/dd/69/1d/dd691d925a337142b7250ae18d653b24.jpg" },
  { src: "https://i.pinimg.com/564x/45/ef/4b/45ef4b26063cd5a5e42ec45e6b190eea.jpg" },
  { src: "https://i.pinimg.com/564x/cb/c3/b2/cbc3b2f116364c837acee38d807e94f2.jpg" },
  { src: "https://i.pinimg.com/564x/61/0f/00/610f005fe589a47307b88b103b6df2ed.jpg" },
  { src: "https://i.pinimg.com/564x/d3/d8/2a/d3d82a695bb854d3d4bd26f0dd84b6dd.jpg" },
  { src: "https://i.pinimg.com/564x/cf/77/de/cf77dee732f48e666d04eb257354dcbc.jpg" },
  { src: "https://i.pinimg.com/564x/f1/78/c5/f178c50e8f2db8f66eea584055c2ef5c.jpg" },
  { src: "https://i.pinimg.com/564x/61/0f/00/610f005fe589a47307b88b103b6df2ed.jpg" },
  { src: "https://i.pinimg.com/564x/d3/d8/2a/d3d82a695bb854d3d4bd26f0dd84b6dd.jpg" },
  { src: "https://i.pinimg.com/564x/cf/77/de/cf77dee732f48e666d04eb257354dcbc.jpg" },
  { src: "https://i.pinimg.com/564x/95/d2/a5/95d2a50a40d825e88f068266d2a54d28.jpg" },
  { src: "https://i.pinimg.com/564x/29/9f/0e/299f0e647324c0fad36156c980944eee.jpg" },
]

class GalleryPage extends Component {
  render() {
    return (
      <div>
        <div className="mw9 center bb bw1 b--black-05 pt2 pb4 mb6">
          <h1 className="f-headline lh-solid mb1 avenir ttu tracked fw1 black-70">Melissa Calamia</h1>
          <h2 className="f3 lh-copy athelas normal fw9">A New York based intimates & swimwear designer</h2>
        </div>

        <div className="mw9 center">
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {elements.map(item => (
              <div className="mb4">
                <img className="db w-100" src={item.src} />
              </div>
            ))}
          </Masonry>

          <Style>{`
            .my-masonry-grid {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              margin-left: -30px;
              width: auto;
            }
            .my-masonry-grid_column {
              padding-left: 30px;
              background-clip: padding-box;
            }
          `}</Style>
        </div>
      </div>
    );
  }
}

export default GalleryPage;
