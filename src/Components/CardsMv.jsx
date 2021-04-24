import react, { useState } from "react"
function CardsMv() {
  const [textMore, setText] = useState(true)
  const [textMore1, setText1] = useState(true)
  const [textMore2, setText2] = useState(true)
  const [textMore3, setText3] = useState(true)
  const [textMore4, setText4] = useState(true)

  const changeText = textMore ? 'Read More' : 'Read Less'
  const changeText1 = textMore1 ? 'Read More' : 'Read Less'
  const changeText2 = textMore2 ? 'Read More' : 'Read Less'
  const changeText3 = textMore3 ? 'Read More' : 'Read Less'
  const changeText4 = textMore4 ? 'Read More' : 'Read Less'

  return (<div class="container-fluid">
    <div class="row">
      <div class="col-sm-2">
        <div class="card h-100" style={{ background: "black", color: "white", width: "280px", border: "2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff" }} >
          <img src="images/1011917.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <button type="button" class="btn btn-outline-danger btn-sm" style={{ marginRight: "20px" }}>Add to Favourites</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
            <p>
              <h4 class="card-title" style={{ marginTop: "7px" }}>Demon Slayer</h4>
            </p>
            <p class="card-text" style={{ color: "grey" }}>The advent of a shockingly quality anime surprised anime fans all over the world in<div class="collapse" id="collapseExample1">2019.Demon Slayer: Kimetsu no Yaiba (鬼滅の刃) is adapted into an anime from the manga by Koyoharu Gotoge, which was
            serialized on the Weekly Shonen Jump from 2016. The first season of Demon Slayer: Kimetsu no Yaiba with 26
episodes was welcomed by both fans of the manga and people who had not read it.</div><button class="btn btn-sm btn-outline-info"
                type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" onClick={() => setText(!textMore)}>{changeText}</button>
            </p>

          </div>
        </div></div>
      <div class="col-sm-2">
        <div class="card h-100" style={{ background: "black", color: "white", width: " 280px", marginLeft: "50px", border: "2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff" }}>
          <img src="images/47698.jpg" class="card-img-top" alt="..." />
          <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{ marginRight: "20px" }}>Add to Favourites</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
            <p>
              <h4 class="card-title" style={{ marginTop: "7px" }}>Naruto</h4>
            </p>
            <p class="card-text" style={{ color: "grey" }}>Naruto (ナルト), the greatest anime with the theme of Ninja, was initially released<div class="collapse" id="collapseExample">as the Weekly Shonen Jump manga by Masashi Kishimoto in 1999 and run until 2014. The anime Naruto series was
  completed in 2017 after no less than 15 years, consisting of two titles: Naruto (NARUTO -ナルト-) aired in
2002-2007 and Naruto: Shippuden (NARUTO -ナルト- 疾風伝) aired in 2007-2017. </div>
              <button type="button" class="btn btn-sm btn-outline-info" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={() => setText1(!textMore1)}>{changeText1}</button></p>


          </div>
        </div></div>
      <div class="col-sm-2">
        <div class="card h-100 " style={{ background: "black", color: "white", marginLeft: "100px", width: "280px", border: "2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff" }}>
          <img src="images/Clanad.jpg" class="card-img-top" alt="..." />
          <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{ marginRight: "20px" }}>Add to Favourites</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
            <p>
              <h4 class="card-title" style={{ marginTop: "7px" }}>Clannad</h4>
            </p>
            <p class="card-text" style={{ color: "grey" }}>The third position of the best anime list may satisfy many Japanese anime fans,<div class="collapse" id="collapseExample2">however,
  some foreign people may be surprised at it since Clannad (クラナド) is less known worldwide. Clannad is one of
  the Kyoto Animation’s masterpieces, which is recommended for any kind of anime fan. There is no action scene
or supernatural event in this anime, but human drama is represented sensitively.</div><button type="button" class="btn btn-sm btn-outline-info" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2" onClick={() => setText2(!textMore2)}>{changeText2}</button></p>

          </div>
        </div></div>
      <div class="col-sm-2">
        <div class="card h-100 " style={{ background: "black", color: "white", marginLeft: "150px", marginBottom: "4px", width: "280px", border: "2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff" }}>
          <img src="images/219363.jpg" class="card-img-top" alt="..." />
          <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{ marginRight: "20px" }}>Add to Favourites</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
            <p>
              <h4 class="card-title" style={{ marginTop: "7px" }}>Monogatari Series</h4>
            </p>
            <p class="card-text" style={{ color: "grey" }}>Monogatari Series (物語シリーズ), produced by the animation studio Shaft under the <div class="collapse" id="collapseExample3">direction of
  Akiyuki Shinbo, is the popular anime series released in 2009. It is adapted into an anime from the novels
  written by Nisioisin (Nishio Ishin). The first season of Monogatari Series started as Bakemonogatari (化物語),
  Nisemonogatari (偽物語) and Nisemonogatari Black (偽物語 黒) in 2009-2012. Monogatari means story or tale in
English.</div>
              <button type="button" class="btn btn-sm btn-outline-info" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3" onClick={() => setText3(!textMore3)}>{changeText3}</button>
            </p>


          </div>
        </div></div>
      <div class="col-sm-2">
        <div class="card h-100" style={{ background: "black", color: "white", marginLeft: "200px", width: "280px", border: "2px solid rgb(173, 144, 11)", borderRadius: "6px", boxShadow: "3px 5px #edff7aff" }}>
          <img src="images/a.jpg" class="card-img-top" alt="..." />
          <div class="card-body"><button type="button" class="btn btn-outline-danger btn-sm" style={{ marginRight: "20px" }}>Add to Favourites</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Watch Later</button>
            <p>
              <h4 class="card-title" style={{ marginTop: "7px" }}>One Piece</h4>
            </p>
            <p class="card-text" style={{ color: "grey" }}>What is the most famous and top-selling ongoing manga and anime is One Piece <div class="collapse" id="collapseExample4"> (ワンピース)
  without a doubt. The first volume of the manga was published in 1997, and there are now over 90 volumes sold
  around the world. The anime adaption began two years later after the first manga was released, and over 900
episodes have been aired since then. The whole story of One Piece can be divided into about 10 parts.</div><button type="button" class="btn btn-sm btn-outline-info" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" onClick={() => setText4(!textMore4)}>{changeText4}</button></p>

          </div>
        </div></div>
    </div></div>
  )
}
export default CardsMv