import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';


// import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import FrontTitle from "../../../components/FrontTitle";

import "./loadBlog.css";
import { useLocation } from "react-router-dom";

// import markdown from `../../pages/blog/all_blog/${year}/${blog}`;

function loadBlog() {

    const location = useLocation();
    const year : string = new URLSearchParams(location.search).get("year") ?? "0";
    const blog : string = new URLSearchParams(location.search).get("blog") ?? "null";

    const importMarkdown : (y:string, b:string) => Promise<any> = async (year: string, blog: string) => {
        const markdown = await import(`../../blog/all_blog/${year}/${blog}.md`);
        return markdown;
    };

    const [markdownContent, setMarkdownContent] = useState<string>();

    useEffect(() => {
        importMarkdown(year, blog).then((markdown) => {
            setMarkdownContent(markdown.default);
        });
    }, [year, blog]);

    return (
        <>
            <FrontTitle Title={blog} Description={""} />

            <div className="mb-28 pb-10 pt-10 bg-blue-950 w-full flex justify-center">
                <Box
                    className={`markdown text-white md:w-3/6 sm:w-4/6 w-5/6 p-5 m-5`}
                >
                    <ReactMarkdown
                        children={ markdownContent }
                    />
                </Box>
            </div>
        </>
    );
}

export default loadBlog