import react,{useState} from "react"

function CardsHr(){
  const [textMore6, setText6] = useState(true)
  const [textMore5, setText5] = useState(true)
  const [textMore7, setText7] = useState(true)
  const [textMore8, setText8] = useState(true)
  const [textMore9, setText9] = useState(true)

  const changeText6 = textMore6 ? 'Read More' : 'Read Less'
  const changeText5 = textMore5 ? 'Read More' : 'Read Less'
  const changeText7 = textMore7 ? 'Read More' : 'Read Less'
  const changeText8 = textMore8 ? 'Read More' : 'Read Less'
  const changeText9 = textMore9 ? 'Read More' : 'Read Less'
    return( <div className="container-fluid"><div class="row">
    <div class="col-sm-2">
        <div class="card h-100" style={{background:"black",color:"white", width: "280px", border:"2px solid rgb(173, 144, 11)", borderRadius:"6px", boxShadow: "3px 5px #edff7aff"}}>
          <img src="images/b.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <button type="button" class="btn btn-outline-danger btn-sm" style={{marginRight: "20px"}}>Add to Favourites</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
            <p>
            <h4 class="card-title"style={{marginTop:"7px"}}>Neon Genesis Evangelion</h4>
            </p>
            <p class="card-text" style={{color:"grey"}}>Neon Genesis EVANGELION (新世紀エヴァンゲリオン), directed by Hideaki Anno, is<div class="collapse" id="collapseExample5"> worldly known as one
              of the symbols of Japanese anime in 1990s. The famous mecha anime mainly depicts the story of the 4
              teenagers: Shinji Ikari, Rei Ayanami, Asuka Langley Soryu and Kaworu Nagisa. They fight with the enemies
              called Angels by piloting the giant humanoid robot Evangelions.</div><button class="btn btn-sm btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5" onClick={() => setText5(!textMore5)}>{changeText5}</button></p>
  
          </div>
        </div></div>
        <div class="col-sm-2">
        <div class="card h-100" style={{background:"black",color:"white", width:"280px", marginLeft:"50px", border:"2px solid rgb(173, 144, 11)", borderRadius: "6px",boxShadow: "3px 5px #edff7aff"}}>
          <img src="images/c.png" class="card-img-top" alt="..."/> 
          <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{marginRight: "20px"}}>Add to Favourites</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
            <p>
            <h4 class="card-title"style={{marginTop:"7px"}}> Re:Zero -Starting Life in Another World</h4>
            </p>
            <p class="card-text" style={{color:"grey"}}>Re:Zero -Starting Life in Another World- (Re：ゼロから始める異世界生活), which is <div class="collapse" id="collapseExample6">also called just
              Re:Zero, is looked on as one of the best Japanese anime and light novels released in 2010s. The season 1
              started with 25 episodes in 2016, and the newly-edited version is aired from the beginning of 2020.</div><button class="btn btn-sm btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6" onClick={() => setText6(!textMore6)}>{changeText6}</button></p>
  
          </div>
        </div></div>
        <div class="col-sm-2">
        <div class="card h-100" style={{background:"black",color:"white",marginLeft:"100px",width: "280px", border:"2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff"}}>
          <img src="images/d.jpg" class="card-img-top" alt="..."/>
          <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{marginRight: "20px"}}>Add to Favourites</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
            <p>
            <h4 class="card-title"style={{marginTop:"7px"}}>Pokémon</h4>
            </p>
            <p class="card-text" style={{color:"grey"}}>Pokémon (ポケモン) is one of the most popular Japanese anime and games around the globe now,
              and it was first aired in<div class="collapse" id="collapseExample7"> Japan as the Japanese title Pocket Monsters (ポケットモンスター) in 1997. New titles have
              been broadcasted every time a new game is released, and the latest series is being broadcasted from 2019
              following the previous Sun & Moon (ポケットモンスター サン&ムーン).</div><button class="btn btn-sm btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample7" onClick={() => setText7(!textMore7)}>{changeText7}</button></p>
  
          </div>
        </div></div>
        <div class="col-sm-2">
        <div class="card h-100" style={{background:"black",color:"white",marginLeft:"150px", width: "280px", border:"2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff"}}>
          <img src="images/e.jpg" class="card-img-top" alt="..."/>
          <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{marginRight: "20px"}}>Add to Favourites</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
            <p>
            <h4 class="card-title"style={{marginTop:"7px"}}>Death Note</h4>
            </p>
            <p class="card-text" style={{color:"grey"}}>The mystery and horror anime Dearth Note (デスノート), based on the manga published on the
              Weekly Shonen Jump<div class="collapse" id="collapseExample8"> from 2003 to 2006, is highly rated by both domestic and international anime fans. It is
              so popular worldwide partly because the anime is completed with the relatively short story (37 episodes) in
              addition to the well-elaborated storyline.</div><button class="btn btn-sm btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample8" onClick={() => setText8(!textMore8)}>{changeText8}</button></p>
  
          </div>
        </div></div>
        <div class="col-sm-2">
        <div class="card h-100" style={{background:"black",color:"white", marginLeft:"200px", width: "280px", border:"2px solid rgb(173, 144, 11)", borderRadius:"6px", boxShadow:"3px 5px #edff7aff"}}>
          <img src="images/f.jpg" class="card-img-top" alt="..."/>
          <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{marginRight: "20px"}}>Add to Favourites</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
            <p>
            <h4 class="card-title"style={{marginTop:"7px"}}>Dragon Ball Z</h4>
            </p>
            <p class="card-text" style={{color:"grey"}}>Many anime fans associate the most famous action anime with Dragon Ball (ドラゴンボール), which
              started to be <div class="collapse" id="collapseExample9">aired in 1984. Dragon Ball is originally made as the Weekly Shonen Jump manga by Akira
              Toriyama. There are several main parts in the Dragon Ball series, and it is ongoing as the new title Dragon
              Ball Super (ドラゴンボール超) from 2015.</div> <button class="btn btn-sm btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample9" aria-expanded="false" aria-controls="collapseExample9" onClick={() => setText9(!textMore9)}>{changeText9}</button></p>
  
          </div>
        </div></div></div></div>)}
        export default CardsHr
