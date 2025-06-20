import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { FaLinkedin, FaGithub, FaQuora, FaMediumM } from 'react-icons/fa';
import { RiArrowDownWideLine } from 'react-icons/ri';

import trial from '../assets/trial.png';

const container = (delay) => ({
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Home() {
  return (
    <div name="home" className="h-screen w-full pt-24 flex flex-col gap-4 px-4 py-2 justify-start items-center bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <motion.img variants={container(0)} initial="hidden" animate="visible" src={trial} alt="my profile" className="w-32 h-32 lg:w-48 lg:h-48" />
        <motion.h2 variants={container(0.5)} initial="hidden" animate="visible" className="text-4xl capitalize tracking-tight font-thin lg:text-6xl">
          Abbu Turab Syed
        </motion.h2>
      </div>
      <div className="flex flex-col w-full gap-2 justify-center items-center">
        <motion.h3
          variants={container(0.75)}
          initial="hidden"
          animate="visible"
          className="text-xl lg:text-2xl w-fit capitalize bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
        >
          Software engineer
        </motion.h3>
        <motion.p variants={container(1)} initial="hidden" animate="visible" className="text-sm max-w-xl font-light tracking-tight sm:w-full md:w-3/5 md:ml-6 text-gray-400">
          A Full Stack Developer, with a strong focus on backend engineering and building scalable, high-performance systems. Experienced in designing secure APIs, cloud deployments, and real-time
          features. Passionate about solving complex technical challenges and delivering impactful web solutions.
        </motion.p>
      </div>
      <div className="flex gap-2 mt-8">
        <a href="https://www.linkedin.com/in/abbuturabsyed/">
          <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a href="https://github.com/SyedAbbuTurab">
          <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a href="#">
          <FaMediumM className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a href="#">
          <FaQuora className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
      <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }} className="cursor-pointer">
        <Link to="about" smooth duration={500} offset={-50}>
          <RiArrowDownWideLine className="w-8 h-8" />
        </Link>
      </motion.div>
    </div>
  );
}
