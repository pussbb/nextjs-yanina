'use client';
import { motion } from "framer-motion";

export const sentenceVariants = {
    hidden: {},
    // change staggerChildren variable to speed up or slow down typing.
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0.4 } } }
};

export const TypeWriter = ({ text, ...rest }) => (
    <motion.p
        key={text}
        variants={sentenceVariants}
        initial="hidden"
        whileInView="animate"
        animate="visible"
        {...rest}
    >
        {text.split("").map((char: string, i: number) => (
            <motion.span key={`${char}-${i}`} variants={letterVariants}>
                {char}
            </motion.span>
        ))}
    </motion.p>
);
