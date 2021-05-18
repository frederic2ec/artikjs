import dom from "./dom";

import * as strap from "./html";

import * as getJSON from "./ajax";

import * as output from "./output";

import * as sleep from "./time";

import * as data from "./data";

import * as renderer from "./Renderer"

export default Object.assign(dom, getJSON, output, sleep, strap, data, renderer);
