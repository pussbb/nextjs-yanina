'use client'
import React, {useEffect} from "react";
import DocViewer, {DocViewerRenderers} from "react-doc-viewer";

const Docs = () => {

    const [ docs, setDocs ] = React.useState<{ uri: string }[]>([]);


    useEffect(() => {
        const url = `${window.location.protocol}//${window.location.host}`
        const docs = [
            { uri: `${url}/ДОГОВІР_ПУБЛІЧНОЇ_ОФЕРТИ_ПРО_НАДАННЯ_ІНФОРМАЦІЙНИХ_ПОСЛУГ.docx` },
            { uri: `${url}/Правила повернення грошових коштів.docx` }, // Local File
        ];
        setDocs(docs);
    }, []);

    return <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
}

export default Docs