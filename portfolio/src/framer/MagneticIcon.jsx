import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

function MagneticIcon({children, className}) {

    const ref = useRef(null);
    const [position, setPosition] = useState({x: 0, y: 0})
    
    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({x, y})
    };

    const mouseLeave = () => {
        setPosition({x: 0, y: 0})
    };

    const { x, y } = position;
  return (
    <motion.div className={className} ref={ref} onMouseMove={mouseMove} onMouseLeave={mouseLeave} animate={{x, y}} transition={{type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}>
        {children}
    </motion.div>
  )
}

export default MagneticIcon