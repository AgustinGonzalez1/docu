import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import { useColorMode } from "@docusaurus/theme-common";

function Home() {
	return (
		<Layout
			title="Documentación de Desarrollo Web"
			description="Aprende los fundamentos del desarrollo web con nuestra guía completa.">
			<Content />
		</Layout>
	);
}

function Content() {
	// Usa el contexto de Docusaurus para el modo oscuro
	const { colorMode } = useColorMode();

	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	return (
		<div
			className={`min-h-[calc(100vh-246px)] flex flex-col ${
				colorMode === "dark"
					? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"
					: "bg-gradient-to-br from-white via-purple-50 to-gray-100"
			} text-gray-800 dark:text-gray-100`}>
			{/* Contenido principal */}
			<main className="flex-grow flex items-center justify-center px-4">
				<motion.div className="text-center" initial="initial" animate="animate" variants={fadeIn}>
					<h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
						Documentación de Desarrollo Web
					</h1>
					<p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:max-w-3xl text-white dark:text-gray-300">
						Aprende los fundamentos del desarrollo web con nuestra guía completa.
					</p>
					<div className="max-w-md mx-auto sm:flex sm:justify-center ">
						<p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:max-w-3xl text-white dark:text-gray-300">
							Hecho con <span className="text-purple-600 dark:text-purple-400">❤</span> por el profe Agus
						</p>
					</div>
				</motion.div>
			</main>
		</div>
	);
}

export default Home;
