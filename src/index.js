import dom from "./dom";

import { getJSON } from "./ajax";

import { alert, cprint, write, wprint } from "./output";

import {
  igloo,
  cct,
  cin,
  iter,
  all,
  fill,
  filter,
  aFind,
  findex,
  feach,
  from,
  has,
  iof,
  isArr,
  join,
  keys,
  length,
  lindexOf,
  map,
  Rlast,
  reduce,
  reduceR,
  reverso,
  Rfirst,
  slice,
  some,
  sort,
  splice,
  toString,
  unshift,
  ValOf,
} from "./arrays";

import { isBool, proto, stringify, valof } from "./boolean";

import { sleep } from "./time";

dom.getJSON = getJSON;
dom.alert = alert;
dom.cprint = cprint;
dom.write = write;
dom.wprint = wprint;
dom.igloo = igloo;
dom.cct = cct;
dom.cin = cin;
dom.iter = iter;
dom.all = all;
dom.fill = fill;
dom.filter = filter;
dom.aFind = aFind;
dom.findex = findex;
dom.feach = feach;
dom.from = from;
dom.has = has;
dom.iof = iof;
dom.isArr = isArr;
dom.join = join;
dom.keys = keys;
//dom.length = length;
dom.lindexOf = lindexOf;
dom.map = map;
dom.Rlast = Rlast;
dom.reduce = reduce;
dom.reduceR = reduceR;
dom.reverso = reverso;
dom.Rfirst = Rfirst;
dom.slice = slice;
dom.some = some;
dom.sort = sort;
dom.splice = splice;
dom.toString = toString;
dom.unshift = unshift;
dom.ValOf = ValOf;
dom.isBool = isBool;
dom.proto = proto;
dom.stringify = stringify;
dom.valof = valof;
dom.sleep = sleep;

export default dom;
