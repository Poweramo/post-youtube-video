import config from "./config.json" assert { type: "json" };
import publishVideo from "./publishVideo.js";

(function () {
	const description = config.description;

	const videoLink = ""; // Add your mp4 file inside the string
	const counter = 1;

	publishVideo(videoLink, `Quote ${counter}`, description, config.tags);
})();
