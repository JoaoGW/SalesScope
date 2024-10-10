import {
    LayoutGrid,
    ChartColumn,
    BellRing,
    Mail,
    CircleUserRound,
    BadgeHelp,
    Hexagon
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Tooltip } from 'react-tooltip'
import Link from 'next/link';
import { verifyRoute } from '@/scripts/Common/Common';

export default function MenuLateral() {

    // Checking the current path
    const [actualRoute, setActualRoute] = useState("");
    const path = usePathname();
    useEffect(() => {
        setActualRoute(verifyRoute(path));
    }, [])

    return (
        <div className="flex flex-col fixed top-0 left-0 bg-zinc-800 z-50 justify-evenly h-screen items-center w-24">
            <div className="" id="logo">
                <Hexagon color='purple' size={'4em'} />
            </div>
            <div className="" id="home">
                <Link href={'/dashboard/Home'}>
                    <LayoutGrid
                        color={actualRoute === "Home" ? 'purple' : 'white'}
                        size={'2em'}
                        fill={actualRoute === "Home" ? 'purple' : 'white'}
                        data-tooltip-id="Home" data-tooltip-content="Home"
                    />
                    <Tooltip id="Home" place='right'/>
                </Link>
            </div>
            <div className="" id="charts">
                <Link href={'/dashboard/Charts'}>
                    <ChartColumn
                        color={actualRoute === "Charts" ? 'purple' : 'white'}
                        size={'2em'}
                        data-tooltip-id="Charts" data-tooltip-content="Charts"
                    />
                    <Tooltip id="Charts" place='right'/>
                </Link>
            </div>
            <div className="" id="notifications">
                <Link href={'/dashboard/Notifications'}>
                    <BellRing
                        color={actualRoute === "Notifications" ? 'purple' : 'white'}
                        size={'2em'}
                        fill={actualRoute === "Notifications" ? 'purple' : 'white'}
                        data-tooltip-id="Notifications" data-tooltip-content="Notifications"
                    />
                    <Tooltip id="Notifications" place='right'/>
                </Link>
            </div>
            <div className="" id="contact">
                <Link href={'/dashboard/Contact'}>
                    <Mail
                        color={actualRoute === "Contact" ? 'purple' : 'white'}
                        size={'2em'}
                        data-tooltip-id="Contact" data-tooltip-content="Contact"
                    />
                    <Tooltip id="Contact" place='right'/>
                </Link>
            </div>
            <div className="" id="account">
                <Link href={'/dashboard/Account'}>
                    <CircleUserRound
                        color={actualRoute === "Account" ? 'purple' : 'white'}
                        size={'2em'}
                        data-tooltip-id="Account" data-tooltip-content="Account"
                    />
                    <Tooltip id="Account" place='right'/>
                </Link>
            </div>
            <div className="" id="help">
                <Link href={'/dashboard/Help'}>
                    <BadgeHelp
                        color={actualRoute === "Help" ? 'purple' : 'white'}
                        size={'2em'}
                        data-tooltip-id="Help" data-tooltip-content="Help"
                    />
                    <Tooltip id="Help" place='right'/>
                </Link>
            </div>
        </div>
    )
}