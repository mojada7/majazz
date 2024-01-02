
import BottomMenuCardWraper from "@/components/agahiComponents/bottomMenuCardWraper";
import { ReactNode } from "react";

export default function CityLayout (
    {children} : {children : ReactNode}
) {
    return (
        <div className="w-full h-full">
            {children}
            <div className="w-[100vw] bg-gray-50 dark:bg-stone-900 h-[12vh] fixed bottom-0 left-0 flex justify-between">
                <BottomMenuCardWraper text="ثبت آگهی" >
                    <div className="w-12 h-12 bg-slate-600"></div>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text="ثبت آگهی" >
                    <div className="w-12 h-12 bg-slate-600"></div>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text="ثبت آگهی" >
                    <div className="w-12 h-12 bg-slate-600"></div>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text="ثبت آگهی" >
                    <div className="w-12 h-12 bg-slate-600"></div>
                </BottomMenuCardWraper>
                <BottomMenuCardWraper text="ثبت آگهی" >
                    <div className="w-12 h-12 bg-slate-600"></div>
                </BottomMenuCardWraper>
            </div>

        </div>

    )
}