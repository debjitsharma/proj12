import react,{useState} from "react"
function CardsYhw()
{const [textMorea, setTexta] = useState(true)
  const [textMoreb, setTextb] = useState(true)
  const [textMorec, setTextc] = useState(true)
  const [textMored, setTextd] = useState(true)
  const [textMoree, setTexte] = useState(true)

  const changeTexta = textMorea ? 'Read More' : 'Read Less'
  const changeTextb = textMoreb ? 'Read More' : 'Read Less'
  const changeTextc = textMorec ? 'Read More' : 'Read Less'
  const changeTextd = textMored ? 'Read More' : 'Read Less'
  const changeTexte = textMoree ? 'Read More' : 'Read Less'
  return( <div className="container-fluid">
<div class="row">
<div class="col-sm-2">
  <div class="card h-100" style={{background:"black",width: "280px",color:"white", border:"2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff"}}>
    <img src="images/g.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <button type="button" class="btn btn-outline-danger btn-sm" style={{marginRight: "20px"}}>Add to Favourites</button>
      <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
      <p>
      <h4 class="card-title"style={{marginTop:"7px"}}>Weathering With You</h4>
      </p>
      <p class="card-text" style={{color:"grey"}}>Weathering with You (Japanese: 天気の子, Hepburn: Tenki no Ko, lit. "Child of Weather")<div class="collapse" id="collapseExamplea"> is
        a 2019 Japanese animated romantic fantasy film produced by CoMix Wave Films and released by Toho. It
        depicts a high school boy who runs away from his rural home to Tokyo and befriends an orphan girl who has
        the ability to manipulate the weather.</div>  <button class="btn btn-sm btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExamplea" aria-expanded="false" aria-controls="collapseExamplea" onClick={() => setTexta(!textMorea)}>{changeTexta}</button>


      </p>

    </div>
  </div></div>
  <div class="col-sm-2">
  <div class="card h-100" style={{background:"black",width: "280px",color:"white", marginLeft:"50px", border:"2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff"}}>
    <img src="images/h.png" class="card-img-top" alt="..."/>
    <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{marginRight: "20px"}}>Add to Favourites</button>
      <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
      <p>
      <h4 class="card-title"style={{marginTop:"7px"}}>Your Name</h4>
      </p>
      <p class="card-text" style={{color:"grey"}}>Your Name (Japanese: 君の名は。, Hepburn: Kimi no Na wa) is a 2016 Japanese animated<div class="collapse" id="collapseExampleb">
        romantic fantasy film produced by CoMix Wave Films and released by Toho. It depicts a high school boy in
        Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap
        bodies.</div>  <button class="btn btn-sm btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleb" aria-expanded="false" aria-controls="collapseExampleb" onClick={() => setTextb(!textMoreb)}>{changeTextb}</button>


      </p>

    </div>
  </div></div>
  <div class="col-sm-2">
  <div class="card h-100" style={{background:"black",color:"white",marginLeft:"100px",width: "280px", border:"2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff"}}>
    <img src="images/i.png" class="card-img-top" alt="..."/>
    <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{marginRight: "20px"}}>Add to Favourites</button>
      <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
      <p>
      <h4 class="card-title"style={{marginTop:"7px"}}>A Silent Voice</h4>
      </p>
      <p class="card-text" style={{color:"grey"}}>A Silent Voice (Japanese: 映画 聲の形, Hepburn: Eiga Koe no Katachi) is a 2016 <div class="collapse" id="collapseExamplec">Japanese
        animated family drama film produced by Kyoto Animation, directed by Naoko Yamada and written by Reiko
        Yoshida, featuring character designs by Futoshi Nishiya and music by Kensuke Ushio.</div>  <button class="btn btn-sm btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExamplec" aria-expanded="false" aria-controls="collapseExamplec" onClick={() => setTextc(!textMorec)}>{changeTextc}</button>
</p>

    </div>
  </div></div>
  <div class="col-sm-2">
  <div class="card h-100" style={{background:"black",color:"white",marginLeft:"150px", width: "280px", border:"2px solid rgb(173, 144, 11)", borderRadius:"6px", boxShadow: "3px 5px #edff7aff"}}>
    <img src="images/k.jpg" class="card-img-top" alt="..."/>
    <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{marginRight: "20px"}}>Add to Favourites</button>
      <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
      <p>
      <h4 class="card-title"style={{marginTop:"7px"}}>Tokyo Ghoul</h4>
      </p>
      <p class="card-text" style={{color:"grey"}}>The popular dark fantasy manga Tokyo Ghoul (東京喰種トーキョーグール), published on <div class="collapse" id="collapseExampled">the Weekly
        Young Jump in 2011-2014, was adapted into an anime from 2014. And, the sequel title Tokyo Ghoul:re
        (東京喰種トーキョーグール：re) was aired as the second half of the anime in 2018.</div>  <button class="btn btn-sm btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampled" aria-expanded="false" aria-controls="collapseExampled" onClick={() => setTextd(!textMored)}>{changeTextd}</button>
 </p>

    </div>
  </div></div>
  <div class="col-sm-2">
  <div class="card h-100" style={{background:"black",color:"white",marginLeft:"200px", width: "280px", border:"2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff"}}>
    <img src="images/l.jpg" class="card-img-top" alt="..."/>
    <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{marginRight: "20px"}}>Add to Favourites</button>
      <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
      <p>
      <h4 class="card-title"style={{marginTop:"7px"}}>Attack on Titan</h4>
      </p>
      <p class="card-text" style={{color:"grey"}}>As one of the best action anime in recent years, Attack on Titan (進撃の巨人) should be<div class="collapse" id="collapseExamplee">
        listed. It was originally released as a manga in 2009, and the first season of the anime adaption was
        aired in 2013. In the story, humanity stands on the edge of extinction for being attacked by the titans. </div> <button class="btn btn-sm btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExamplee" aria-expanded="false" aria-controls="collapseExamplee" onClick={() => setTexte(!textMoree)}>{changeTexte}</button>

        </p>

    </div>
  </div>
</div>
</div></div>
)}
export default CardsYhw