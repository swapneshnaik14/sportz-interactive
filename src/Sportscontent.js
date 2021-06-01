import React, { useEffect,useMemo,useState } from 'react'
import axios from 'axios'
import './Sportscontent.css'
import PlayerCard from './PlayerCard'

function Sportscontent()
{
    const [playerList,setPlayerList]= useState([]);
    const [search, setSearch] = useState('');
    const [loader,setLoader]= useState(true);

    useEffect(() => { 
        axios.get("https://api.npoint.io/20c1afef1661881ddc9c").then(value=>{
        setLoader(false);
        value.data.playerList.sort((a, b) => a.Value-b.Value);
        setPlayerList(value.data.playerList)}).catch(error => {
          console.log(error);
        });
    }, []) 

    const filterdata=useMemo(() => {
        if(search.length<3)
        {
          return playerList;
        }
          return playerList.filter(({PFName,TName})=>PFName.toLowerCase().includes(search.toLowerCase()) || TName.toLowerCase().includes(search.toLowerCase()) );
    }, [search, playerList])


    const getPlayer = ({target}) => {
      setSearch(target.value);
    }

    const sportsData=filterdata.map((value,index)=><PlayerCard key={index} {...value} />)
            
  return (
    <>
      <div className="search-nav-bar"> 
          <h2 className="nav-heading">Sportz Interactive</h2>
          <input onChange={getPlayer} type="text" placeholder="Search ..."/>
      </div>
      
      <div className="player-list">
          {
            loader ? <div className="loader"></div> :
            <div className="player-card-conatiner">
                {filterdata.length === 0 ? <div className="no-result"> No Match found </div> : sportsData}
            </div>
          }
      </div>
    </>
  )
}

export default Sportscontent