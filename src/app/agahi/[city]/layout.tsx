
import BottomMenuCardWraper from "@/components/agahiComponents/bottomMenuCardWraper";
import { ReactNode } from "react";
import Account from '@heroicons/react/24/outline/UserCircleIcon'
import Add from '@heroicons/react/24/outline/PlusCircleIcon'
import Chat from '@heroicons/react/24/outline/ChatBubbleBottomCenterTextIcon'
import Ads from '@heroicons/react/24/outline/NewspaperIcon'
import Category from '@heroicons/react/24/outline/InboxStackIcon'

export default function CityLayout (
    {children} : {children : ReactNode}
) {
    return (
        <div className="w-full h-full">
            {children}
            <div className="w-[100vw] bg-gray-50 dark:bg-stone-900 h-[12vh] fixed bottom-0 left-0 flex justify-between">
                <BottomMenuCardWraper text="ثبت آگهی" >
                    <Add className="w-8 h-8"></Add>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text='دسته‌بندی' >
                    <Category className="w-8 h-8"></Category>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text='آگهی‌ها' >
                    <Ads className="w-8 h-8 "></Ads>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text='پیام‌ها' >
                    <Chat className="w-8 h-8"></Chat>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text='حساب کاربری' >
                    <Account className="w-8 h-8">
                    </Account>
                </BottomMenuCardWraper>
            </div>

        </div>

    )
}