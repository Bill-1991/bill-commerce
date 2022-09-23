import {React, useState, useEffect, startTransition} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home"
import AnimeList from "./Components/AnimeList"
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import SignIn from "./Components/SignIn"
import LogIn from "./Components/LogIn"
import { Container } from "react-bootstrap";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Axios from "axios";


function App() {
  
  const [animeList, setAnimeList] = useState([])
  const [price, setPrice] = useState(0)
  const [order, setOrder] = useState(false)
  const [name, setName] = useState("")
  const [topAnime, setTopAnime] = useState([])
  const [sound, setSound] = useState(false)
  const [basketItems, setBasketItems] = useState([]) 
  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("")
  const [wrongPass, setWrongPass] = useState(true)
  const [email, setEmail] = useState("")
  const [allUsers, setUsers] = useState([])
  const [logInUserName, setLogInUserName] = useState("")
  const [logInPassWord, setLogInPassWord] = useState("")
  const [loggedInUser, setLoggedInUser] = useState({})
  const [image, setImage] = useState(null)
  const [collapse, setCollapse] = useState(false)
  const [commentsRoom, setCommentsRoom] = useState([])
  const [message, setMessage] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  

  useEffect(() => {
    fetch("https://billy-commerce.herokuapp.com/signedin")
    .then(res => res.json())
    .then(data => {
      setUsers([...data])})
  },[])

  useEffect(() => {
    const loggedInPerson = JSON.parse(window.localStorage.getItem("loggedInUser"))
    if (loggedInPerson.loggedIn === true){
      setLoggedInUser({...loggedInPerson})
      console.log(loggedInPerson)
  }
  }, [])

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime")  
    .then(res => res.json())
    .then(data => {
      const fake = data.data.slice(0, 10)
      for (let i in fake){
        fake[i].price = Math.floor((Math.random() * 20) + 10)  
        fake[i].count = 0
       }      
      setAnimeList(fake)
  })
  },[])

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")  
    .then( res => res.json())
    .then(data => {
      const fake = data.data.slice(0, 10)
      for (let i in fake){
        fake[i].price = Math.floor((Math.random() * 20) + 10)  
        fake[i].count = 0
       }      
      setTopAnime(fake)
  })
  },[])

  const chatUser = {id: undefined, image: image, message: message}
  
 
  const handleMessage = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }


  const handleCollapse = () => {
    if (collapse === false) {
      setCollapse(true)
    } else {
      setCollapse(false)
    }
  }

  const handleImage = (e) => {
    let img = e.target.files[0]
    setImage(URL.createObjectURL(img))
  }


  const handleLoggedOut = (e) => {
    e.preventDefault()
    let loggedInPerson = {...loggedInUser, loggedIn: false}
    setLoggedInUser(loggedInPerson)
    console.log(loggedInPerson)
    window.localStorage.setItem("loggedInUser", JSON.stringify(loggedInPerson))
  }

  const handleLogInUserName = (e) => {
    e.preventDefault()
    setLogInUserName(e.target.value)
  }
  
  const handleLogInPassWord = (e) => {
    e.preventDefault()
    setLogInPassWord(e.target.value)
  }

  const handleLoggedInSubmit = () => {
   
    let arr = [...allUsers]
    for(let i in arr) {
      if (arr[i].password === logInPassWord && arr[i].username === logInUserName){
        arr[i].loggedIn = true
        window.localStorage.setItem("loggedInUser", JSON.stringify(arr[i]))
        setLoggedInUser(arr[i])
        console.log(loggedInUser)    
        setLogInPassWord("")
        setLogInUserName("")
      }
    }
    
  }


  const handleNameChange = (e) => {
    e.preventDefault()
    setUserName(e.target.value)
  }

  const handlePassChange = (e) => {
    e.preventDefault()
    setPassWord(e.target.value)
    if(e.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/)){
      setWrongPass(false)
    }else {
      setWrongPass(true)
    }
  }

  const handleEmailChange = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handleSubmitUser = (e) => {
      Axios.post("https://billy-commerce.herokuapp.com/signin",{
        username: userName,
        password: passWord,
        email: email,
      }).then((err, res) => {
        if (err){
          console.log(err)
        }else console.log("inputted")
      })
  }

  const handleSound = () => {
    if (sound === false) {
      setSound(true)
      document.getElementById("audio").play()
    }else {
      setSound(false)
      document.getElementById("audio").pause()
    }
  }
  
  const handleAddToCartTop = (id) => {
    let newItems = [...basketItems]
    let newItem = topAnime.filter(anime => anime === id)
    if(basketItems.indexOf(id) === -1){
      setBasketItems(basketItems.concat(newItem))
    }
    let price1 = 0;
    for (let i in basketItems){
      price1 += basketItems[i].count * basketItems[i].price
      setPrice(price1)
    }
  }
  
  const handleAddToCartAnime = (id) => {
    let price1 = 0
    let newItems = [...basketItems]
    let newItem = animeList.filter(anime => anime === id)
    if(basketItems.indexOf(id) === -1){
      setBasketItems(basketItems.concat(newItem))
    }
    for (let i in basketItems){
      price1 += basketItems[i].count * basketItems[i].price
      setPrice(price1)
    }
  }

  const handleRemoveFromCart = (id) => {
    let price1 = 0
    let newItems = basketItems.filter(anime => anime !== id)
    let discardedItems = basketItems.filter(item => item === id)
    discardedItems.map(name => name.count = 0)
    setBasketItems([...newItems])
    for (let i = 0; i < newItems.length; i++) {
      price1 += (newItems[i].count) * newItems[i].price
      setPrice(price1) 
    }
    if (newItems.length < 1) {
      setBasketItems([...newItems])
      setPrice(0)
    }
  }
  
  const handleInc = (id) => {
    let price1 = 0
    for (let i = 0; i < basketItems.length; i++) {
      if (basketItems[i] === id) {
        let newBasket = basketItems
        newBasket[i].count += 1
        setBasketItems([...newBasket])
      }
      price1 += basketItems[i].count * basketItems[i].price
        setPrice(price1)
    }
  }
  
  const handleDec = (id) => {
    let price1 = 0
    for (let i = 0; i < basketItems.length; i++) {
      if (basketItems[i] === id) {
        let newBasket = basketItems
        newBasket[i].count -= 1
        if (newBasket[i].count < 0) {
          newBasket[i].count = 0
        }    
        setBasketItems([...newBasket])
      }
      price1 += basketItems[i].count * basketItems[i].price
        setPrice(price1)
    }
  }
  
  const handleReset = (id) => {
    let price1 = 0
    for (let i = 0; i < basketItems.length; i++) {
      if (basketItems[i] === id) {
        let newItems = [...basketItems]
        newItems[i].count = 0
        setBasketItems([...newItems])
      }
    price1 += (basketItems[i].count + 1) * basketItems[i].price
      setPrice(price1)
    }
  }


  const handleSubmit = () => {
    setOrder(true)
    setPrice(0)
    setBasketItems([])
    setTimeout(() => setOrder(false), 2000)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }
  
  return (
    <Container fluid className="App">
      <HashRouter>
       <NavBar sticky="top" collapse={collapse} handleCollapse={handleCollapse} image={image} loggedInUser={loggedInUser} handleLoggedOut={handleLoggedOut} sound={sound} handleSound={handleSound} basketItems={basketItems} />
       <Routes>
        <Route exact path="/" element={<Home loggedInUser={loggedInUser} topAnime={topAnime} handleAddToCartTop={handleAddToCartTop} />} />
        <Route exact path="/anime" element={<AnimeList animeList={animeList} handleAddToCartAnime={handleAddToCartAnime} />} />
        <Route exact path="/cart" element={<Cart price={price} basketItems={basketItems} handleRemoveFromCart={handleRemoveFromCart} handleInc={handleInc} handleDec={handleDec} />} />
        <Route exact path="/signin" element={<SignIn handleImage={handleImage} wrongPass={wrongPass} userName={userName} passWord={passWord} email={email} handleNameChange={handleNameChange} handlePassChange={handlePassChange} handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} allUsers={allUsers} handleSubmitUser={handleSubmitUser} />} />
        <Route exact path="/login" element={loggedInUser.loggedIn === true ? (<Navigate replace to="/" />) : (<LogIn logInUserName={logInUserName} logInPassWord={logInPassWord} loggedInUser={loggedInUser} handleLoggedInSubmit={handleLoggedInSubmit} handleLogInUserName={handleLogInUserName} handleLogInPassWord={handleLogInPassWord}  />)} />
       </Routes>
     </HashRouter>
    </Container>
  );
}

export default App;