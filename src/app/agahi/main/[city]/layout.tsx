
import BottomMenuCardWraper from "@/components/agahiComponents/bottomMenuCardWraper";
import { ReactNode } from "react";
import Account from '@heroicons/react/24/outline/UserCircleIcon'
import Add from '@heroicons/react/24/outline/PlusCircleIcon'
import Chat from '@heroicons/react/24/outline/ChatBubbleBottomCenterTextIcon'
import Category from '@heroicons/react/24/outline/InboxStackIcon'
import Image from "next/image";
import logo from '../../../../../public/icon/logo.png'
import BackButton from "@/components/backButton";

export default function CityLayout (
    {children} : {children : ReactNode}
) {
    return (
        <div className="w-full h-full">
            <div className="absolute left-2 top-2 w-[10%] h-[6rem]">
                <BackButton />
            </div>
            {children}
            <div className="w-[100vw] bg-gray-50 dark:bg-stone-900 h-[12vh] fixed bottom-0 left-0 flex justify-between">
                <BottomMenuCardWraper text="ثبت آگهی" link="" >
                    <Add className="w-6 h-7 md:w-8 md:h-8"></Add>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text='دسته‌بندی' link="" >
                    <Category className="w-6 h-7 md:w-8 md:h-8"></Category>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text='آگهی‌ها' link="" >
                    <div className=" w-6 h-7 md:w-8 md:h-8 relative">
                    <Image src={logo} fill alt="آگهی" />
                    </div>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text='پیام‌ها' link="/agahi/messenger" >
                    <Chat className="w-6 h-7 md:w-8 md:h-8"></Chat>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text='حساب کاربری' link="/agahi/acc" >
                    <Account className="w-6 h-7 md:w-8 md:h-8">
                    </Account>
                </BottomMenuCardWraper>
            </div>

        </div>

    )
}