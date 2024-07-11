"use client"
import React from "react";
import DocViewer, {DocViewerRenderers} from "react-doc-viewer";

if (typeof Promise.withResolvers === 'undefined') {
    if (window)
        // @ts-expect-error This does not exist outside of polyfill which this is doing
        window.Promise.withResolvers = function () {
            let resolve, reject;
            const promise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            });
            return { promise, resolve, reject };
        };
}

const Docs = () => {
    const url = `${window.location.protocol}//${window.location.host}`
    const docs = [
        { uri: `${url}/ДОГОВІР_ПУБЛІЧНОЇ_ОФЕРТИ_ПРО_НАДАННЯ_ІНФОРМАЦІЙНИХ_ПОСЛУГ.docx` },
        { uri: `${url}/Правила повернення грошових коштів.docx` }, // Local File
    ];

    return <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
}

export default Docs