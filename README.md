To install Motion :

npm install motion  
import { motion } from "motion/react"  
add motion in front of your HTML elements, like :  

<motion.div  
className="title"  
initial={{ opacity: 0, y: -50 }}  
whileInView={{ opacity: 1, y: 0 }}  
transition={{ duration: 1 }}>  
Your text goes here  
</motion.div>

![alt text](public/motion-logo.jpg)  


https://motion.dev/docs/react-animation

