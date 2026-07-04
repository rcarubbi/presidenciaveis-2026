import type { MediaCategory } from "../types";
import { lulaMedia } from "./media-lula";
import { flavioMedia } from "./media-flavio";
import { renanMedia } from "./media-renan";
import { caiadoMedia } from "./media-caiado";
import { zemaMedia } from "./media-zema";

export const mediaData: Record<string, MediaCategory[]> = {
	lula: lulaMedia,
	flavio: flavioMedia,
	renan: renanMedia,
	caiado: caiadoMedia,
	zema: zemaMedia,
};
