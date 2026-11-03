import { getMaxVote } from "../utils"

export function VoteList({list, setSelected}) {
    
    const maxVoteObj = list.find(obj=> obj.votes.length == getMaxVote(list))

    return (
        <div className="flex flex-col gap-4 bg-slate-700 p-4 w-75 rounded-md">
            {list.map((loc)=> (
                <div key={loc.id} className={`flex justify-center flex-col max-w-75 ${maxVoteObj.id == loc.id ? "border-4 border-green-500" : " border border-slate-400"} rounded-2xl p-4`}>
                    <img src={loc.imgUrl} alt={loc.text} className="w-full"/>
                    <div className="text-2xl text-center">{loc.text}</div>
                    <div className="flex w-full justify-end">
                        <button className="bg-slate-400 p-2 rounded-md cursor-pointer hover:bg-slate-900" onClick={()=>setSelected(loc.text)}>Szavazok</button>
                    </div>
                </div>
            ))}
        </div>
    )
}