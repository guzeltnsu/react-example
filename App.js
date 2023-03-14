import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnaSayfa from "./pages/AnaSayfa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import Corba from './pages/Corba';
import AnaYemek from "./pages/AnaYemek";
import AraSicak from "./pages/AraSicak";
import Tatli from "./pages/Tatli"

import React, { useEffect, useState } from "react";
import Cart from "./pages/Cart";


function App() {
    const mevcutSepet = sessionStorage.getItem('sepet'); //getItems ile mevcutSepet değişkenini sessionStoreg'ten çekiyoruz.
    let cartItemArray = [];

    if (mevcutSepet) // mevcutSepet varsa 
        cartItemArray = JSON.parse(mevcutSepet);

        //değişkeni böyle tanımlarsak html sayfasında bir yerde kullandığımızda bu değerin ilk halini alır.
        //diyelim ki sepet değeri 10 idi, sayfa ilk olarak yüklendiğinde 10 değerini alır ve sonrasındaki değişikliklerde dahi 10 değerini gösterir
        //bir butona fonksiyon atayıp onun içinde de cart_items'ın değerini 50 yapsanızda sayfada görüntülenecek olan değer yine 10 olur. 
        //Değişmez, çünkü react değeri ilk atadığında ne ise o olarak görür.
        //Peki değerin değiştiğini react'e nasıl aktarabiliriz?
        //const cart_items = cartItemArray; değişkeni böyle tanımlamak yerine
        //const [cart_items, set_cart_items] = useState(10); şeklinde tanımlıyoruz.
        //Değeri değiştirirken cart_items = 50 demiyoruz set_cart_items(50) yapıyoruz ve react de artık bu değişkeni ilk değeri gibi değil ne verirsek onu alır.

    

    const [cartItems, setCartItems] = useState(cartItemArray);
    const [cartPrice, setcartPrice] = useState(0);

    //[cartItems] değiştidiğinde useEffect için yazıdığım fonksiyon çalışır.
    //useEffect(()=>{
    //  console.log('değer değişti');
    //}, [cartItems]);

    useEffect(() => {
        sessionStorage.setItem('sepet', JSON.stringify(cartItems));
        const sum = cartItems.map(p => p.price).reduce((partialSum, a) => partialSum + a, 0);
        setcartPrice(sum);
        console.log(sum);
    }, [cartItems])

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const handleRemoveFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    return (
        <div className="App">
            <Router>
                <Navbar cartItems={cartItems} />
                <Routes>
                    <Route path="/" element={<AnaSayfa />} />
                    <Route path="/AnaYemek" element={<AnaYemek handleAddToCart={handleAddToCart} />} />
                    <Route path="/Corba" element={<Corba handleAddToCart={handleAddToCart} />} />
                    <Route path="/AraSicak" element={<AraSicak handleAddToCart={handleAddToCart} />} />
                    <Route path="/Tatli" element={<Tatli handleAddToCart={handleAddToCart} />} />
                    <Route path="/Sepet" element={<Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} cartPrice={cartPrice} />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App;






// function Sepet() {
//   const [urunler, setUrunler] = useState([]);
//   const [toplam, setToplam] = useState(0);

//   function urunEkle() {
//     const yeniUrunFiyati = Math.floor(Math.random() * 10) + 1; // rastgele bir fiyat oluştur
//     const yeniUrunler = [...urunler, yeniUrunFiyati];
//     setUrunler(yeniUrunler);
//     setToplam(toplam + yeniUrunFiyati); // toplamı güncelle
//     console.log(`Yeni ürün eklendi: ${yeniUrunFiyati} TL - Toplam: ${toplam + yeniUrunFiyati} TL`);
//   }

//   return (
//     <div>
//       <button onClick={urunEkle}>Ürün Ekle</button>
//       <ul>
//         {urunler.map((urun, index) => (
//           <li key={index}>{urun} TL</li>
//         ))}
//       </ul>
//       <p>Toplam: {toplam} TL</p>
//     </div>
//   );
// }
