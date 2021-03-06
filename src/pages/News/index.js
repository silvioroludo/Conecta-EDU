import HeaderDefault from '../HeaderSite'
import './News.css'
import React from "react";
import { FiMoreHorizontal, FiSend } from "react-icons/fi"
import { BsHeart } from 'react-icons/bs'
import { BsChat } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { BsEmojiSmile } from 'react-icons/bs'


function News () {
return (
<>
<HeaderDefault/>

<div className="TimeLine">
    
    <div className="containerPost">
    <IconContext.Provider value ={{size:'25px'}}>
        <div className="userData">
            <div className="infosPost">
                <img className="profilePicture" 
                alt="" src={require('../../images/profile.jpg')} />
                <p className="userName"> User Name</p>
            </div>
            <div className="postConfig">
                <FiMoreHorizontal/>
            </div>
        </div>
        </IconContext.Provider>

        <div className="postPicture">

        <img className="postPicture" 
        alt="" src={require('../../images/post.jpg')} />
        
        </div>

        <footer>
        <IconContext.Provider value ={{size:'25px'}}>
            <section className="containerIcons">

                <div className="engagementIcons1">
                
                    <div className="icon1"><BsHeart/> </div>
                    <div className="icon2"> <FiSend/> </div> 
                    <div className="icon3"> <BsChat/> </div>
                
                </div>

                <div className="engagementIcons2"> 
           
                    <BsBookmark/> 
    
                </div>   
             
            </section>

            <section className="likes">
            
            <span>
                61 curtidas
            </span>

            </section>

            <div className="legendContainer">
                <p>  
                <span className="userName"> User Name  </span>
                Qui et occaecat anim aute elit officia id proident. Est duis qui ea occaecat est ut ex tempor voluptate ad dolor aliquip nulla duis. Elit in mollit aute eu incididunt.
Culpa id id in qui commodo sit aute. Ipsum ipsum sunt occaecat incididunt non cupidatat 
                </p>
            </div>

            <div className="postTime">
                <time>H?? 1 hora</time>
            </div>

            <div className="coment">

                <IconContext.Provider value ={{size:'25px'}}>
                    <BsEmojiSmile className="emojiComent"/>
                </IconContext.Provider>

                 <input className="inputComent" placeholder="Adicione um coment??rio..."/> 

                <button className="publish">Publicar</button>
            </div>

        </IconContext.Provider>
        </footer>    
    </div>
</div>

</>
)
}

export default News;

