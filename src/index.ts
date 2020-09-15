import dom from "./dom";

import * as getJSON from "./ajax";

import * as output from "./output";

import * as sleep from "./time";

export default Object.assign(dom, getJSON, output, sleep);
