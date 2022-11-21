import { motion } from 'framer-motion'

const Motion = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 2,
                default: { ease: 'linear' },
            }}
        >
            {props.children}
        </motion.div>
    )
}

export default Motion
