import { motion } from "framer-motion"
import image from "~/assets/me_stand.jpg"

const SmoothImageLoad = () => {
  return (
    <div className="w-[200px] flex items-center justify-center bg-gray-100">
      <motion.img
        src={image.src}
        alt="Smooth Image"
        className="rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          // duration: 0.8,
          // delay: 0.5,
          // ease: [0, 0.71, 0.2, 1.01],
          duration: 1,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export default SmoothImageLoad;
