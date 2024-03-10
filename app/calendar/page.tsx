'use client';
import React, {useMemo, useRef, useState} from 'react'
import { Datepicker } from 'flowbite-react';
import { Template1 } from "@/app/calendar/CalendarTemplates";
import { addDays, eachDayOfInterval, format } from "date-fns";
import { saveAs } from "@/app/utils/browser";

const Page = () => {
    const imgRef = useRef<HTMLImageElement>()
    const [ startDate, setStartDate ] = useState(() => new Date());

    const calendar = useMemo(() => {
        let svg = Template1;
        eachDayOfInterval({
            start: startDate,
            end: addDays(startDate, 35)
        }).forEach((date, index) => {
            svg = svg.replace(`D${index + 1}</tspan>`, `${format(date, 'd')}</tspan>`);
        });
        return svg;
    }, [startDate, Template1]);

    return (
        <main className="flex min-h-screen flex-col justify-between p-1">
            <section className={`section bg-theme-light`}>
                <h1>Calendar</h1>
                <div className="container">
                    <div className="items-center gap-8 md:grid md:grid-cols-2">
                        <Datepicker inline={false} defaultDate={startDate} onSelectedDateChanged={setStartDate}/>
                    </div>
                    <div className="items-center gap-8 md:grid md:grid-cols-2">
                        <button onClick={() => {
                            if (!imgRef.current) {
                                return;
                            }
                            const canvas = document.createElement('canvas');
                            canvas.width = imgRef.current.naturalWidth || imgRef.current?.clientWidth;
                            canvas.height = imgRef.current.naturalHeight || imgRef.current?.clientHeight

                            const ctx = canvas.getContext('2d');
                            ctx?.drawImage(imgRef.current, 0, 0);
                            saveAs( canvas.toDataURL('image/png'), 'calendar.png');
                        }}  className="btn btn-primary z-0 py-[14px]" >Save
                        </button>
                    </div>
                </div>

                <img
                    // @ts-ignore
                    ref={imgRef}
                    alt={'calendar'}
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(calendar)}`}/>
            </section>

        </main>
    )
}

export default Page