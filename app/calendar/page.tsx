'use client';
import React, {useEffect, useMemo, useRef, useState} from 'react'
import { addDays, eachDayOfInterval, format } from "date-fns";
import { saveAs } from "@/app/utils/browser";

interface Template {
    name: string
    file: string
    description: string
    replaceFormat: {
        search: string
        replace: string
    }
}

const Page = () => {
    const imgRef = useRef<HTMLImageElement>()
    const [ templates, setTemplates ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ selectedTemplate, setSelectedTemplate ] = useState<Template | null>(null)

    const [ svgTemplate, setSvgTemplate ] = useState('' as string)
    const [ startDate, setStartDate ] = useState(() => new Date());

    const calendar = useMemo(() => {
        let svg = svgTemplate;
        const searchStr  = (selectedTemplate?.replaceFormat.search || 'D{ID}</tspan>')
        const replaceStr = (selectedTemplate?.replaceFormat.replace || '</tspan>')
        eachDayOfInterval({
            start: startDate,
            end: addDays(startDate, 35)
        }).forEach((date, index) => {
            svg = svg.replace(searchStr.replace('{ID}', ""+(index + 1)), `${format(date, 'd')}${replaceStr}`);
        });
        return svg;
    }, [startDate, svgTemplate]);

    useEffect(() => {
        setLoading(true)
        fetch(`/calendar/templates/${selectedTemplate?.file}`)
            .then(response => response.text())
            .then(data => {
                setSvgTemplate(data)
            }).finally(() => setLoading(false))
    }, [ selectedTemplate ]);

    useEffect(() => {
        setLoading(true)
        fetch('/calendar/templates/config.json')
            .then(response => response.json())
            .then(data => {
                const { templates } = data;
                setSelectedTemplate(templates[0])
                setTemplates(templates)

            }).finally(() => setLoading(false))

    }, []);

    if (loading) {
        return (
            <main className="flex min-h-screen flex-col justify-between p-1">
                <section className={`section bg-theme-light`}>
                    <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"/>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main className="flex min-h-screen flex-col justify-between p-1">
            <section className={`section bg-theme-light`}>
                <h1>Calendar</h1>
                <div className="container grid grid-cols-4 gap-4">
                    <div>
                        <select className="px-4 py-3 rounded-full" onChange={(e) => {
                            console.log('selected', e.target.value)
                            const template = templates.find((template: Template) => template.name === e.target.value) || null
                            setSelectedTemplate(template)
                        }}>
                            {
                                templates.map((template: Template) => (
                                    <option
                                        key={template.name}
                                        defaultValue={template.name}
                                        selected={selectedTemplate?.name === template.name}>
                                        {template.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="items-center grid gap-8 md:grid md:grid-cols-2">
                        <input
                            type="date"
                            value={format(startDate, 'yyyy-MM-dd')}
                            onChange={e => setStartDate(new Date(e.target.value))}
                            min={format(new Date(), 'yyyy-MM-dd')}/>
                    </div>
                    <div className="items-center gap-8 grid md:grid md:grid-cols-2">
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