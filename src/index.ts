import dom from "./dom";

import * as getJSON from "./ajax";

import * as output from "./output";

import * as arrays from "./arrays";

import * as boolean from "./boolean";

import * as sleep from "./time";

export default Object.assign(dom, getJSON, output, boolean, sleep, arrays);
