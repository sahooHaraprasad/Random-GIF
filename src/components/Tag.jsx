import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./spinner";

const API_KEY = 'iq2dR3xUsvPRtpAbE8LOtuKIYSDAYbjn'
const Tag = () => {

  const [tag, setTag] = useState("")
  const [gif, setGif] = useState("");

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    // console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(()=> {
    fetchData();
  },[])

  function clickHandler() {
    fetchData()
  }

  function changeHandler(){
    setTag(event.target.value)
  }

  const [loading, setLoading] = useState('false');

  return (
    <div className="w-1/2 bg-blue-500  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className="text-2xl mt-[15px] underline uppercase font-bold"> Search any GIF</h1>
{
  loading ? (<Spinner/>) : (<img src={gif} width="450" />)
}
      
<input type="text"
value={tag}
className="w-10/12 mb-[20px] text-lg py-2 rounded-lg text-center"
onChange={changeHandler}
 />

      <button className="w-10/12  mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg" 
      onClick={clickHandler}>Generate</button>
    </div>
  );
};

export default Tag;

