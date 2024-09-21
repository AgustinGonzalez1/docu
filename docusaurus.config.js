module.exports = {
	title: "Documentación de Desarrollo Web",
	tagline: "Aprende los fundamentos del desarrollo web con nuestra guía completa.",
	url: "https://vulcanis.com.ar",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "ProfeAgus",
	projectName: "documentacion-web",

	i18n: {
		defaultLocale: "es",
		locales: ["es"],
	},

	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Elimina o comenta la siguiente línea para quitar el botón de "Editar esta página"
					// editUrl: "https://github.com/tu_usuario/tu_repositorio/edit/main/",
				},
				blog: {},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],

	themeConfig: {
		navbar: {
			title: "ProfeAgus",
			items: [
				{ to: "/docs/category/html", label: "HTML", position: "left" },
				{ to: "/docs/category/css", label: "CSS", position: "left" },
				{ to: "/docs/category/javascript", label: "JavaScript", position: "left" },
				{ to: "/docs/category/react", label: "React", position: "left" },
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Redes Sociales",
					items: [
						{
							label: "Instagram",
							href: "https://www.instagram.com/agus.devv/",
						},
						{
							label: "GitHub",
							href: "https://github.com/AgustinGonzalez1",
						},
						{
							label: "Portafolio",
							href: "https://vulcanis.com.ar",
						},
					],
				},
			],
			copyright: `&copy; ${new Date().getFullYear()} ProfeAgus. Todos los derechos reservados.`,
		},
		colorMode: {
			defaultMode: "dark",
			respectPrefersColorScheme: true,
		},
	},
};
