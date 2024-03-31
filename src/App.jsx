import React from 'react'
import { useState } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';

const App = () => {
  const data = [
    {image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Solitude", artist: "James Chad", added: false},
    {image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Clam Me", artist: "Xiu Zang", added: false},
    {image: "https://images.unsplash.com/photo-1621314103718-7d52b7cecef0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Moonlight", artist: "Henry Zipper", added: false},
    {image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Mirage", artist: "Dawood Habib", added: false},
    {image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Till Dusk", artist: "Gold Pen", added: false},
    {image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Yours Only", artist: "Lucy Lane", added: false},
    {image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Just Once", artist: "Mia Chan", added: false},
  ];

  const [songData,setSongdata] = useState(data);

  const handleAddFavorites = (cardIndex)=>{
    setSongdata((previous)=>{
      return previous.map((item,index)=> {
        if (index===cardIndex) {
          return {...item, added: !item.added};
        }
        return item;
      })
    })
  }

  return (
    <div className='w-full h-screen bg-zinc-300'>
      <Navbar data={songData} />
      <hr className='w-[91%] mx-auto my-0 border-black border-t-2 mb-10'/>
      <div className='px-20 flex gap-10 flex-wrap '>
        {songData.map((item,index)=>(
          <Card key={index} index={index} values={item} clickButton={handleAddFavorites}/>
        ))}
      </div>
    </div>
  )
}

export default App
