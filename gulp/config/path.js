// получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	src: {
		js: `${srcFolder}/js/app.js`, // Можно переименовать main.js
		images: `${srcFolder}/img/**/*.{jpg, jpeg, ico, png, gif, webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{ipg, jpeg, ico, svg, png, gif, webp}`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.pug`,
		files: `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ''
}