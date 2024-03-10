'use client';
import {motion, useScroll} from "framer-motion";

const PageScroll = ({ }) => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className="progress-bar"
            style={{scaleX: scrollYProgress}}
        />
    );
}

export default PageScroll