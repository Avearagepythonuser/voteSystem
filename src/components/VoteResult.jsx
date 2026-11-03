
export function VoteResult({list}) {
    return (
        <div className="flex flex-col gap-4 bg-slate-700 rounded-md p-4 w-75">
            <h3 className="text-center text-2xl">Eredmény</h3>
            <div>
                {list.map(({id, text, votes})=> (
                    <div key={id}>
                        {text}: <span className="font-bold">{votes.length} szavazat</span>
                    </div>
                ))}
            </div>
        </div>
    )
}