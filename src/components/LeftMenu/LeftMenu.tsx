"use client"

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { fetchData } from '@/helpers/RequestHelper'

export default function LeftMenu(){
    const [menus, setmenus] = useState([]);
    const router = useRouter()

    useEffect(() => {
        initLayout();
    }, [])

    const initLayout = async () => {
        const data = await fetchData("https://658294ef02f747c83679a14b.mockapi.io/menu", "GET");
        setmenus(data);
    }

    return (<>
        {menus.map((menu) => {

            return (
                <div key={menu["id"]} onClick={() => router.push(`/${menu["link"]}`)}>
                    {menu["name"]}
                </div>
            );
        })}
    </>);
}