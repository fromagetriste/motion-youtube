import { motion } from "motion/react";

function Blog() {
  return (
    <div className="px-10">
      <motion.h1
        className="pt-16 text-4xl text-center font-bold"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} // occurs only once, if set to true
      >
        Title of my blog
      </motion.h1>
      <motion.h2
        className="pt-2 mb-12 text-center text-gray-400 italic"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }} // occurs only once, if set to true
      >
        This is a sub-title
      </motion.h2>
      <div className="flex items-center gap-12 text-justify">
        <motion.p
          initial={{ x: -70 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }} // occurs only once, if set to true
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab
          deserunt recusandae, in at ipsam unde esse libero alias dolorem omnis
          voluptas! Repudiandae sit alias, vel quisquam recusandae eos! Esse
          tempore quasi, eius quo doloremque ipsa, dolores repudiandae omnis,
          distinctio aliquid optio. Molestiae ab nihil consectetur harum earum
          quisquam laborum, porro maxime, quas nemo ut magni! Exercitationem,
          explicabo suscipit! Nostrum culpa quidem iusto! Deserunt quas autem
          unde nisi illo.
        </motion.p>
        <div className="w-px h-50 bg-white"></div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: false }} // occurs only once, if set to true
        >
          Quos totam vitae iusto deserunt itaque vel dolore, consequuntur cumque
          quam ullam rerum ipsam excepturi facere eos harum nulla laudantium
          illum veritatis incidunt asperiores! Repellat, vero? Aut, explicabo
          deserunt similique fugit nesciunt modi labore excepturi, officiis
          saepe molestias vel voluptate doloribus ipsum voluptas veritatis! Quod
          quisquam blanditiis quaerat, omnis laboriosam, doloribus libero
          voluptate doloremque at corporis enim nobis. Nihil, dolores odit?
        </motion.p>
      </div>
    </div>
  );
}

export default Blog;
