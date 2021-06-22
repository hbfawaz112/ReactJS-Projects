import React from 'react'
import {useState , useEffect} from 'react';

import './Meme.css';

function Meme() {

    const [memes , setMemes] = useState([]);
    const [memeIndex , setMemeIndex] = useState(0);
    const [captions, setCaptions] = useState([]);
    const [imgURL,setImageURL] = useState('');



   

    const updateCaption = (e , index)=>{

        
        const text = e.target.value || '';

        setCaptions(
            captions.map( (c,i) =>{
                if(index === i){
                    return text;
                }
                else{
                    return c;
                }
            })
        );

    }

    const nextMeme = () =>{
        setMemeIndex(memeIndex+1);
        setImageURL('');
        setCaptions([]);
        //this.forceUpdate();
        
    }

    const generateMeme = ()=>{
     
        const currentMeme = memes[memeIndex];
        const fromData = new FormData();

        fromData.append('username', 'hbfawaz112');
        fromData.append('password', 'fawazabcd');
        fromData.append('template_id' , currentMeme.id);
        captions.forEach( (c,index) => fromData.append(`boxes[${index}][text]` , c));
      
        fetch('https://api.imgflip.com/caption_image', {
            method : 'POST',
            body:fromData
        }).then(res =>{
            res.json().then(res=>{
               // console.log("sss");
               // var _generatedMeme = res.data;
           //   alert(res.data.url);
               setImageURL(res.data.url);
                // setImageURL()
            });
        });
    }

    const shuffleMemes = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * i);
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      };

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes').then(
        res => res.json().then(res=>{
            
           
            const _memes = res.data.memes;
            //shuflle the meme:
            shuffleMemes(_memes);
            
            setMemes(_memes);
        })
        )
    },[])


    useEffect(
        ()=>{
            if(memes.length){
                   setCaptions( Array(memes[memeIndex].box_count).fill(''));
            }
        },[memeIndex , memes]);

     





    return (
        


        memes.length ? <div className="meme_container" >
           
            
                <h1>Meme Generator </h1>
            {

                captions.map( (c,index) =>(
                    <div key={index+1}>
                        <input className="input-feild" onChange={(e)=> updateCaption(e,index)  }  type="text"/>
                        <br/>
                    </div>

                    
                ))   
            }
            <br/>
             <button className="generate-btn" onClick={generateMeme} >Generate</button>
           
           <button className="skip-btn" onClick={nextMeme} >Skip</button>
         

                  {
                    imgURL==='' ? 
                     <img className="img" alt="img" src = {memes[memeIndex].url} />
                     :
                     <img className="img" alt="img" src = {imgURL} />
                    
                  }
        </div> : <>NOPE</>
    )
}

export default Meme
