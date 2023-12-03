"use client"
import { useMemo, useState, ReactElement } from "react";
import ArrowUpDown from '@/app/components/ArraoUpDown';

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

interface AccordionData {
    title: string;
    content: string | ReactElement;
}

interface AccordionDataWithId extends AccordionData {
    id: string;
    isOpen: boolean;
}

interface AccordionProps {
    items: AccordionData[];
}


export const Accordion = ({ items }: AccordionProps) => {

    const [activeAccordion, setActiveAccordion] = useState<string|null>(null);

    const accordionData: AccordionDataWithId[] = useMemo(
        () => items.map((item) => ({ ...item, id: item.title, isOpen: false })),
        [ items ]
    )

    const accordionClickHandle = (id: string) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <section className="accordion--container drop-shadow-xl  mx-auto offset-y-0 offset-x-8" style={{ width: '80%' }}>
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={"accordion-item--container border border-neutral-200 bg-white overflow-hidden"}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <ArrowUpDown />
                        </button>
                    </h2>
                    <div
                        className={`accordion-item--content py-4 px-5 text-base ${activeAccordion !== accordionItem.id ? 'hidden' : ''} ${activeAccordion === accordionItem.id ? "!visibility block" : ''}`}
                    >
                        <div>{accordionItem.content}</div>
                    </div>
                </div>
            ))}
        </section>
    );
};
