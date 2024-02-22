import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"

function Animatedtext({text, className, stagger, delay}) {
    const animationOption = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }, 
    }

    const ref = useRef(null)
    const isInView = useInView(ref, {amount: 0.5, once: true} )
    return (
            <motion.span 
            ref={ref}
            aria-hidden initial='hidden' 
            animate={isInView ? 'visible' : 'hidden'} 
            transition={{staggerChildren: stagger, delay: delay}}
            className={`${className} animated-text`}>
                {text.split(" ").map((word, index) => (
                    <motion.span key={index} variants={animationOption} className='animatedtext-char'>
                        {word}
                        <span className='animatedtext-char'> </span>
                    </motion.span>
                ))}
            </motion.span>
    )
}

export default Animatedtext
