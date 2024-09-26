import { 
    LayoutGrid, 
    ChartColumn, 
    BellRing,
    Mail,
    CircleUserRound,
    BadgeHelp,
    Hexagon
} from 'lucide-react';

export default function MenuLateral(){
    return(
        <div className="flex flex-col absolute top-0 left-0 bg-zinc-800 z-50 justify-evenly h-screen items-center w-24">
            <div className="" id="logo">
                <Hexagon color='purple' fill='purple' size={'2.5em'}/>
            </div>
            <div className="" id="home">
                <LayoutGrid color='white' size={'2em'}/>
            </div>
            <div className="" id="charts">
                <ChartColumn color='white' size={'2em'}/>
            </div>
            <div className="" id="notifications">
                <BellRing color='white' size={'2em'}/>  
            </div>
            <div className="" id="contact">
                <Mail color='white' size={'2em'}/>
            </div>
            <div className="" id="account">
                <CircleUserRound color='white' size={'2em'}/>
            </div>
            <div className="" id="help">
                <BadgeHelp color='white' size={'2em'}/>
            </div>
        </div>
    )
}