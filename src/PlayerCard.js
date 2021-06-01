import React from 'react'

function PlayerCard({PFName,SkillDesc,UpComingMatchesList,Value,Id}){
    const match = UpComingMatchesList[0].CCode? <span>Next Match: {UpComingMatchesList[0].CCode} vs {UpComingMatchesList[0].VsCCode}</span> : null;
    const onError=(event)=>{
        event.target.src="./player-images/no-img.jpg"
    }
    return (
        <div className="player-card-wrapper">
            <div className="player-card-img">
                <img src={`./player-images/${Id}.jpg`} alt="no img" title={PFName} onError={onError} />
            </div>
            <div className="player-card-content">
                <div className="player-info">
                    <div className="player-name">{PFName}</div>
                    <div className="player-skill">{SkillDesc}</div>
                </div>
                <div className="player-value"><span>value: </span>$ {Value}</div>
                <div className="player-upcomming-match">{match}</div>
                <div className="player-next-match">{UpComingMatchesList[0].MDate && new Date(`${UpComingMatchesList[0].MDate} UTC`).toLocaleString()}</div>
            </div>
        </div>
    )
}

export default PlayerCard