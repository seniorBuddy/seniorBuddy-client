
export default function SettingSide() {
    const list = ['계정 관리', '화면 설정', '도움말'];
    return (
        <div className="min-w-36 h-72 bg-slate-300 
        flex items-center text-center justify-center 
        flex-row sm:flex-col">
           {list.map((li) => 
               (<div
                className="text-lg text-blue border-3 w-full"
                key={li} >{li}</div>)
           )}
        </div>
    )
}