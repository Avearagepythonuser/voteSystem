import { useState } from "react"
import { hasVoted } from "../utils"

export function VoteForm({list, setSelected, selected, setLocations}) {
    const [name, setName] = useState("")
    const [msg, setMsg] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    
    if (hasVoted(list, name)) {
        setMsg("Már szavaztál!")
        return
    }

    if (!name.trim()) {
        setMsg("Nincs megadva név!")
        return
    }

    setLocations(prev=>prev.map(obj=>obj.text === selected ? ({...obj, votes: [...obj.votes, name]}) : obj))
    setSelected(null)


}

    return (
        <div className="flex flex-col border border-slate-300 rounded-md p-4 w-75">
            <h3>A következőre szavazok: <span className="font-bold">{selected}</span></h3>
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
                <label htmlFor="name"></label>
                <input id="name" type="text" className="border border-slate-500 w-full rounded-md p-2"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <div className="flex justify-between">
                    <button type="submit" className="bg-slate-600 p-2 rounded-md cursor-pointer hover:bg-slate-900">Szavazok</button>
                    <button className="bg-slate-400 p-2 rounded-md cursor-pointer hover:bg-slate-900" onClick={() => setSelected(null)}>Mégse</button>
                </div>
            </form>
            {msg && <div>{msg}</div>}
        </div>
    )
}