/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// wasm2js.js - enough of a polyfill for the WebAssembly object so that we can load
// wasm2js code that way.

/** @suppress{duplicate, const, checkTypes} */
var WebAssembly = {
  // Note that we do not use closure quoting (this['buffer'], etc.) on these
  // functions, as they are just meant for internal use. In other words, this is
  // not a fully general polyfill.
  /** @constructor */
  Memory: function(opts) {
    this.buffer = new ArrayBuffer(opts['initial'] * 65536);
  },

  Module: function(binary) {
    // TODO: use the binary and info somehow - right now the wasm2js output is embedded in
    // the main JS
  },

  /** @constructor */
  Instance: function(module, info) {
    // TODO: use the module somehow - right now the wasm2js output is embedded in
    // the main JS
    // This will be replaced by the actual wasm2js code.
    this.exports = (
function instantiate(info) {
function Table(ret) {
  // grow method not included; table is not growable
  ret.set = function(i, func) {
    this[i] = func;
  };
  ret.get = function(i) {
    return this[i];
  };
  return ret;
}

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
    return uint8Array;
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 65536, "LSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweAB3AHMAVW5rbm93biBlcnJvcgBxAE1ldGFsX0Zsb29yXzY0eDY0LmJtcABCcmlja19XYWxsXzY0eDY0LmJtcABXb29kZW5fRmxvb3JfSG9yaXpvbnRhbF82NHg2NC5ibXAAV29vZGVuX0Zsb29yX1ZlcnRpY2FsXzY0eDY0LmJtcABCcmlja19XYWxsX0NyYWNrZWRfNjR4NjQuYm1wAFJvY2t5X1JvYWRfNjR4NjQuYm1wAG5hbgBiYXNpY19zdHJpbmcAaW5mAGJhZF9hbGxvYyB3YXMgdGhyb3duIGluIC1mbm8tZXhjZXB0aW9ucyBtb2RlAEFWRyBGUFMgJWQAcmIAcndhAFcAUwBRAE5BTgBJTkYARQBEAEEAQzovVXNlcnMvcmFmb2IvcHJvamVjdHMvMl81ZF9Db2RlT3JnYW5pemF0aW9uUHJhY3RpY2VFbmdpbmUuZ2l0L2V4dGVybmFsL3RleHR1cmVzLwAuACsAKG51bGwpAGxlbmd0aF9lcnJvciB3YXMgdGhyb3duIGluIC1mbm8tZXhjZXB0aW9ucyBtb2RlIHdpdGggbWVzc2FnZSAiJXMiAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMAAAAEAAAABAAAAAYAAACD+aIARE5uAPwpFQDRVycA3TT1AGLbwAA8mZUAQZBDAGNR/gC73qsAt2HFADpuJADSTUIASQbgAAnqLgAcktEA6x3+ACmxHADoPqcA9TWCAES7LgCc6YQAtCZwAEF+XwDWkTkAU4M5AJz0OQCLX4QAKPm9APgfOwDe/5cAD5gFABEv7wAKWosAbR9tAM9+NgAJyycARk+3AJ5mPwAt6l8Auid1AOXrxwA9e/EA9zkHAJJSigD7a+oAH7FfAAhdjQAwA1YAe/xGAPCrawAgvM8ANvSaAOOpHQBeYZEACBvmAIWZZQCgFF8AjUBoAIDY/wAnc00ABgYxAMpWFQDJqHMAe+JgAGuMwAAZxEcAzWfDAAno3ABZgyoAi3bEAKYclgBEr90AGVfRAKU+BQAFB/8AM34/AMIy6ACYT94Au30yACY9wwAea+8An/heADUfOgB/8soA8YcdAHyQIQBqJHwA1W76ADAtdwAVO0MAtRTGAMMZnQCtxMIALE1BAAwAXQCGfUYA43EtAJvGmgAzYgAAtNJ8ALSnlwA3VdUA1z72AKMQGABNdvwAZJ0qAHDXqwBjfPgAerBXABcV5wDASVYAO9bZAKeEOAAkI8sA1op3AFpUIwAAH7kA8QobABnO3wCfMf8AZh5qAJlXYQCs+0cAfn/YACJltwAy6IkA5r9gAO/EzQBsNgkAXT/UABbe1wBYO94A3puSANIiKAAohugA4lhNAMbKMgAI4xYA4H3LABfAUADzHacAGOBbAC4TNACDEmIAg0gBAPWOWwCtsH8AHunyAEhKQwAQZ9MAqt3YAK5fQgBqYc4ACiikANOZtAAGpvIAXHd/AKPCgwBhPIgAinN4AK+MWgBv170ALaZjAPS/ywCNge8AJsFnAFXKRQDK2TYAKKjSAMJhjQASyXcABCYUABJGmwDEWcQAyMVEAE2ykQAAF/MA1EOtAClJ5QD91RAAAL78AB6UzABwzu4AEz71AOzxgACz58MAx/goAJMFlADBcT4ALgmzAAtF8wCIEpwAqyB7AC61nwBHksIAezIvAAxVbQByp5AAa+cfADHLlgB5FkoAQXniAPTfiQDolJcA4uaEAJkxlwCI7WsAX182ALv9DgBImrQAZ6RsAHFyQgCNXTIAnxW4ALzlCQCNMSUA93Q5ADAFHAANDAEASwhoACzuWABHqpAAdOcCAL3WJAD3faYAbkhyAJ8W7wCOlKYAtJH2ANFTUQDPCvIAIJgzAPVLfgCyY2gA3T5fAEBdAwCFiX8AVVIpADdkwABt2BAAMkgyAFtMdQBOcdQARVRuAAsJwQAq9WkAFGbVACcHnQBdBFAAtDvbAOp2xQCH+RcASWt9AB0nugCWaSkAxsysAK0UVACQ4moAiNmJACxyUAAEpL4AdweUAPMwcAAA/CcA6nGoAGbCSQBk4D0Al92DAKM/lwBDlP0ADYaMADFB3gCSOZ0A3XCMABe35wAI3zsAFTcrAFyAoABagJMAEBGSAA/o2ABsgK8A2/9LADiQDwBZGHYAYqUVAGHLuwDHibkAEEC9ANLyBABJdScA67b2ANsiuwAKFKoAiSYvAGSDdgAJOzMADpQaAFE6qgAdo8IAr+2uAFwmEgBtwk0ALXqcAMBWlwADP4MACfD2ACtAjABtMZkAObQHAAwgFQDYw1sA9ZLEAMatSwBOyqUApzfNAOapNgCrkpQA3UJoABlj3gB2jO8AaItSAPzbNwCuoasA3xUxAACuoQAM+9oAZE1mAO0FtwApZTAAV1a/AEf/OgBq+bkAdb7zACiT3wCrgDAAZoz2AATLFQD6IgYA2eQdAD2zpABXG48ANs0JAE5C6QATvqQAMyO1APCqGgBPZagA0sGlAAs/DwBbeM0AI/l2AHuLBACJF3IAxqZTAG9u4gDv6wAAm0pYAMTatwCqZroAds/PANECHQCx8S0AjJnBAMOtdwCGSNoA912gAMaA9ACs8C8A3eyaAD9cvADQ3m0AkMcfACrbtgCjJToAAK+aAK1TkwC2VwQAKS20AEuAfgDaB6cAdqoOAHtZoQAWEioA3LctAPrl/QCJ2/4Aib79AOR2bAAGqfwAPoBwAIVuFQD9h/8AKD4HAGFnMwAqGIYATb3qALPnrwCPbW4AlWc5ADG/WwCE10gAMN8WAMctQwAlYTUAyXDOADDLuAC/bP0ApACiAAVs5ABa3aAAIW9HAGIS0gC5XIQAcGFJAGtW4ACZUgEAUFU3AB7VtwAz8cQAE25fAF0w5ACFLqkAHbLDAKEyNgAIt6QA6rHUABb3IQCPaeQAJ/93AAwDgACNQC0AT82gACClmQCzotMAL10KALT5QgAR2ssAfb7QAJvbwQCrF70AyqKBAAhqXAAuVRcAJwBVAH8U8ADhB4YAFAtkAJZBjQCHvt4A2v0qAGsltgB7iTQABfP+ALm/ngBoak8ASiqoAE/EWgAt+LwA11qYAPTHlQANTY0AIDqmAKRXXwAUP7EAgDiVAMwgAQBx3YYAyd62AL9g9QBNZREAAQdrAIywrACywNAAUVVIAB77DgCVcsMAowY7AMBANQAG3HsA4EXMAE4p+gDWysgA6PNBAHxk3gCbZNgA2b4xAKSXwwB3WNQAaePFAPDaEwC6OjwARhhGAFV1XwDSvfUAbpLGAKwuXQAORO0AHD5CAGHEhwAp/ekA59bzACJ8ygBvkTUACODFAP/XjQBuauIAsP3GAJMIwQB8XXQAa62yAM1unQA+cnsAxhFqAPfPqQApc98Atcm6ALcAUQDisg0AdLokAOV9YAB02IoADRUsAIEYDAB+ZpQAASkWAJ96dgD9/b4AVkXvANl+NgDs2RMAi7q5AMSX/AAxqCcA8W7DAJTFNgDYqFYAtKi1AM/MDgASiS0Ab1c0ACxWiQCZzuMA1iC5AGteqgA+KpwAEV/MAP0LSgDh9PsAjjttAOKGLADp1IQA/LSpAO/u0QAuNckALzlhADghRAAb2cgAgfwKAPtKagAvHNgAU7SEAE6ZjABUIswAKlXcAMDG1gALGZYAGnC4AGmVZAAmWmAAP1LuAH8RDwD0tREA/Mv1ADS8LQA0vO4A6F3MAN1eYABnjpsAkjPvAMkXuABhWJsA4Ve8AFGDxgDYPhAA3XFIAC0c3QCvGKEAISxGAFnz1wDZepgAnlTAAE+G+gBWBvwA5XmuAIkiNgA4rSIAZ5PcAFXoqgCCJjgAyuebAFENpACZM7EAqdcOAGkFSABlsvAAf4inAIhMlwD50TYAIZKzAHuCSgCYzyEAQJ/cANxHVQDhdDoAZ+tCAP6d3wBe1F8Ae2ekALqsegBV9qIAK4gjAEG6VQBZbggAISqGADlHgwCJ4+YA5Z7UAEn7QAD/VukAHA/KAMVZigCU+isA08HFAA/FzwDbWq4AR8WGAIVDYgAhhjsALHmUABBhhwAqTHsAgCwaAEO/EgCIJpAAeDyJAKjE5ADl23sAxDrCACb06gD3Z4oADZK/AGWjKwA9k7EAvXwLAKRR3AAn3WMAaeHdAJqUGQCoKZUAaM4oAAnttABEnyAATpjKAHCCYwB+fCMAD7kyAKf1jgAUVucAIfEIALWdKgBvfk0ApRlRALX5qwCC39YAlt1hABY2AgDEOp8Ag6KhAHLtbQA5jXoAgripAGsyXABGJ1sAADTtANIAdwD89FUAAVlNAOBxgAAAAAAAAAAAAAAAAED7Ifk/AAAAAC1EdD4AAACAmEb4PAAAAGBRzHg7AAAAgIMb8DkAAABAICV6OAAAAIAiguM2AAAAAB3zaTUZAAsAGRkZAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABkACgoZGRkDCgcAAQAJCxgAAAkGCwAACwAGGQAAABkZGQAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAZAAsNGRkZAA0AAAIACQ4AAAAJAA4AAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAEwAAAAATAAAAAAkMAAAAAAAMAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA8AAAAEDwAAAAAJEAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAARAAAAABEAAAAACRIAAAAAABIAABIAABoAAAAaGhoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgAAABoaGgAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAABcAAAAAFwAAAAAJFAAAAAAAFAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAAAAAAAAAAAVAAAAABUAAAAACRYAAAAAABYAABYAADAxMjM0NTY3ODlBQkNERUaYHwEAAAAAAAAAAAAAAAAAAACgAk4A6wGnBX4FIAF1BhgDhgT6ALkDLAP9BbcBigF6A7wEHgDMBqIAPQNJA9cBAAQIAJMGCAGPAgYCKgZfArcC+gJYA9kE/QbKAr0F4QXNBdwCEAZAAngAfQJnA2EE7ADlAwoF1ADMAz4GTwJ2AZgDrwQAAEQAEAKuAK4DYAD6AXcEIQXrBCsAYAFBAZIAqQajAW4CTgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATBAAAAAAAAAAAKgIAAAAAAAAAAAAAAAAAAAAAAAAAACcEOQRIBAAAAAAAAAAAAAAAAAAAAACSBAAAAAAAAAAAAAAAAAAAAAAAADgFUgVgBVMGAADKAQAAAAAAAAAAuwbbBusGEAcrBzsHUAdTdWNjZXNzAElsbGVnYWwgYnl0ZSBzZXF1ZW5jZQBEb21haW4gZXJyb3IAUmVzdWx0IG5vdCByZXByZXNlbnRhYmxlAE5vdCBhIHR0eQBQZXJtaXNzaW9uIGRlbmllZABPcGVyYXRpb24gbm90IHBlcm1pdHRlZABObyBzdWNoIGZpbGUgb3IgZGlyZWN0b3J5AE5vIHN1Y2ggcHJvY2VzcwBGaWxlIGV4aXN0cwBWYWx1ZSB0b28gbGFyZ2UgZm9yIGRlZmluZWQgZGF0YSB0eXBlAE5vIHNwYWNlIGxlZnQgb24gZGV2aWNlAE91dCBvZiBtZW1vcnkAUmVzb3VyY2UgYnVzeQBJbnRlcnJ1cHRlZCBzeXN0ZW0gY2FsbABSZXNvdXJjZSB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZQBJbnZhbGlkIHNlZWsAQ3Jvc3MtZGV2aWNlIGxpbmsAUmVhZC1vbmx5IGZpbGUgc3lzdGVtAERpcmVjdG9yeSBub3QgZW1wdHkAQ29ubmVjdGlvbiByZXNldCBieSBwZWVyAE9wZXJhdGlvbiB0aW1lZCBvdXQAQ29ubmVjdGlvbiByZWZ1c2VkAEhvc3QgaXMgZG93bgBIb3N0IGlzIHVucmVhY2hhYmxlAEFkZHJlc3MgaW4gdXNlAEJyb2tlbiBwaXBlAEkvTyBlcnJvcgBObyBzdWNoIGRldmljZSBvciBhZGRyZXNzAEJsb2NrIGRldmljZSByZXF1aXJlZABObyBzdWNoIGRldmljZQBOb3QgYSBkaXJlY3RvcnkASXMgYSBkaXJlY3RvcnkAVGV4dCBmaWxlIGJ1c3kARXhlYyBmb3JtYXQgZXJyb3IASW52YWxpZCBhcmd1bWVudABBcmd1bWVudCBsaXN0IHRvbyBsb25nAFN5bWJvbGljIGxpbmsgbG9vcABGaWxlbmFtZSB0b28gbG9uZwBUb28gbWFueSBvcGVuIGZpbGVzIGluIHN5c3RlbQBObyBmaWxlIGRlc2NyaXB0b3JzIGF2YWlsYWJsZQBCYWQgZmlsZSBkZXNjcmlwdG9yAE5vIGNoaWxkIHByb2Nlc3MAQmFkIGFkZHJlc3MARmlsZSB0b28gbGFyZ2UAVG9vIG1hbnkgbGlua3MATm8gbG9ja3MgYXZhaWxhYmxlAFJlc291cmNlIGRlYWRsb2NrIHdvdWxkIG9jY3VyAFN0YXRlIG5vdCByZWNvdmVyYWJsZQBPd25lciBkaWVkAE9wZXJhdGlvbiBjYW5jZWxlZABGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQATm8gbWVzc2FnZSBvZiBkZXNpcmVkIHR5cGUASWRlbnRpZmllciByZW1vdmVkAERldmljZSBub3QgYSBzdHJlYW0ATm8gZGF0YSBhdmFpbGFibGUARGV2aWNlIHRpbWVvdXQAT3V0IG9mIHN0cmVhbXMgcmVzb3VyY2VzAExpbmsgaGFzIGJlZW4gc2V2ZXJlZABQcm90b2NvbCBlcnJvcgBCYWQgbWVzc2FnZQBGaWxlIGRlc2NyaXB0b3IgaW4gYmFkIHN0YXRlAE5vdCBhIHNvY2tldABEZXN0aW5hdGlvbiBhZGRyZXNzIHJlcXVpcmVkAE1lc3NhZ2UgdG9vIGxhcmdlAFByb3RvY29sIHdyb25nIHR5cGUgZm9yIHNvY2tldABQcm90b2NvbCBub3QgYXZhaWxhYmxlAFByb3RvY29sIG5vdCBzdXBwb3J0ZWQAU29ja2V0IHR5cGUgbm90IHN1cHBvcnRlZABOb3Qgc3VwcG9ydGVkAFByb3RvY29sIGZhbWlseSBub3Qgc3VwcG9ydGVkAEFkZHJlc3MgZmFtaWx5IG5vdCBzdXBwb3J0ZWQgYnkgcHJvdG9jb2wAQWRkcmVzcyBub3QgYXZhaWxhYmxlAE5ldHdvcmsgaXMgZG93bgBOZXR3b3JrIHVucmVhY2hhYmxlAENvbm5lY3Rpb24gcmVzZXQgYnkgbmV0d29yawBDb25uZWN0aW9uIGFib3J0ZWQATm8gYnVmZmVyIHNwYWNlIGF2YWlsYWJsZQBTb2NrZXQgaXMgY29ubmVjdGVkAFNvY2tldCBub3QgY29ubmVjdGVkAENhbm5vdCBzZW5kIGFmdGVyIHNvY2tldCBzaHV0ZG93bgBPcGVyYXRpb24gYWxyZWFkeSBpbiBwcm9ncmVzcwBPcGVyYXRpb24gaW4gcHJvZ3Jlc3MAU3RhbGUgZmlsZSBoYW5kbGUAUmVtb3RlIEkvTyBlcnJvcgBRdW90YSBleGNlZWRlZABObyBtZWRpdW0gZm91bmQAV3JvbmcgbWVkaXVtIHR5cGUATXVsdGlob3AgYXR0ZW1wdGVkAFJlcXVpcmVkIGtleSBub3QgYXZhaWxhYmxlAEtleSBoYXMgZXhwaXJlZABLZXkgaGFzIGJlZW4gcmV2b2tlZABLZXkgd2FzIHJlamVjdGVkIGJ5IHNlcnZpY2UA");
  base64DecodeToExistingUint8Array(bufferView, 72592, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGDw8GBgAGAA2NgAAAAAAADY2fzZ/NjYADD4DHjAfDAAAYzMYDGZjABw2HG47M24ABgYDAAAAAAAYDAYGBgwYAAYMGBgYDAYAAGY8/zxmAAAADAw/DAwAAAAAAAAADAwGAAAAPwAAAAAAAAAAAAwMAGAwGAwGAwEAPmNze29nPgAMDgwMDAw/AB4zMBwGMz8AHjMwHDAzHgA4PDYzfzB4AD8DHzAwMx4AHAYDHzMzHgA/MzAYDAwMAB4zMx4zMx4AHjMzPjAYDgAADAwAAAwMAAAMDAAADAwGGAwGAwYMGAAAAD8AAD8AAAYMGDAYDAYAHjMwGAwADAA+Y3t7ewMeAAweMzM/MzMAP2ZmPmZmPwA8ZgMDA2Y8AB82ZmZmNh8Af0YWHhZGfwB/RhYeFgYPADxmAwNzZnwAMzMzPzMzMwAeDAwMDAweAHgwMDAzMx4AZ2Y2HjZmZwAPBgYGRmZ/AGN3f39rY2MAY2dve3NjYwAcNmNjYzYcAD9mZj4GBg8AHjMzMzseOAA/ZmY+NmZnAB4zBw44Mx4APy0MDAwMHgAzMzMzMzM/ADMzMzMzHgwAY2Nja393YwBjYzYcHDZjADMzMx4MDB4Af2MxGExmfwAeBgYGBgYeAAMGDBgwYEAAHhgYGBgYHgAIHDZjAAAAAAAAAAAAAAD/DAwYAAAAAAAAAB4wPjNuAAcGBj5mZjsAAAAeMwMzHgA4MDA+MzNuAAAAHjM/Ax4AHDYGDwYGDwAAAG4zMz4wHwcGNm5mZmcADAAODAwMHgAwADAwMDMzHgcGZjYeNmcADgwMDAwMHgAAADN/f2tjAAAAHzMzMzMAAAAeMzMzHgAAADtmZj4GDwAAbjMzPjB4AAA7bmYGDwAAAD4DHjAfAAgMPgwMLBgAAAAzMzMzbgAAADMzMx4MAAAAY2t/fzYAAABjNhw2YwAAADMzMz4wHwAAPxkMJj8AOAwMBwwMOAAYGBgAGBgYAAcMDDgMDAcAbjsAAAAAAAAAAAAAAAAAAAAgAADYlwkABQAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAQAAAB8mAkAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmB8BAHCaCQA=");
  base64DecodeToExistingUint8Array(bufferView, 73776, "KHVpbnQzMl90KiBidWZmZXJfcHRyLCBpbnQgd2lkdGgsIGludCBoZWlnaHQpPDo6PnsgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyBpZiAoIWNhbnZhcykgcmV0dXJuOyBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsgaWYgKGNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7IGNhbnZhcy53aWR0aCA9IHdpZHRoOyBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0OyB9IGNvbnN0IGltZ0RhdGEgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpOyBjb25zdCBzcmMgPSBNb2R1bGUuSEVBUFU4LnN1YmFycmF5KGJ1ZmZlcl9wdHIsIGJ1ZmZlcl9wdHIgKyAod2lkdGggKiBoZWlnaHQgKiA0KSk7IGltZ0RhdGEuZGF0YS5zZXQoc3JjKTsgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHsgaW1nRGF0YS5kYXRhW2kgKyAzXSA9IGltZ0RhdGEuZGF0YVtpXTsgaW1nRGF0YS5kYXRhW2ldID0gaW1nRGF0YS5kYXRhW2krMl07IGltZ0RhdGEuZGF0YVtpICsgMl0gPSBpbWdEYXRhLmRhdGFbaSArIDNdOyBpbWdEYXRhLmRhdGFbaSArIDNdID0gMjU1OyB9IGN0eC5wdXRJbWFnZURhdGEoaW1nRGF0YSwgMCwgMCk7IH0A");
}

  var scratchBuffer = new ArrayBuffer(16);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
  }
      
  function wasm2js_memory_copy(dest, source, size) {
    // TODO: traps on invalid things
    bufferView.copyWithin(dest, source, source + size);
  }
      
  function wasm2js_scratch_store_f32(value) {
    f32ScratchView[2] = value;
  }
      
  function wasm2js_scratch_load_f32() {
    return f32ScratchView[2];
  }
      function wasm2js_trap() { throw new Error('abort'); }

  function wasm2js_memory_fill(dest, value, size) {
    dest = dest >>> 0;
    size = size >>> 0;
    if (dest + size > bufferView.length) throw "trap: invalid memory.fill";
    bufferView.fill(value, dest, dest + size);
  }
      
function asmFunc(imports) {
 var buffer = new ArrayBuffer(17432576);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var env = imports.env;
 var fimport$0 = env.emscripten_get_now;
 var fimport$1 = env.render_to_canvas;
 var fimport$2 = env.emscripten_set_keydown_callback_on_thread;
 var fimport$3 = env.emscripten_set_keyup_callback_on_thread;
 var fimport$4 = env.emscripten_set_main_loop;
 var fimport$5 = env.__syscall_openat;
 var fimport$6 = env.__syscall_fcntl64;
 var fimport$7 = env.__syscall_ioctl;
 var wasi_snapshot_preview1 = imports.wasi_snapshot_preview1;
 var fimport$8 = wasi_snapshot_preview1.fd_write;
 var fimport$9 = wasi_snapshot_preview1.fd_read;
 var fimport$10 = wasi_snapshot_preview1.fd_close;
 var fimport$11 = env._abort_js;
 var fimport$12 = env.emscripten_resize_heap;
 var fimport$13 = wasi_snapshot_preview1.fd_seek;
 var global$0 = 65536;
 var global$1 = 0;
 var global$2 = 0;
 var global$3 = 0;
 var global$4 = 73776;
 var global$5 = 73776;
 var global$6 = 74433;
 var __wasm_intrinsics_temp_i64 = 0;
 var __wasm_intrinsics_temp_i64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 // EMSCRIPTEN_START_FUNCS
;
 function $0() {
  $143();
  $8();
  $98();
 }
 
 function $1() {
  $2(74448 | 0) | 0;
  return;
 }
 
 function $2($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $1_1 = 0, $22_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = 800;
  HEAP32[($2_1 + 4 | 0) >> 2] = 450;
  $3($2_1 + 8 | 0 | 0) | 0;
  wasm2js_memory_copy($2_1 + 524328 | 0, 66008, 512);
  wasm2js_memory_copy($2_1 + 524840 | 0, 66520, 512);
  global$0 = $1_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $3($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $11_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  HEAP32[($2_1 + 16 | 0) >> 2] = 64;
  return $2_1 | 0;
 }
 
 function $4($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $84_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = $2_1;
  block1 : {
   block : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65565 | 0) | 0)) {
     break block
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65828 | 0) | 0) {
     break block1
    }
   }
   HEAP8[(0 + 599800 | 0) >> 0] = 1;
  }
  block3 : {
   block2 : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65567 | 0) | 0)) {
     break block2
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65830 | 0) | 0) {
     break block3
    }
   }
   HEAP8[(0 + 599802 | 0) >> 0] = 1;
  }
  block5 : {
   block4 : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65826 | 0) | 0)) {
     break block4
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65846 | 0) | 0) {
     break block5
    }
   }
   HEAP8[(0 + 599801 | 0) >> 0] = 1;
  }
  block7 : {
   block6 : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65819 | 0) | 0)) {
     break block6
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65844 | 0) | 0) {
     break block7
    }
   }
   HEAP8[(0 + 599803 | 0) >> 0] = 1;
  }
  block9 : {
   block8 : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65583 | 0) | 0)) {
     break block8
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65832 | 0) | 0) {
     break block9
    }
   }
   HEAP8[(0 + 599804 | 0) >> 0] = 1;
  }
  block11 : {
   block10 : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65808 | 0) | 0)) {
     break block10
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65842 | 0) | 0) {
     break block11
    }
   }
   HEAP8[(0 + 599805 | 0) >> 0] = 1;
  }
  global$0 = $3_1 + 16 | 0;
  return 1 & 1 | 0 | 0;
 }
 
 function $5($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $84_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = $2_1;
  block1 : {
   block : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65565 | 0) | 0)) {
     break block
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65828 | 0) | 0) {
     break block1
    }
   }
   HEAP8[(0 + 599800 | 0) >> 0] = 0;
  }
  block3 : {
   block2 : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65567 | 0) | 0)) {
     break block2
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65830 | 0) | 0) {
     break block3
    }
   }
   HEAP8[(0 + 599802 | 0) >> 0] = 0;
  }
  block5 : {
   block4 : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65826 | 0) | 0)) {
     break block4
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65846 | 0) | 0) {
     break block5
    }
   }
   HEAP8[(0 + 599801 | 0) >> 0] = 0;
  }
  block7 : {
   block6 : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65819 | 0) | 0)) {
     break block6
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65844 | 0) | 0) {
     break block7
    }
   }
   HEAP8[(0 + 599803 | 0) >> 0] = 0;
  }
  block9 : {
   block8 : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65583 | 0) | 0)) {
     break block8
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65832 | 0) | 0) {
     break block9
    }
   }
   HEAP8[(0 + 599804 | 0) >> 0] = 0;
  }
  block11 : {
   block10 : {
    if (!($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65808 | 0) | 0)) {
     break block10
    }
    if ($105((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 32 | 0 | 0, 65842 | 0) | 0) {
     break block11
    }
   }
   HEAP8[(0 + 599805 | 0) >> 0] = 0;
  }
  global$0 = $3_1 + 16 | 0;
  return 0 & 1 | 0 | 0;
 }
 
 function $6() {
  var $0_1 = 0, $1_1 = 0, $11_1 = 0.0, $65_1 = 0, wasm2js_i32$0 = 0, wasm2js_f64$0 = 0.0;
  $0_1 = global$0 - 16 | 0;
  global$0 = $0_1;
  (wasm2js_i32$0 = $0_1, wasm2js_f64$0 = +fimport$0()), HEAPF64[(wasm2js_i32$0 + 8 | 0) >> 3] = wasm2js_f64$0;
  $1_1 = 0;
  HEAPF32[($0_1 + 4 | 0) >> 2] = Math_fround(Math_fround(+HEAPF64[($0_1 + 8 | 0) >> 3] - +HEAPF64[($1_1 + 599808 | 0) >> 3]) / Math_fround(1.0e3));
  HEAPF64[($1_1 + 599824 | 0) >> 3] = +Math_fround(HEAPF32[($0_1 + 4 | 0) >> 2]) + +HEAPF64[($1_1 + 599824 | 0) >> 3];
  HEAPF64[($1_1 + 599808 | 0) >> 3] = +HEAPF64[($0_1 + 8 | 0) >> 3];
  HEAP32[($1_1 + 599816 | 0) >> 2] = (HEAP32[($1_1 + 599816 | 0) >> 2] | 0) + 1 | 0;
  HEAPF64[(0 + 599840 | 0) >> 3] = +Math_fround(HEAPF32[($0_1 + 4 | 0) >> 2]) + +HEAPF64[(0 + 599840 | 0) >> 3];
  block : {
   if (!(+HEAPF64[(0 + 599840 | 0) >> 3] >= 1.0 & 1 | 0)) {
    break block
   }
   HEAP32[(0 + 599832 | 0) >> 2] = (HEAP32[(0 + 599816 | 0) >> 2] | 0) - (HEAP32[(0 + 599820 | 0) >> 2] | 0) | 0;
   HEAP32[(0 + 599820 | 0) >> 2] = HEAP32[(0 + 599816 | 0) >> 2] | 0;
   $11_1 = +(HEAP32[(0 + 599816 | 0) >> 2] | 0 | 0) / +HEAPF64[(0 + 599824 | 0) >> 3];
   if (Math_abs($11_1) < 2147483647.0) {
    $65_1 = ~~$11_1
   } else {
    $65_1 = -2147483648
   }
   HEAP32[(0 + 599836 | 0) >> 2] = $65_1;
   HEAPF64[(0 + 599840 | 0) >> 3] = +(0 | 0);
  }
  $10(74448 | 0, 599800 | 0, Math_fround(Math_fround(HEAPF32[($0_1 + 4 | 0) >> 2])));
  $14(74448 | 0);
  $51(74448 | 0, HEAP32[(0 + 599832 | 0) >> 2] | 0 | 0, HEAP32[(0 + 599836 | 0) >> 2] | 0 | 0);
  fimport$1(HEAP32[(0 + 598772 | 0) >> 2] | 0 | 0, HEAP32[(0 + 74448 | 0) >> 2] | 0 | 0, HEAP32[(0 + 74452 | 0) >> 2] | 0 | 0);
  global$0 = $0_1 + 16 | 0;
  return;
 }
 
 function $7() {
  var $0_1 = 0, $2_1 = 0, $6_1 = 0, $42_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $0_1 = global$0 - 16 | 0;
  global$0 = $0_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = 0;
  $13(74448 + 8 | 0 | 0);
  $18(74448 + 32 | 0 | 0);
  $54();
  (wasm2js_i32$0 = 0, wasm2js_i32$1 = $138(Math_imul((HEAP32[(0 + 74448 | 0) >> 2] | 0) << 2 | 0, HEAP32[(0 + 74452 | 0) >> 2] | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 598772 | 0) >> 2] = wasm2js_i32$1;
  $2_1 = 2;
  fimport$2($2_1 | 0, 0 | 0, 1 & 1 | 0 | 0, 1 | 0, $2_1 | 0) | 0;
  $6_1 = 2;
  fimport$3($6_1 | 0, 0 | 0, 1 & 1 | 0 | 0, 2 | 0, $6_1 | 0) | 0;
  fimport$4(3 | 0, 0 | 0, 1 & 1 | 0 | 0);
  $140(HEAP32[(0 + 598772 | 0) >> 2] | 0 | 0);
  global$0 = $0_1 + 16 | 0;
  return 0 | 0;
 }
 
 function $8() {
  $1();
  return;
 }
 
 function $9($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $7() | 0 | 0;
 }
 
 function $10($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = Math_fround($2_1);
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $32_1 = Math_fround(0), $293 = 0, $33_1 = Math_fround(0), $309 = 0, $6_1 = 0, $7_1 = 0, $34_1 = Math_fround(0), $352 = 0, $35_1 = Math_fround(0), $368 = 0, $8_1 = 0, $36_1 = Math_fround(0), $397 = 0, $37_1 = Math_fround(0), $410 = 0, $9_1 = 0, $11_1 = Math_fround(0), $13_1 = Math_fround(0), $15_1 = Math_fround(0), $17_1 = Math_fround(0), $19_1 = Math_fround(0), $21_1 = Math_fround(0), $23_1 = Math_fround(0), $25_1 = Math_fround(0), $281 = 0, $297 = 0, $343 = 0, $356 = 0, $385 = 0, $401 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = $1_1;
  HEAPF32[($3_1 + 20 | 0) >> 2] = $2_1;
  $4_1 = 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $4_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $4_1;
  block1 : {
   block : {
    if (!((HEAPU8[((HEAP32[($3_1 + 24 | 0) >> 2] | 0) + 6 | 0) >> 0] | 0) & 1 | 0)) {
     break block
    }
    HEAP32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 24 | 0) >> 2] = 32;
    break block1;
   }
   HEAP32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 24 | 0) >> 2] = 64;
   block3 : {
    block2 : {
     if (!((HEAPU8[((HEAP32[($3_1 + 24 | 0) >> 2] | 0) + 7 | 0) >> 0] | 0) & 1 | 0)) {
      break block2
     }
     HEAP32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 24 | 0) >> 2] = 96;
     break block3;
    }
    HEAP32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 24 | 0) >> 2] = 64;
   }
  }
  block4 : {
   if (!((HEAPU8[((HEAP32[($3_1 + 24 | 0) >> 2] | 0) + 4 | 0) >> 0] | 0) & 1 | 0)) {
    break block4
   }
   HEAPF32[($3_1 + 8 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]) - Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 28 | 0) >> 2]));
  }
  block5 : {
   if (!((HEAPU8[((HEAP32[($3_1 + 24 | 0) >> 2] | 0) + 5 | 0) >> 0] | 0) & 1 | 0)) {
    break block5
   }
   HEAPF32[($3_1 + 8 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 28 | 0) >> 2]) + Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]));
  }
  block6 : {
   if (!((HEAPU8[(HEAP32[($3_1 + 24 | 0) >> 2] | 0) >> 0] | 0) & 1 | 0)) {
    break block6
   }
   $11_1 = Math_fround($11(Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2]) * Math_fround(3.1415927410125732)) / Math_fround(180.0)))));
   HEAPF32[($3_1 + 16 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 16 | 0) >> 2]) + Math_fround($11_1 * Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 20 | 0) >> 2])));
   $13_1 = Math_fround($12(Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2]) * Math_fround(3.1415927410125732)) / Math_fround(180.0)))));
   HEAPF32[($3_1 + 12 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 12 | 0) >> 2]) + Math_fround($13_1 * Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 20 | 0) >> 2])));
  }
  block7 : {
   if (!((HEAPU8[((HEAP32[($3_1 + 24 | 0) >> 2] | 0) + 2 | 0) >> 0] | 0) & 1 | 0)) {
    break block7
   }
   $15_1 = Math_fround($11(Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2]) * Math_fround(3.1415927410125732)) / Math_fround(180.0)))));
   HEAPF32[($3_1 + 16 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 16 | 0) >> 2]) + Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 20 | 0) >> 2]) * Math_fround(-$15_1)));
   $17_1 = Math_fround($12(Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2]) * Math_fround(3.1415927410125732)) / Math_fround(180.0)))));
   HEAPF32[($3_1 + 12 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 12 | 0) >> 2]) + Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 20 | 0) >> 2]) * Math_fround(-$17_1)));
  }
  block8 : {
   if (!((HEAPU8[((HEAP32[($3_1 + 24 | 0) >> 2] | 0) + 3 | 0) >> 0] | 0) & 1 | 0)) {
    break block8
   }
   $19_1 = Math_fround($11(Math_fround(Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2]) + Math_fround(90.0)) * Math_fround(3.1415927410125732)) / Math_fround(180.0)))));
   HEAPF32[($3_1 + 16 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 16 | 0) >> 2]) + Math_fround($19_1 * Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 20 | 0) >> 2])));
   $21_1 = Math_fround($12(Math_fround(Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2]) + Math_fround(90.0)) * Math_fround(3.1415927410125732)) / Math_fround(180.0)))));
   HEAPF32[($3_1 + 12 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 12 | 0) >> 2]) + Math_fround($21_1 * Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 20 | 0) >> 2])));
  }
  block9 : {
   if (!((HEAPU8[((HEAP32[($3_1 + 24 | 0) >> 2] | 0) + 1 | 0) >> 0] | 0) & 1 | 0)) {
    break block9
   }
   $23_1 = Math_fround($11(Math_fround(Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2]) + Math_fround(90.0)) * Math_fround(3.1415927410125732)) / Math_fround(180.0)))));
   HEAPF32[($3_1 + 16 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 16 | 0) >> 2]) + Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 20 | 0) >> 2]) * Math_fround(-$23_1)));
   $25_1 = Math_fround($12(Math_fround(Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2]) + Math_fround(90.0)) * Math_fround(3.1415927410125732)) / Math_fround(180.0)))));
   HEAPF32[($3_1 + 12 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 12 | 0) >> 2]) + Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 20 | 0) >> 2]) * Math_fround(-$25_1)));
  }
  HEAPF32[($3_1 + 16 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 20 | 0) >> 2]) * Math_fround(HEAPF32[($3_1 + 16 | 0) >> 2]));
  HEAPF32[($3_1 + 12 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 20 | 0) >> 2]) * Math_fround(HEAPF32[($3_1 + 12 | 0) >> 2]));
  HEAPF32[($3_1 + 8 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 20 | 0) >> 2]) * Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]));
  $5_1 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
  HEAPF32[($5_1 + 16 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]) + Math_fround(HEAPF32[($5_1 + 16 | 0) >> 2]));
  block11 : {
   block10 : {
    $281 = (HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 524840 | 0;
    $32_1 = Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 12 | 0) >> 2]) + Math_fround(HEAPF32[($3_1 + 12 | 0) >> 2]));
    if (Math_fround(Math_abs($32_1)) < Math_fround(2147483648.0)) {
     $293 = ~~$32_1
    } else {
     $293 = -2147483648
    }
    $297 = $281 + ((($293 | 0) / (128 | 0) | 0) << 5 | 0) | 0;
    $33_1 = Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 8 | 0) >> 2]) + Math_fround(HEAPF32[($3_1 + 16 | 0) >> 2]));
    if (Math_fround(Math_abs($33_1)) < Math_fround(2147483648.0)) {
     $309 = ~~$33_1
    } else {
     $309 = -2147483648
    }
    if (HEAP32[($297 + ((($309 | 0) / (128 | 0) | 0) << 2 | 0) | 0) >> 2] | 0) {
     break block10
    }
    $6_1 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
    HEAPF32[($6_1 + 8 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 16 | 0) >> 2]) + Math_fround(HEAPF32[($6_1 + 8 | 0) >> 2]));
    $7_1 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
    HEAPF32[($7_1 + 12 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 12 | 0) >> 2]) + Math_fround(HEAPF32[($7_1 + 12 | 0) >> 2]));
    break block11;
   }
   HEAPF32[($3_1 + 16 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 16 | 0) >> 2]) / Math_fround(4.0));
   HEAPF32[($3_1 + 12 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 12 | 0) >> 2]) / Math_fround(4.0));
   block12 : {
    $343 = (HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 524840 | 0;
    $34_1 = Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 12 | 0) >> 2]);
    if (Math_fround(Math_abs($34_1)) < Math_fround(2147483648.0)) {
     $352 = ~~$34_1
    } else {
     $352 = -2147483648
    }
    $356 = $343 + ((($352 | 0) / (128 | 0) | 0) << 5 | 0) | 0;
    $35_1 = Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 8 | 0) >> 2]) + Math_fround(HEAPF32[($3_1 + 16 | 0) >> 2]));
    if (Math_fround(Math_abs($35_1)) < Math_fround(2147483648.0)) {
     $368 = ~~$35_1
    } else {
     $368 = -2147483648
    }
    if (HEAP32[($356 + ((($368 | 0) / (128 | 0) | 0) << 2 | 0) | 0) >> 2] | 0) {
     break block12
    }
    $8_1 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
    HEAPF32[($8_1 + 8 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 16 | 0) >> 2]) + Math_fround(HEAPF32[($8_1 + 8 | 0) >> 2]));
   }
   block13 : {
    $385 = (HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 524840 | 0;
    $36_1 = Math_fround(Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 12 | 0) >> 2]) + Math_fround(HEAPF32[($3_1 + 12 | 0) >> 2]));
    if (Math_fround(Math_abs($36_1)) < Math_fround(2147483648.0)) {
     $397 = ~~$36_1
    } else {
     $397 = -2147483648
    }
    $401 = $385 + ((($397 | 0) / (128 | 0) | 0) << 5 | 0) | 0;
    $37_1 = Math_fround(HEAPF32[((HEAP32[($3_1 + 28 | 0) >> 2] | 0) + 8 | 0) >> 2]);
    if (Math_fround(Math_abs($37_1)) < Math_fround(2147483648.0)) {
     $410 = ~~$37_1
    } else {
     $410 = -2147483648
    }
    if (HEAP32[($401 + ((($410 | 0) / (128 | 0) | 0) << 2 | 0) | 0) >> 2] | 0) {
     break block13
    }
    $9_1 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
    HEAPF32[($9_1 + 12 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($3_1 + 12 | 0) >> 2]) + Math_fround(HEAPF32[($9_1 + 12 | 0) >> 2]));
   }
  }
  global$0 = $3_1 + 32 | 0;
  return;
 }
 
 function $11($0_1) {
  $0_1 = Math_fround($0_1);
  var $1_1 = 0, $2_1 = Math_fround(0), $14_1 = Math_fround(0);
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAPF32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = Math_fround($59(Math_fround(Math_fround(HEAPF32[($1_1 + 12 | 0) >> 2]))));
  global$0 = $1_1 + 16 | 0;
  return Math_fround($2_1);
 }
 
 function $12($0_1) {
  $0_1 = Math_fround($0_1);
  var $1_1 = 0, $2_1 = Math_fround(0), $14_1 = Math_fround(0);
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAPF32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = Math_fround($101(Math_fround(Math_fround(HEAPF32[($1_1 + 12 | 0) >> 2]))));
  global$0 = $1_1 + 16 | 0;
  return Math_fround($2_1);
 }
 
 function $13($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  HEAPF32[(HEAP32[($1_1 + 12 | 0) >> 2] | 0) >> 2] = Math_fround(512.0);
  HEAPF32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] = Math_fround(512.0);
  HEAPF32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + 8 | 0) >> 2] = Math_fround(90.0999984741211);
  HEAPF32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + 12 | 0) >> 2] = Math_fround(384.0);
  HEAPF32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + 20 | 0) >> 2] = Math_fround(90.0);
  return;
 }
 
 function $14($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $78_1 = Math_fround(0), $79_1 = Math_fround(0), $80_1 = Math_fround(0), $84_1 = Math_fround(0), $85_1 = Math_fround(0), $86_1 = Math_fround(0), $93_1 = Math_fround(0), $94_1 = Math_fround(0), $95_1 = Math_fround(0), $60_1 = Math_fround(0), $148_1 = 0, $61_1 = Math_fround(0), $187 = 0, $62_1 = Math_fround(0), $199 = 0, $5_1 = 0, $63_1 = Math_fround(0), $335 = 0, $64_1 = Math_fround(0), $345 = 0, $65_1 = Math_fround(0), $359 = 0, $66_1 = Math_fround(0), $369 = 0, $67_1 = Math_fround(0), $403 = 0, $68_1 = Math_fround(0), $420 = 0, $6_1 = 0, $7_1 = 0, $69_1 = Math_fround(0), $449 = 0, $70_1 = Math_fround(0), $462 = 0, $71_1 = Math_fround(0), $474 = 0, $72_1 = Math_fround(0), $563 = 0, $73_1 = Math_fround(0), $581 = 0, $74_1 = Math_fround(0), $592 = 0, $10_1 = 0, $12_1 = 0, $75_1 = Math_fround(0), $610 = 0, $13_1 = 0, $76_1 = Math_fround(0), $624 = 0, $15_1 = 0, $77_1 = Math_fround(0), $639 = 0, $18_1 = 0, $690 = 0, $706 = 0, $722 = 0, $25_1 = 0, $81_1 = Math_fround(0), $794 = 0, $26_1 = 0, $82_1 = Math_fround(0), $805 = 0, $28_1 = 0, $83_1 = Math_fround(0), $820 = 0, $31_1 = 0, $33_1 = 0, $875 = 0, $891 = 0, $907 = 0, $87_1 = Math_fround(0), $1009 = 0, $88_1 = Math_fround(0), $1027 = 0, $89_1 = Math_fround(0), $1038 = 0, $38_1 = 0, $40_1 = 0, $90_1 = Math_fround(0), $1056 = 0, $41_1 = 0, $91_1 = Math_fround(0), $1070 = 0, $43_1 = 0, $92_1 = Math_fround(0), $1085 = 0, $46_1 = 0, $1137 = 0, $1153 = 0, $1169 = 0, $139_1 = 0, $179_1 = 0, $191 = 0, $337 = 0, $361 = 0, $390 = 0, $407 = 0, $426 = 0, $454 = 0, $466 = 0, $549 = 0, $552 = Math_fround(0), $567 = 0, $570 = Math_fround(0), $601 = 0, $602 = 0, $16_1 = 0, $676 = 0, $692 = 0, $708 = 0, $777 = 0, $29_1 = 0, $861 = 0, $877 = 0, $893 = 0, $995 = 0, $998 = Math_fround(0), $1013 = 0, $1016 = Math_fround(0), $1047 = 0, $1048 = 0, $44_1 = 0, $1123 = 0, $1139 = 0, $1155 = 0, wasm2js_i32$0 = 0, wasm2js_f32$0 = Math_fround(0);
  $1_1 = global$0 - 176 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 172 | 0) >> 2] = $0_1;
  HEAPF32[($1_1 + 168 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 16 | 0) >> 2]) - Math_fround(45.0));
  HEAPF32[($1_1 + 164 | 0) >> 2] = Math_fround(Math_fround(Math_fround(1.0) / Math_fround(HEAP32[(HEAP32[($1_1 + 172 | 0) >> 2] | 0) >> 2] | 0 | 0)) * Math_fround(90.0));
  (wasm2js_i32$0 = $1_1, wasm2js_f32$0 = Math_fround($15(Math_fround(Math_fround(.7853981852531433))))), HEAPF32[(wasm2js_i32$0 + 132 | 0) >> 2] = wasm2js_f32$0;
  HEAP32[($1_1 + 128 | 0) >> 2] = 0;
  block : {
   label4 : while (1) {
    if (!((HEAP32[($1_1 + 128 | 0) >> 2] | 0 | 0) < (HEAP32[(HEAP32[($1_1 + 172 | 0) >> 2] | 0) >> 2] | 0 | 0) & 1 | 0)) {
     break block
    }
    HEAPF32[($1_1 + 168 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($1_1 + 164 | 0) >> 2]) + Math_fround(HEAPF32[($1_1 + 168 | 0) >> 2]));
    HEAPF32[($1_1 + 160 | 0) >> 2] = Math_fround(HEAPF32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 8 | 0) >> 2]);
    HEAPF32[($1_1 + 156 | 0) >> 2] = Math_fround(HEAPF32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 12 | 0) >> 2]);
    $139_1 = $1_1;
    $60_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 168 | 0) >> 2]) * Math_fround(10.0));
    if (Math_fround(Math_abs($60_1)) < Math_fround(2147483648.0)) {
     $148_1 = ~~$60_1
    } else {
     $148_1 = -2147483648
    }
    HEAP32[($139_1 + 124 | 0) >> 2] = ($148_1 | 0) % (3600 | 0) | 0;
    block1 : {
     if (!((HEAP32[($1_1 + 124 | 0) >> 2] | 0 | 0) < (0 | 0) & 1 | 0)) {
      break block1
     }
     HEAP32[($1_1 + 124 | 0) >> 2] = (HEAP32[($1_1 + 124 | 0) >> 2] | 0) + 3600 | 0;
    }
    HEAPF32[($1_1 + 148 | 0) >> 2] = Math_fround(HEAPF32[(614256 + ((HEAP32[($1_1 + 124 | 0) >> 2] | 0) << 2 | 0) | 0) >> 2]);
    HEAPF32[($1_1 + 144 | 0) >> 2] = Math_fround(HEAPF32[(599856 + ((HEAP32[($1_1 + 124 | 0) >> 2] | 0) << 2 | 0) | 0) >> 2]);
    HEAPF32[($1_1 + 140 | 0) >> 2] = Math_fround(0 | 0);
    HEAP8[($1_1 + 139 | 0) >> 0] = 0;
    label : while (1) {
     $179_1 = (HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 524840 | 0;
     $61_1 = Math_fround(HEAPF32[($1_1 + 156 | 0) >> 2]);
     if (Math_fround(Math_abs($61_1)) < Math_fround(2147483648.0)) {
      $187 = ~~$61_1
     } else {
      $187 = -2147483648
     }
     $191 = $179_1 + ((($187 | 0) / (128 | 0) | 0) << 5 | 0) | 0;
     $62_1 = Math_fround(HEAPF32[($1_1 + 160 | 0) >> 2]);
     if (Math_fround(Math_abs($62_1)) < Math_fround(2147483648.0)) {
      $199 = ~~$62_1
     } else {
      $199 = -2147483648
     }
     $5_1 = 0;
     block2 : {
      if (HEAP32[($191 + ((($199 | 0) / (128 | 0) | 0) << 2 | 0) | 0) >> 2] | 0) {
       break block2
      }
      $5_1 = Math_fround(HEAPF32[($1_1 + 140 | 0) >> 2]) < Math_fround(750.0);
     }
     block3 : {
      if (!($5_1 & 1 | 0)) {
       break block3
      }
      block5 : {
       block4 : {
        if (!(Math_fround(HEAPF32[($1_1 + 148 | 0) >> 2]) >= Math_fround(0 | 0) & 1 | 0)) {
         break block4
        }
        (wasm2js_i32$0 = $1_1, wasm2js_f32$0 = Math_fround(128.0 - +$16(Math_fround(Math_fround(HEAPF32[($1_1 + 160 | 0) >> 2])), 128 | 0))), HEAPF32[(wasm2js_i32$0 + 120 | 0) >> 2] = wasm2js_f32$0;
        break block5;
       }
       (wasm2js_i32$0 = $1_1, wasm2js_f32$0 = Math_fround(+$16(Math_fround(Math_fround(HEAPF32[($1_1 + 160 | 0) >> 2])), 128 | 0))), HEAPF32[(wasm2js_i32$0 + 120 | 0) >> 2] = wasm2js_f32$0;
      }
      block7 : {
       block6 : {
        if (!(Math_fround(HEAPF32[($1_1 + 144 | 0) >> 2]) >= Math_fround(0 | 0) & 1 | 0)) {
         break block6
        }
        (wasm2js_i32$0 = $1_1, wasm2js_f32$0 = Math_fround(128.0 - +$16(Math_fround(Math_fround(HEAPF32[($1_1 + 156 | 0) >> 2])), 128 | 0))), HEAPF32[(wasm2js_i32$0 + 116 | 0) >> 2] = wasm2js_f32$0;
        break block7;
       }
       (wasm2js_i32$0 = $1_1, wasm2js_f32$0 = Math_fround(+$16(Math_fround(Math_fround(HEAPF32[($1_1 + 156 | 0) >> 2])), 128 | 0))), HEAPF32[(wasm2js_i32$0 + 116 | 0) >> 2] = wasm2js_f32$0;
      }
      HEAPF32[($1_1 + 120 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($1_1 + 120 | 0) >> 2]) / Math_fround(Math_fround(HEAPF32[($1_1 + 148 | 0) >> 2]) + Math_fround(9.999999747378752e-05)));
      HEAPF32[($1_1 + 116 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($1_1 + 116 | 0) >> 2]) / Math_fround(Math_fround(HEAPF32[($1_1 + 144 | 0) >> 2]) + Math_fround(9.999999747378752e-05)));
      block8 : {
       if (!(Math_fround(HEAPF32[($1_1 + 120 | 0) >> 2]) < Math_fround(0 | 0) & 1 | 0)) {
        break block8
       }
       HEAPF32[($1_1 + 120 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($1_1 + 120 | 0) >> 2]) * Math_fround(-1.0));
      }
      block9 : {
       if (!(Math_fround(HEAPF32[($1_1 + 116 | 0) >> 2]) < Math_fround(0 | 0) & 1 | 0)) {
        break block9
       }
       HEAPF32[($1_1 + 116 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($1_1 + 116 | 0) >> 2]) * Math_fround(-1.0));
      }
      block11 : {
       block10 : {
        if (!(Math_fround(HEAPF32[($1_1 + 120 | 0) >> 2]) >= Math_fround(HEAPF32[($1_1 + 116 | 0) >> 2]) & 1 | 0)) {
         break block10
        }
        HEAPF32[($1_1 + 112 | 0) >> 2] = Math_fround(HEAPF32[($1_1 + 116 | 0) >> 2]);
        break block11;
       }
       HEAPF32[($1_1 + 112 | 0) >> 2] = Math_fround(HEAPF32[($1_1 + 120 | 0) >> 2]);
      }
      block12 : {
       if (!(+Math_fround(HEAPF32[($1_1 + 112 | 0) >> 2]) < .01 & 1 | 0)) {
        break block12
       }
       HEAPF32[($1_1 + 112 | 0) >> 2] = Math_fround(.009999999776482582);
      }
      HEAPF32[($1_1 + 140 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($1_1 + 112 | 0) >> 2]) + Math_fround(HEAPF32[($1_1 + 140 | 0) >> 2]));
      HEAPF32[($1_1 + 108 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($1_1 + 160 | 0) >> 2]) + Math_fround(Math_fround(HEAPF32[($1_1 + 148 | 0) >> 2]) * Math_fround(HEAPF32[($1_1 + 112 | 0) >> 2])));
      HEAPF32[($1_1 + 104 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($1_1 + 156 | 0) >> 2]) + Math_fround(Math_fround(HEAPF32[($1_1 + 144 | 0) >> 2]) * Math_fround(HEAPF32[($1_1 + 112 | 0) >> 2])));
      block14 : {
       block13 : {
        $63_1 = Math_fround(HEAPF32[($1_1 + 108 | 0) >> 2]);
        if (Math_fround(Math_abs($63_1)) < Math_fround(2147483648.0)) {
         $335 = ~~$63_1
        } else {
         $335 = -2147483648
        }
        $337 = ($335 | 0) / (128 | 0) | 0;
        $64_1 = Math_fround(HEAPF32[($1_1 + 160 | 0) >> 2]);
        if (Math_fround(Math_abs($64_1)) < Math_fround(2147483648.0)) {
         $345 = ~~$64_1
        } else {
         $345 = -2147483648
        }
        if (!(($337 | 0) != (($345 | 0) / (128 | 0) | 0 | 0) & 1 | 0)) {
         break block13
        }
        HEAP8[($1_1 + 139 | 0) >> 0] = 1;
        break block14;
       }
       block15 : {
        $65_1 = Math_fround(HEAPF32[($1_1 + 104 | 0) >> 2]);
        if (Math_fround(Math_abs($65_1)) < Math_fround(2147483648.0)) {
         $359 = ~~$65_1
        } else {
         $359 = -2147483648
        }
        $361 = ($359 | 0) / (128 | 0) | 0;
        $66_1 = Math_fround(HEAPF32[($1_1 + 156 | 0) >> 2]);
        if (Math_fround(Math_abs($66_1)) < Math_fround(2147483648.0)) {
         $369 = ~~$66_1
        } else {
         $369 = -2147483648
        }
        if (!(($361 | 0) != (($369 | 0) / (128 | 0) | 0 | 0) & 1 | 0)) {
         break block15
        }
        HEAP8[($1_1 + 139 | 0) >> 0] = 0;
       }
      }
      HEAPF32[($1_1 + 160 | 0) >> 2] = Math_fround(HEAPF32[($1_1 + 108 | 0) >> 2]);
      HEAPF32[($1_1 + 156 | 0) >> 2] = Math_fround(HEAPF32[($1_1 + 104 | 0) >> 2]);
      continue label;
     }
     break label;
    };
    HEAPF32[($1_1 + 100 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($1_1 + 140 | 0) >> 2]) * Math_fround(HEAPF32[($1_1 + 132 | 0) >> 2]));
    $390 = $1_1;
    $67_1 = Math_fround(Math_fround(Math_fround(128.0) / Math_fround(HEAPF32[($1_1 + 100 | 0) >> 2])) * Math_fround(HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0));
    if (Math_fround(Math_abs($67_1)) < Math_fround(2147483648.0)) {
     $403 = ~~$67_1
    } else {
     $403 = -2147483648
    }
    HEAP32[($390 + 96 | 0) >> 2] = $403;
    $407 = $1_1;
    $68_1 = Math_fround(Math_fround(Math_fround(256.0) / Math_fround(HEAPF32[($1_1 + 100 | 0) >> 2])) * Math_fround(HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0));
    if (Math_fround(Math_abs($68_1)) < Math_fround(2147483648.0)) {
     $420 = ~~$68_1
    } else {
     $420 = -2147483648
    }
    HEAP32[($407 + 92 | 0) >> 2] = $420;
    $6_1 = HEAP32[($1_1 + 172 | 0) >> 2] | 0;
    $7_1 = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
    $426 = $1_1;
    $69_1 = Math_fround(Math_fround(($7_1 | 0) / (2 | 0) | 0 | 0) - Math_fround(Math_fround(HEAP32[($1_1 + 92 | 0) >> 2] | 0 | 0) - Math_fround(Math_fround(Math_fround(HEAP32[($6_1 + 24 | 0) >> 2] | 0 | 0) / Math_fround(HEAPF32[($1_1 + 100 | 0) >> 2])) * Math_fround($7_1 | 0))));
    if (Math_fround(Math_abs($69_1)) < Math_fround(2147483648.0)) {
     $449 = ~~$69_1
    } else {
     $449 = -2147483648
    }
    HEAP32[($426 + 88 | 0) >> 2] = $449;
    block17 : {
     block16 : {
      if ((HEAPU8[($1_1 + 139 | 0) >> 0] | 0) & 1 | 0) {
       break block16
      }
      $454 = $1_1;
      $70_1 = Math_fround(HEAPF32[($1_1 + 160 | 0) >> 2]);
      if (Math_fround(Math_abs($70_1)) < Math_fround(2147483648.0)) {
       $462 = ~~$70_1
      } else {
       $462 = -2147483648
      }
      HEAP32[($454 + 84 | 0) >> 2] = ($462 & 127 | 0) >> 1 | 0;
      break block17;
     }
     $466 = $1_1;
     $71_1 = Math_fround(HEAPF32[($1_1 + 156 | 0) >> 2]);
     if (Math_fround(Math_abs($71_1)) < Math_fround(2147483648.0)) {
      $474 = ~~$71_1
     } else {
      $474 = -2147483648
     }
     HEAP32[($466 + 84 | 0) >> 2] = ($474 & 127 | 0) >> 1 | 0;
    }
    HEAPF32[($1_1 + 76 | 0) >> 2] = Math_fround(Math_fround(1.0) - Math_fround(Math_fround(HEAPF32[($1_1 + 140 | 0) >> 2]) / Math_fround(750.0)));
    block18 : {
     if (!(Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]) < Math_fround(0 | 0) & 1 | 0)) {
      break block18
     }
     HEAPF32[($1_1 + 76 | 0) >> 2] = Math_fround(0 | 0);
    }
    HEAP32[($1_1 + 68 | 0) >> 2] = 0;
    block19 : {
     label1 : while (1) {
      if (!((HEAP32[($1_1 + 68 | 0) >> 2] | 0 | 0) < (HEAP32[($1_1 + 88 | 0) >> 2] | 0 | 0) & 1 | 0)) {
       break block19
      }
      HEAPF32[($1_1 + 64 | 0) >> 2] = Math_fround(Math_fround(Math_fround(Math_fround(Math_fround(HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) / Math_fround(2.0)) - Math_fround(HEAP32[($1_1 + 68 | 0) >> 2] | 0 | 0)) / Math_fround(HEAP32[($1_1 + 96 | 0) >> 2] | 0 | 0)) * Math_fround(128.0));
      HEAPF32[($1_1 + 72 | 0) >> 2] = Math_fround(Math_fround(Math_fround(256 - (HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 24 | 0) >> 2] | 0) | 0 | 0) * Math_fround(HEAPF32[($1_1 + 140 | 0) >> 2])) / Math_fround(HEAPF32[($1_1 + 64 | 0) >> 2]));
      HEAPF32[($1_1 + 76 | 0) >> 2] = Math_fround(Math_fround(1.0) - Math_fround(Math_fround(HEAPF32[($1_1 + 72 | 0) >> 2]) / Math_fround(750.0)));
      block20 : {
       if (!(Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]) < Math_fround(0 | 0) & 1 | 0)) {
        break block20
       }
       HEAPF32[($1_1 + 76 | 0) >> 2] = Math_fround(0 | 0);
      }
      HEAPF32[($1_1 + 52 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 16 | 0) >> 2]) - Math_fround(HEAPF32[($1_1 + 168 | 0) >> 2]));
      $549 = $1_1;
      $552 = Math_fround(HEAPF32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 8 | 0) >> 2]);
      $72_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 148 | 0) >> 2]) * Math_fround(HEAPF32[($1_1 + 72 | 0) >> 2]));
      if (Math_fround(Math_abs($72_1)) < Math_fround(2147483648.0)) {
       $563 = ~~$72_1
      } else {
       $563 = -2147483648
      }
      HEAPF32[($549 + 56 | 0) >> 2] = Math_fround($552 + Math_fround($563 | 0));
      $567 = $1_1;
      $570 = Math_fround(HEAPF32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 12 | 0) >> 2]);
      $73_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 144 | 0) >> 2]) * Math_fround(HEAPF32[($1_1 + 72 | 0) >> 2]));
      if (Math_fround(Math_abs($73_1)) < Math_fround(2147483648.0)) {
       $581 = ~~$73_1
      } else {
       $581 = -2147483648
      }
      HEAPF32[($567 + 60 | 0) >> 2] = Math_fround($570 + Math_fround($581 | 0));
      $74_1 = Math_fround(HEAPF32[($1_1 + 56 | 0) >> 2]);
      if (Math_fround(Math_abs($74_1)) < Math_fround(2147483648.0)) {
       $592 = ~~$74_1
      } else {
       $592 = -2147483648
      }
      $10_1 = 126;
      $12_1 = 1;
      HEAP32[($1_1 + 48 | 0) >> 2] = ($592 & $10_1 | 0) >>> $12_1 | 0;
      $601 = $1_1;
      $602 = $10_1;
      $75_1 = Math_fround(HEAPF32[($1_1 + 60 | 0) >> 2]);
      if (Math_fround(Math_abs($75_1)) < Math_fround(2147483648.0)) {
       $610 = ~~$75_1
      } else {
       $610 = -2147483648
      }
      HEAP32[($601 + 44 | 0) >> 2] = ($602 & $610 | 0) >>> $12_1 | 0;
      $13_1 = HEAP32[($1_1 + 172 | 0) >> 2] | 0;
      $76_1 = Math_fround(HEAPF32[($1_1 + 60 | 0) >> 2]);
      if (Math_fround(Math_abs($76_1)) < Math_fround(2147483648.0)) {
       $624 = ~~$76_1
      } else {
       $624 = -2147483648
      }
      $15_1 = 128;
      $16_1 = $13_1 + ((($624 | 0) / ($15_1 | 0) | 0) << 5 | 0) | 0;
      $77_1 = Math_fround(HEAPF32[($1_1 + 56 | 0) >> 2]);
      if (Math_fround(Math_abs($77_1)) < Math_fround(2147483648.0)) {
       $639 = ~~$77_1
      } else {
       $639 = -2147483648
      }
      $18_1 = 2;
      HEAP32[($1_1 + 40 | 0) >> 2] = HEAP32[((($13_1 + (((HEAP32[(($16_1 + ((($639 | 0) / ($15_1 | 0) | 0) << $18_1 | 0) | 0) + 524328 | 0) >> 2] | 0 | 0) % (10 | 0) | 0) << 14 | 0) | 0) + ((((HEAP32[($1_1 + 44 | 0) >> 2] | 0) << 6 | 0) + (HEAP32[($1_1 + 48 | 0) >> 2] | 0) | 0) << $18_1 | 0) | 0) + 32 | 0) >> 2] | 0;
      HEAP8[($1_1 + 39 | 0) >> 0] = HEAPU16[($1_1 + 42 | 0) >> 1] | 0;
      HEAP8[($1_1 + 38 | 0) >> 0] = (HEAP32[($1_1 + 40 | 0) >> 2] | 0) >>> 8 | 0;
      HEAP8[($1_1 + 37 | 0) >> 0] = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
      $676 = $1_1;
      $78_1 = Math_fround(Math_fround(HEAPU8[($1_1 + 39 | 0) >> 0] | 0 | 0) * Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]));
      if ($78_1 < Math_fround(4294967296.0) & $78_1 >= Math_fround(0.0) | 0) {
       $690 = ~~$78_1 >>> 0
      } else {
       $690 = 0
      }
      HEAP8[($676 + 39 | 0) >> 0] = $690;
      $692 = $1_1;
      $79_1 = Math_fround(Math_fround(HEAPU8[($1_1 + 38 | 0) >> 0] | 0 | 0) * Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]));
      if ($79_1 < Math_fround(4294967296.0) & $79_1 >= Math_fround(0.0) | 0) {
       $706 = ~~$79_1 >>> 0
      } else {
       $706 = 0
      }
      HEAP8[($692 + 38 | 0) >> 0] = $706;
      $708 = $1_1;
      $80_1 = Math_fround(Math_fround(HEAPU8[($1_1 + 37 | 0) >> 0] | 0 | 0) * Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]));
      if ($80_1 < Math_fround(4294967296.0) & $80_1 >= Math_fround(0.0) | 0) {
       $722 = ~~$80_1 >>> 0
      } else {
       $722 = 0
      }
      HEAP8[($708 + 37 | 0) >> 0] = $722;
      HEAP32[((HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 524324 | 0) >> 2] | 0) + (((HEAP32[($1_1 + 128 | 0) >> 2] | 0) + Math_imul(HEAP32[(HEAP32[($1_1 + 172 | 0) >> 2] | 0) >> 2] | 0, HEAP32[($1_1 + 68 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = (HEAPU8[($1_1 + 39 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($1_1 + 38 | 0) >> 0] | 0) << 8 | 0) | 0 | (HEAPU8[($1_1 + 37 | 0) >> 0] | 0) | 0;
      HEAP32[($1_1 + 68 | 0) >> 2] = (HEAP32[($1_1 + 68 | 0) >> 2] | 0) + 1 | 0;
      continue label1;
     };
    }
    label2 : while (1) {
     $25_1 = 0;
     block21 : {
      if (!((HEAP32[($1_1 + 68 | 0) >> 2] | 0 | 0) < ((HEAP32[($1_1 + 92 | 0) >> 2] | 0) + (HEAP32[($1_1 + 88 | 0) >> 2] | 0) | 0 | 0) & 1 | 0)) {
       break block21
      }
      $25_1 = (HEAP32[($1_1 + 68 | 0) >> 2] | 0 | 0) < (HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0);
     }
     block22 : {
      if (!($25_1 & 1 | 0)) {
       break block22
      }
      $777 = $1_1;
      $81_1 = Math_fround(Math_fround(Math_fround((HEAP32[($1_1 + 68 | 0) >> 2] | 0) - (HEAP32[($1_1 + 88 | 0) >> 2] | 0) | 0 | 0) / Math_fround(HEAP32[($1_1 + 92 | 0) >> 2] | 0 | 0)) * Math_fround(64.0));
      if (Math_fround(Math_abs($81_1)) < Math_fround(2147483648.0)) {
       $794 = ~~$81_1
      } else {
       $794 = -2147483648
      }
      HEAP32[($777 + 80 | 0) >> 2] = $794;
      $26_1 = HEAP32[($1_1 + 172 | 0) >> 2] | 0;
      $82_1 = Math_fround(HEAPF32[($1_1 + 156 | 0) >> 2]);
      if (Math_fround(Math_abs($82_1)) < Math_fround(2147483648.0)) {
       $805 = ~~$82_1
      } else {
       $805 = -2147483648
      }
      $28_1 = 128;
      $29_1 = $26_1 + ((($805 | 0) / ($28_1 | 0) | 0) << 5 | 0) | 0;
      $83_1 = Math_fround(HEAPF32[($1_1 + 160 | 0) >> 2]);
      if (Math_fround(Math_abs($83_1)) < Math_fround(2147483648.0)) {
       $820 = ~~$83_1
      } else {
       $820 = -2147483648
      }
      $31_1 = 2;
      $33_1 = 10;
      HEAP32[($1_1 + 32 | 0) >> 2] = HEAP32[((($26_1 + ((((HEAP32[(($29_1 + ((($820 | 0) / ($28_1 | 0) | 0) << $31_1 | 0) | 0) + 524328 | 0) >> 2] | 0 | 0) / ($33_1 | 0) | 0 | 0) % ($33_1 | 0) | 0) << 14 | 0) | 0) + ((((HEAP32[($1_1 + 80 | 0) >> 2] | 0) << 6 | 0) + (HEAP32[($1_1 + 84 | 0) >> 2] | 0) | 0) << $31_1 | 0) | 0) + 32 | 0) >> 2] | 0;
      HEAP8[($1_1 + 31 | 0) >> 0] = HEAPU16[($1_1 + 34 | 0) >> 1] | 0;
      HEAP8[($1_1 + 30 | 0) >> 0] = (HEAP32[($1_1 + 32 | 0) >> 2] | 0) >>> 8 | 0;
      HEAP8[($1_1 + 29 | 0) >> 0] = HEAP32[($1_1 + 32 | 0) >> 2] | 0;
      $861 = $1_1;
      $84_1 = Math_fround(Math_fround(HEAPU8[($1_1 + 31 | 0) >> 0] | 0 | 0) * Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]));
      if ($84_1 < Math_fround(4294967296.0) & $84_1 >= Math_fround(0.0) | 0) {
       $875 = ~~$84_1 >>> 0
      } else {
       $875 = 0
      }
      HEAP8[($861 + 31 | 0) >> 0] = $875;
      $877 = $1_1;
      $85_1 = Math_fround(Math_fround(HEAPU8[($1_1 + 30 | 0) >> 0] | 0 | 0) * Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]));
      if ($85_1 < Math_fround(4294967296.0) & $85_1 >= Math_fround(0.0) | 0) {
       $891 = ~~$85_1 >>> 0
      } else {
       $891 = 0
      }
      HEAP8[($877 + 30 | 0) >> 0] = $891;
      $893 = $1_1;
      $86_1 = Math_fround(Math_fround(HEAPU8[($1_1 + 29 | 0) >> 0] | 0 | 0) * Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]));
      if ($86_1 < Math_fround(4294967296.0) & $86_1 >= Math_fround(0.0) | 0) {
       $907 = ~~$86_1 >>> 0
      } else {
       $907 = 0
      }
      HEAP8[($893 + 29 | 0) >> 0] = $907;
      HEAP32[((HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 524324 | 0) >> 2] | 0) + ((Math_imul(HEAP32[(HEAP32[($1_1 + 172 | 0) >> 2] | 0) >> 2] | 0, HEAP32[($1_1 + 68 | 0) >> 2] | 0) + (HEAP32[($1_1 + 128 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = (HEAPU8[($1_1 + 31 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($1_1 + 30 | 0) >> 0] | 0) << 8 | 0) | 0 | (HEAPU8[($1_1 + 29 | 0) >> 0] | 0) | 0;
      HEAP32[($1_1 + 68 | 0) >> 2] = (HEAP32[($1_1 + 68 | 0) >> 2] | 0) + 1 | 0;
      continue label2;
     }
     break label2;
    };
    block23 : {
     label3 : while (1) {
      if (!((HEAP32[($1_1 + 68 | 0) >> 2] | 0 | 0) < (HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) & 1 | 0)) {
       break block23
      }
      HEAPF32[($1_1 + 64 | 0) >> 2] = Math_fround(Math_fround(Math_fround(Math_fround(HEAP32[($1_1 + 68 | 0) >> 2] | 0 | 0) - Math_fround(Math_fround(HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) / Math_fround(2.0))) / Math_fround(HEAP32[($1_1 + 96 | 0) >> 2] | 0 | 0)) * Math_fround(128.0));
      HEAPF32[($1_1 + 72 | 0) >> 2] = Math_fround(Math_fround(Math_fround(HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 24 | 0) >> 2] | 0 | 0) * Math_fround(HEAPF32[($1_1 + 140 | 0) >> 2])) / Math_fround(HEAPF32[($1_1 + 64 | 0) >> 2]));
      HEAPF32[($1_1 + 76 | 0) >> 2] = Math_fround(Math_fround(1.0) - Math_fround(Math_fround(HEAPF32[($1_1 + 72 | 0) >> 2]) / Math_fround(750.0)));
      block24 : {
       if (!(Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]) < Math_fround(0 | 0) & 1 | 0)) {
        break block24
       }
       HEAPF32[($1_1 + 76 | 0) >> 2] = Math_fround(0 | 0);
      }
      HEAPF32[($1_1 + 16 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 16 | 0) >> 2]) - Math_fround(HEAPF32[($1_1 + 168 | 0) >> 2]));
      $995 = $1_1;
      $998 = Math_fround(HEAPF32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 8 | 0) >> 2]);
      $87_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 148 | 0) >> 2]) * Math_fround(HEAPF32[($1_1 + 72 | 0) >> 2]));
      if (Math_fround(Math_abs($87_1)) < Math_fround(2147483648.0)) {
       $1009 = ~~$87_1
      } else {
       $1009 = -2147483648
      }
      HEAPF32[($995 + 20 | 0) >> 2] = Math_fround($998 + Math_fround($1009 | 0));
      $1013 = $1_1;
      $1016 = Math_fround(HEAPF32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 12 | 0) >> 2]);
      $88_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 144 | 0) >> 2]) * Math_fround(HEAPF32[($1_1 + 72 | 0) >> 2]));
      if (Math_fround(Math_abs($88_1)) < Math_fround(2147483648.0)) {
       $1027 = ~~$88_1
      } else {
       $1027 = -2147483648
      }
      HEAPF32[($1013 + 24 | 0) >> 2] = Math_fround($1016 + Math_fround($1027 | 0));
      $89_1 = Math_fround(HEAPF32[($1_1 + 20 | 0) >> 2]);
      if (Math_fround(Math_abs($89_1)) < Math_fround(2147483648.0)) {
       $1038 = ~~$89_1
      } else {
       $1038 = -2147483648
      }
      $38_1 = 126;
      $40_1 = 1;
      HEAP32[($1_1 + 12 | 0) >> 2] = ($1038 & $38_1 | 0) >>> $40_1 | 0;
      $1047 = $1_1;
      $1048 = $38_1;
      $90_1 = Math_fround(HEAPF32[($1_1 + 24 | 0) >> 2]);
      if (Math_fround(Math_abs($90_1)) < Math_fround(2147483648.0)) {
       $1056 = ~~$90_1
      } else {
       $1056 = -2147483648
      }
      HEAP32[($1047 + 8 | 0) >> 2] = ($1048 & $1056 | 0) >>> $40_1 | 0;
      $41_1 = HEAP32[($1_1 + 172 | 0) >> 2] | 0;
      $91_1 = Math_fround(HEAPF32[($1_1 + 24 | 0) >> 2]);
      if (Math_fround(Math_abs($91_1)) < Math_fround(2147483648.0)) {
       $1070 = ~~$91_1
      } else {
       $1070 = -2147483648
      }
      $43_1 = 128;
      $44_1 = $41_1 + ((($1070 | 0) / ($43_1 | 0) | 0) << 5 | 0) | 0;
      $92_1 = Math_fround(HEAPF32[($1_1 + 20 | 0) >> 2]);
      if (Math_fround(Math_abs($92_1)) < Math_fround(2147483648.0)) {
       $1085 = ~~$92_1
      } else {
       $1085 = -2147483648
      }
      $46_1 = 2;
      HEAP32[($1_1 + 4 | 0) >> 2] = HEAP32[((($41_1 + ((((HEAP32[(($44_1 + ((($1085 | 0) / ($43_1 | 0) | 0) << $46_1 | 0) | 0) + 524328 | 0) >> 2] | 0 | 0) / (100 | 0) | 0 | 0) % (10 | 0) | 0) << 14 | 0) | 0) + ((((HEAP32[($1_1 + 8 | 0) >> 2] | 0) << 6 | 0) + (HEAP32[($1_1 + 12 | 0) >> 2] | 0) | 0) << $46_1 | 0) | 0) + 32 | 0) >> 2] | 0;
      HEAP8[($1_1 + 3 | 0) >> 0] = HEAPU16[($1_1 + 6 | 0) >> 1] | 0;
      HEAP8[($1_1 + 2 | 0) >> 0] = (HEAP32[($1_1 + 4 | 0) >> 2] | 0) >>> 8 | 0;
      HEAP8[($1_1 + 1 | 0) >> 0] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      $1123 = $1_1;
      $93_1 = Math_fround(Math_fround(HEAPU8[($1_1 + 3 | 0) >> 0] | 0 | 0) * Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]));
      if ($93_1 < Math_fround(4294967296.0) & $93_1 >= Math_fround(0.0) | 0) {
       $1137 = ~~$93_1 >>> 0
      } else {
       $1137 = 0
      }
      HEAP8[($1123 + 3 | 0) >> 0] = $1137;
      $1139 = $1_1;
      $94_1 = Math_fround(Math_fround(HEAPU8[($1_1 + 2 | 0) >> 0] | 0 | 0) * Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]));
      if ($94_1 < Math_fround(4294967296.0) & $94_1 >= Math_fround(0.0) | 0) {
       $1153 = ~~$94_1 >>> 0
      } else {
       $1153 = 0
      }
      HEAP8[($1139 + 2 | 0) >> 0] = $1153;
      $1155 = $1_1;
      $95_1 = Math_fround(Math_fround(HEAPU8[($1_1 + 1 | 0) >> 0] | 0 | 0) * Math_fround(HEAPF32[($1_1 + 76 | 0) >> 2]));
      if ($95_1 < Math_fround(4294967296.0) & $95_1 >= Math_fround(0.0) | 0) {
       $1169 = ~~$95_1 >>> 0
      } else {
       $1169 = 0
      }
      HEAP8[($1155 + 1 | 0) >> 0] = $1169;
      HEAP32[((HEAP32[((HEAP32[($1_1 + 172 | 0) >> 2] | 0) + 524324 | 0) >> 2] | 0) + ((Math_imul(HEAP32[(HEAP32[($1_1 + 172 | 0) >> 2] | 0) >> 2] | 0, HEAP32[($1_1 + 68 | 0) >> 2] | 0) + (HEAP32[($1_1 + 128 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = (HEAPU8[($1_1 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($1_1 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | (HEAPU8[($1_1 + 1 | 0) >> 0] | 0) | 0;
      HEAP32[($1_1 + 68 | 0) >> 2] = (HEAP32[($1_1 + 68 | 0) >> 2] | 0) + 1 | 0;
      continue label3;
     };
    }
    HEAP32[($1_1 + 128 | 0) >> 2] = (HEAP32[($1_1 + 128 | 0) >> 2] | 0) + 1 | 0;
    continue label4;
   };
  }
  global$0 = $1_1 + 176 | 0;
  return;
 }
 
 function $15($0_1) {
  $0_1 = Math_fround($0_1);
  var $1_1 = 0, $2_1 = Math_fround(0), $14_1 = Math_fround(0);
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAPF32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = Math_fround($111(Math_fround(Math_fround(HEAPF32[($1_1 + 12 | 0) >> 2]))));
  global$0 = $1_1 + 16 | 0;
  return Math_fround($2_1);
 }
 
 function $16($0_1, $1_1) {
  $0_1 = Math_fround($0_1);
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0.0, $21_1 = 0.0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAPF32[($2_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
  $3_1 = +$17(+(+Math_fround(HEAPF32[($2_1 + 12 | 0) >> 2])), +(+(HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0)));
  global$0 = $2_1 + 16 | 0;
  return +$3_1;
 }
 
 function $17($0_1, $1_1) {
  $0_1 = +$0_1;
  $1_1 = +$1_1;
  var $2_1 = 0, $3_1 = 0.0, $19_1 = 0.0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAPF64[($2_1 + 8 | 0) >> 3] = $0_1;
  HEAPF64[$2_1 >> 3] = $1_1;
  $3_1 = +$73(+(+HEAPF64[($2_1 + 8 | 0) >> 3]), +(+HEAPF64[$2_1 >> 3]));
  global$0 = $2_1 + 16 | 0;
  return +$3_1;
 }
 
 function $18($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0;
  $1_1 = global$0 - 80 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 76 | 0) >> 2] = $0_1;
  $19(HEAP32[($1_1 + 76 | 0) >> 2] | 0 | 0);
  $20((HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 16384 | 0 | 0);
  $21((HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 32768 | 0 | 0);
  $22((HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 49152 | 0 | 0);
  $2_1 = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 65536 | 0;
  $23($1_1 + 64 | 0 | 0, 65607 | 0) | 0;
  $24($2_1 | 0, $1_1 + 64 | 0 | 0);
  $161($1_1 + 64 | 0 | 0) | 0;
  $3_1 = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 81920 | 0;
  $23($1_1 + 52 | 0 | 0, 65694 | 0) | 0;
  $24($3_1 | 0, $1_1 + 52 | 0 | 0);
  $161($1_1 + 52 | 0 | 0) | 0;
  $4_1 = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 98304 | 0;
  $23($1_1 + 40 | 0 | 0, 65585 | 0) | 0;
  $24($4_1 | 0, $1_1 + 40 | 0 | 0);
  $161($1_1 + 40 | 0 | 0) | 0;
  $5_1 = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 114688 | 0;
  $23($1_1 + 28 | 0 | 0, 65723 | 0) | 0;
  $24($5_1 | 0, $1_1 + 28 | 0 | 0);
  $161($1_1 + 28 | 0 | 0) | 0;
  $6_1 = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 131072 | 0;
  $23($1_1 + 16 | 0 | 0, 65662 | 0) | 0;
  $24($6_1 | 0, $1_1 + 16 | 0 | 0);
  $161($1_1 + 16 | 0 | 0) | 0;
  $7_1 = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 147456 | 0;
  $23($1_1 + 4 | 0 | 0, 65628 | 0) | 0;
  $24($7_1 | 0, $1_1 + 4 | 0 | 0);
  $161($1_1 + 4 | 0 | 0) | 0;
  HEAP32[((HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 524288 | 0) >> 2] = 10;
  global$0 = $1_1 + 80 | 0;
  return;
 }
 
 function $19($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $12_1 = Math_fround(0), $10_1 = Math_fround(0), $14_1 = Math_fround(0), $21_1 = Math_fround(0), $22_1 = Math_fround(0), $23_1 = Math_fround(0), $24_1 = Math_fround(0), $6_1 = Math_fround(0), $7_1 = Math_fround(0), $8_1 = Math_fround(0), $85_1 = 0, $15_1 = Math_fround(0), $16_1 = Math_fround(0), $118_1 = 0, $17_1 = Math_fround(0), $18_1 = Math_fround(0), $152_1 = 0, $19_1 = Math_fround(0), $20_1 = Math_fround(0), $183 = 0, $74_1 = 0, $95_1 = 0, $129_1 = 0, $160_1 = 0;
  $1_1 = global$0 - 32 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($1_1 + 24 | 0) >> 2] = 0;
  block : {
   label1 : while (1) {
    if (!((HEAP32[($1_1 + 24 | 0) >> 2] | 0 | 0) < (64 | 0) & 1 | 0)) {
     break block
    }
    HEAP32[($1_1 + 20 | 0) >> 2] = 0;
    block1 : {
     label : while (1) {
      if (!((HEAP32[($1_1 + 20 | 0) >> 2] | 0 | 0) < (64 | 0) & 1 | 0)) {
       break block1
      }
      $6_1 = Math_fround(.015625);
      HEAPF32[($1_1 + 16 | 0) >> 2] = Math_fround(Math_fround(HEAP32[($1_1 + 24 | 0) >> 2] | 0 | 0) * $6_1);
      HEAPF32[($1_1 + 12 | 0) >> 2] = Math_fround($6_1 * Math_fround(HEAP32[($1_1 + 20 | 0) >> 2] | 0 | 0));
      $7_1 = Math_fround(HEAPF32[($1_1 + 16 | 0) >> 2]);
      $8_1 = Math_fround(HEAPF32[($1_1 + 12 | 0) >> 2]);
      $10_1 = Math_fround(2.0);
      $12_1 = Math_fround(1.0);
      $14_1 = Math_fround(255.0);
      $74_1 = $1_1;
      $21_1 = Math_fround(Math_fround($12_1 - Math_fround(Math_fround($25(Math_fround(Math_fround(Math_fround($8_1 * $8_1) + Math_fround($7_1 * $7_1))))) / Math_fround($25(Math_fround($10_1))))) * $14_1);
      if ($21_1 < Math_fround(4294967296.0) & $21_1 >= Math_fround(0.0) | 0) {
       $85_1 = ~~$21_1 >>> 0
      } else {
       $85_1 = 0
      }
      HEAP8[($74_1 + 11 | 0) >> 0] = $85_1;
      $15_1 = Math_fround($12_1 - Math_fround(HEAPF32[($1_1 + 16 | 0) >> 2]));
      $16_1 = Math_fround($12_1 - Math_fround(HEAPF32[($1_1 + 12 | 0) >> 2]));
      $95_1 = $1_1;
      $22_1 = Math_fround($14_1 * Math_fround($12_1 - Math_fround(Math_fround($25(Math_fround(Math_fround(Math_fround($16_1 * $16_1) + Math_fround($15_1 * $15_1))))) / Math_fround($25(Math_fround($10_1))))));
      if ($22_1 < Math_fround(4294967296.0) & $22_1 >= Math_fround(0.0) | 0) {
       $118_1 = ~~$22_1 >>> 0
      } else {
       $118_1 = 0
      }
      HEAP8[($95_1 + 11 | 0) >> 0] = $118_1 + (HEAPU8[($1_1 + 11 | 0) >> 0] | 0) | 0;
      $17_1 = Math_fround($12_1 - Math_fround(HEAPF32[($1_1 + 16 | 0) >> 2]));
      $18_1 = Math_fround(HEAPF32[($1_1 + 12 | 0) >> 2]);
      $129_1 = $1_1;
      $23_1 = Math_fround($14_1 * Math_fround($12_1 - Math_fround(Math_fround($25(Math_fround(Math_fround(Math_fround($18_1 * $18_1) + Math_fround($17_1 * $17_1))))) / Math_fround($25(Math_fround($10_1))))));
      if ($23_1 < Math_fround(4294967296.0) & $23_1 >= Math_fround(0.0) | 0) {
       $152_1 = ~~$23_1 >>> 0
      } else {
       $152_1 = 0
      }
      HEAP8[($129_1 + 10 | 0) >> 0] = $152_1;
      $19_1 = Math_fround(HEAPF32[($1_1 + 16 | 0) >> 2]);
      $20_1 = Math_fround($12_1 - Math_fround(HEAPF32[($1_1 + 12 | 0) >> 2]));
      $160_1 = $1_1;
      $24_1 = Math_fround($14_1 * Math_fround($12_1 - Math_fround(Math_fround($25(Math_fround(Math_fround(Math_fround($20_1 * $20_1) + Math_fround($19_1 * $19_1))))) / Math_fround($25(Math_fround($10_1))))));
      if ($24_1 < Math_fround(4294967296.0) & $24_1 >= Math_fround(0.0) | 0) {
       $183 = ~~$24_1 >>> 0
      } else {
       $183 = 0
      }
      HEAP8[($160_1 + 9 | 0) >> 0] = $183;
      HEAP32[($1_1 + 4 | 0) >> 2] = (HEAPU8[($1_1 + 11 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($1_1 + 10 | 0) >> 0] | 0) << 8 | 0) | 0 | (HEAPU8[($1_1 + 9 | 0) >> 0] | 0) | 0;
      HEAP32[((HEAP32[($1_1 + 28 | 0) >> 2] | 0) + ((((HEAP32[($1_1 + 20 | 0) >> 2] | 0) << 6 | 0) + (HEAP32[($1_1 + 24 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      HEAP32[($1_1 + 20 | 0) >> 2] = (HEAP32[($1_1 + 20 | 0) >> 2] | 0) + 1 | 0;
      continue label;
     };
    }
    HEAP32[($1_1 + 24 | 0) >> 2] = (HEAP32[($1_1 + 24 | 0) >> 2] | 0) + 1 | 0;
    continue label1;
   };
  }
  global$0 = $1_1 + 32 | 0;
  return;
 }
 
 function $20($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($1_1 + 8 | 0) >> 2] = 0;
  block : {
   label1 : while (1) {
    if (!((HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0) < (64 | 0) & 1 | 0)) {
     break block
    }
    HEAP8[($1_1 + 7 | 0) >> 0] = 0;
    HEAP32[$1_1 >> 2] = 0;
    block1 : {
     label : while (1) {
      if (!((HEAP32[$1_1 >> 2] | 0 | 0) < (64 | 0) & 1 | 0)) {
       break block1
      }
      block2 : {
       if ((HEAP32[$1_1 >> 2] | 0 | 0) % (4 | 0) | 0) {
        break block2
       }
       HEAP8[($1_1 + 7 | 0) >> 0] = ((HEAPU8[($1_1 + 7 | 0) >> 0] | 0) ^ -1 | 0) & 1 | 0;
      }
      block4 : {
       block3 : {
        if (!((HEAPU8[($1_1 + 7 | 0) >> 0] | 0) & 1 | 0)) {
         break block3
        }
        HEAP32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + ((((HEAP32[$1_1 >> 2] | 0) << 6 | 0) + (HEAP32[($1_1 + 8 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = -16711936;
        break block4;
       }
       HEAP32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + ((((HEAP32[$1_1 >> 2] | 0) << 6 | 0) + (HEAP32[($1_1 + 8 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = -16777216;
      }
      HEAP32[$1_1 >> 2] = (HEAP32[$1_1 >> 2] | 0) + 1 | 0;
      continue label;
     };
    }
    HEAP32[($1_1 + 8 | 0) >> 2] = (HEAP32[($1_1 + 8 | 0) >> 2] | 0) + 1 | 0;
    continue label1;
   };
  }
  return;
 }
 
 function $21($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  HEAP8[($1_1 + 11 | 0) >> 0] = 0;
  HEAP32[($1_1 + 4 | 0) >> 2] = 0;
  block : {
   label1 : while (1) {
    if (!((HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0) < (64 | 0) & 1 | 0)) {
     break block
    }
    block1 : {
     if ((HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0) % (4 | 0) | 0) {
      break block1
     }
     HEAP8[($1_1 + 11 | 0) >> 0] = ((HEAPU8[($1_1 + 11 | 0) >> 0] | 0) ^ -1 | 0) & 1 | 0;
    }
    HEAP32[$1_1 >> 2] = 0;
    block2 : {
     label : while (1) {
      if (!((HEAP32[$1_1 >> 2] | 0 | 0) < (64 | 0) & 1 | 0)) {
       break block2
      }
      block4 : {
       block3 : {
        if (!((HEAPU8[($1_1 + 11 | 0) >> 0] | 0) & 1 | 0)) {
         break block3
        }
        HEAP32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + ((((HEAP32[$1_1 >> 2] | 0) << 6 | 0) + (HEAP32[($1_1 + 4 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = -16711936;
        break block4;
       }
       HEAP32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + ((((HEAP32[$1_1 >> 2] | 0) << 6 | 0) + (HEAP32[($1_1 + 4 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = -16777216;
      }
      HEAP32[$1_1 >> 2] = (HEAP32[$1_1 >> 2] | 0) + 1 | 0;
      continue label;
     };
    }
    HEAP32[($1_1 + 4 | 0) >> 2] = (HEAP32[($1_1 + 4 | 0) >> 2] | 0) + 1 | 0;
    continue label1;
   };
  }
  return;
 }
 
 function $22($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  HEAP8[($1_1 + 11 | 0) >> 0] = 1;
  HEAP8[($1_1 + 10 | 0) >> 0] = 1;
  HEAP32[($1_1 + 4 | 0) >> 2] = 0;
  block : {
   label1 : while (1) {
    if (!((HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0) < (64 | 0) & 1 | 0)) {
     break block
    }
    block1 : {
     if ((HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0) % (4 | 0) | 0) {
      break block1
     }
     HEAP8[($1_1 + 11 | 0) >> 0] = ((HEAPU8[($1_1 + 11 | 0) >> 0] | 0) ^ -1 | 0) & 1 | 0;
    }
    HEAP32[$1_1 >> 2] = 0;
    block2 : {
     label : while (1) {
      if (!((HEAP32[$1_1 >> 2] | 0 | 0) < (64 | 0) & 1 | 0)) {
       break block2
      }
      block3 : {
       if ((HEAP32[$1_1 >> 2] | 0 | 0) % (4 | 0) | 0) {
        break block3
       }
       HEAP8[($1_1 + 10 | 0) >> 0] = ((HEAPU8[($1_1 + 10 | 0) >> 0] | 0) ^ -1 | 0) & 1 | 0;
      }
      block6 : {
       block5 : {
        block4 : {
         if ((HEAPU8[($1_1 + 11 | 0) >> 0] | 0) & 1 | 0) {
          break block4
         }
         if (!((HEAPU8[($1_1 + 10 | 0) >> 0] | 0) & 1 | 0)) {
          break block5
         }
        }
        HEAP32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + ((((HEAP32[$1_1 >> 2] | 0) << 6 | 0) + (HEAP32[($1_1 + 4 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = -16777216;
        break block6;
       }
       HEAP32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + ((((HEAP32[$1_1 >> 2] | 0) << 6 | 0) + (HEAP32[($1_1 + 4 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = -16711936;
      }
      HEAP32[$1_1 >> 2] = (HEAP32[$1_1 >> 2] | 0) + 1 | 0;
      continue label;
     };
    }
    HEAP32[($1_1 + 4 | 0) >> 2] = (HEAP32[($1_1 + 4 | 0) >> 2] | 0) + 1 | 0;
    continue label1;
   };
  }
  return;
 }
 
 function $23($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $24_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
  $3_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  $28($3_1 | 0) | 0;
  $158($3_1 | 0, HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0, $29(HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0);
  global$0 = $2_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $24($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $2_1 = global$0 - 48 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 44 | 0) >> 2] = $0_1;
  HEAP32[($2_1 + 40 | 0) >> 2] = $1_1;
  $23($2_1 + 16 | 0 | 0, 65848 | 0) | 0;
  $26($2_1 + 28 | 0 | 0, $2_1 + 16 | 0 | 0, $1_1 | 0);
  $161($2_1 + 16 | 0 | 0) | 0;
  (wasm2js_i32$0 = $2_1, wasm2js_i32$1 = $84($27($2_1 + 28 | 0 | 0) | 0 | 0, 65821 | 0) | 0), HEAP32[(wasm2js_i32$0 + 12 | 0) >> 2] = wasm2js_i32$1;
  block1 : {
   block : {
    if ((HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break block
    }
    HEAP32[($2_1 + 8 | 0) >> 2] = 1;
    break block1;
   }
   $87(HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0, 138 | 0, 0 | 0) | 0;
   HEAP32[($2_1 + 4 | 0) >> 2] = 0;
   block2 : {
    label : while (1) {
     if (!((HEAP32[($2_1 + 4 | 0) >> 2] | 0 | 0) < (4096 | 0) & 1 | 0)) {
      break block2
     }
     (wasm2js_i32$0 = $2_1, wasm2js_i32$1 = $66(HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0) | 0), HEAP8[(wasm2js_i32$0 + 3 | 0) >> 0] = wasm2js_i32$1;
     (wasm2js_i32$0 = $2_1, wasm2js_i32$1 = $66(HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0) | 0), HEAP8[(wasm2js_i32$0 + 2 | 0) >> 0] = wasm2js_i32$1;
     (wasm2js_i32$0 = $2_1, wasm2js_i32$1 = $66(HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0) | 0), HEAP8[(wasm2js_i32$0 + 1 | 0) >> 0] = wasm2js_i32$1;
     $66(HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0) | 0;
     HEAP32[((HEAP32[($2_1 + 44 | 0) >> 2] | 0) + ((HEAP32[($2_1 + 4 | 0) >> 2] | 0) << 2 | 0) | 0) >> 2] = (HEAPU8[($2_1 + 1 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($2_1 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | (HEAPU8[($2_1 + 3 | 0) >> 0] | 0) | 0;
     HEAP32[($2_1 + 4 | 0) >> 2] = (HEAP32[($2_1 + 4 | 0) >> 2] | 0) + 1 | 0;
     continue label;
    };
   }
   $61(HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0) | 0;
   HEAP32[($2_1 + 8 | 0) >> 2] = 0;
  }
  $161($2_1 + 28 | 0 | 0) | 0;
  global$0 = $2_1 + 48 | 0;
  return;
 }
 
 function $25($0_1) {
  $0_1 = Math_fround($0_1);
  var $1_1 = 0, $9_1 = Math_fround(0);
  $1_1 = global$0 - 16 | 0;
  HEAPF32[($1_1 + 12 | 0) >> 2] = $0_1;
  return Math_fround(Math_fround(Math_sqrt(Math_fround(HEAPF32[($1_1 + 12 | 0) >> 2]))));
 }
 
 function $26($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = $2_1;
  $31($0_1 | 0, $30(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($3_1 + 4 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $27($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $14_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = $32(HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $1_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $28($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $15_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  $39($2_1 | 0) | 0;
  global$0 = $1_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $29($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $14_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = $40(HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $1_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $30($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $23_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
  $3_1 = $162(HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0, $32(HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0, $41(HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $2_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $31($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $3_1 = 0, i64toi32_i32$2 = 0, $5_1 = 0, $6_1 = 0, $30_1 = 0, $40_1 = 0, $7_1 = 0, $54_1 = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($2_1 + 20 | 0) >> 2] = $1_1;
  $3_1 = HEAP32[($2_1 + 24 | 0) >> 2] | 0;
  HEAP32[($2_1 + 28 | 0) >> 2] = $3_1;
  $5_1 = $42($2_1 + 19 | 0 | 0, HEAP32[($2_1 + 20 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$2 = $5_1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $30_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[i64toi32_i32$0 >> 2] = $30_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($2_1 + 8 | 0) >> 2] = 0;
  i64toi32_i32$0 = $2_1;
  i64toi32_i32$1 = 0;
  HEAP32[$2_1 >> 2] = 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $6_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
  HEAP32[($6_1 + 8 | 0) >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$2 = $2_1;
  i64toi32_i32$1 = HEAP32[$2_1 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
  $40_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $6_1;
  HEAP32[i64toi32_i32$1 >> 2] = $40_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $43(HEAP32[($2_1 + 20 | 0) >> 2] | 0 | 0, 0 | 0);
  block : {
   if (($35($3_1 | 0) | 0) & 1 | 0) {
    break block
   }
   $43($3_1 | 0, $41($3_1 | 0) | 0 | 0);
  }
  $7_1 = HEAP32[($2_1 + 28 | 0) >> 2] | 0;
  global$0 = $2_1 + 32 | 0;
  return $7_1 | 0;
 }
 
 function $32($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $15_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = $34($33(HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $1_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $33($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $24_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  block1 : {
   block : {
    if (!(($35($2_1 | 0) | 0) & 1 | 0)) {
     break block
    }
    $3_1 = $36($2_1 | 0) | 0;
    break block1;
   }
   $3_1 = $37($2_1 | 0) | 0;
  }
  global$0 = $1_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $34($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $8_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $35($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $18_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  return (((HEAPU8[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + 11 | 0) >> 0] | 0) >>> 7 | 0) & 255 | 0 | 0) != (0 & 255 | 0 | 0) & 1 | 0 | 0;
 }
 
 function $36($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $9_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[(HEAP32[($1_1 + 12 | 0) >> 2] | 0) >> 2] | 0 | 0;
 }
 
 function $37($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $14_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = $38(HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $1_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $38($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $8_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $39($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $8_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $40($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $14_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = $108(HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $1_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $41($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $24_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  block1 : {
   block : {
    if (!(($35($2_1 | 0) | 0) & 1 | 0)) {
     break block
    }
    $3_1 = $44($2_1 | 0) | 0;
    break block1;
   }
   $3_1 = $45($2_1 | 0) | 0;
  }
  global$0 = $1_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $42($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $22_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
  block : {
   if (($35(HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0) | 0) & 1 | 0) {
    break block
   }
   $46(HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0);
  }
  $3_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  global$0 = $2_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $43($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
  $3_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  $48($3_1 | 0, (($32($3_1 | 0) | 0) + ($47($3_1 | 0) | 0) | 0) + 1 | 0 | 0, (($32($3_1 | 0) | 0) + (HEAP32[($2_1 + 8 | 0) >> 2] | 0) | 0) + 1 | 0 | 0);
  global$0 = $2_1 + 16 | 0;
  return;
 }
 
 function $44($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $9_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0;
 }
 
 function $45($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $11_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  return ((HEAPU8[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + 11 | 0) >> 0] | 0) & 127 | 0) & 255 | 0 | 0;
 }
 
 function $46($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  $48($2_1 | 0, (($32($2_1 | 0) | 0) + ($41($2_1 | 0) | 0) | 0) + 1 | 0 | 0, (($32($2_1 | 0) | 0) + ($47($2_1 | 0) | 0) | 0) + 1 | 0 | 0);
  global$0 = $1_1 + 16 | 0;
  return;
 }
 
 function $47($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $23_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  block1 : {
   block : {
    if (!(($35($2_1 | 0) | 0) & 1 | 0)) {
     break block
    }
    $3_1 = $49($2_1 | 0) | 0;
    break block1;
   }
   $3_1 = 11;
  }
  global$0 = $1_1 + 16 | 0;
  return $3_1 - 1 | 0 | 0;
 }
 
 function $48($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = $2_1;
  return;
 }
 
 function $49($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $11_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  return ((HEAP32[((HEAP32[($1_1 + 12 | 0) >> 2] | 0) + 8 | 0) >> 2] | 0) & 2147483647 | 0) << 0 | 0 | 0;
 }
 
 function $50($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $12_1 = Math_fround(0), $41_1 = 0, $5_1 = 0, $13_1 = Math_fround(0), $60_1 = 0, $6_1 = 0, $14_1 = Math_fround(0), $79_1 = 0, $7_1 = 0, $15_1 = Math_fround(0), $98_1 = 0, $30_1 = 0, $49_1 = 0, $68_1 = 0, $87_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = $2_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $30_1 = $4_1;
  $12_1 = Math_fround(Math_fround(Math_fround(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) / Math_fround(800.0)) * Math_fround(HEAP32[$4_1 >> 2] | 0 | 0));
  if (Math_fround(Math_abs($12_1)) < Math_fround(2147483648.0)) {
   $41_1 = ~~$12_1
  } else {
   $41_1 = -2147483648
  }
  HEAP32[$30_1 >> 2] = $41_1;
  $5_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $49_1 = $5_1;
  $13_1 = Math_fround(Math_fround(Math_fround(HEAP32[($3_1 + 4 | 0) >> 2] | 0 | 0) / Math_fround(450.0)) * Math_fround(HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0));
  if (Math_fround(Math_abs($13_1)) < Math_fround(2147483648.0)) {
   $60_1 = ~~$13_1
  } else {
   $60_1 = -2147483648
  }
  HEAP32[($49_1 + 4 | 0) >> 2] = $60_1;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $68_1 = $6_1;
  $14_1 = Math_fround(Math_fround(Math_fround(HEAP32[($3_1 + 4 | 0) >> 2] | 0 | 0) / Math_fround(450.0)) * Math_fround(HEAP32[($6_1 + 8 | 0) >> 2] | 0 | 0));
  if (Math_fround(Math_abs($14_1)) < Math_fround(2147483648.0)) {
   $79_1 = ~~$14_1
  } else {
   $79_1 = -2147483648
  }
  HEAP32[($68_1 + 8 | 0) >> 2] = $79_1;
  $7_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $87_1 = $7_1;
  $15_1 = Math_fround(Math_fround(Math_fround(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) / Math_fround(800.0)) * Math_fround(HEAP32[($7_1 + 12 | 0) >> 2] | 0 | 0));
  if (Math_fround(Math_abs($15_1)) < Math_fround(2147483648.0)) {
   $98_1 = ~~$15_1
  } else {
   $98_1 = -2147483648
  }
  HEAP32[($87_1 + 12 | 0) >> 2] = $98_1;
  return;
 }
 
 function $51($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $123_1 = 0, $126_1 = 0, $129_1 = 0, $132_1 = 0, $135_1 = 0, $138_1 = 0, $14_1 = 0, $146_1 = 0, $149_1 = 0, $152_1 = 0, $155_1 = 0, $158_1 = 0, $161_1 = 0, $170_1 = 0, $173 = 0, $176_1 = 0, $179_1 = 0, $182 = 0, $185 = 0, $15_1 = 0, $193 = 0, $196 = 0, $199 = 0, $202 = 0, $205 = 0, $208 = 0, $217 = 0, $220 = 0, $223 = 0, $226 = 0, $229 = 0, $232 = 0, $16_1 = 0, $240 = 0, $243 = 0, $246 = 0, $249 = 0, $252 = 0, $255 = 0;
  $3_1 = global$0 - 576 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 572 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 568 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 564 | 0) >> 2] = $2_1;
  $52($3_1 + 512 | 0 | 0) | 0;
  $52($3_1 + 460 | 0 | 0) | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 568 | 0) >> 2] | 0;
  $102($3_1 + 416 | 0 | 0, 65814 | 0, $3_1 | 0) | 0;
  $107(($3_1 + 512 | 0) + 20 | 0 | 0, $3_1 + 416 | 0 | 0) | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = HEAP32[($3_1 + 564 | 0) >> 2] | 0;
  $102($3_1 + 416 | 0 | 0, 65810 | 0, $3_1 + 16 | 0 | 0) | 0;
  $107(($3_1 + 460 | 0) + 20 | 0 | 0, $3_1 + 416 | 0 | 0) | 0;
  HEAP32[($3_1 + 464 | 0) >> 2] = ((HEAP32[($3_1 + 468 | 0) >> 2] | 0) << 3 | 0) + (HEAP32[($3_1 + 464 | 0) >> 2] | 0) | 0;
  $52($3_1 + 364 | 0 | 0) | 0;
  $107(($3_1 + 364 | 0) + 20 | 0 | 0, 65933 | 0) | 0;
  HEAP32[($3_1 + 368 | 0) >> 2] = 225 - ((HEAP32[($3_1 + 372 | 0) >> 2] | 0) << 2 | 0) | 0;
  HEAP32[($3_1 + 364 | 0) >> 2] = 400 - ((HEAP32[($3_1 + 376 | 0) >> 2] | 0) << 2 | 0) | 0;
  HEAP32[($3_1 + 380 | 0) >> 2] = 16711680;
  $50($3_1 + 512 | 0 | 0, HEAP32[(HEAP32[($3_1 + 572 | 0) >> 2] | 0) >> 2] | 0 | 0, HEAP32[((HEAP32[($3_1 + 572 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0);
  $50($3_1 + 460 | 0 | 0, HEAP32[(HEAP32[($3_1 + 572 | 0) >> 2] | 0) >> 2] | 0 | 0, HEAP32[((HEAP32[($3_1 + 572 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0);
  $50($3_1 + 364 | 0 | 0, HEAP32[(HEAP32[($3_1 + 572 | 0) >> 2] | 0) >> 2] | 0 | 0, HEAP32[((HEAP32[($3_1 + 572 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0);
  HEAP32[($3_1 + 360 | 0) >> 2] = HEAP32[($3_1 + 560 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 552 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 556 | 0) >> 2] | 0;
  $123_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 352 | 0) >> 2] = $123_1;
  HEAP32[($3_1 + 356 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 544 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 548 | 0) >> 2] | 0;
  $126_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 344 | 0) >> 2] = $126_1;
  HEAP32[($3_1 + 348 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 536 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 540 | 0) >> 2] | 0;
  $129_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 336 | 0) >> 2] = $129_1;
  HEAP32[($3_1 + 340 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 528 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 532 | 0) >> 2] | 0;
  $132_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 328 | 0) >> 2] = $132_1;
  HEAP32[($3_1 + 332 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 520 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 524 | 0) >> 2] | 0;
  $135_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 320 | 0) >> 2] = $135_1;
  HEAP32[($3_1 + 324 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 512 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 516 | 0) >> 2] | 0;
  $138_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 312 | 0) >> 2] = $138_1;
  HEAP32[($3_1 + 316 | 0) >> 2] = i64toi32_i32$0;
  $14_1 = HEAP32[($3_1 + 572 | 0) >> 2] | 0;
  HEAP32[($3_1 + 80 | 0) >> 2] = HEAP32[($3_1 + 360 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 352 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 356 | 0) >> 2] | 0;
  $146_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 72 | 0) >> 2] = $146_1;
  HEAP32[($3_1 + 76 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 344 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 348 | 0) >> 2] | 0;
  $149_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 64 | 0) >> 2] = $149_1;
  HEAP32[($3_1 + 68 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 336 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 340 | 0) >> 2] | 0;
  $152_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 56 | 0) >> 2] = $152_1;
  HEAP32[($3_1 + 60 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 328 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 332 | 0) >> 2] | 0;
  $155_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 48 | 0) >> 2] = $155_1;
  HEAP32[($3_1 + 52 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 320 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 324 | 0) >> 2] | 0;
  $158_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 40 | 0) >> 2] = $158_1;
  HEAP32[($3_1 + 44 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 312 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 316 | 0) >> 2] | 0;
  $161_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 32 | 0) >> 2] = $161_1;
  HEAP32[($3_1 + 36 | 0) >> 2] = i64toi32_i32$0;
  $53($3_1 + 32 | 0 | 0, $14_1 | 0);
  HEAP32[($3_1 + 304 | 0) >> 2] = HEAP32[($3_1 + 508 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 500 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 504 | 0) >> 2] | 0;
  $170_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 296 | 0) >> 2] = $170_1;
  HEAP32[($3_1 + 300 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 492 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 496 | 0) >> 2] | 0;
  $173 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 288 | 0) >> 2] = $173;
  HEAP32[($3_1 + 292 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 484 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 488 | 0) >> 2] | 0;
  $176_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 280 | 0) >> 2] = $176_1;
  HEAP32[($3_1 + 284 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 476 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 480 | 0) >> 2] | 0;
  $179_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 272 | 0) >> 2] = $179_1;
  HEAP32[($3_1 + 276 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 468 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 472 | 0) >> 2] | 0;
  $182 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 264 | 0) >> 2] = $182;
  HEAP32[($3_1 + 268 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 460 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 464 | 0) >> 2] | 0;
  $185 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 256 | 0) >> 2] = $185;
  HEAP32[($3_1 + 260 | 0) >> 2] = i64toi32_i32$0;
  $15_1 = HEAP32[($3_1 + 572 | 0) >> 2] | 0;
  HEAP32[($3_1 + 136 | 0) >> 2] = HEAP32[($3_1 + 304 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 296 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 300 | 0) >> 2] | 0;
  $193 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 128 | 0) >> 2] = $193;
  HEAP32[($3_1 + 132 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 288 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 292 | 0) >> 2] | 0;
  $196 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 120 | 0) >> 2] = $196;
  HEAP32[($3_1 + 124 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 280 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 284 | 0) >> 2] | 0;
  $199 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 112 | 0) >> 2] = $199;
  HEAP32[($3_1 + 116 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 272 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 276 | 0) >> 2] | 0;
  $202 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 104 | 0) >> 2] = $202;
  HEAP32[($3_1 + 108 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 264 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 268 | 0) >> 2] | 0;
  $205 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 96 | 0) >> 2] = $205;
  HEAP32[($3_1 + 100 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 256 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 260 | 0) >> 2] | 0;
  $208 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 88 | 0) >> 2] = $208;
  HEAP32[($3_1 + 92 | 0) >> 2] = i64toi32_i32$0;
  $53($3_1 + 88 | 0 | 0, $15_1 | 0);
  HEAP32[($3_1 + 248 | 0) >> 2] = HEAP32[($3_1 + 412 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 404 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 408 | 0) >> 2] | 0;
  $217 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 240 | 0) >> 2] = $217;
  HEAP32[($3_1 + 244 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 396 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 400 | 0) >> 2] | 0;
  $220 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 232 | 0) >> 2] = $220;
  HEAP32[($3_1 + 236 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 388 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 392 | 0) >> 2] | 0;
  $223 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 224 | 0) >> 2] = $223;
  HEAP32[($3_1 + 228 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 380 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 384 | 0) >> 2] | 0;
  $226 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 216 | 0) >> 2] = $226;
  HEAP32[($3_1 + 220 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 372 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 376 | 0) >> 2] | 0;
  $229 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 208 | 0) >> 2] = $229;
  HEAP32[($3_1 + 212 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 364 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 368 | 0) >> 2] | 0;
  $232 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 200 | 0) >> 2] = $232;
  HEAP32[($3_1 + 204 | 0) >> 2] = i64toi32_i32$0;
  $16_1 = HEAP32[($3_1 + 572 | 0) >> 2] | 0;
  HEAP32[($3_1 + 192 | 0) >> 2] = HEAP32[($3_1 + 248 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 240 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 244 | 0) >> 2] | 0;
  $240 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 184 | 0) >> 2] = $240;
  HEAP32[($3_1 + 188 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 232 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 236 | 0) >> 2] | 0;
  $243 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 176 | 0) >> 2] = $243;
  HEAP32[($3_1 + 180 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 224 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 228 | 0) >> 2] | 0;
  $246 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 168 | 0) >> 2] = $246;
  HEAP32[($3_1 + 172 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 216 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 220 | 0) >> 2] | 0;
  $249 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 160 | 0) >> 2] = $249;
  HEAP32[($3_1 + 164 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($3_1 + 208 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 212 | 0) >> 2] | 0;
  $252 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[($3_1 + 152 | 0) >> 2] = $252;
  HEAP32[($3_1 + 156 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($3_1 + 200 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 204 | 0) >> 2] | 0;
  $255 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 144 | 0) >> 2] = $255;
  HEAP32[($3_1 + 148 | 0) >> 2] = i64toi32_i32$0;
  $53($3_1 + 144 | 0 | 0, $16_1 | 0);
  global$0 = $3_1 + 576 | 0;
  return;
 }
 
 function $52($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $1_1 = 0, $15_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $2_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = 0;
  HEAP32[($2_1 + 8 | 0) >> 2] = 5;
  HEAP32[($2_1 + 12 | 0) >> 2] = 5;
  HEAP32[($2_1 + 16 | 0) >> 2] = -2829100;
  return $2_1 | 0;
 }
 
 function $53($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 48 | 0;
  HEAP32[($2_1 + 44 | 0) >> 2] = $1_1;
  HEAP32[($2_1 + 40 | 0) >> 2] = 0;
  block : {
   label4 : while (1) {
    if (!(HEAP8[(($0_1 + 20 | 0) + (HEAP32[($2_1 + 40 | 0) >> 2] | 0) | 0) >> 0] | 0)) {
     break block
    }
    HEAP8[($2_1 + 39 | 0) >> 0] = HEAPU8[(($0_1 + 20 | 0) + (HEAP32[($2_1 + 40 | 0) >> 2] | 0) | 0) >> 0] | 0;
    HEAP32[($2_1 + 32 | 0) >> 2] = 0;
    block1 : {
     label3 : while (1) {
      if (!((HEAP32[($2_1 + 32 | 0) >> 2] | 0 | 0) < (8 | 0) & 1 | 0)) {
       break block1
      }
      HEAP8[($2_1 + 31 | 0) >> 0] = HEAPU8[((72592 + ((HEAP8[($2_1 + 39 | 0) >> 0] | 0) << 3 | 0) | 0) + (HEAP32[($2_1 + 32 | 0) >> 2] | 0) | 0) >> 0] | 0;
      HEAP32[($2_1 + 24 | 0) >> 2] = 0;
      block2 : {
       label2 : while (1) {
        if (!((HEAP32[($2_1 + 24 | 0) >> 2] | 0 | 0) < (8 | 0) & 1 | 0)) {
         break block2
        }
        block3 : {
         if (!((HEAPU8[($2_1 + 31 | 0) >> 0] | 0) & (1 << (HEAP32[($2_1 + 24 | 0) >> 2] | 0) | 0) | 0)) {
          break block3
         }
         HEAP32[($2_1 + 20 | 0) >> 2] = 0;
         block4 : {
          label1 : while (1) {
           if (!((HEAP32[($2_1 + 20 | 0) >> 2] | 0 | 0) < (HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0) & 1 | 0)) {
            break block4
           }
           HEAP32[($2_1 + 16 | 0) >> 2] = ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + Math_imul(HEAP32[($2_1 + 32 | 0) >> 2] | 0, HEAP32[($0_1 + 8 | 0) >> 2] | 0) | 0) + (HEAP32[($2_1 + 20 | 0) >> 2] | 0) | 0;
           block5 : {
            if (!((HEAP32[($2_1 + 16 | 0) >> 2] | 0 | 0) >= (HEAP32[((HEAP32[($2_1 + 44 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) & 1 | 0)) {
             break block5
            }
            HEAP32[($2_1 + 16 | 0) >> 2] = (HEAP32[($2_1 + 16 | 0) >> 2] | 0) - (HEAP32[((HEAP32[($2_1 + 44 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0) | 0;
           }
           HEAP32[($2_1 + 12 | 0) >> 2] = Math_imul(HEAP32[($2_1 + 16 | 0) >> 2] | 0, HEAP32[(HEAP32[($2_1 + 44 | 0) >> 2] | 0) >> 2] | 0);
           HEAP32[($2_1 + 8 | 0) >> 2] = 0;
           block6 : {
            label : while (1) {
             if (!((HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0) < (HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0) & 1 | 0)) {
              break block6
             }
             HEAP32[($2_1 + 4 | 0) >> 2] = (((HEAP32[$0_1 >> 2] | 0) + Math_imul((HEAP32[($2_1 + 40 | 0) >> 2] | 0) << 3 | 0, HEAP32[($0_1 + 12 | 0) >> 2] | 0) | 0) + Math_imul(HEAP32[($2_1 + 24 | 0) >> 2] | 0, HEAP32[($0_1 + 12 | 0) >> 2] | 0) | 0) + (HEAP32[($2_1 + 8 | 0) >> 2] | 0) | 0;
             block7 : {
              if (!((HEAP32[($2_1 + 4 | 0) >> 2] | 0 | 0) >= (HEAP32[(HEAP32[($2_1 + 44 | 0) >> 2] | 0) >> 2] | 0 | 0) & 1 | 0)) {
               break block7
              }
              HEAP32[($2_1 + 4 | 0) >> 2] = (HEAP32[($2_1 + 4 | 0) >> 2] | 0) - (HEAP32[(HEAP32[($2_1 + 44 | 0) >> 2] | 0) >> 2] | 0) | 0;
             }
             HEAP32[((HEAP32[((HEAP32[($2_1 + 44 | 0) >> 2] | 0) + 524324 | 0) >> 2] | 0) + (((HEAP32[($2_1 + 12 | 0) >> 2] | 0) + (HEAP32[($2_1 + 4 | 0) >> 2] | 0) | 0) << 2 | 0) | 0) >> 2] = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
             HEAP32[($2_1 + 8 | 0) >> 2] = (HEAP32[($2_1 + 8 | 0) >> 2] | 0) + 1 | 0;
             continue label;
            };
           }
           HEAP32[($2_1 + 20 | 0) >> 2] = (HEAP32[($2_1 + 20 | 0) >> 2] | 0) + 1 | 0;
           continue label1;
          };
         }
        }
        HEAP32[($2_1 + 24 | 0) >> 2] = (HEAP32[($2_1 + 24 | 0) >> 2] | 0) + 1 | 0;
        continue label2;
       };
      }
      HEAP32[($2_1 + 32 | 0) >> 2] = (HEAP32[($2_1 + 32 | 0) >> 2] | 0) + 1 | 0;
      continue label3;
     };
    }
    HEAP32[($2_1 + 40 | 0) >> 2] = (HEAP32[($2_1 + 40 | 0) >> 2] | 0) + 1 | 0;
    continue label4;
   };
  }
  return;
 }
 
 function $54() {
  var $0_1 = 0, $3_1 = Math_fround(0), $4_1 = Math_fround(0);
  $0_1 = global$0 - 16 | 0;
  global$0 = $0_1;
  HEAPF32[($0_1 + 12 | 0) >> 2] = Math_fround(0 | 0);
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  block : {
   label : while (1) {
    if (!((HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0) < (3600 | 0) & 1 | 0)) {
     break block
    }
    $3_1 = Math_fround($12(Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[($0_1 + 12 | 0) >> 2]) * Math_fround(3.1415927410125732)) / Math_fround(180.0)))));
    HEAPF32[(599856 + ((HEAP32[($0_1 + 8 | 0) >> 2] | 0) << 2 | 0) | 0) >> 2] = $3_1;
    $4_1 = Math_fround($11(Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[($0_1 + 12 | 0) >> 2]) * Math_fround(3.1415927410125732)) / Math_fround(180.0)))));
    HEAPF32[(614256 + ((HEAP32[($0_1 + 8 | 0) >> 2] | 0) << 2 | 0) | 0) >> 2] = $4_1;
    HEAPF32[($0_1 + 12 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[($0_1 + 12 | 0) >> 2]) + Math_fround(.10000000149011612));
    HEAP32[($0_1 + 8 | 0) >> 2] = (HEAP32[($0_1 + 8 | 0) >> 2] | 0) + 1 | 0;
    continue label;
   };
  }
  global$0 = $0_1 + 16 | 0;
  return;
 }
 
 function $55($0_1) {
  $0_1 = +$0_1;
  var $1_1 = 0.0;
  $0_1 = $0_1 * $0_1;
  $1_1 = $0_1 * $0_1;
  return Math_fround(Math_fround($0_1 * $1_1 * ($0_1 * 2.439044879627741e-05 + -.001388676377460993) + ($1_1 * .04166662332373906 + ($0_1 * -.499999997251031 + 1.0))));
 }
 
 function $56($0_1) {
  $0_1 = +$0_1;
  var $1_1 = 0.0, $2_1 = 0.0;
  $1_1 = $0_1 * $0_1;
  $2_1 = $0_1 * $1_1;
  return Math_fround(Math_fround($2_1 * ($1_1 * $1_1) * ($1_1 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($2_1 * ($1_1 * .008333329385889463 + -.16666666641626524) + $0_1)));
 }
 
 function $57($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $19_1 = 0.0, $11_1 = 0, $6_1 = 0, $5_1 = 0, $13_1 = 0, $7_1 = 0, $9_1 = 0, $18_1 = 0, $12_1 = 0, $20_1 = 0.0, $14_1 = 0, $10_1 = 0, $8_1 = 0, $21_1 = 0.0, $22_1 = 0.0, $16_1 = 0, $23_1 = 0.0, $152_1 = 0, $24_1 = 0.0, $164_1 = 0, $197 = 0, $17_1 = 0, $26_1 = 0.0, $403 = 0, $27_1 = 0.0, $415 = 0, $426 = 0, $15_1 = 0, $144_1 = 0, $190 = 0.0, $211 = 0, $214 = 0, $395 = 0;
  $5_1 = global$0 - 560 | 0;
  global$0 = $5_1;
  $6_1 = ($2_1 + -3 | 0 | 0) / (24 | 0) | 0;
  $7_1 = ($6_1 | 0) > (0 | 0) ? $6_1 : 0;
  $8_1 = Math_imul($7_1, -24) + $2_1 | 0;
  block : {
   $9_1 = HEAP32[(($4_1 << 2 | 0) + 67040 | 0) >> 2] | 0;
   $10_1 = $3_1 + -1 | 0;
   if (($9_1 + $10_1 | 0 | 0) < (0 | 0)) {
    break block
   }
   $11_1 = $9_1 + $3_1 | 0;
   $2_1 = $7_1 - $10_1 | 0;
   $6_1 = 0;
   label : while (1) {
    block2 : {
     block1 : {
      if (($2_1 | 0) >= (0 | 0)) {
       break block1
      }
      $19_1 = 0.0;
      break block2;
     }
     $19_1 = +(HEAP32[(($2_1 << 2 | 0) + 67056 | 0) >> 2] | 0 | 0);
    }
    HEAPF64[(($5_1 + 320 | 0) + ($6_1 << 3 | 0) | 0) >> 3] = $19_1;
    $2_1 = $2_1 + 1 | 0;
    $6_1 = $6_1 + 1 | 0;
    if (($6_1 | 0) != ($11_1 | 0)) {
     continue label
    }
    break label;
   };
  }
  $12_1 = $8_1 + -24 | 0;
  $11_1 = 0;
  $13_1 = ($9_1 | 0) > (0 | 0) ? $9_1 : 0;
  $14_1 = ($3_1 | 0) < (1 | 0);
  label2 : while (1) {
   block4 : {
    block3 : {
     if (!$14_1) {
      break block3
     }
     $19_1 = 0.0;
     break block4;
    }
    $6_1 = $11_1 + $10_1 | 0;
    $2_1 = 0;
    $19_1 = 0.0;
    label1 : while (1) {
     $19_1 = +HEAPF64[($0_1 + ($2_1 << 3 | 0) | 0) >> 3] * +HEAPF64[(($5_1 + 320 | 0) + (($6_1 - $2_1 | 0) << 3 | 0) | 0) >> 3] + $19_1;
     $2_1 = $2_1 + 1 | 0;
     if (($2_1 | 0) != ($3_1 | 0)) {
      continue label1
     }
     break label1;
    };
   }
   HEAPF64[($5_1 + ($11_1 << 3 | 0) | 0) >> 3] = $19_1;
   $2_1 = ($11_1 | 0) == ($13_1 | 0);
   $11_1 = $11_1 + 1 | 0;
   if (!$2_1) {
    continue label2
   }
   break label2;
  };
  $15_1 = 47 - $8_1 | 0;
  $16_1 = 48 - $8_1 | 0;
  $14_1 = ($7_1 << 2 | 0) + 67056 | 0;
  $11_1 = $9_1;
  block21 : {
   label10 : while (1) {
    $19_1 = +HEAPF64[($5_1 + ($11_1 << 3 | 0) | 0) >> 3];
    $2_1 = 0;
    $6_1 = $11_1;
    block5 : {
     if (($11_1 | 0) < (1 | 0)) {
      break block5
     }
     label3 : while (1) {
      $144_1 = ($5_1 + 480 | 0) + ($2_1 << 2 | 0) | 0;
      $23_1 = $19_1 * 5.9604644775390625e-08;
      if (Math_abs($23_1) < 2147483647.0) {
       $152_1 = ~~$23_1
      } else {
       $152_1 = -2147483648
      }
      $20_1 = +($152_1 | 0);
      $24_1 = $20_1 * -16777216.0 + $19_1;
      if (Math_abs($24_1) < 2147483647.0) {
       $164_1 = ~~$24_1
      } else {
       $164_1 = -2147483648
      }
      HEAP32[$144_1 >> 2] = $164_1;
      $19_1 = +HEAPF64[(($5_1 + ($6_1 << 3 | 0) | 0) + -8 | 0) >> 3] + $20_1;
      $6_1 = $6_1 + -1 | 0;
      $2_1 = $2_1 + 1 | 0;
      if (($2_1 | 0) != ($11_1 | 0)) {
       continue label3
      }
      break label3;
     };
    }
    $19_1 = +$100(+$19_1, $12_1 | 0);
    $19_1 = $19_1 + +$72(+($19_1 * .125)) * -8.0;
    $190 = $19_1;
    if (Math_abs($19_1) < 2147483647.0) {
     $197 = ~~$19_1
    } else {
     $197 = -2147483648
    }
    $7_1 = $197;
    $19_1 = $190 - +($7_1 | 0);
    block9 : {
     block10 : {
      block8 : {
       block7 : {
        block6 : {
         $17_1 = ($12_1 | 0) < (1 | 0);
         if ($17_1) {
          break block6
         }
         $2_1 = (($5_1 + 480 | 0) + ($11_1 << 2 | 0) | 0) + -4 | 0;
         $211 = $2_1;
         $2_1 = HEAP32[$2_1 >> 2] | 0;
         $214 = $2_1;
         $2_1 = $2_1 >> $16_1 | 0;
         $6_1 = $214 - ($2_1 << $16_1 | 0) | 0;
         HEAP32[$211 >> 2] = $6_1;
         $18_1 = $6_1 >> $15_1 | 0;
         $7_1 = $2_1 + $7_1 | 0;
         break block7;
        }
        if ($12_1) {
         break block8
        }
        $18_1 = (HEAP32[((($5_1 + 480 | 0) + ($11_1 << 2 | 0) | 0) + -4 | 0) >> 2] | 0) >> 23 | 0;
       }
       if (($18_1 | 0) < (1 | 0)) {
        break block9
       }
       break block10;
      }
      $18_1 = 2;
      if ($19_1 >= .5) {
       break block10
      }
      $18_1 = 0;
      break block9;
     }
     $2_1 = 0;
     $13_1 = 0;
     $6_1 = 1;
     block11 : {
      if (($11_1 | 0) < (1 | 0)) {
       break block11
      }
      label4 : while (1) {
       $10_1 = ($5_1 + 480 | 0) + ($2_1 << 2 | 0) | 0;
       $6_1 = HEAP32[$10_1 >> 2] | 0;
       block15 : {
        block14 : {
         block13 : {
          block12 : {
           if (!$13_1) {
            break block12
           }
           $13_1 = 16777215;
           break block13;
          }
          if (!$6_1) {
           break block14
          }
          $13_1 = 16777216;
         }
         HEAP32[$10_1 >> 2] = $13_1 - $6_1 | 0;
         $13_1 = 1;
         $6_1 = 0;
         break block15;
        }
        $13_1 = 0;
        $6_1 = 1;
       }
       $2_1 = $2_1 + 1 | 0;
       if (($2_1 | 0) != ($11_1 | 0)) {
        continue label4
       }
       break label4;
      };
     }
     block16 : {
      if ($17_1) {
       break block16
      }
      $2_1 = 8388607;
      block17 : {
       switch ($12_1 + -1 | 0 | 0) {
       case 1:
        $2_1 = 4194303;
        break;
       case 0:
        break block17;
       default:
        break block16;
       };
      }
      $13_1 = (($5_1 + 480 | 0) + ($11_1 << 2 | 0) | 0) + -4 | 0;
      HEAP32[$13_1 >> 2] = (HEAP32[$13_1 >> 2] | 0) & $2_1 | 0;
     }
     $7_1 = $7_1 + 1 | 0;
     if (($18_1 | 0) != (2 | 0)) {
      break block9
     }
     $19_1 = 1.0 - $19_1;
     $18_1 = 2;
     if ($6_1) {
      break block9
     }
     $19_1 = $19_1 - +$100(+(1.0), $12_1 | 0);
    }
    block19 : {
     if ($19_1 != 0.0) {
      break block19
     }
     $6_1 = 0;
     $2_1 = $11_1;
     block20 : {
      if (($2_1 | 0) <= ($9_1 | 0)) {
       break block20
      }
      label5 : while (1) {
       $2_1 = $2_1 + -1 | 0;
       $6_1 = HEAP32[(($5_1 + 480 | 0) + ($2_1 << 2 | 0) | 0) >> 2] | 0 | $6_1 | 0;
       if (($2_1 | 0) > ($9_1 | 0)) {
        continue label5
       }
       break label5;
      };
      if (!$6_1) {
       break block20
      }
      label6 : while (1) {
       $12_1 = $12_1 + -24 | 0;
       $11_1 = $11_1 + -1 | 0;
       if (!(HEAP32[(($5_1 + 480 | 0) + ($11_1 << 2 | 0) | 0) >> 2] | 0)) {
        continue label6
       }
       break block21;
      };
     }
     $2_1 = 1;
     label7 : while (1) {
      $6_1 = $2_1;
      $2_1 = $2_1 + 1 | 0;
      if (!(HEAP32[(($5_1 + 480 | 0) + (($9_1 - $6_1 | 0) << 2 | 0) | 0) >> 2] | 0)) {
       continue label7
      }
      break label7;
     };
     $13_1 = $6_1 + $11_1 | 0;
     label9 : while (1) {
      $6_1 = $11_1 + $3_1 | 0;
      $11_1 = $11_1 + 1 | 0;
      HEAPF64[(($5_1 + 320 | 0) + ($6_1 << 3 | 0) | 0) >> 3] = +(HEAP32[($14_1 + ($11_1 << 2 | 0) | 0) >> 2] | 0 | 0);
      $2_1 = 0;
      $19_1 = 0.0;
      block22 : {
       if (($3_1 | 0) < (1 | 0)) {
        break block22
       }
       label8 : while (1) {
        $19_1 = +HEAPF64[($0_1 + ($2_1 << 3 | 0) | 0) >> 3] * +HEAPF64[(($5_1 + 320 | 0) + (($6_1 - $2_1 | 0) << 3 | 0) | 0) >> 3] + $19_1;
        $2_1 = $2_1 + 1 | 0;
        if (($2_1 | 0) != ($3_1 | 0)) {
         continue label8
        }
        break label8;
       };
      }
      HEAPF64[($5_1 + ($11_1 << 3 | 0) | 0) >> 3] = $19_1;
      if (($11_1 | 0) < ($13_1 | 0)) {
       continue label9
      }
      break label9;
     };
     $11_1 = $13_1;
     continue label10;
    }
    break label10;
   };
   block24 : {
    block23 : {
     $19_1 = +$100(+$19_1, 24 - $8_1 | 0 | 0);
     if (!($19_1 >= 16777216.0)) {
      break block23
     }
     $395 = ($5_1 + 480 | 0) + ($11_1 << 2 | 0) | 0;
     $26_1 = $19_1 * 5.9604644775390625e-08;
     if (Math_abs($26_1) < 2147483647.0) {
      $403 = ~~$26_1
     } else {
      $403 = -2147483648
     }
     $2_1 = $403;
     $27_1 = +($2_1 | 0) * -16777216.0 + $19_1;
     if (Math_abs($27_1) < 2147483647.0) {
      $415 = ~~$27_1
     } else {
      $415 = -2147483648
     }
     HEAP32[$395 >> 2] = $415;
     $11_1 = $11_1 + 1 | 0;
     $12_1 = $8_1;
     break block24;
    }
    if (Math_abs($19_1) < 2147483647.0) {
     $426 = ~~$19_1
    } else {
     $426 = -2147483648
    }
    $2_1 = $426;
   }
   HEAP32[(($5_1 + 480 | 0) + ($11_1 << 2 | 0) | 0) >> 2] = $2_1;
  }
  $19_1 = +$100(+(1.0), $12_1 | 0);
  block25 : {
   if (($11_1 | 0) < (0 | 0)) {
    break block25
   }
   $3_1 = $11_1;
   label11 : while (1) {
    $2_1 = $3_1;
    HEAPF64[($5_1 + ($2_1 << 3 | 0) | 0) >> 3] = $19_1 * +(HEAP32[(($5_1 + 480 | 0) + ($2_1 << 2 | 0) | 0) >> 2] | 0 | 0);
    $3_1 = $2_1 + -1 | 0;
    $19_1 = $19_1 * 5.9604644775390625e-08;
    if ($2_1) {
     continue label11
    }
    break label11;
   };
   $13_1 = $11_1;
   label13 : while (1) {
    block27 : {
     block26 : {
      $14_1 = $11_1 - $13_1 | 0;
      $6_1 = ($9_1 | 0) < ($14_1 | 0) ? $9_1 : $14_1;
      if (($6_1 | 0) >= (0 | 0)) {
       break block26
      }
      $19_1 = 0.0;
      break block27;
     }
     $0_1 = $5_1 + ($13_1 << 3 | 0) | 0;
     $2_1 = 0;
     $19_1 = 0.0;
     label12 : while (1) {
      $3_1 = $2_1 << 3 | 0;
      $19_1 = +HEAPF64[($3_1 + 69824 | 0) >> 3] * +HEAPF64[($0_1 + $3_1 | 0) >> 3] + $19_1;
      $3_1 = ($2_1 | 0) != ($6_1 | 0);
      $2_1 = $2_1 + 1 | 0;
      if ($3_1) {
       continue label12
      }
      break label12;
     };
    }
    HEAPF64[(($5_1 + 160 | 0) + ($14_1 << 3 | 0) | 0) >> 3] = $19_1;
    $2_1 = ($13_1 | 0) > (0 | 0);
    $13_1 = $13_1 + -1 | 0;
    if ($2_1) {
     continue label13
    }
    break label13;
   };
  }
  block31 : {
   block33 : {
    block29 : {
     switch ($4_1 | 0) {
     case 3:
      $21_1 = 0.0;
      block32 : {
       if (($11_1 | 0) <= (0 | 0)) {
        break block32
       }
       $2_1 = $11_1;
       label14 : while (1) {
        $3_1 = ($5_1 + 160 | 0) + ($2_1 << 3 | 0) | 0;
        $6_1 = $3_1 + -8 | 0;
        $19_1 = +HEAPF64[$6_1 >> 3];
        $20_1 = +HEAPF64[$3_1 >> 3];
        $22_1 = $19_1 + $20_1;
        HEAPF64[$6_1 >> 3] = $22_1;
        HEAPF64[$3_1 >> 3] = $20_1 + ($19_1 - $22_1);
        $3_1 = $2_1 >>> 0 > 1 >>> 0;
        $2_1 = $2_1 + -1 | 0;
        if ($3_1) {
         continue label14
        }
        break label14;
       };
       if (($11_1 | 0) == (1 | 0)) {
        break block32
       }
       $2_1 = $11_1;
       label15 : while (1) {
        $3_1 = ($5_1 + 160 | 0) + ($2_1 << 3 | 0) | 0;
        $6_1 = $3_1 + -8 | 0;
        $19_1 = +HEAPF64[$6_1 >> 3];
        $20_1 = +HEAPF64[$3_1 >> 3];
        $22_1 = $19_1 + $20_1;
        HEAPF64[$6_1 >> 3] = $22_1;
        HEAPF64[$3_1 >> 3] = $20_1 + ($19_1 - $22_1);
        $3_1 = $2_1 >>> 0 > 2 >>> 0;
        $2_1 = $2_1 + -1 | 0;
        if ($3_1) {
         continue label15
        }
        break label15;
       };
       $21_1 = 0.0;
       label16 : while (1) {
        $21_1 = $21_1 + +HEAPF64[(($5_1 + 160 | 0) + ($11_1 << 3 | 0) | 0) >> 3];
        $2_1 = $11_1 >>> 0 > 2 >>> 0;
        $11_1 = $11_1 + -1 | 0;
        if ($2_1) {
         continue label16
        }
        break label16;
       };
      }
      $19_1 = +HEAPF64[($5_1 + 160 | 0) >> 3];
      if ($18_1) {
       break block33
      }
      HEAPF64[$1_1 >> 3] = $19_1;
      $19_1 = +HEAPF64[($5_1 + 168 | 0) >> 3];
      HEAPF64[($1_1 + 16 | 0) >> 3] = $21_1;
      HEAPF64[($1_1 + 8 | 0) >> 3] = $19_1;
      break block31;
     case 0:
      $19_1 = 0.0;
      block34 : {
       if (($11_1 | 0) < (0 | 0)) {
        break block34
       }
       label17 : while (1) {
        $2_1 = $11_1;
        $11_1 = $2_1 + -1 | 0;
        $19_1 = $19_1 + +HEAPF64[(($5_1 + 160 | 0) + ($2_1 << 3 | 0) | 0) >> 3];
        if ($2_1) {
         continue label17
        }
        break label17;
       };
      }
      HEAPF64[$1_1 >> 3] = $18_1 ? -$19_1 : $19_1;
      break block31;
     case 1:
     case 2:
      break block29;
     default:
      break block31;
     };
    }
    $19_1 = 0.0;
    block35 : {
     if (($11_1 | 0) < (0 | 0)) {
      break block35
     }
     $3_1 = $11_1;
     label18 : while (1) {
      $2_1 = $3_1;
      $3_1 = $2_1 + -1 | 0;
      $19_1 = $19_1 + +HEAPF64[(($5_1 + 160 | 0) + ($2_1 << 3 | 0) | 0) >> 3];
      if ($2_1) {
       continue label18
      }
      break label18;
     };
    }
    HEAPF64[$1_1 >> 3] = $18_1 ? -$19_1 : $19_1;
    $19_1 = +HEAPF64[($5_1 + 160 | 0) >> 3] - $19_1;
    $2_1 = 1;
    block36 : {
     if (($11_1 | 0) < (1 | 0)) {
      break block36
     }
     label19 : while (1) {
      $19_1 = $19_1 + +HEAPF64[(($5_1 + 160 | 0) + ($2_1 << 3 | 0) | 0) >> 3];
      $3_1 = ($2_1 | 0) != ($11_1 | 0);
      $2_1 = $2_1 + 1 | 0;
      if ($3_1) {
       continue label19
      }
      break label19;
     };
    }
    HEAPF64[($1_1 + 8 | 0) >> 3] = $18_1 ? -$19_1 : $19_1;
    break block31;
   }
   HEAPF64[$1_1 >> 3] = -$19_1;
   $19_1 = +HEAPF64[($5_1 + 168 | 0) >> 3];
   HEAPF64[($1_1 + 16 | 0) >> 3] = -$21_1;
   HEAPF64[($1_1 + 8 | 0) >> 3] = -$19_1;
  }
  global$0 = $5_1 + 560 | 0;
  return $7_1 & 7 | 0 | 0;
 }
 
 function $58($0_1, $1_1) {
  $0_1 = Math_fround($0_1);
  $1_1 = $1_1 | 0;
  var $7_1 = 0.0, $4_1 = 0, $2_1 = 0, $6_1 = 0.0, $8_1 = 0.0, $3_1 = 0, $40_1 = 0, $5_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  block2 : {
   block : {
    $3_1 = (wasm2js_scratch_store_f32($0_1), wasm2js_scratch_load_i32(2));
    $4_1 = $3_1 & 2147483647 | 0;
    if ($4_1 >>> 0 > 1305022426 >>> 0) {
     break block
    }
    $6_1 = +$0_1;
    $7_1 = $6_1 * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0;
    $8_1 = $6_1 + $7_1 * -1.5707963109016418 + $7_1 * -1.5893254773528196e-08;
    HEAPF64[$1_1 >> 3] = $8_1;
    if (Math_abs($7_1) < 2147483647.0) {
     $40_1 = ~~$7_1
    } else {
     $40_1 = -2147483648
    }
    $4_1 = $40_1;
    block1 : {
     if (!($8_1 < -.7853981852531433)) {
      break block1
     }
     $7_1 = $7_1 + -1.0;
     HEAPF64[$1_1 >> 3] = $6_1 + $7_1 * -1.5707963109016418 + $7_1 * -1.5893254773528196e-08;
     $4_1 = $4_1 + -1 | 0;
     break block2;
    }
    if (!($8_1 > .7853981852531433)) {
     break block2
    }
    $7_1 = $7_1 + 1.0;
    HEAPF64[$1_1 >> 3] = $6_1 + $7_1 * -1.5707963109016418 + $7_1 * -1.5893254773528196e-08;
    $4_1 = $4_1 + 1 | 0;
    break block2;
   }
   block3 : {
    if ($4_1 >>> 0 < 2139095040 >>> 0) {
     break block3
    }
    HEAPF64[$1_1 >> 3] = +Math_fround($0_1 - $0_1);
    $4_1 = 0;
    break block2;
   }
   $5_1 = ($4_1 >>> 23 | 0) + -150 | 0;
   HEAPF64[($2_1 + 8 | 0) >> 3] = +(wasm2js_scratch_store_i32(2, $4_1 - ($5_1 << 23 | 0) | 0), wasm2js_scratch_load_f32());
   $4_1 = $57($2_1 + 8 | 0 | 0, $2_1 | 0, $5_1 | 0, 1 | 0, 0 | 0) | 0;
   $7_1 = +HEAPF64[$2_1 >> 3];
   block4 : {
    if (($3_1 | 0) > (-1 | 0)) {
     break block4
    }
    HEAPF64[$1_1 >> 3] = -$7_1;
    $4_1 = 0 - $4_1 | 0;
    break block2;
   }
   HEAPF64[$1_1 >> 3] = $7_1;
  }
  global$0 = $2_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $59($0_1) {
  $0_1 = Math_fround($0_1);
  var $4_1 = Math_fround(0), $3_1 = 0, $5_1 = 0.0, $2_1 = 0, $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  block1 : {
   block : {
    $2_1 = (wasm2js_scratch_store_f32($0_1), wasm2js_scratch_load_i32(2));
    $3_1 = $2_1 & 2147483647 | 0;
    if ($3_1 >>> 0 > 1061752794 >>> 0) {
     break block
    }
    $4_1 = Math_fround(1.0);
    if ($3_1 >>> 0 < 964689920 >>> 0) {
     break block1
    }
    $4_1 = Math_fround($55(+(+$0_1)));
    break block1;
   }
   block2 : {
    if ($3_1 >>> 0 > 1081824209 >>> 0) {
     break block2
    }
    block3 : {
     if ($3_1 >>> 0 < 1075235812 >>> 0) {
      break block3
     }
     $4_1 = Math_fround(-Math_fround($55(+((($2_1 | 0) < (0 | 0) ? 3.141592653589793 : -3.141592653589793) + +$0_1))));
     break block1;
    }
    $5_1 = +$0_1;
    block4 : {
     if (($2_1 | 0) > (-1 | 0)) {
      break block4
     }
     $4_1 = Math_fround($56(+($5_1 + 1.5707963267948966)));
     break block1;
    }
    $4_1 = Math_fround($56(+(1.5707963267948966 - $5_1)));
    break block1;
   }
   block5 : {
    if ($3_1 >>> 0 > 1088565717 >>> 0) {
     break block5
    }
    block6 : {
     if ($3_1 >>> 0 < 1085271520 >>> 0) {
      break block6
     }
     $4_1 = Math_fround($55(+((($2_1 | 0) < (0 | 0) ? 6.283185307179586 : -6.283185307179586) + +$0_1)));
     break block1;
    }
    block7 : {
     if (($2_1 | 0) > (-1 | 0)) {
      break block7
     }
     $4_1 = Math_fround($56(+(-4.71238898038469 - +$0_1)));
     break block1;
    }
    $4_1 = Math_fround($56(+(+$0_1 + -4.71238898038469)));
    break block1;
   }
   block8 : {
    if ($3_1 >>> 0 < 2139095040 >>> 0) {
     break block8
    }
    $4_1 = Math_fround($0_1 - $0_1);
    break block1;
   }
   $3_1 = $58(Math_fround($0_1), $1_1 + 8 | 0 | 0) | 0;
   $5_1 = +HEAPF64[($1_1 + 8 | 0) >> 3];
   block12 : {
    switch ($3_1 & 3 | 0 | 0) {
    default:
     $4_1 = Math_fround($55(+$5_1));
     break block1;
    case 1:
     $4_1 = Math_fround($56(+-$5_1));
     break block1;
    case 2:
     $4_1 = Math_fround(-Math_fround($55(+$5_1)));
     break block1;
    case 3:
     break block12;
    };
   }
   $4_1 = Math_fround($56(+$5_1));
  }
  global$0 = $1_1 + 16 | 0;
  return Math_fround($4_1);
 }
 
 function $60($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $61($0_1) {
  $0_1 = $0_1 | 0;
  var $4_1 = 0, $5_1 = 0, $3_1 = 0, $1_1 = 0, $2_1 = 0;
  $1_1 = $62($0_1 | 0) | 0;
  $2_1 = FUNCTION_TABLE[HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0]($0_1) | 0;
  block : {
   if ((HEAPU8[$0_1 >> 0] | 0) & 1 | 0) {
    break block
   }
   $60($0_1 | 0);
   $3_1 = $92() | 0;
   $4_1 = HEAP32[($0_1 + 56 | 0) >> 2] | 0;
   block1 : {
    $5_1 = HEAP32[($0_1 + 52 | 0) >> 2] | 0;
    if (!$5_1) {
     break block1
    }
    HEAP32[($5_1 + 56 | 0) >> 2] = $4_1;
   }
   block2 : {
    if (!$4_1) {
     break block2
    }
    HEAP32[($4_1 + 52 | 0) >> 2] = $5_1;
   }
   block3 : {
    if ((HEAP32[$3_1 >> 2] | 0 | 0) != ($0_1 | 0)) {
     break block3
    }
    HEAP32[$3_1 >> 2] = $4_1;
   }
   $93();
   $140(HEAP32[($0_1 + 96 | 0) >> 2] | 0 | 0);
   $140($0_1 | 0);
  }
  return $2_1 | $1_1 | 0 | 0;
 }
 
 function $62($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $2_1 = 0;
  block : {
   if ($0_1) {
    break block
   }
   $1_1 = 0;
   block1 : {
    if (!(HEAP32[(0 + 628656 | 0) >> 2] | 0)) {
     break block1
    }
    $1_1 = $62(HEAP32[(0 + 628656 | 0) >> 2] | 0 | 0) | 0;
   }
   block2 : {
    if (!(HEAP32[(0 + 73768 | 0) >> 2] | 0)) {
     break block2
    }
    $1_1 = $62(HEAP32[(0 + 73768 | 0) >> 2] | 0 | 0) | 0 | $1_1 | 0;
   }
   block3 : {
    $0_1 = HEAP32[($92() | 0) >> 2] | 0;
    if (!$0_1) {
     break block3
    }
    label : while (1) {
     block4 : {
      if ((HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0)) {
       break block4
      }
      $1_1 = $62($0_1 | 0) | 0 | $1_1 | 0;
     }
     $0_1 = HEAP32[($0_1 + 56 | 0) >> 2] | 0;
     if ($0_1) {
      continue label
     }
     break label;
    };
   }
   $93();
   return $1_1 | 0;
  }
  block5 : {
   if ((HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0)) {
    break block5
   }
   FUNCTION_TABLE[HEAP32[($0_1 + 36 | 0) >> 2] | 0 | 0]($0_1, 0, 0) | 0;
   if (HEAP32[($0_1 + 20 | 0) >> 2] | 0) {
    break block5
   }
   return -1 | 0;
  }
  block6 : {
   $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
   $2_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
   if (($1_1 | 0) == ($2_1 | 0)) {
    break block6
   }
   i64toi32_i32$1 = $1_1 - $2_1 | 0;
   i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
   i64toi32_i32$0 = FUNCTION_TABLE[HEAP32[($0_1 + 40 | 0) >> 2] | 0 | 0]($0_1, i64toi32_i32$1, i64toi32_i32$0, 1) | 0;
   i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  }
  HEAP32[($0_1 + 28 | 0) >> 2] = 0;
  i64toi32_i32$0 = $0_1;
  i64toi32_i32$1 = 0;
  HEAP32[($0_1 + 16 | 0) >> 2] = 0;
  HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$0 = $0_1;
  i64toi32_i32$1 = 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = i64toi32_i32$1;
  return 0 | 0;
 }
 
 function $63($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  $1_1 = HEAP32[($0_1 + 72 | 0) >> 2] | 0;
  HEAP32[($0_1 + 72 | 0) >> 2] = $1_1 + -1 | 0 | $1_1 | 0;
  block : {
   if ((HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0)) {
    break block
   }
   FUNCTION_TABLE[HEAP32[($0_1 + 36 | 0) >> 2] | 0 | 0]($0_1, 0, 0) | 0;
  }
  HEAP32[($0_1 + 28 | 0) >> 2] = 0;
  HEAP32[($0_1 + 16 | 0) >> 2] = 0;
  HEAP32[($0_1 + 20 | 0) >> 2] = 0;
  block1 : {
   $1_1 = HEAP32[$0_1 >> 2] | 0;
   if (!($1_1 & 4 | 0)) {
    break block1
   }
   HEAP32[$0_1 >> 2] = $1_1 | 32 | 0;
   return -1 | 0;
  }
  $2_1 = (HEAP32[($0_1 + 44 | 0) >> 2] | 0) + (HEAP32[($0_1 + 48 | 0) >> 2] | 0) | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
  return ($1_1 << 27 | 0) >> 31 | 0 | 0;
 }
 
 function $64($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  $2_1 = -1;
  block : {
   if ($63($0_1 | 0) | 0) {
    break block
   }
   if ((FUNCTION_TABLE[HEAP32[($0_1 + 32 | 0) >> 2] | 0 | 0]($0_1, $1_1 + 15 | 0, 1) | 0 | 0) != (1 | 0)) {
    break block
   }
   $2_1 = HEAPU8[($1_1 + 15 | 0) >> 0] | 0;
  }
  global$0 = $1_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $65($0_1) {
  $0_1 = $0_1 | 0;
  return 1 | 0;
 }
 
 function $66($0_1) {
  $0_1 = $0_1 | 0;
  return $67($0_1 | 0) | 0 | 0;
 }
 
 function $67($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  block1 : {
   block : {
    $1_1 = HEAP32[($0_1 + 76 | 0) >> 2] | 0;
    if (($1_1 | 0) < (0 | 0)) {
     break block
    }
    if (!$1_1) {
     break block1
    }
    if (($1_1 & 1073741823 | 0 | 0) != (HEAP32[(($97() | 0) + 24 | 0) >> 2] | 0 | 0)) {
     break block1
    }
   }
   block2 : {
    $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    if (($1_1 | 0) == (HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0)) {
     break block2
    }
    HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 + 1 | 0;
    return HEAPU8[$1_1 >> 0] | 0 | 0;
   }
   return $64($0_1 | 0) | 0 | 0;
  }
  return $68($0_1 | 0) | 0 | 0;
 }
 
 function $68($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  block : {
   $1_1 = $0_1 + 76 | 0;
   if (!($69($1_1 | 0) | 0)) {
    break block
   }
   $65($0_1 | 0) | 0;
  }
  block2 : {
   block1 : {
    $2_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    if (($2_1 | 0) == (HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0)) {
     break block1
    }
    HEAP32[($0_1 + 4 | 0) >> 2] = $2_1 + 1 | 0;
    $0_1 = HEAPU8[$2_1 >> 0] | 0;
    break block2;
   }
   $0_1 = $64($0_1 | 0) | 0;
  }
  block3 : {
   if (!(($70($1_1 | 0) | 0) & 1073741824 | 0)) {
    break block3
   }
   $71($1_1 | 0);
  }
  return $0_1 | 0;
 }
 
 function $69($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP32[$0_1 >> 2] = $1_1 ? $1_1 : 1073741823;
  return $1_1 | 0;
 }
 
 function $70($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP32[$0_1 >> 2] = 0;
  return $1_1 | 0;
 }
 
 function $71($0_1) {
  $0_1 = $0_1 | 0;
  $88($0_1 | 0, 1 | 0) | 0;
 }
 
 function $72($0_1) {
  $0_1 = +$0_1;
  return +Math_floor($0_1);
 }
 
 function $73($0_1, $1_1) {
  $0_1 = +$0_1;
  $1_1 = +$1_1;
  var i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, $3_1 = 0, $3$hi = 0, $6_1 = 0, $5_1 = 0, $5$hi = 0, $2$hi = 0, $2_1 = 0, $7_1 = 0, $4_1 = 0, $4$hi = 0, i64toi32_i32$6 = 0, $25_1 = 0, $26_1 = 0, $27_1 = 0, $28_1 = 0, $29_1 = 0, $30_1 = 0, $31_1 = 0, $32_1 = 0, $33_1 = 0, $34_1 = 0, $35_1 = 0, $36_1 = 0, $37_1 = 0, $38_1 = 0, $39_1 = 0, $40_1 = 0, $41_1 = 0, $42_1 = 0, $43_1 = 0, $44_1 = 0, $45_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, $49_1 = 0, $50_1 = 0, $51_1 = 0, $52_1 = 0, $53_1 = 0, $54_1 = 0, $55_1 = 0, $56_1 = 0, $62$hi = 0, $81$hi = 0, $131_1 = 0, $131$hi = 0, $134$hi = 0, $139$hi = 0;
  block1 : {
   block : {
    wasm2js_scratch_store_f64(+$1_1);
    i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
    $2_1 = wasm2js_scratch_load_i32(0 | 0) | 0;
    $2$hi = i64toi32_i32$0;
    i64toi32_i32$2 = $2_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 1;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
     $25_1 = 0;
    } else {
     i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
     $25_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    }
    $3_1 = $25_1;
    $3$hi = i64toi32_i32$1;
    if (!($3_1 | i64toi32_i32$1 | 0)) {
     break block
    }
    i64toi32_i32$1 = $74(+$1_1) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    i64toi32_i32$0 = i64toi32_i32$1;
    i64toi32_i32$1 = 2147483647;
    i64toi32_i32$3 = -1;
    i64toi32_i32$1 = i64toi32_i32$2 & i64toi32_i32$1 | 0;
    i64toi32_i32$2 = i64toi32_i32$0 & i64toi32_i32$3 | 0;
    i64toi32_i32$0 = 2146435072;
    i64toi32_i32$3 = 0;
    if (i64toi32_i32$1 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0) {
     break block
    }
    wasm2js_scratch_store_f64(+$0_1);
    i64toi32_i32$2 = wasm2js_scratch_load_i32(1 | 0) | 0;
    $4_1 = wasm2js_scratch_load_i32(0 | 0) | 0;
    $4$hi = i64toi32_i32$2;
    i64toi32_i32$3 = $4_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$0 = 52;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $26_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
     $26_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
    }
    $6_1 = $26_1 & 2047 | 0;
    if (($6_1 | 0) != (2047 | 0)) {
     break block1
    }
   }
   $1_1 = $0_1 * $1_1;
   return +($1_1 / $1_1);
  }
  block2 : {
   i64toi32_i32$1 = $4$hi;
   i64toi32_i32$2 = $4_1;
   i64toi32_i32$3 = 0;
   i64toi32_i32$0 = 1;
   i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
    i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $27_1 = 0;
   } else {
    i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
    $27_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
   $5_1 = $27_1;
   $5$hi = i64toi32_i32$3;
   i64toi32_i32$3 = $3$hi;
   i64toi32_i32$3 = $5$hi;
   i64toi32_i32$1 = $5_1;
   i64toi32_i32$2 = $3$hi;
   i64toi32_i32$0 = $3_1;
   if (i64toi32_i32$3 >>> 0 > i64toi32_i32$2 >>> 0 | ((i64toi32_i32$3 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$1 >>> 0 > i64toi32_i32$0 >>> 0 | 0) | 0) {
    break block2
   }
   i64toi32_i32$1 = i64toi32_i32$3;
   i64toi32_i32$1 = i64toi32_i32$2;
   i64toi32_i32$1 = i64toi32_i32$3;
   i64toi32_i32$0 = $5_1;
   i64toi32_i32$3 = i64toi32_i32$2;
   i64toi32_i32$2 = $3_1;
   return +((i64toi32_i32$0 | 0) == (i64toi32_i32$2 | 0) & (i64toi32_i32$1 | 0) == (i64toi32_i32$3 | 0) | 0 ? $0_1 * 0.0 : $0_1);
  }
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$2 = $2_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 52;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $28_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $28_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $7_1 = $28_1 & 2047 | 0;
  block5 : {
   block3 : {
    if ($6_1) {
     break block3
    }
    $6_1 = 0;
    block4 : {
     i64toi32_i32$1 = $4$hi;
     i64toi32_i32$0 = $4_1;
     i64toi32_i32$2 = 0;
     i64toi32_i32$3 = 12;
     i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
      i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
      $29_1 = 0;
     } else {
      i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
      $29_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
     }
     $3_1 = $29_1;
     $3$hi = i64toi32_i32$2;
     i64toi32_i32$1 = $3_1;
     i64toi32_i32$0 = 0;
     i64toi32_i32$3 = 0;
     if ((i64toi32_i32$2 | 0) < (i64toi32_i32$0 | 0)) {
      $30_1 = 1
     } else {
      if ((i64toi32_i32$2 | 0) <= (i64toi32_i32$0 | 0)) {
       if (i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0) {
        $31_1 = 0
       } else {
        $31_1 = 1
       }
       $32_1 = $31_1;
      } else {
       $32_1 = 0
      }
      $30_1 = $32_1;
     }
     if ($30_1) {
      break block4
     }
     label : while (1) {
      $6_1 = $6_1 + -1 | 0;
      i64toi32_i32$1 = $3$hi;
      i64toi32_i32$3 = $3_1;
      i64toi32_i32$2 = 0;
      i64toi32_i32$0 = 1;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
       $33_1 = 0;
      } else {
       i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
       $33_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
      }
      $3_1 = $33_1;
      $3$hi = i64toi32_i32$2;
      i64toi32_i32$1 = $3_1;
      i64toi32_i32$3 = -1;
      i64toi32_i32$0 = -1;
      if ((i64toi32_i32$2 | 0) > (i64toi32_i32$3 | 0)) {
       $34_1 = 1
      } else {
       if ((i64toi32_i32$2 | 0) >= (i64toi32_i32$3 | 0)) {
        if (i64toi32_i32$1 >>> 0 <= i64toi32_i32$0 >>> 0) {
         $35_1 = 0
        } else {
         $35_1 = 1
        }
        $36_1 = $35_1;
       } else {
        $36_1 = 0
       }
       $34_1 = $36_1;
      }
      if ($34_1) {
       continue label
      }
      break label;
     };
    }
    i64toi32_i32$1 = $4$hi;
    i64toi32_i32$1 = 0;
    $62$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $4$hi;
    i64toi32_i32$0 = $4_1;
    i64toi32_i32$2 = $62$hi;
    i64toi32_i32$3 = 1 - $6_1 | 0;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
     $37_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $37_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    }
    $3_1 = $37_1;
    $3$hi = i64toi32_i32$2;
    break block5;
   }
   i64toi32_i32$2 = $4$hi;
   i64toi32_i32$1 = $4_1;
   i64toi32_i32$0 = 1048575;
   i64toi32_i32$3 = -1;
   i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
   i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$3 | 0;
   i64toi32_i32$1 = 1048576;
   i64toi32_i32$3 = 0;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   $3_1 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $3$hi = i64toi32_i32$1;
  }
  block8 : {
   block6 : {
    if ($7_1) {
     break block6
    }
    $7_1 = 0;
    block7 : {
     i64toi32_i32$1 = $2$hi;
     i64toi32_i32$0 = $2_1;
     i64toi32_i32$2 = 0;
     i64toi32_i32$3 = 12;
     i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
      i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
      $38_1 = 0;
     } else {
      i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
      $38_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
     }
     $5_1 = $38_1;
     $5$hi = i64toi32_i32$2;
     i64toi32_i32$1 = $5_1;
     i64toi32_i32$0 = 0;
     i64toi32_i32$3 = 0;
     if ((i64toi32_i32$2 | 0) < (i64toi32_i32$0 | 0)) {
      $39_1 = 1
     } else {
      if ((i64toi32_i32$2 | 0) <= (i64toi32_i32$0 | 0)) {
       if (i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0) {
        $40_1 = 0
       } else {
        $40_1 = 1
       }
       $41_1 = $40_1;
      } else {
       $41_1 = 0
      }
      $39_1 = $41_1;
     }
     if ($39_1) {
      break block7
     }
     label1 : while (1) {
      $7_1 = $7_1 + -1 | 0;
      i64toi32_i32$1 = $5$hi;
      i64toi32_i32$3 = $5_1;
      i64toi32_i32$2 = 0;
      i64toi32_i32$0 = 1;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
       $42_1 = 0;
      } else {
       i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
       $42_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
      }
      $5_1 = $42_1;
      $5$hi = i64toi32_i32$2;
      i64toi32_i32$1 = $5_1;
      i64toi32_i32$3 = -1;
      i64toi32_i32$0 = -1;
      if ((i64toi32_i32$2 | 0) > (i64toi32_i32$3 | 0)) {
       $43_1 = 1
      } else {
       if ((i64toi32_i32$2 | 0) >= (i64toi32_i32$3 | 0)) {
        if (i64toi32_i32$1 >>> 0 <= i64toi32_i32$0 >>> 0) {
         $44_1 = 0
        } else {
         $44_1 = 1
        }
        $45_1 = $44_1;
       } else {
        $45_1 = 0
       }
       $43_1 = $45_1;
      }
      if ($43_1) {
       continue label1
      }
      break label1;
     };
    }
    i64toi32_i32$1 = $2$hi;
    i64toi32_i32$1 = 0;
    $81$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $2$hi;
    i64toi32_i32$0 = $2_1;
    i64toi32_i32$2 = $81$hi;
    i64toi32_i32$3 = 1 - $7_1 | 0;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
     $46_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $46_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    }
    $2_1 = $46_1;
    $2$hi = i64toi32_i32$2;
    break block8;
   }
   i64toi32_i32$2 = $2$hi;
   i64toi32_i32$1 = $2_1;
   i64toi32_i32$0 = 1048575;
   i64toi32_i32$3 = -1;
   i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
   i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$3 | 0;
   i64toi32_i32$1 = 1048576;
   i64toi32_i32$3 = 0;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   $2_1 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $2$hi = i64toi32_i32$1;
  }
  block9 : {
   if (($6_1 | 0) <= ($7_1 | 0)) {
    break block9
   }
   label2 : while (1) {
    block10 : {
     i64toi32_i32$1 = $3$hi;
     i64toi32_i32$1 = $2$hi;
     i64toi32_i32$1 = $3$hi;
     i64toi32_i32$0 = $3_1;
     i64toi32_i32$2 = $2$hi;
     i64toi32_i32$3 = $2_1;
     i64toi32_i32$4 = i64toi32_i32$0 - i64toi32_i32$3 | 0;
     i64toi32_i32$6 = i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0;
     i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$2 | 0;
     i64toi32_i32$5 = i64toi32_i32$1 - i64toi32_i32$5 | 0;
     $5_1 = i64toi32_i32$4;
     $5$hi = i64toi32_i32$5;
     i64toi32_i32$1 = i64toi32_i32$4;
     i64toi32_i32$0 = 0;
     i64toi32_i32$3 = 0;
     if ((i64toi32_i32$5 | 0) < (i64toi32_i32$0 | 0)) {
      $47_1 = 1
     } else {
      if ((i64toi32_i32$5 | 0) <= (i64toi32_i32$0 | 0)) {
       if (i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0) {
        $48_1 = 0
       } else {
        $48_1 = 1
       }
       $49_1 = $48_1;
      } else {
       $49_1 = 0
      }
      $47_1 = $49_1;
     }
     if ($47_1) {
      break block10
     }
     i64toi32_i32$1 = $5$hi;
     $3_1 = $5_1;
     $3$hi = i64toi32_i32$1;
     i64toi32_i32$3 = $3_1;
     i64toi32_i32$5 = 0;
     i64toi32_i32$0 = 0;
     if ((i64toi32_i32$3 | 0) != (i64toi32_i32$0 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$5 | 0) | 0) {
      break block10
     }
     return +($0_1 * 0.0);
    }
    i64toi32_i32$3 = $3$hi;
    i64toi32_i32$0 = $3_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$5 = 1;
    i64toi32_i32$2 = i64toi32_i32$5 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$0 << i64toi32_i32$2 | 0;
     $50_1 = 0;
    } else {
     i64toi32_i32$1 = ((1 << i64toi32_i32$2 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$2 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$2 | 0) | 0;
     $50_1 = i64toi32_i32$0 << i64toi32_i32$2 | 0;
    }
    $3_1 = $50_1;
    $3$hi = i64toi32_i32$1;
    $6_1 = $6_1 + -1 | 0;
    if (($6_1 | 0) > ($7_1 | 0)) {
     continue label2
    }
    break label2;
   };
   $6_1 = $7_1;
  }
  block11 : {
   i64toi32_i32$1 = $3$hi;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$1 = $3$hi;
   i64toi32_i32$3 = $3_1;
   i64toi32_i32$0 = $2$hi;
   i64toi32_i32$5 = $2_1;
   i64toi32_i32$2 = i64toi32_i32$3 - i64toi32_i32$5 | 0;
   i64toi32_i32$6 = i64toi32_i32$3 >>> 0 < i64toi32_i32$5 >>> 0;
   i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
   i64toi32_i32$4 = i64toi32_i32$1 - i64toi32_i32$4 | 0;
   $5_1 = i64toi32_i32$2;
   $5$hi = i64toi32_i32$4;
   i64toi32_i32$1 = i64toi32_i32$2;
   i64toi32_i32$3 = 0;
   i64toi32_i32$5 = 0;
   if ((i64toi32_i32$4 | 0) < (i64toi32_i32$3 | 0)) {
    $51_1 = 1
   } else {
    if ((i64toi32_i32$4 | 0) <= (i64toi32_i32$3 | 0)) {
     if (i64toi32_i32$1 >>> 0 >= i64toi32_i32$5 >>> 0) {
      $52_1 = 0
     } else {
      $52_1 = 1
     }
     $53_1 = $52_1;
    } else {
     $53_1 = 0
    }
    $51_1 = $53_1;
   }
   if ($51_1) {
    break block11
   }
   i64toi32_i32$1 = $5$hi;
   $3_1 = $5_1;
   $3$hi = i64toi32_i32$1;
   i64toi32_i32$5 = $3_1;
   i64toi32_i32$4 = 0;
   i64toi32_i32$3 = 0;
   if ((i64toi32_i32$5 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$4 | 0) | 0) {
    break block11
   }
   return +($0_1 * 0.0);
  }
  block12 : {
   i64toi32_i32$5 = $3$hi;
   i64toi32_i32$3 = $3_1;
   i64toi32_i32$1 = 1048575;
   i64toi32_i32$4 = -1;
   if (i64toi32_i32$5 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$3 >>> 0 > i64toi32_i32$4 >>> 0 | 0) | 0) {
    break block12
   }
   label3 : while (1) {
    $6_1 = $6_1 + -1 | 0;
    i64toi32_i32$3 = $3$hi;
    $5_1 = $3_1;
    $5$hi = i64toi32_i32$3;
    i64toi32_i32$4 = $3_1;
    i64toi32_i32$5 = 0;
    i64toi32_i32$1 = 1;
    i64toi32_i32$0 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$4 << i64toi32_i32$0 | 0;
     $54_1 = 0;
    } else {
     i64toi32_i32$5 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$4 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$0 | 0) | 0;
     $54_1 = i64toi32_i32$4 << i64toi32_i32$0 | 0;
    }
    $3_1 = $54_1;
    $3$hi = i64toi32_i32$5;
    i64toi32_i32$5 = $5$hi;
    i64toi32_i32$3 = $5_1;
    i64toi32_i32$4 = 524288;
    i64toi32_i32$1 = 0;
    if (i64toi32_i32$5 >>> 0 < i64toi32_i32$4 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$4 | 0) & i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0 | 0) | 0) {
     continue label3
    }
    break label3;
   };
  }
  i64toi32_i32$3 = $4$hi;
  i64toi32_i32$1 = $4_1;
  i64toi32_i32$5 = -2147483648;
  i64toi32_i32$4 = 0;
  i64toi32_i32$5 = i64toi32_i32$3 & i64toi32_i32$5 | 0;
  $5_1 = i64toi32_i32$1 & i64toi32_i32$4 | 0;
  $5$hi = i64toi32_i32$5;
  block14 : {
   block13 : {
    if (($6_1 | 0) < (1 | 0)) {
     break block13
    }
    i64toi32_i32$5 = $3$hi;
    i64toi32_i32$3 = $3_1;
    i64toi32_i32$1 = -1048576;
    i64toi32_i32$4 = 0;
    i64toi32_i32$0 = i64toi32_i32$3 + i64toi32_i32$4 | 0;
    i64toi32_i32$2 = i64toi32_i32$5 + i64toi32_i32$1 | 0;
    if (i64toi32_i32$0 >>> 0 < i64toi32_i32$4 >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$2 + 1 | 0
    }
    $131_1 = i64toi32_i32$0;
    $131$hi = i64toi32_i32$2;
    i64toi32_i32$2 = 0;
    i64toi32_i32$5 = $6_1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$4 = 52;
    i64toi32_i32$1 = i64toi32_i32$4 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$4 & 63 | 0) >>> 0) {
     i64toi32_i32$3 = i64toi32_i32$5 << i64toi32_i32$1 | 0;
     $55_1 = 0;
    } else {
     i64toi32_i32$3 = ((1 << i64toi32_i32$1 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$1 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$1 | 0) | 0;
     $55_1 = i64toi32_i32$5 << i64toi32_i32$1 | 0;
    }
    $134$hi = i64toi32_i32$3;
    i64toi32_i32$3 = $131$hi;
    i64toi32_i32$2 = $131_1;
    i64toi32_i32$5 = $134$hi;
    i64toi32_i32$4 = $55_1;
    i64toi32_i32$5 = i64toi32_i32$3 | i64toi32_i32$5 | 0;
    $3_1 = i64toi32_i32$2 | i64toi32_i32$4 | 0;
    $3$hi = i64toi32_i32$5;
    break block14;
   }
   i64toi32_i32$5 = $3$hi;
   i64toi32_i32$5 = 0;
   $139$hi = i64toi32_i32$5;
   i64toi32_i32$5 = $3$hi;
   i64toi32_i32$3 = $3_1;
   i64toi32_i32$2 = $139$hi;
   i64toi32_i32$4 = 1 - $6_1 | 0;
   i64toi32_i32$1 = i64toi32_i32$4 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$4 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $56_1 = i64toi32_i32$5 >>> i64toi32_i32$1 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$5 >>> i64toi32_i32$1 | 0;
    $56_1 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$5 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$1 | 0) | 0;
   }
   $3_1 = $56_1;
   $3$hi = i64toi32_i32$2;
  }
  i64toi32_i32$2 = $3$hi;
  i64toi32_i32$2 = $5$hi;
  i64toi32_i32$2 = $3$hi;
  i64toi32_i32$5 = $3_1;
  i64toi32_i32$3 = $5$hi;
  i64toi32_i32$4 = $5_1;
  i64toi32_i32$3 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$5 | i64toi32_i32$4 | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$3 | 0);
  return +(+wasm2js_scratch_load_f64());
 }
 
 function $74($0_1) {
  $0_1 = +$0_1;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  wasm2js_scratch_store_f64(+$0_1);
  i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
  i64toi32_i32$1 = wasm2js_scratch_load_i32(0 | 0) | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $75() {
  return 628660 | 0;
 }
 
 function $76($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = 2;
  block : {
   if ($103($0_1 | 0, 43 | 0) | 0) {
    break block
   }
   $1_1 = (HEAPU8[$0_1 >> 0] | 0 | 0) != (114 | 0);
  }
  $1_1 = $103($0_1 | 0, 120 | 0) | 0 ? $1_1 | 128 | 0 : $1_1;
  $1_1 = $103($0_1 | 0, 101 | 0) | 0 ? $1_1 | 524288 | 0 : $1_1;
  $0_1 = HEAPU8[$0_1 >> 0] | 0;
  $1_1 = ($0_1 | 0) == (114 | 0) ? $1_1 : $1_1 | 64 | 0;
  $1_1 = ($0_1 | 0) == (119 | 0) ? $1_1 | 512 | 0 : $1_1;
  return (($0_1 | 0) == (97 | 0) ? $1_1 | 1024 | 0 : $1_1) | 0;
 }
 
 function $77($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, i64toi32_i32$1 = 0, $6_1 = 0, $5_1 = 0, $6$hi = 0;
  block : {
   if (!$2_1) {
    break block
   }
   HEAP8[$0_1 >> 0] = $1_1;
   $3_1 = $0_1 + $2_1 | 0;
   HEAP8[($3_1 + -1 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 3 >>> 0) {
    break block
   }
   HEAP8[($0_1 + 2 | 0) >> 0] = $1_1;
   HEAP8[($0_1 + 1 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -3 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -2 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 7 >>> 0) {
    break block
   }
   HEAP8[($0_1 + 3 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -4 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 9 >>> 0) {
    break block
   }
   $4_1 = (0 - $0_1 | 0) & 3 | 0;
   $3_1 = $0_1 + $4_1 | 0;
   $1_1 = Math_imul($1_1 & 255 | 0, 16843009);
   HEAP32[$3_1 >> 2] = $1_1;
   $4_1 = ($2_1 - $4_1 | 0) & -4 | 0;
   $2_1 = $3_1 + $4_1 | 0;
   HEAP32[($2_1 + -4 | 0) >> 2] = $1_1;
   if ($4_1 >>> 0 < 9 >>> 0) {
    break block
   }
   HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 4 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -8 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -12 | 0) >> 2] = $1_1;
   if ($4_1 >>> 0 < 25 >>> 0) {
    break block
   }
   HEAP32[($3_1 + 24 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 20 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 16 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 12 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -16 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -20 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -24 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -28 | 0) >> 2] = $1_1;
   $5_1 = $3_1 & 4 | 0 | 24 | 0;
   $2_1 = $4_1 - $5_1 | 0;
   if ($2_1 >>> 0 < 32 >>> 0) {
    break block
   }
   i64toi32_i32$0 = 0;
   i64toi32_i32$1 = 1;
   i64toi32_i32$1 = __wasm_i64_mul($1_1 | 0, i64toi32_i32$0 | 0, 1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
   $6_1 = i64toi32_i32$1;
   $6$hi = i64toi32_i32$0;
   $1_1 = $3_1 + $5_1 | 0;
   label : while (1) {
    i64toi32_i32$0 = $6$hi;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 24 | 0) >> 2] = $6_1;
    HEAP32[($1_1 + 28 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 16 | 0) >> 2] = $6_1;
    HEAP32[($1_1 + 20 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 8 | 0) >> 2] = $6_1;
    HEAP32[($1_1 + 12 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[$1_1 >> 2] = $6_1;
    HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$0;
    $1_1 = $1_1 + 32 | 0;
    $2_1 = $2_1 + -32 | 0;
    if ($2_1 >>> 0 > 31 >>> 0) {
     continue label
    }
    break label;
   };
  }
  return $0_1 | 0;
 }
 
 function $78($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = $91(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $1_1 | 0, i64toi32_i32$0 | 0, $2_1 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $79($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0, $8_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
  $5_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
  HEAP32[($3_1 + 28 | 0) >> 2] = $2_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = $1_1;
  $1_1 = $5_1 - $4_1 | 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $1_1;
  $6_1 = $1_1 + $2_1 | 0;
  $4_1 = $3_1 + 16 | 0;
  $7_1 = 2;
  block5 : {
   block4 : {
    block2 : {
     block1 : {
      block : {
       if (!($135(fimport$8(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $3_1 + 16 | 0 | 0, 2 | 0, $3_1 + 12 | 0 | 0) | 0 | 0) | 0)) {
        break block
       }
       $5_1 = $4_1;
       break block1;
      }
      label : while (1) {
       $1_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
       if (($6_1 | 0) == ($1_1 | 0)) {
        break block2
       }
       block3 : {
        if (($1_1 | 0) > (-1 | 0)) {
         break block3
        }
        $5_1 = $4_1;
        break block4;
       }
       $8_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
       $9_1 = $1_1 >>> 0 > $8_1 >>> 0;
       $5_1 = $4_1 + ($9_1 ? 8 : 0) | 0;
       $8_1 = $1_1 - ($9_1 ? $8_1 : 0) | 0;
       HEAP32[$5_1 >> 2] = (HEAP32[$5_1 >> 2] | 0) + $8_1 | 0;
       $4_1 = $4_1 + ($9_1 ? 12 : 4) | 0;
       HEAP32[$4_1 >> 2] = (HEAP32[$4_1 >> 2] | 0) - $8_1 | 0;
       $6_1 = $6_1 - $1_1 | 0;
       $4_1 = $5_1;
       $7_1 = $7_1 - $9_1 | 0;
       if (!($135(fimport$8(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $4_1 | 0, $7_1 | 0, $3_1 + 12 | 0 | 0) | 0 | 0) | 0)) {
        continue label
       }
       break label;
      };
     }
     if (($6_1 | 0) != (-1 | 0)) {
      break block4
     }
    }
    $1_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
    HEAP32[($0_1 + 28 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 16 | 0) >> 2] = $1_1 + (HEAP32[($0_1 + 48 | 0) >> 2] | 0) | 0;
    $1_1 = $2_1;
    break block5;
   }
   $1_1 = 0;
   HEAP32[($0_1 + 28 | 0) >> 2] = 0;
   HEAP32[($0_1 + 16 | 0) >> 2] = 0;
   HEAP32[($0_1 + 20 | 0) >> 2] = 0;
   HEAP32[$0_1 >> 2] = HEAP32[$0_1 >> 2] | 0 | 32 | 0;
   if (($7_1 | 0) == (2 | 0)) {
    break block5
   }
   $1_1 = $2_1 - (HEAP32[($5_1 + 4 | 0) >> 2] | 0) | 0;
  }
  global$0 = $3_1 + 32 | 0;
  return $1_1 | 0;
 }
 
 function $80($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $3_1 = 0, $4_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 16 | 0) >> 2] = $1_1;
  $4_1 = 0;
  $5_1 = HEAP32[($0_1 + 48 | 0) >> 2] | 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $2_1 - (($5_1 | 0) != (0 | 0)) | 0;
  $6_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
  HEAP32[($3_1 + 28 | 0) >> 2] = $5_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = $6_1;
  $5_1 = 32;
  block2 : {
   block1 : {
    block : {
     if ($135(fimport$9(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $3_1 + 16 | 0 | 0, 2 | 0, $3_1 + 12 | 0 | 0) | 0 | 0) | 0) {
      break block
     }
     $5_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
     if (($5_1 | 0) > (0 | 0)) {
      break block1
     }
     $5_1 = $5_1 ? 32 : 16;
    }
    HEAP32[$0_1 >> 2] = HEAP32[$0_1 >> 2] | 0 | $5_1 | 0;
    break block2;
   }
   $4_1 = $5_1;
   $6_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
   if ($5_1 >>> 0 <= $6_1 >>> 0) {
    break block2
   }
   $4_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
   HEAP32[($0_1 + 4 | 0) >> 2] = $4_1;
   HEAP32[($0_1 + 8 | 0) >> 2] = $4_1 + ($5_1 - $6_1 | 0) | 0;
   block3 : {
    if (!(HEAP32[($0_1 + 48 | 0) >> 2] | 0)) {
     break block3
    }
    HEAP32[($0_1 + 4 | 0) >> 2] = $4_1 + 1 | 0;
    HEAP8[(($1_1 + $2_1 | 0) + -1 | 0) >> 0] = HEAPU8[$4_1 >> 0] | 0;
   }
   $4_1 = $2_1;
  }
  global$0 = $3_1 + 32 | 0;
  return $4_1 | 0;
 }
 
 function $81($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $82($0_1) {
  $0_1 = $0_1 | 0;
  return $135(fimport$10($81(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0) | 0 | 0) | 0 | 0) | 0 | 0;
 }
 
 function $83($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $34_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  block3 : {
   block2 : {
    block1 : {
     block : {
      if ($103(65824 | 0, HEAP8[$1_1 >> 0] | 0 | 0) | 0) {
       break block
      }
      (wasm2js_i32$0 = $75() | 0, wasm2js_i32$1 = 28), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
      break block1;
     }
     $3_1 = $138(1176 | 0) | 0;
     if ($3_1) {
      break block2
     }
    }
    $3_1 = 0;
    break block3;
   }
   $77($3_1 | 0, 0 | 0, 144 | 0) | 0;
   block4 : {
    if ($103($1_1 | 0, 43 | 0) | 0) {
     break block4
    }
    HEAP32[$3_1 >> 2] = (HEAPU8[$1_1 >> 0] | 0 | 0) == (114 | 0) ? 8 : 4;
   }
   block6 : {
    block5 : {
     if ((HEAPU8[$1_1 >> 0] | 0 | 0) == (97 | 0)) {
      break block5
     }
     $1_1 = HEAP32[$3_1 >> 2] | 0;
     break block6;
    }
    block7 : {
     $1_1 = fimport$6($0_1 | 0, 3 | 0, 0 | 0) | 0;
     if ($1_1 & 1024 | 0) {
      break block7
     }
     i64toi32_i32$1 = $1_1 | 1024 | 0;
     i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
     $34_1 = i64toi32_i32$1;
     i64toi32_i32$1 = $2_1;
     HEAP32[($2_1 + 16 | 0) >> 2] = $34_1;
     HEAP32[($2_1 + 20 | 0) >> 2] = i64toi32_i32$0;
     fimport$6($0_1 | 0, 4 | 0, $2_1 + 16 | 0 | 0) | 0;
    }
    $1_1 = HEAP32[$3_1 >> 2] | 0 | 128 | 0;
    HEAP32[$3_1 >> 2] = $1_1;
   }
   HEAP32[($3_1 + 80 | 0) >> 2] = -1;
   HEAP32[($3_1 + 48 | 0) >> 2] = 1024;
   HEAP32[($3_1 + 60 | 0) >> 2] = $0_1;
   HEAP32[($3_1 + 44 | 0) >> 2] = $3_1 + 152 | 0;
   block8 : {
    if ($1_1 & 8 | 0) {
     break block8
    }
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = $2_1;
    HEAP32[$2_1 >> 2] = $2_1 + 24 | 0;
    HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$0;
    if (fimport$7($0_1 | 0, 21523 | 0, $2_1 | 0) | 0) {
     break block8
    }
    HEAP32[($3_1 + 80 | 0) >> 2] = 10;
   }
   HEAP32[($3_1 + 40 | 0) >> 2] = 4;
   HEAP32[($3_1 + 36 | 0) >> 2] = 5;
   HEAP32[($3_1 + 32 | 0) >> 2] = 6;
   HEAP32[($3_1 + 12 | 0) >> 2] = 7;
   block9 : {
    if (HEAPU8[(0 + 628665 | 0) >> 0] | 0) {
     break block9
    }
    HEAP32[($3_1 + 76 | 0) >> 2] = -1;
   }
   $3_1 = $94($3_1 | 0) | 0;
  }
  global$0 = $2_1 + 32 | 0;
  return $3_1 | 0;
 }
 
 function $84($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $4_1 = 0, $3_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  block2 : {
   block1 : {
    block : {
     if ($103(65824 | 0, HEAP8[$1_1 >> 0] | 0 | 0) | 0) {
      break block
     }
     (wasm2js_i32$0 = $75() | 0, wasm2js_i32$1 = 28), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
     break block1;
    }
    $3_1 = $76($1_1 | 0) | 0;
    HEAP32[$2_1 >> 2] = 438;
    HEAP32[($2_1 + 4 | 0) >> 2] = 0;
    $4_1 = 0;
    $0_1 = $109(fimport$5(-100 | 0, $0_1 | 0, $3_1 | 32768 | 0 | 0, $2_1 | 0) | 0 | 0) | 0;
    if (($0_1 | 0) < (0 | 0)) {
     break block2
    }
    $4_1 = $83($0_1 | 0, $1_1 | 0) | 0;
    if ($4_1) {
     break block2
    }
    fimport$10($0_1 | 0) | 0;
   }
   $4_1 = 0;
  }
  global$0 = $2_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $85($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$5 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $3_1 = 0, $12_1 = 0, $13_1 = 0, $14_1 = 0, $18_1 = 0, $18$hi = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  block1 : {
   block : {
    if ($2_1 >>> 0 < 3 >>> 0) {
     break block
    }
    (wasm2js_i32$0 = $75() | 0, wasm2js_i32$1 = 28), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    break block1;
   }
   block2 : {
    if (($2_1 | 0) != (1 | 0)) {
     break block2
    }
    $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    if (!$3_1) {
     break block2
    }
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$1 = $3_1 - (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
    $18_1 = i64toi32_i32$1;
    $18$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$2 = $1_1;
    i64toi32_i32$1 = $18$hi;
    i64toi32_i32$3 = $18_1;
    i64toi32_i32$5 = (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) + i64toi32_i32$1 | 0;
    i64toi32_i32$5 = i64toi32_i32$0 - i64toi32_i32$5 | 0;
    $1_1 = i64toi32_i32$2 - i64toi32_i32$3 | 0;
    $1$hi = i64toi32_i32$5;
   }
   block3 : {
    if ((HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0)) {
     break block3
    }
    FUNCTION_TABLE[HEAP32[($0_1 + 36 | 0) >> 2] | 0 | 0]($0_1, 0, 0) | 0;
    if (!(HEAP32[($0_1 + 20 | 0) >> 2] | 0)) {
     break block1
    }
   }
   HEAP32[($0_1 + 28 | 0) >> 2] = 0;
   i64toi32_i32$2 = $0_1;
   i64toi32_i32$5 = 0;
   HEAP32[($0_1 + 16 | 0) >> 2] = 0;
   HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$5;
   i64toi32_i32$5 = $1$hi;
   i64toi32_i32$5 = FUNCTION_TABLE[HEAP32[($0_1 + 40 | 0) >> 2] | 0 | 0]($0_1, $1_1, i64toi32_i32$5, $2_1) | 0;
   i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
   i64toi32_i32$0 = i64toi32_i32$5;
   i64toi32_i32$5 = 0;
   i64toi32_i32$3 = 0;
   if ((i64toi32_i32$2 | 0) < (i64toi32_i32$5 | 0)) {
    $12_1 = 1
   } else {
    if ((i64toi32_i32$2 | 0) <= (i64toi32_i32$5 | 0)) {
     if (i64toi32_i32$0 >>> 0 >= i64toi32_i32$3 >>> 0) {
      $13_1 = 0
     } else {
      $13_1 = 1
     }
     $14_1 = $13_1;
    } else {
     $14_1 = 0
    }
    $12_1 = $14_1;
   }
   if ($12_1) {
    break block1
   }
   i64toi32_i32$2 = $0_1;
   i64toi32_i32$0 = 0;
   HEAP32[($0_1 + 4 | 0) >> 2] = 0;
   HEAP32[($0_1 + 8 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[$0_1 >> 2] = (HEAP32[$0_1 >> 2] | 0) & -17 | 0;
   return 0 | 0;
  }
  return -1 | 0;
 }
 
 function $86($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0;
  i64toi32_i32$0 = $1$hi;
  return $85($0_1 | 0, $1_1 | 0, i64toi32_i32$0 | 0, $2_1 | 0) | 0 | 0;
 }
 
 function $87($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
  return $86($0_1 | 0, i64toi32_i32$1 | 0, i64toi32_i32$0 | 0, $2_1 | 0) | 0 | 0;
 }
 
 function $88($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return 0 | 0;
 }
 
 function $89($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $90($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $91($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $3_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  i64toi32_i32$0 = $1$hi;
  $2_1 = $135($179($0_1 | 0, $1_1 | 0, i64toi32_i32$0 | 0, $2_1 & 255 | 0 | 0, $3_1 + 8 | 0 | 0) | 0 | 0) | 0;
  i64toi32_i32$2 = $3_1;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] | 0;
  $1_1 = i64toi32_i32$0;
  $1$hi = i64toi32_i32$1;
  global$0 = i64toi32_i32$2 + 16 | 0;
  i64toi32_i32$1 = -1;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$3 = $2_1 ? -1 : $1_1;
  i64toi32_i32$2 = $2_1 ? i64toi32_i32$1 : i64toi32_i32$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
  return i64toi32_i32$3 | 0;
 }
 
 function $92() {
  $89(628720 | 0);
  return 628724 | 0;
 }
 
 function $93() {
  $90(628720 | 0);
 }
 
 function $94($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $1_1 = 0;
  $1_1 = $92() | 0;
  $2_1 = HEAP32[$1_1 >> 2] | 0;
  HEAP32[($0_1 + 56 | 0) >> 2] = $2_1;
  block : {
   if (!$2_1) {
    break block
   }
   HEAP32[($2_1 + 52 | 0) >> 2] = $0_1;
  }
  HEAP32[$1_1 >> 2] = $0_1;
  $93();
  return $0_1 | 0;
 }
 
 function $95() {
  return 42 | 0;
 }
 
 function $96() {
  return $95() | 0 | 0;
 }
 
 function $97() {
  return 628728 | 0;
 }
 
 function $98() {
  var $0_1 = 0;
  $0_1 = $96() | 0;
  HEAP32[(0 + 628776 | 0) >> 2] = 65536;
  HEAP32[(0 + 628752 | 0) >> 2] = $0_1;
  HEAP32[(0 + 628780 | 0) >> 2] = 65536 - 0 | 0;
  HEAP32[(0 + 628784 | 0) >> 2] = HEAP32[(0 + 73616 | 0) >> 2] | 0;
 }
 
 function $99() {
  fimport$11();
  wasm2js_trap();
 }
 
 function $100($0_1, $1_1) {
  $0_1 = +$0_1;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $8_1 = 0, $32_1 = 0.0, i64toi32_i32$0 = 0;
  block2 : {
   block : {
    if (($1_1 | 0) < (1024 | 0)) {
     break block
    }
    $0_1 = $0_1 * 8988465674311579538646525.0e283;
    block1 : {
     if ($1_1 >>> 0 >= 2047 >>> 0) {
      break block1
     }
     $1_1 = $1_1 + -1023 | 0;
     break block2;
    }
    $0_1 = $0_1 * 8988465674311579538646525.0e283;
    $1_1 = ($1_1 >>> 0 < 3069 >>> 0 ? $1_1 : 3069) + -2046 | 0;
    break block2;
   }
   if (($1_1 | 0) > (-1023 | 0)) {
    break block2
   }
   $0_1 = $0_1 * 2.004168360008973e-292;
   block3 : {
    if ($1_1 >>> 0 <= -1992 >>> 0) {
     break block3
    }
    $1_1 = $1_1 + 969 | 0;
    break block2;
   }
   $0_1 = $0_1 * 2.004168360008973e-292;
   $1_1 = ($1_1 >>> 0 > -2960 >>> 0 ? $1_1 : -2960) + 1938 | 0;
  }
  $32_1 = $0_1;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1_1 + 1023 | 0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 52;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $8_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $8_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  wasm2js_scratch_store_i32(0 | 0, $8_1 | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$1 | 0);
  return +($32_1 * +wasm2js_scratch_load_f64());
 }
 
 function $101($0_1) {
  $0_1 = Math_fround($0_1);
  var $4_1 = 0.0, $3_1 = 0, $2_1 = 0, $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  block1 : {
   block : {
    $2_1 = (wasm2js_scratch_store_f32($0_1), wasm2js_scratch_load_i32(2));
    $3_1 = $2_1 & 2147483647 | 0;
    if ($3_1 >>> 0 > 1061752794 >>> 0) {
     break block
    }
    if ($3_1 >>> 0 < 964689920 >>> 0) {
     break block1
    }
    $0_1 = Math_fround($56(+(+$0_1)));
    break block1;
   }
   block2 : {
    if ($3_1 >>> 0 > 1081824209 >>> 0) {
     break block2
    }
    $4_1 = +$0_1;
    block3 : {
     if ($3_1 >>> 0 > 1075235811 >>> 0) {
      break block3
     }
     block4 : {
      if (($2_1 | 0) > (-1 | 0)) {
       break block4
      }
      $0_1 = Math_fround(-Math_fround($55(+($4_1 + 1.5707963267948966))));
      break block1;
     }
     $0_1 = Math_fround($55(+($4_1 + -1.5707963267948966)));
     break block1;
    }
    $0_1 = Math_fround($56(+-((($2_1 | 0) > (-1 | 0) ? -3.141592653589793 : 3.141592653589793) + $4_1)));
    break block1;
   }
   block5 : {
    if ($3_1 >>> 0 > 1088565717 >>> 0) {
     break block5
    }
    block6 : {
     if ($3_1 >>> 0 > 1085271519 >>> 0) {
      break block6
     }
     $4_1 = +$0_1;
     block7 : {
      if (($2_1 | 0) > (-1 | 0)) {
       break block7
      }
      $0_1 = Math_fround($55(+($4_1 + 4.71238898038469)));
      break block1;
     }
     $0_1 = Math_fround(-Math_fround($55(+($4_1 + -4.71238898038469))));
     break block1;
    }
    $0_1 = Math_fround($56(+((($2_1 | 0) < (0 | 0) ? 6.283185307179586 : -6.283185307179586) + +$0_1)));
    break block1;
   }
   block8 : {
    if ($3_1 >>> 0 < 2139095040 >>> 0) {
     break block8
    }
    $0_1 = Math_fround($0_1 - $0_1);
    break block1;
   }
   $3_1 = $58(Math_fround($0_1), $1_1 + 8 | 0 | 0) | 0;
   $4_1 = +HEAPF64[($1_1 + 8 | 0) >> 3];
   block12 : {
    switch ($3_1 & 3 | 0 | 0) {
    default:
     $0_1 = Math_fround($56(+$4_1));
     break block1;
    case 1:
     $0_1 = Math_fround($55(+$4_1));
     break block1;
    case 2:
     $0_1 = Math_fround($56(+-$4_1));
     break block1;
    case 3:
     break block12;
    };
   }
   $0_1 = Math_fround(-Math_fround($55(+$4_1)));
  }
  global$0 = $1_1 + 16 | 0;
  return Math_fround($0_1);
 }
 
 function $102($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $2_1;
  $2_1 = $134($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $103($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $0_1 = $104($0_1 | 0, $1_1 | 0) | 0;
  return ((HEAPU8[$0_1 >> 0] | 0 | 0) == ($1_1 & 255 | 0 | 0) ? $0_1 : 0) | 0;
 }
 
 function $104($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $4_1 = 0, $2_1 = 0;
  block2 : {
   block4 : {
    block3 : {
     block : {
      $2_1 = $1_1 & 255 | 0;
      if (!$2_1) {
       break block
      }
      block1 : {
       if (!($0_1 & 3 | 0)) {
        break block1
       }
       $3_1 = $1_1 & 255 | 0;
       label : while (1) {
        $4_1 = HEAPU8[$0_1 >> 0] | 0;
        if (!$4_1) {
         break block2
        }
        if (($4_1 | 0) == ($3_1 | 0)) {
         break block2
        }
        $0_1 = $0_1 + 1 | 0;
        if ($0_1 & 3 | 0) {
         continue label
        }
        break label;
       };
      }
      $3_1 = HEAP32[$0_1 >> 2] | 0;
      if (((16843008 - $3_1 | 0 | $3_1 | 0) & -2139062144 | 0 | 0) != (-2139062144 | 0)) {
       break block3
      }
      $2_1 = Math_imul($2_1, 16843009);
      label1 : while (1) {
       $4_1 = $3_1 ^ $2_1 | 0;
       if (((16843008 - $4_1 | 0 | $4_1 | 0) & -2139062144 | 0 | 0) != (-2139062144 | 0)) {
        break block3
       }
       $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
       $4_1 = $0_1 + 4 | 0;
       $0_1 = $4_1;
       if ((($3_1 | (16843008 - $3_1 | 0) | 0) & -2139062144 | 0 | 0) == (-2139062144 | 0)) {
        continue label1
       }
       break block4;
      };
     }
     return $0_1 + ($108($0_1 | 0) | 0) | 0 | 0;
    }
    $4_1 = $0_1;
   }
   label2 : while (1) {
    $0_1 = $4_1;
    $3_1 = HEAPU8[$0_1 >> 0] | 0;
    if (!$3_1) {
     break block2
    }
    $4_1 = $0_1 + 1 | 0;
    if (($3_1 | 0) != ($1_1 & 255 | 0 | 0)) {
     continue label2
    }
    break label2;
   };
  }
  return $0_1 | 0;
 }
 
 function $105($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0;
  $2_1 = HEAPU8[$1_1 >> 0] | 0;
  block : {
   $3_1 = HEAPU8[$0_1 >> 0] | 0;
   if (!$3_1) {
    break block
   }
   if (($3_1 | 0) != ($2_1 & 255 | 0 | 0)) {
    break block
   }
   label : while (1) {
    $2_1 = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    $3_1 = HEAPU8[($0_1 + 1 | 0) >> 0] | 0;
    if (!$3_1) {
     break block
    }
    $1_1 = $1_1 + 1 | 0;
    $0_1 = $0_1 + 1 | 0;
    if (($3_1 | 0) == ($2_1 & 255 | 0 | 0)) {
     continue label
    }
    break label;
   };
  }
  return $3_1 - ($2_1 & 255 | 0) | 0 | 0;
 }
 
 function $106($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  block3 : {
   block1 : {
    block : {
     if (!(($1_1 ^ $0_1 | 0) & 3 | 0)) {
      break block
     }
     $2_1 = HEAPU8[$1_1 >> 0] | 0;
     break block1;
    }
    block2 : {
     if (!($1_1 & 3 | 0)) {
      break block2
     }
     label : while (1) {
      $2_1 = HEAPU8[$1_1 >> 0] | 0;
      HEAP8[$0_1 >> 0] = $2_1;
      if (!$2_1) {
       break block3
      }
      $0_1 = $0_1 + 1 | 0;
      $1_1 = $1_1 + 1 | 0;
      if ($1_1 & 3 | 0) {
       continue label
      }
      break label;
     };
    }
    $2_1 = HEAP32[$1_1 >> 2] | 0;
    if (((16843008 - $2_1 | 0 | $2_1 | 0) & -2139062144 | 0 | 0) != (-2139062144 | 0)) {
     break block1
    }
    label1 : while (1) {
     HEAP32[$0_1 >> 2] = $2_1;
     $0_1 = $0_1 + 4 | 0;
     $2_1 = $1_1;
     $1_1 = $2_1 + 4 | 0;
     $2_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
     if (((16843008 - $2_1 | 0 | $2_1 | 0) & -2139062144 | 0 | 0) == (-2139062144 | 0)) {
      continue label1
     }
     break label1;
    };
   }
   HEAP8[$0_1 >> 0] = $2_1;
   if (!($2_1 & 255 | 0)) {
    break block3
   }
   label2 : while (1) {
    $2_1 = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    HEAP8[($0_1 + 1 | 0) >> 0] = $2_1;
    $0_1 = $0_1 + 1 | 0;
    $1_1 = $1_1 + 1 | 0;
    if ($2_1) {
     continue label2
    }
    break label2;
   };
  }
  return $0_1 | 0;
 }
 
 function $107($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $106($0_1 | 0, $1_1 | 0) | 0;
  return $0_1 | 0;
 }
 
 function $108($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0;
  $1_1 = $0_1;
  block2 : {
   block : {
    if (!($1_1 & 3 | 0)) {
     break block
    }
    block1 : {
     if (HEAPU8[$1_1 >> 0] | 0) {
      break block1
     }
     return $1_1 - $1_1 | 0 | 0;
    }
    $1_1 = $0_1;
    label : while (1) {
     $1_1 = $1_1 + 1 | 0;
     if (!($1_1 & 3 | 0)) {
      break block
     }
     if (HEAPU8[$1_1 >> 0] | 0) {
      continue label
     }
     break block2;
    };
   }
   label1 : while (1) {
    $2_1 = $1_1;
    $1_1 = $1_1 + 4 | 0;
    $3_1 = HEAP32[$2_1 >> 2] | 0;
    if (((16843008 - $3_1 | 0 | $3_1 | 0) & -2139062144 | 0 | 0) == (-2139062144 | 0)) {
     continue label1
    }
    break label1;
   };
   label2 : while (1) {
    $1_1 = $2_1;
    $2_1 = $1_1 + 1 | 0;
    if (HEAPU8[$1_1 >> 0] | 0) {
     continue label2
    }
    break label2;
   };
  }
  return $1_1 - $0_1 | 0 | 0;
 }
 
 function $109($0_1) {
  $0_1 = $0_1 | 0;
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  block : {
   if ($0_1 >>> 0 < -4095 >>> 0) {
    break block
   }
   (wasm2js_i32$0 = $75() | 0, wasm2js_i32$1 = 0 - $0_1 | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
   $0_1 = -1;
  }
  return $0_1 | 0;
 }
 
 function $110($0_1, $1_1) {
  $0_1 = +$0_1;
  $1_1 = $1_1 | 0;
  var $2_1 = 0.0, $3_1 = 0.0, $4_1 = 0.0;
  $2_1 = $0_1 * $0_1;
  $3_1 = $0_1 * $2_1;
  $4_1 = $2_1 * $2_1;
  $2_1 = $3_1 * $4_1 * ($4_1 * ($2_1 * .009465647849436732 + .002974357433599673) + ($2_1 * .024528318116654728 + .05338123784456704)) + ($3_1 * ($2_1 * .13339200271297674 + .3333313950307914) + $0_1);
  return Math_fround(Math_fround($1_1 ? -1.0 / $2_1 : $2_1));
 }
 
 function $111($0_1) {
  $0_1 = Math_fround($0_1);
  var $3_1 = 0, $2_1 = 0, $4_1 = 0.0, $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  block1 : {
   block : {
    $2_1 = (wasm2js_scratch_store_f32($0_1), wasm2js_scratch_load_i32(2));
    $3_1 = $2_1 & 2147483647 | 0;
    if ($3_1 >>> 0 > 1061752794 >>> 0) {
     break block
    }
    if ($3_1 >>> 0 < 964689920 >>> 0) {
     break block1
    }
    $0_1 = Math_fround($110(+(+$0_1), 0 | 0));
    break block1;
   }
   block2 : {
    if ($3_1 >>> 0 > 1081824209 >>> 0) {
     break block2
    }
    $4_1 = +$0_1;
    block3 : {
     if ($3_1 >>> 0 > 1075235811 >>> 0) {
      break block3
     }
     $0_1 = Math_fround($110(+((($2_1 | 0) < (0 | 0) ? 1.5707963267948966 : -1.5707963267948966) + $4_1), 1 | 0));
     break block1;
    }
    $0_1 = Math_fround($110(+((($2_1 | 0) < (0 | 0) ? 3.141592653589793 : -3.141592653589793) + $4_1), 0 | 0));
    break block1;
   }
   block4 : {
    if ($3_1 >>> 0 > 1088565717 >>> 0) {
     break block4
    }
    $4_1 = +$0_1;
    block5 : {
     if ($3_1 >>> 0 > 1085271519 >>> 0) {
      break block5
     }
     $0_1 = Math_fround($110(+((($2_1 | 0) < (0 | 0) ? 4.71238898038469 : -4.71238898038469) + $4_1), 1 | 0));
     break block1;
    }
    $0_1 = Math_fround($110(+((($2_1 | 0) < (0 | 0) ? 6.283185307179586 : -6.283185307179586) + $4_1), 0 | 0));
    break block1;
   }
   block6 : {
    if ($3_1 >>> 0 < 2139095040 >>> 0) {
     break block6
    }
    $0_1 = Math_fround($0_1 - $0_1);
    break block1;
   }
   $3_1 = $58(Math_fround($0_1), $1_1 + 8 | 0 | 0) | 0;
   $0_1 = Math_fround($110(+(+HEAPF64[($1_1 + 8 | 0) >> 3]), $3_1 & 1 | 0 | 0));
  }
  global$0 = $1_1 + 16 | 0;
  return Math_fround($0_1);
 }
 
 function $112($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[($0_1 + 72 | 0) >> 2] | 0;
  HEAP32[($0_1 + 72 | 0) >> 2] = $1_1 + -1 | 0 | $1_1 | 0;
  block : {
   $1_1 = HEAP32[$0_1 >> 2] | 0;
   if (!($1_1 & 8 | 0)) {
    break block
   }
   HEAP32[$0_1 >> 2] = $1_1 | 32 | 0;
   return -1 | 0;
  }
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  $1_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
  HEAP32[($0_1 + 28 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 16 | 0) >> 2] = $1_1 + (HEAP32[($0_1 + 48 | 0) >> 2] | 0) | 0;
  return 0 | 0;
 }
 
 function $113($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = ($2_1 | 0) != (0 | 0);
  block2 : {
   block1 : {
    block : {
     if (!($0_1 & 3 | 0)) {
      break block
     }
     if (!$2_1) {
      break block
     }
     $4_1 = $1_1 & 255 | 0;
     label : while (1) {
      if ((HEAPU8[$0_1 >> 0] | 0 | 0) == ($4_1 | 0)) {
       break block1
      }
      $2_1 = $2_1 + -1 | 0;
      $3_1 = ($2_1 | 0) != (0 | 0);
      $0_1 = $0_1 + 1 | 0;
      if (!($0_1 & 3 | 0)) {
       break block
      }
      if ($2_1) {
       continue label
      }
      break label;
     };
    }
    if (!$3_1) {
     break block2
    }
    block3 : {
     if ((HEAPU8[$0_1 >> 0] | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
      break block3
     }
     if ($2_1 >>> 0 < 4 >>> 0) {
      break block3
     }
     $4_1 = Math_imul($1_1 & 255 | 0, 16843009);
     label1 : while (1) {
      $3_1 = (HEAP32[$0_1 >> 2] | 0) ^ $4_1 | 0;
      if (((16843008 - $3_1 | 0 | $3_1 | 0) & -2139062144 | 0 | 0) != (-2139062144 | 0)) {
       break block1
      }
      $0_1 = $0_1 + 4 | 0;
      $2_1 = $2_1 + -4 | 0;
      if ($2_1 >>> 0 > 3 >>> 0) {
       continue label1
      }
      break label1;
     };
    }
    if (!$2_1) {
     break block2
    }
   }
   $3_1 = $1_1 & 255 | 0;
   label2 : while (1) {
    block4 : {
     if ((HEAPU8[$0_1 >> 0] | 0 | 0) != ($3_1 | 0)) {
      break block4
     }
     return $0_1 | 0;
    }
    $0_1 = $0_1 + 1 | 0;
    $2_1 = $2_1 + -1 | 0;
    if ($2_1) {
     continue label2
    }
    break label2;
   };
  }
  return 0 | 0;
 }
 
 function $114($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = $113($0_1 | 0, 0 | 0, $1_1 | 0) | 0;
  return ($2_1 ? $2_1 - $0_1 | 0 : $1_1) | 0;
 }
 
 function $115($0_1, $1_1) {
  $0_1 = +$0_1;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $3_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, $2_1 = 0, $10_1 = 0, $2$hi = 0;
  block : {
   wasm2js_scratch_store_f64(+$0_1);
   i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
   $2_1 = wasm2js_scratch_load_i32(0 | 0) | 0;
   $2$hi = i64toi32_i32$0;
   i64toi32_i32$2 = $2_1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 52;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = 0;
    $10_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $10_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
   $3_1 = $10_1 & 2047 | 0;
   if (($3_1 | 0) == (2047 | 0)) {
    break block
   }
   block1 : {
    if ($3_1) {
     break block1
    }
    block3 : {
     block2 : {
      if ($0_1 != 0.0) {
       break block2
      }
      $3_1 = 0;
      break block3;
     }
     $0_1 = +$115(+($0_1 * 18446744073709551615.0), $1_1 | 0);
     $3_1 = (HEAP32[$1_1 >> 2] | 0) + -64 | 0;
    }
    HEAP32[$1_1 >> 2] = $3_1;
    return +$0_1;
   }
   HEAP32[$1_1 >> 2] = $3_1 + -1022 | 0;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$0 = $2_1;
   i64toi32_i32$2 = -2146435073;
   i64toi32_i32$3 = -1;
   i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$2 | 0;
   i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$3 | 0;
   i64toi32_i32$0 = 1071644672;
   i64toi32_i32$3 = 0;
   i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
   wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$1 | i64toi32_i32$3 | 0 | 0);
   wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$0 | 0);
   $0_1 = +wasm2js_scratch_load_f64();
  }
  return +$0_1;
 }
 
 function $116($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  if ($2_1) {
   wasm2js_memory_copy($0_1, $1_1, $2_1)
  }
  return $0_1 | 0;
 }
 
 function $117($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0;
  block : {
   if ($2_1 >>> 0 < 512 >>> 0) {
    break block
   }
   return $116($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0;
  }
  $3_1 = $0_1 + $2_1 | 0;
  block6 : {
   block1 : {
    if (($1_1 ^ $0_1 | 0) & 3 | 0) {
     break block1
    }
    block3 : {
     block2 : {
      if ($0_1 & 3 | 0) {
       break block2
      }
      $2_1 = $0_1;
      break block3;
     }
     block4 : {
      if ($2_1) {
       break block4
      }
      $2_1 = $0_1;
      break block3;
     }
     $2_1 = $0_1;
     label : while (1) {
      HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
      $1_1 = $1_1 + 1 | 0;
      $2_1 = $2_1 + 1 | 0;
      if (!($2_1 & 3 | 0)) {
       break block3
      }
      if ($2_1 >>> 0 < $3_1 >>> 0) {
       continue label
      }
      break label;
     };
    }
    $4_1 = $3_1 & -4 | 0;
    block5 : {
     if ($3_1 >>> 0 < 64 >>> 0) {
      break block5
     }
     $5_1 = $4_1 + -64 | 0;
     if ($2_1 >>> 0 > $5_1 >>> 0) {
      break block5
     }
     label1 : while (1) {
      HEAP32[$2_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
      HEAP32[($2_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      HEAP32[($2_1 + 8 | 0) >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
      HEAP32[($2_1 + 12 | 0) >> 2] = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
      HEAP32[($2_1 + 16 | 0) >> 2] = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
      HEAP32[($2_1 + 20 | 0) >> 2] = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
      HEAP32[($2_1 + 24 | 0) >> 2] = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
      HEAP32[($2_1 + 28 | 0) >> 2] = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
      HEAP32[($2_1 + 32 | 0) >> 2] = HEAP32[($1_1 + 32 | 0) >> 2] | 0;
      HEAP32[($2_1 + 36 | 0) >> 2] = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
      HEAP32[($2_1 + 40 | 0) >> 2] = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
      HEAP32[($2_1 + 44 | 0) >> 2] = HEAP32[($1_1 + 44 | 0) >> 2] | 0;
      HEAP32[($2_1 + 48 | 0) >> 2] = HEAP32[($1_1 + 48 | 0) >> 2] | 0;
      HEAP32[($2_1 + 52 | 0) >> 2] = HEAP32[($1_1 + 52 | 0) >> 2] | 0;
      HEAP32[($2_1 + 56 | 0) >> 2] = HEAP32[($1_1 + 56 | 0) >> 2] | 0;
      HEAP32[($2_1 + 60 | 0) >> 2] = HEAP32[($1_1 + 60 | 0) >> 2] | 0;
      $1_1 = $1_1 + 64 | 0;
      $2_1 = $2_1 + 64 | 0;
      if ($2_1 >>> 0 <= $5_1 >>> 0) {
       continue label1
      }
      break label1;
     };
    }
    if ($2_1 >>> 0 >= $4_1 >>> 0) {
     break block6
    }
    label2 : while (1) {
     HEAP32[$2_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
     $1_1 = $1_1 + 4 | 0;
     $2_1 = $2_1 + 4 | 0;
     if ($2_1 >>> 0 < $4_1 >>> 0) {
      continue label2
     }
     break block6;
    };
   }
   block7 : {
    if ($3_1 >>> 0 >= 4 >>> 0) {
     break block7
    }
    $2_1 = $0_1;
    break block6;
   }
   block8 : {
    if ($2_1 >>> 0 >= 4 >>> 0) {
     break block8
    }
    $2_1 = $0_1;
    break block6;
   }
   $4_1 = $3_1 + -4 | 0;
   $2_1 = $0_1;
   label3 : while (1) {
    HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    HEAP8[($2_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    HEAP8[($2_1 + 2 | 0) >> 0] = HEAPU8[($1_1 + 2 | 0) >> 0] | 0;
    HEAP8[($2_1 + 3 | 0) >> 0] = HEAPU8[($1_1 + 3 | 0) >> 0] | 0;
    $1_1 = $1_1 + 4 | 0;
    $2_1 = $2_1 + 4 | 0;
    if ($2_1 >>> 0 <= $4_1 >>> 0) {
     continue label3
    }
    break label3;
   };
  }
  block9 : {
   if ($2_1 >>> 0 >= $3_1 >>> 0) {
    break block9
   }
   label4 : while (1) {
    HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    $1_1 = $1_1 + 1 | 0;
    $2_1 = $2_1 + 1 | 0;
    if (($2_1 | 0) != ($3_1 | 0)) {
     continue label4
    }
    break label4;
   };
  }
  return $0_1 | 0;
 }
 
 function $118($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0;
  block1 : {
   block : {
    $3_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
    if ($3_1) {
     break block
    }
    $4_1 = 0;
    if ($112($2_1 | 0) | 0) {
     break block1
    }
    $3_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
   }
   block2 : {
    $4_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
    if ($1_1 >>> 0 <= ($3_1 - $4_1 | 0) >>> 0) {
     break block2
    }
    return FUNCTION_TABLE[HEAP32[($2_1 + 36 | 0) >> 2] | 0 | 0]($2_1, $0_1, $1_1) | 0 | 0;
   }
   block5 : {
    block3 : {
     if ((HEAP32[($2_1 + 80 | 0) >> 2] | 0 | 0) < (0 | 0)) {
      break block3
     }
     if (!$1_1) {
      break block3
     }
     $3_1 = $1_1;
     block4 : {
      label : while (1) {
       $5_1 = $0_1 + $3_1 | 0;
       if ((HEAPU8[($5_1 + -1 | 0) >> 0] | 0 | 0) == (10 | 0)) {
        break block4
       }
       $3_1 = $3_1 + -1 | 0;
       if (!$3_1) {
        break block3
       }
       continue label;
      };
     }
     $4_1 = FUNCTION_TABLE[HEAP32[($2_1 + 36 | 0) >> 2] | 0 | 0]($2_1, $0_1, $3_1) | 0;
     if ($4_1 >>> 0 < $3_1 >>> 0) {
      break block1
     }
     $1_1 = $1_1 - $3_1 | 0;
     $4_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
     break block5;
    }
    $5_1 = $0_1;
    $3_1 = 0;
   }
   $117($4_1 | 0, $5_1 | 0, $1_1 | 0) | 0;
   HEAP32[($2_1 + 20 | 0) >> 2] = (HEAP32[($2_1 + 20 | 0) >> 2] | 0) + $1_1 | 0;
   $4_1 = $3_1 + $1_1 | 0;
  }
  return $4_1 | 0;
 }
 
 function $119($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, i64toi32_i32$0 = 0, $7_1 = 0, $6_1 = 0;
  $5_1 = global$0 - 208 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 204 | 0) >> 2] = $2_1;
  wasm2js_memory_fill($5_1 + 160 | 0, 0, 40);
  HEAP32[($5_1 + 200 | 0) >> 2] = HEAP32[($5_1 + 204 | 0) >> 2] | 0;
  block1 : {
   block : {
    if (($120(0 | 0, $1_1 | 0, $5_1 + 200 | 0 | 0, $5_1 + 80 | 0 | 0, $5_1 + 160 | 0 | 0, $3_1 | 0, $4_1 | 0) | 0 | 0) >= (0 | 0)) {
     break block
    }
    $0_1 = -1;
    break block1;
   }
   $6_1 = HEAP32[$0_1 >> 2] | 0;
   HEAP32[$0_1 >> 2] = $6_1 & -33 | 0;
   block5 : {
    block4 : {
     block3 : {
      block2 : {
       if (HEAP32[($0_1 + 48 | 0) >> 2] | 0) {
        break block2
       }
       HEAP32[($0_1 + 48 | 0) >> 2] = 80;
       HEAP32[($0_1 + 28 | 0) >> 2] = 0;
       i64toi32_i32$0 = 0;
       HEAP32[($0_1 + 16 | 0) >> 2] = 0;
       HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$0;
       $7_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
       HEAP32[($0_1 + 44 | 0) >> 2] = $5_1;
       break block3;
      }
      $7_1 = 0;
      if (HEAP32[($0_1 + 16 | 0) >> 2] | 0) {
       break block4
      }
     }
     $2_1 = -1;
     if ($112($0_1 | 0) | 0) {
      break block5
     }
    }
    $2_1 = $120($0_1 | 0, $1_1 | 0, $5_1 + 200 | 0 | 0, $5_1 + 80 | 0 | 0, $5_1 + 160 | 0 | 0, $3_1 | 0, $4_1 | 0) | 0;
   }
   $4_1 = $6_1 & 32 | 0;
   block6 : {
    if (!$7_1) {
     break block6
    }
    FUNCTION_TABLE[HEAP32[($0_1 + 36 | 0) >> 2] | 0 | 0]($0_1, 0, 0) | 0;
    HEAP32[($0_1 + 48 | 0) >> 2] = 0;
    HEAP32[($0_1 + 44 | 0) >> 2] = $7_1;
    HEAP32[($0_1 + 28 | 0) >> 2] = 0;
    $3_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
    i64toi32_i32$0 = 0;
    HEAP32[($0_1 + 16 | 0) >> 2] = 0;
    HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$0;
    $2_1 = $3_1 ? $2_1 : -1;
   }
   $3_1 = HEAP32[$0_1 >> 2] | 0;
   HEAP32[$0_1 >> 2] = $3_1 | $4_1 | 0;
   $0_1 = $3_1 & 32 | 0 ? -1 : $2_1;
  }
  global$0 = $5_1 + 208 | 0;
  return $0_1 | 0;
 }
 
 function $120($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = $6_1 | 0;
  var $13_1 = 0, $7_1 = 0, $16_1 = 0, $21_1 = 0, $18_1 = 0, $15_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $14_1 = 0, $12_1 = 0, i64toi32_i32$2 = 0, $17_1 = 0, $20_1 = 0, $23_1 = 0, $19_1 = 0, i64toi32_i32$5 = 0, $26_1 = 0, $26$hi = 0, $10_1 = 0, $25_1 = 0, $11_1 = 0, i64toi32_i32$3 = 0, $22_1 = 0, $24_1 = 0, $34_1 = 0, $35_1 = 0, $36_1 = 0, $8_1 = 0, $9_1 = 0, $270 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $7_1 = global$0 - 64 | 0;
  global$0 = $7_1;
  HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
  $8_1 = $7_1 + 41 | 0;
  $9_1 = $7_1 + 39 | 0;
  $10_1 = $7_1 + 40 | 0;
  $11_1 = 0;
  $12_1 = 0;
  block68 : {
   block32 : {
    block26 : {
     block : {
      label4 : while (1) {
       $13_1 = 0;
       label1 : while (1) {
        $14_1 = $1_1;
        if (($13_1 | 0) > ($12_1 ^ 2147483647 | 0 | 0)) {
         break block
        }
        $12_1 = $13_1 + $12_1 | 0;
        $13_1 = $1_1;
        block31 : {
         block34 : {
          block47 : {
           block60 : {
            block15 : {
             block1 : {
              $15_1 = HEAPU8[$13_1 >> 0] | 0;
              if (!$15_1) {
               break block1
              }
              label7 : while (1) {
               block4 : {
                block3 : {
                 block2 : {
                  $15_1 = $15_1 & 255 | 0;
                  if ($15_1) {
                   break block2
                  }
                  $1_1 = $13_1;
                  break block3;
                 }
                 if (($15_1 | 0) != (37 | 0)) {
                  break block4
                 }
                 $15_1 = $13_1;
                 label : while (1) {
                  block5 : {
                   if ((HEAPU8[($15_1 + 1 | 0) >> 0] | 0 | 0) == (37 | 0)) {
                    break block5
                   }
                   $1_1 = $15_1;
                   break block3;
                  }
                  $13_1 = $13_1 + 1 | 0;
                  $16_1 = HEAPU8[($15_1 + 2 | 0) >> 0] | 0;
                  $1_1 = $15_1 + 2 | 0;
                  $15_1 = $1_1;
                  if (($16_1 | 0) == (37 | 0)) {
                   continue label
                  }
                  break label;
                 };
                }
                $13_1 = $13_1 - $14_1 | 0;
                $15_1 = $12_1 ^ 2147483647 | 0;
                if (($13_1 | 0) > ($15_1 | 0)) {
                 break block
                }
                block6 : {
                 if (!$0_1) {
                  break block6
                 }
                 $121($0_1 | 0, $14_1 | 0, $13_1 | 0);
                }
                if ($13_1) {
                 continue label1
                }
                HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
                $13_1 = $1_1 + 1 | 0;
                $17_1 = -1;
                block7 : {
                 $16_1 = (HEAP8[($1_1 + 1 | 0) >> 0] | 0) + -48 | 0;
                 if ($16_1 >>> 0 > 9 >>> 0) {
                  break block7
                 }
                 if ((HEAPU8[($1_1 + 2 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                  break block7
                 }
                 $13_1 = $1_1 + 3 | 0;
                 $11_1 = 1;
                 $17_1 = $16_1;
                }
                HEAP32[($7_1 + 60 | 0) >> 2] = $13_1;
                $18_1 = 0;
                block9 : {
                 block8 : {
                  $19_1 = HEAP8[$13_1 >> 0] | 0;
                  $1_1 = $19_1 + -32 | 0;
                  if ($1_1 >>> 0 <= 31 >>> 0) {
                   break block8
                  }
                  $16_1 = $13_1;
                  break block9;
                 }
                 $18_1 = 0;
                 $16_1 = $13_1;
                 $1_1 = 1 << $1_1 | 0;
                 if (!($1_1 & 75913 | 0)) {
                  break block9
                 }
                 label2 : while (1) {
                  $16_1 = $13_1 + 1 | 0;
                  HEAP32[($7_1 + 60 | 0) >> 2] = $16_1;
                  $18_1 = $1_1 | $18_1 | 0;
                  $19_1 = HEAP8[($13_1 + 1 | 0) >> 0] | 0;
                  $1_1 = $19_1 + -32 | 0;
                  if ($1_1 >>> 0 >= 32 >>> 0) {
                   break block9
                  }
                  $13_1 = $16_1;
                  $1_1 = 1 << $1_1 | 0;
                  if ($1_1 & 75913 | 0) {
                   continue label2
                  }
                  break label2;
                 };
                }
                block17 : {
                 block10 : {
                  if (($19_1 | 0) != (42 | 0)) {
                   break block10
                  }
                  block14 : {
                   block11 : {
                    $13_1 = (HEAP8[($16_1 + 1 | 0) >> 0] | 0) + -48 | 0;
                    if ($13_1 >>> 0 > 9 >>> 0) {
                     break block11
                    }
                    if ((HEAPU8[($16_1 + 2 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                     break block11
                    }
                    block13 : {
                     block12 : {
                      if ($0_1) {
                       break block12
                      }
                      HEAP32[($4_1 + ($13_1 << 2 | 0) | 0) >> 2] = 10;
                      $20_1 = 0;
                      break block13;
                     }
                     $20_1 = HEAP32[($3_1 + ($13_1 << 3 | 0) | 0) >> 2] | 0;
                    }
                    $1_1 = $16_1 + 3 | 0;
                    $11_1 = 1;
                    break block14;
                   }
                   if ($11_1) {
                    break block15
                   }
                   $1_1 = $16_1 + 1 | 0;
                   block16 : {
                    if ($0_1) {
                     break block16
                    }
                    HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
                    $11_1 = 0;
                    $20_1 = 0;
                    break block17;
                   }
                   $13_1 = HEAP32[$2_1 >> 2] | 0;
                   HEAP32[$2_1 >> 2] = $13_1 + 4 | 0;
                   $20_1 = HEAP32[$13_1 >> 2] | 0;
                   $11_1 = 0;
                  }
                  HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
                  if (($20_1 | 0) > (-1 | 0)) {
                   break block17
                  }
                  $20_1 = 0 - $20_1 | 0;
                  $18_1 = $18_1 | 8192 | 0;
                  break block17;
                 }
                 $20_1 = $122($7_1 + 60 | 0 | 0) | 0;
                 if (($20_1 | 0) < (0 | 0)) {
                  break block
                 }
                 $1_1 = HEAP32[($7_1 + 60 | 0) >> 2] | 0;
                }
                $13_1 = 0;
                $21_1 = -1;
                block19 : {
                 block18 : {
                  if ((HEAPU8[$1_1 >> 0] | 0 | 0) == (46 | 0)) {
                   break block18
                  }
                  $22_1 = 0;
                  break block19;
                 }
                 block20 : {
                  if ((HEAPU8[($1_1 + 1 | 0) >> 0] | 0 | 0) != (42 | 0)) {
                   break block20
                  }
                  block24 : {
                   block21 : {
                    $16_1 = (HEAP8[($1_1 + 2 | 0) >> 0] | 0) + -48 | 0;
                    if ($16_1 >>> 0 > 9 >>> 0) {
                     break block21
                    }
                    if ((HEAPU8[($1_1 + 3 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                     break block21
                    }
                    block23 : {
                     block22 : {
                      if ($0_1) {
                       break block22
                      }
                      HEAP32[($4_1 + ($16_1 << 2 | 0) | 0) >> 2] = 10;
                      $21_1 = 0;
                      break block23;
                     }
                     $21_1 = HEAP32[($3_1 + ($16_1 << 3 | 0) | 0) >> 2] | 0;
                    }
                    $1_1 = $1_1 + 4 | 0;
                    break block24;
                   }
                   if ($11_1) {
                    break block15
                   }
                   $1_1 = $1_1 + 2 | 0;
                   block25 : {
                    if ($0_1) {
                     break block25
                    }
                    $21_1 = 0;
                    break block24;
                   }
                   $16_1 = HEAP32[$2_1 >> 2] | 0;
                   HEAP32[$2_1 >> 2] = $16_1 + 4 | 0;
                   $21_1 = HEAP32[$16_1 >> 2] | 0;
                  }
                  HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
                  $22_1 = ($21_1 | 0) > (-1 | 0);
                  break block19;
                 }
                 HEAP32[($7_1 + 60 | 0) >> 2] = $1_1 + 1 | 0;
                 $22_1 = 1;
                 $21_1 = $122($7_1 + 60 | 0 | 0) | 0;
                 $1_1 = HEAP32[($7_1 + 60 | 0) >> 2] | 0;
                }
                label3 : while (1) {
                 $16_1 = $13_1;
                 $23_1 = 28;
                 $19_1 = $1_1;
                 $13_1 = HEAP8[$1_1 >> 0] | 0;
                 if (($13_1 + -123 | 0) >>> 0 < -58 >>> 0) {
                  break block26
                 }
                 $1_1 = $1_1 + 1 | 0;
                 $13_1 = HEAPU8[((Math_imul($16_1, 58) + $13_1 | 0) + 69823 | 0) >> 0] | 0;
                 if ((($13_1 + -1 | 0) & 255 | 0) >>> 0 < 8 >>> 0) {
                  continue label3
                 }
                 break label3;
                };
                HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
                block30 : {
                 block27 : {
                  if (($13_1 | 0) == (27 | 0)) {
                   break block27
                  }
                  if (!$13_1) {
                   break block26
                  }
                  block28 : {
                   if (($17_1 | 0) < (0 | 0)) {
                    break block28
                   }
                   block29 : {
                    if ($0_1) {
                     break block29
                    }
                    HEAP32[($4_1 + ($17_1 << 2 | 0) | 0) >> 2] = $13_1;
                    continue label4;
                   }
                   i64toi32_i32$2 = $3_1 + ($17_1 << 3 | 0) | 0;
                   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                   $270 = i64toi32_i32$0;
                   i64toi32_i32$0 = $7_1;
                   HEAP32[($7_1 + 48 | 0) >> 2] = $270;
                   HEAP32[($7_1 + 52 | 0) >> 2] = i64toi32_i32$1;
                   break block30;
                  }
                  if (!$0_1) {
                   break block31
                  }
                  $123($7_1 + 48 | 0 | 0, $13_1 | 0, $2_1 | 0, $6_1 | 0);
                  break block30;
                 }
                 if (($17_1 | 0) > (-1 | 0)) {
                  break block26
                 }
                 $13_1 = 0;
                 if (!$0_1) {
                  continue label1
                 }
                }
                if ((HEAPU8[$0_1 >> 0] | 0) & 32 | 0) {
                 break block32
                }
                $24_1 = $18_1 & -65537 | 0;
                $18_1 = $18_1 & 8192 | 0 ? $24_1 : $18_1;
                $17_1 = 0;
                $25_1 = 65536;
                $23_1 = $10_1;
                block35 : {
                 block65 : {
                  block64 : {
                   block62 : {
                    block46 : {
                     block44 : {
                      block41 : {
                       block36 : {
                        block56 : {
                         block48 : {
                          block37 : {
                           block39 : {
                            block33 : {
                             block40 : {
                              block38 : {
                               block42 : {
                                block43 : {
                                 $19_1 = HEAPU8[$19_1 >> 0] | 0;
                                 $13_1 = $19_1 << 24 >> 24;
                                 $13_1 = $16_1 ? (($19_1 & 15 | 0 | 0) == (3 | 0) ? $13_1 & -45 | 0 : $13_1) : $13_1;
                                 switch ($13_1 + -88 | 0 | 0) {
                                 case 0:
                                 case 32:
                                  break block33;
                                 case 1:
                                 case 2:
                                 case 3:
                                 case 4:
                                 case 5:
                                 case 6:
                                 case 7:
                                 case 8:
                                 case 10:
                                 case 16:
                                 case 18:
                                 case 19:
                                 case 20:
                                 case 21:
                                 case 25:
                                 case 26:
                                 case 28:
                                 case 30:
                                 case 31:
                                  break block34;
                                 case 9:
                                 case 13:
                                 case 14:
                                 case 15:
                                  break block35;
                                 case 11:
                                  break block36;
                                 case 12:
                                 case 17:
                                  break block37;
                                 case 22:
                                  break block38;
                                 case 23:
                                  break block39;
                                 case 24:
                                  break block40;
                                 case 27:
                                  break block41;
                                 case 29:
                                  break block42;
                                 default:
                                  break block43;
                                 };
                                }
                                $23_1 = $10_1;
                                block45 : {
                                 switch ($13_1 + -65 | 0 | 0) {
                                 case 1:
                                 case 3:
                                  break block34;
                                 case 0:
                                 case 4:
                                 case 5:
                                 case 6:
                                  break block35;
                                 case 2:
                                  break block44;
                                 default:
                                  break block45;
                                 };
                                }
                                if (($13_1 | 0) == (83 | 0)) {
                                 break block46
                                }
                                break block47;
                               }
                               $17_1 = 0;
                               $25_1 = 65536;
                               i64toi32_i32$2 = $7_1;
                               i64toi32_i32$1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                               i64toi32_i32$0 = HEAP32[($7_1 + 52 | 0) >> 2] | 0;
                               $26_1 = i64toi32_i32$1;
                               $26$hi = i64toi32_i32$0;
                               break block48;
                              }
                              $13_1 = 0;
                              block55 : {
                               switch ($16_1 | 0) {
                               case 0:
                                HEAP32[(HEAP32[($7_1 + 48 | 0) >> 2] | 0) >> 2] = $12_1;
                                continue label1;
                               case 1:
                                HEAP32[(HEAP32[($7_1 + 48 | 0) >> 2] | 0) >> 2] = $12_1;
                                continue label1;
                               case 2:
                                i64toi32_i32$1 = $12_1;
                                i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
                                i64toi32_i32$1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                                HEAP32[i64toi32_i32$1 >> 2] = $12_1;
                                HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
                                continue label1;
                               case 3:
                                HEAP16[(HEAP32[($7_1 + 48 | 0) >> 2] | 0) >> 1] = $12_1;
                                continue label1;
                               case 4:
                                HEAP8[(HEAP32[($7_1 + 48 | 0) >> 2] | 0) >> 0] = $12_1;
                                continue label1;
                               case 6:
                                HEAP32[(HEAP32[($7_1 + 48 | 0) >> 2] | 0) >> 2] = $12_1;
                                continue label1;
                               case 7:
                                break block55;
                               default:
                                continue label1;
                               };
                              }
                              i64toi32_i32$1 = $12_1;
                              i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
                              i64toi32_i32$1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                              HEAP32[i64toi32_i32$1 >> 2] = $12_1;
                              HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
                              continue label1;
                             }
                             $21_1 = $21_1 >>> 0 > 8 >>> 0 ? $21_1 : 8;
                             $18_1 = $18_1 | 8 | 0;
                             $13_1 = 120;
                            }
                            $17_1 = 0;
                            $25_1 = 65536;
                            i64toi32_i32$2 = $7_1;
                            i64toi32_i32$0 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                            i64toi32_i32$1 = HEAP32[($7_1 + 52 | 0) >> 2] | 0;
                            $26_1 = i64toi32_i32$0;
                            $26$hi = i64toi32_i32$1;
                            $14_1 = $124(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, $10_1 | 0, $13_1 & 32 | 0 | 0) | 0;
                            if (!(i64toi32_i32$0 | i64toi32_i32$1 | 0)) {
                             break block56
                            }
                            if (!($18_1 & 8 | 0)) {
                             break block56
                            }
                            $25_1 = ($13_1 >>> 4 | 0) + 65536 | 0;
                            $17_1 = 2;
                            break block56;
                           }
                           $17_1 = 0;
                           $25_1 = 65536;
                           i64toi32_i32$2 = $7_1;
                           i64toi32_i32$1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                           i64toi32_i32$0 = HEAP32[($7_1 + 52 | 0) >> 2] | 0;
                           $26_1 = i64toi32_i32$1;
                           $26$hi = i64toi32_i32$0;
                           $14_1 = $125(i64toi32_i32$1 | 0, i64toi32_i32$0 | 0, $10_1 | 0) | 0;
                           if (!($18_1 & 8 | 0)) {
                            break block56
                           }
                           $13_1 = $8_1 - $14_1 | 0;
                           $21_1 = ($21_1 | 0) > ($13_1 | 0) ? $21_1 : $13_1;
                           break block56;
                          }
                          block57 : {
                           i64toi32_i32$2 = $7_1;
                           i64toi32_i32$0 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                           i64toi32_i32$1 = HEAP32[($7_1 + 52 | 0) >> 2] | 0;
                           $26_1 = i64toi32_i32$0;
                           $26$hi = i64toi32_i32$1;
                           i64toi32_i32$2 = i64toi32_i32$0;
                           i64toi32_i32$0 = -1;
                           i64toi32_i32$3 = -1;
                           if ((i64toi32_i32$1 | 0) > (i64toi32_i32$0 | 0)) {
                            $34_1 = 1
                           } else {
                            if ((i64toi32_i32$1 | 0) >= (i64toi32_i32$0 | 0)) {
                             if (i64toi32_i32$2 >>> 0 <= i64toi32_i32$3 >>> 0) {
                              $35_1 = 0
                             } else {
                              $35_1 = 1
                             }
                             $36_1 = $35_1;
                            } else {
                             $36_1 = 0
                            }
                            $34_1 = $36_1;
                           }
                           if ($34_1) {
                            break block57
                           }
                           i64toi32_i32$2 = $26$hi;
                           i64toi32_i32$2 = 0;
                           i64toi32_i32$3 = 0;
                           i64toi32_i32$1 = $26$hi;
                           i64toi32_i32$0 = $26_1;
                           i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$0 >>> 0) + i64toi32_i32$1 | 0;
                           i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
                           $26_1 = i64toi32_i32$3 - i64toi32_i32$0 | 0;
                           $26$hi = i64toi32_i32$5;
                           i64toi32_i32$3 = $7_1;
                           HEAP32[($7_1 + 48 | 0) >> 2] = $26_1;
                           HEAP32[($7_1 + 52 | 0) >> 2] = i64toi32_i32$5;
                           $17_1 = 1;
                           $25_1 = 65536;
                           break block48;
                          }
                          block58 : {
                           if (!($18_1 & 2048 | 0)) {
                            break block58
                           }
                           $17_1 = 1;
                           $25_1 = 65537;
                           break block48;
                          }
                          $17_1 = $18_1 & 1 | 0;
                          $25_1 = $17_1 ? 65538 : 65536;
                         }
                         i64toi32_i32$5 = $26$hi;
                         $14_1 = $126($26_1 | 0, i64toi32_i32$5 | 0, $10_1 | 0) | 0;
                        }
                        if ($22_1 & ($21_1 | 0) < (0 | 0) | 0) {
                         break block
                        }
                        $18_1 = $22_1 ? $18_1 & -65537 | 0 : $18_1;
                        block59 : {
                         i64toi32_i32$5 = $26$hi;
                         i64toi32_i32$2 = $26_1;
                         i64toi32_i32$3 = 0;
                         i64toi32_i32$0 = 0;
                         if ((i64toi32_i32$2 | 0) != (i64toi32_i32$0 | 0) | (i64toi32_i32$5 | 0) != (i64toi32_i32$3 | 0) | 0) {
                          break block59
                         }
                         if ($21_1) {
                          break block59
                         }
                         $14_1 = $10_1;
                         $23_1 = $14_1;
                         $21_1 = 0;
                         break block34;
                        }
                        i64toi32_i32$2 = $26$hi;
                        $13_1 = ($10_1 - $14_1 | 0) + !($26_1 | i64toi32_i32$2 | 0) | 0;
                        $21_1 = ($21_1 | 0) > ($13_1 | 0) ? $21_1 : $13_1;
                        break block47;
                       }
                       $13_1 = HEAPU8[($7_1 + 48 | 0) >> 0] | 0;
                       break block60;
                      }
                      $13_1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                      $14_1 = $13_1 ? $13_1 : 65935;
                      $13_1 = $114($14_1 | 0, ($21_1 >>> 0 < 2147483647 >>> 0 ? $21_1 : 2147483647) | 0) | 0;
                      $23_1 = $14_1 + $13_1 | 0;
                      block61 : {
                       if (($21_1 | 0) <= (-1 | 0)) {
                        break block61
                       }
                       $18_1 = $24_1;
                       $21_1 = $13_1;
                       break block34;
                      }
                      $18_1 = $24_1;
                      $21_1 = $13_1;
                      if (HEAPU8[$23_1 >> 0] | 0) {
                       break block
                      }
                      break block34;
                     }
                     i64toi32_i32$0 = $7_1;
                     i64toi32_i32$2 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                     i64toi32_i32$5 = HEAP32[($7_1 + 52 | 0) >> 2] | 0;
                     $26_1 = i64toi32_i32$2;
                     $26$hi = i64toi32_i32$5;
                     if (!!(i64toi32_i32$2 | i64toi32_i32$5 | 0)) {
                      break block62
                     }
                     $13_1 = 0;
                     break block60;
                    }
                    block63 : {
                     if (!$21_1) {
                      break block63
                     }
                     $15_1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                     break block64;
                    }
                    $13_1 = 0;
                    $127($0_1 | 0, 32 | 0, $20_1 | 0, 0 | 0, $18_1 | 0);
                    break block65;
                   }
                   HEAP32[($7_1 + 12 | 0) >> 2] = 0;
                   i64toi32_i32$5 = $26$hi;
                   HEAP32[($7_1 + 8 | 0) >> 2] = $26_1;
                   HEAP32[($7_1 + 48 | 0) >> 2] = $7_1 + 8 | 0;
                   $15_1 = $7_1 + 8 | 0;
                   $21_1 = -1;
                  }
                  $13_1 = 0;
                  block66 : {
                   label5 : while (1) {
                    $16_1 = HEAP32[$15_1 >> 2] | 0;
                    if (!$16_1) {
                     break block66
                    }
                    $16_1 = $137($7_1 + 4 | 0 | 0, $16_1 | 0) | 0;
                    if (($16_1 | 0) < (0 | 0)) {
                     break block32
                    }
                    if ($16_1 >>> 0 > ($21_1 - $13_1 | 0) >>> 0) {
                     break block66
                    }
                    $15_1 = $15_1 + 4 | 0;
                    $13_1 = $16_1 + $13_1 | 0;
                    if ($13_1 >>> 0 < $21_1 >>> 0) {
                     continue label5
                    }
                    break label5;
                   };
                  }
                  $23_1 = 61;
                  if (($13_1 | 0) < (0 | 0)) {
                   break block26
                  }
                  $127($0_1 | 0, 32 | 0, $20_1 | 0, $13_1 | 0, $18_1 | 0);
                  block67 : {
                   if ($13_1) {
                    break block67
                   }
                   $13_1 = 0;
                   break block65;
                  }
                  $16_1 = 0;
                  $15_1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                  label6 : while (1) {
                   $14_1 = HEAP32[$15_1 >> 2] | 0;
                   if (!$14_1) {
                    break block65
                   }
                   $14_1 = $137($7_1 + 4 | 0 | 0, $14_1 | 0) | 0;
                   $16_1 = $14_1 + $16_1 | 0;
                   if ($16_1 >>> 0 > $13_1 >>> 0) {
                    break block65
                   }
                   $121($0_1 | 0, $7_1 + 4 | 0 | 0, $14_1 | 0);
                   $15_1 = $15_1 + 4 | 0;
                   if ($16_1 >>> 0 < $13_1 >>> 0) {
                    continue label6
                   }
                   break label6;
                  };
                 }
                 $127($0_1 | 0, 32 | 0, $20_1 | 0, $13_1 | 0, $18_1 ^ 8192 | 0 | 0);
                 $13_1 = ($20_1 | 0) > ($13_1 | 0) ? $20_1 : $13_1;
                 continue label1;
                }
                if ($22_1 & ($21_1 | 0) < (0 | 0) | 0) {
                 break block
                }
                $23_1 = 61;
                $13_1 = FUNCTION_TABLE[$5_1 | 0]($0_1, +HEAPF64[($7_1 + 48 | 0) >> 3], $20_1, $21_1, $18_1, $13_1) | 0;
                if (($13_1 | 0) >= (0 | 0)) {
                 continue label1
                }
                break block26;
               }
               $15_1 = HEAPU8[($13_1 + 1 | 0) >> 0] | 0;
               $13_1 = $13_1 + 1 | 0;
               continue label7;
              };
             }
             if ($0_1) {
              break block68
             }
             if (!$11_1) {
              break block31
             }
             $13_1 = 1;
             block69 : {
              label8 : while (1) {
               $15_1 = HEAP32[($4_1 + ($13_1 << 2 | 0) | 0) >> 2] | 0;
               if (!$15_1) {
                break block69
               }
               $123($3_1 + ($13_1 << 3 | 0) | 0 | 0, $15_1 | 0, $2_1 | 0, $6_1 | 0);
               $12_1 = 1;
               $13_1 = $13_1 + 1 | 0;
               if (($13_1 | 0) != (10 | 0)) {
                continue label8
               }
               break block68;
              };
             }
             block70 : {
              if ($13_1 >>> 0 < 10 >>> 0) {
               break block70
              }
              $12_1 = 1;
              break block68;
             }
             label9 : while (1) {
              if (HEAP32[($4_1 + ($13_1 << 2 | 0) | 0) >> 2] | 0) {
               break block15
              }
              $12_1 = 1;
              $13_1 = $13_1 + 1 | 0;
              if (($13_1 | 0) == (10 | 0)) {
               break block68
              }
              continue label9;
             };
            }
            $23_1 = 28;
            break block26;
           }
           HEAP8[($7_1 + 39 | 0) >> 0] = $13_1;
           $21_1 = 1;
           $14_1 = $9_1;
           $23_1 = $10_1;
           $18_1 = $24_1;
           break block34;
          }
          $23_1 = $10_1;
         }
         $1_1 = $23_1 - $14_1 | 0;
         $19_1 = ($21_1 | 0) > ($1_1 | 0) ? $21_1 : $1_1;
         if (($19_1 | 0) > ($17_1 ^ 2147483647 | 0 | 0)) {
          break block
         }
         $23_1 = 61;
         $16_1 = $17_1 + $19_1 | 0;
         $13_1 = ($20_1 | 0) > ($16_1 | 0) ? $20_1 : $16_1;
         if ($13_1 >>> 0 > $15_1 >>> 0) {
          break block26
         }
         $127($0_1 | 0, 32 | 0, $13_1 | 0, $16_1 | 0, $18_1 | 0);
         $121($0_1 | 0, $25_1 | 0, $17_1 | 0);
         $127($0_1 | 0, 48 | 0, $13_1 | 0, $16_1 | 0, $18_1 ^ 65536 | 0 | 0);
         $127($0_1 | 0, 48 | 0, $19_1 | 0, $1_1 | 0, 0 | 0);
         $121($0_1 | 0, $14_1 | 0, $1_1 | 0);
         $127($0_1 | 0, 32 | 0, $13_1 | 0, $16_1 | 0, $18_1 ^ 8192 | 0 | 0);
         $1_1 = HEAP32[($7_1 + 60 | 0) >> 2] | 0;
         continue label1;
        }
        break label1;
       };
       break label4;
      };
      $12_1 = 0;
      break block68;
     }
     $23_1 = 61;
    }
    (wasm2js_i32$0 = $75() | 0, wasm2js_i32$1 = $23_1), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
   }
   $12_1 = -1;
  }
  global$0 = $7_1 + 64 | 0;
  return $12_1 | 0;
 }
 
 function $121($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  block : {
   if ((HEAPU8[$0_1 >> 0] | 0) & 32 | 0) {
    break block
   }
   $118($1_1 | 0, $2_1 | 0, $0_1 | 0) | 0;
  }
 }
 
 function $122($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $1_1 = 0, $2_1 = 0, $4_1 = 0, $5_1 = 0;
  $1_1 = 0;
  block : {
   $2_1 = HEAP32[$0_1 >> 2] | 0;
   $3_1 = (HEAP8[$2_1 >> 0] | 0) + -48 | 0;
   if ($3_1 >>> 0 <= 9 >>> 0) {
    break block
   }
   return 0 | 0;
  }
  label : while (1) {
   $4_1 = -1;
   block1 : {
    if ($1_1 >>> 0 > 214748364 >>> 0) {
     break block1
    }
    $1_1 = Math_imul($1_1, 10);
    $4_1 = $3_1 >>> 0 > ($1_1 ^ 2147483647 | 0) >>> 0 ? -1 : $3_1 + $1_1 | 0;
   }
   $3_1 = $2_1 + 1 | 0;
   HEAP32[$0_1 >> 2] = $3_1;
   $5_1 = HEAP8[($2_1 + 1 | 0) >> 0] | 0;
   $1_1 = $4_1;
   $2_1 = $3_1;
   $3_1 = $5_1 + -48 | 0;
   if ($3_1 >>> 0 < 10 >>> 0) {
    continue label
   }
   break label;
  };
  return $1_1 | 0;
 }
 
 function $123($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $21_1 = 0, $29_1 = 0, $37_1 = 0, $45_1 = 0, $55_1 = 0, $63_1 = 0, $71_1 = 0, $79_1 = 0, $87_1 = 0, $97_1 = 0, $105_1 = 0, $115_1 = 0, $125_1 = 0, $133_1 = 0, $141_1 = 0;
  block18 : {
   switch ($1_1 + -9 | 0 | 0) {
   case 0:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    HEAP32[$0_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
    return;
   case 1:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
    $21_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $21_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 2:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$0 = 0;
    $29_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $29_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 4:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
    $37_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $37_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 5:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$0 = 0;
    $45_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $45_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 3:
    $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    $55_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $55_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 6:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$1 = HEAP16[$1_1 >> 1] | 0;
    i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
    $63_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $63_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 7:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAPU16[$1_1 >> 1] | 0;
    i64toi32_i32$1 = 0;
    $71_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $71_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 8:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$1 = HEAP8[$1_1 >> 0] | 0;
    i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
    $79_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $79_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 9:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAPU8[$1_1 >> 0] | 0;
    i64toi32_i32$1 = 0;
    $87_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $87_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 10:
    $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
    i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    $97_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $97_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 11:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = 0;
    $105_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $105_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 12:
    $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
    i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    $115_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $115_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 13:
    $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    $125_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $125_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 14:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
    $133_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $133_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 15:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = 0;
    $141_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $141_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 16:
    $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
    HEAPF64[$0_1 >> 3] = +HEAPF64[$1_1 >> 3];
    return;
   case 17:
    FUNCTION_TABLE[$3_1 | 0]($0_1, $2_1);
    break;
   default:
    break block18;
   };
  }
 }
 
 function $124($0_1, $0$hi, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, $9_1 = 0;
  block : {
   i64toi32_i32$0 = $0$hi;
   if (!($0_1 | i64toi32_i32$0 | 0)) {
    break block
   }
   label : while (1) {
    $1_1 = $1_1 + -1 | 0;
    i64toi32_i32$0 = $0$hi;
    HEAP8[$1_1 >> 0] = HEAPU8[(($0_1 & 15 | 0) + 70352 | 0) >> 0] | 0 | $2_1 | 0;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 4;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $9_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     $9_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    $0_1 = $9_1;
    $0$hi = i64toi32_i32$1;
    i64toi32_i32$0 = $0_1;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 0;
    if ((i64toi32_i32$0 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0) {
     continue label
    }
    break label;
   };
  }
  return $1_1 | 0;
 }
 
 function $125($0_1, $0$hi, $1_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, $8_1 = 0;
  block : {
   i64toi32_i32$0 = $0$hi;
   if (!($0_1 | i64toi32_i32$0 | 0)) {
    break block
   }
   label : while (1) {
    $1_1 = $1_1 + -1 | 0;
    i64toi32_i32$0 = $0$hi;
    HEAP8[$1_1 >> 0] = $0_1 & 7 | 0 | 48 | 0;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 3;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $8_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     $8_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    $0_1 = $8_1;
    $0$hi = i64toi32_i32$1;
    i64toi32_i32$0 = $0_1;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 0;
    if ((i64toi32_i32$0 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0) {
     continue label
    }
    break label;
   };
  }
  return $1_1 | 0;
 }
 
 function $126($0_1, $0$hi, $1_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, $3_1 = 0, $4_1 = 0, $2_1 = 0, $2$hi = 0, $16_1 = 0, $16$hi = 0, $5_1 = 0;
  block : {
   i64toi32_i32$0 = $0$hi;
   i64toi32_i32$2 = $0_1;
   i64toi32_i32$1 = 1;
   i64toi32_i32$3 = 0;
   if (i64toi32_i32$0 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
    break block
   }
   label : while (1) {
    $1_1 = $1_1 + -1 | 0;
    i64toi32_i32$2 = $0$hi;
    $2_1 = $0_1;
    $2$hi = i64toi32_i32$2;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_udiv($0_1 | 0, i64toi32_i32$2 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $0_1 = i64toi32_i32$0;
    $0$hi = i64toi32_i32$2;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_mul($0_1 | 0, i64toi32_i32$2 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $16_1 = i64toi32_i32$0;
    $16$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $2$hi;
    i64toi32_i32$3 = $2_1;
    i64toi32_i32$0 = $16$hi;
    i64toi32_i32$1 = $16_1;
    i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0) + i64toi32_i32$0 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
    HEAP8[$1_1 >> 0] = i64toi32_i32$3 - i64toi32_i32$1 | 0 | 48 | 0;
    i64toi32_i32$5 = i64toi32_i32$2;
    i64toi32_i32$5 = i64toi32_i32$2;
    i64toi32_i32$2 = i64toi32_i32$3;
    i64toi32_i32$3 = 9;
    i64toi32_i32$1 = -1;
    if (i64toi32_i32$5 >>> 0 > i64toi32_i32$3 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0) {
     continue label
    }
    break label;
   };
  }
  block1 : {
   i64toi32_i32$2 = $0$hi;
   if (!($0_1 | i64toi32_i32$2 | 0)) {
    break block1
   }
   $3_1 = $0_1;
   label1 : while (1) {
    $1_1 = $1_1 + -1 | 0;
    $4_1 = ($3_1 >>> 0) / (10 >>> 0) | 0;
    HEAP8[$1_1 >> 0] = $3_1 - Math_imul($4_1, 10) | 0 | 48 | 0;
    $5_1 = $3_1 >>> 0 > 9 >>> 0;
    $3_1 = $4_1;
    if ($5_1) {
     continue label1
    }
    break label1;
   };
  }
  return $1_1 | 0;
 }
 
 function $127($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0;
  $5_1 = global$0 - 256 | 0;
  global$0 = $5_1;
  block : {
   if (($2_1 | 0) <= ($3_1 | 0)) {
    break block
   }
   if ($4_1 & 73728 | 0) {
    break block
   }
   $3_1 = $2_1 - $3_1 | 0;
   $2_1 = $3_1 >>> 0 < 256 >>> 0;
   $77($5_1 | 0, $1_1 | 0, ($2_1 ? $3_1 : 256) | 0) | 0;
   block1 : {
    if ($2_1) {
     break block1
    }
    label : while (1) {
     $121($0_1 | 0, $5_1 | 0, 256 | 0);
     $3_1 = $3_1 + -256 | 0;
     if ($3_1 >>> 0 > 255 >>> 0) {
      continue label
     }
     break label;
    };
   }
   $121($0_1 | 0, $5_1 | 0, $3_1 | 0);
  }
  global$0 = $5_1 + 256 | 0;
 }
 
 function $128($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $119($0_1 | 0, $1_1 | 0, $2_1 | 0, 8 | 0, 9 | 0) | 0 | 0;
 }
 
 function $129($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var $10_1 = 0, $11_1 = 0, $18_1 = 0, $19_1 = 0, $12_1 = 0, $15_1 = 0, $6_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$5 = 0, $22_1 = 0, i64toi32_i32$3 = 0, i64toi32_i32$0 = 0, $23_1 = 0, $20_1 = 0, $8_1 = 0, $17_1 = 0, $27_1 = 0.0, $13_1 = 0, $24_1 = 0, $24$hi = 0, $14_1 = 0, $16_1 = 0, $9_1 = 0, $21_1 = 0, $7_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, $142_1 = 0, $25$hi = 0, $49_1 = 0, $897 = 0, $133_1 = 0, $25_1 = 0, $172_1 = 0, $174$hi = 0, $176$hi = 0, $26$hi = 0, $183 = 0, $183$hi = 0, $389 = 0.0, $890 = 0;
  $6_1 = global$0 - 560 | 0;
  global$0 = $6_1;
  $7_1 = 0;
  HEAP32[($6_1 + 44 | 0) >> 2] = 0;
  block1 : {
   block : {
    i64toi32_i32$0 = $131(+$1_1) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    $24_1 = i64toi32_i32$0;
    $24$hi = i64toi32_i32$1;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$0 = -1;
    i64toi32_i32$3 = -1;
    if ((i64toi32_i32$1 | 0) > (i64toi32_i32$0 | 0)) {
     $46_1 = 1
    } else {
     if ((i64toi32_i32$1 | 0) >= (i64toi32_i32$0 | 0)) {
      if (i64toi32_i32$2 >>> 0 <= i64toi32_i32$3 >>> 0) {
       $47_1 = 0
      } else {
       $47_1 = 1
      }
      $48_1 = $47_1;
     } else {
      $48_1 = 0
     }
     $46_1 = $48_1;
    }
    if ($46_1) {
     break block
    }
    $8_1 = 1;
    $9_1 = 65546;
    $1_1 = -$1_1;
    i64toi32_i32$2 = $131(+$1_1) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    $24_1 = i64toi32_i32$2;
    $24$hi = i64toi32_i32$1;
    break block1;
   }
   block2 : {
    if (!($4_1 & 2048 | 0)) {
     break block2
    }
    $8_1 = 1;
    $9_1 = 65549;
    break block1;
   }
   $8_1 = $4_1 & 1 | 0;
   $9_1 = $8_1 ? 65552 : 65547;
   $7_1 = !$8_1;
  }
  block4 : {
   block3 : {
    i64toi32_i32$1 = $24$hi;
    i64toi32_i32$3 = $24_1;
    i64toi32_i32$2 = 2146435072;
    i64toi32_i32$0 = 0;
    i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$2 | 0;
    i64toi32_i32$1 = i64toi32_i32$3 & i64toi32_i32$0 | 0;
    i64toi32_i32$3 = 2146435072;
    i64toi32_i32$0 = 0;
    if ((i64toi32_i32$1 | 0) != (i64toi32_i32$0 | 0) | (i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | 0) {
     break block3
    }
    $10_1 = $8_1 + 3 | 0;
    $127($0_1 | 0, 32 | 0, $2_1 | 0, $10_1 | 0, $4_1 & -65537 | 0 | 0);
    $121($0_1 | 0, $9_1 | 0, $8_1 | 0);
    $11_1 = $5_1 & 32 | 0;
    $121($0_1 | 0, ($1_1 != $1_1 ? ($11_1 ? 65744 : 65834) : $11_1 ? 65761 : 65838) | 0, 3 | 0);
    $127($0_1 | 0, 32 | 0, $2_1 | 0, $10_1 | 0, $4_1 ^ 8192 | 0 | 0);
    $12_1 = ($2_1 | 0) > ($10_1 | 0) ? $2_1 : $10_1;
    break block4;
   }
   $13_1 = $6_1 + 16 | 0;
   block7 : {
    block8 : {
     block6 : {
      block5 : {
       $1_1 = +$115(+$1_1, $6_1 + 44 | 0 | 0);
       $1_1 = $1_1 + $1_1;
       if ($1_1 == 0.0) {
        break block5
       }
       $10_1 = HEAP32[($6_1 + 44 | 0) >> 2] | 0;
       HEAP32[($6_1 + 44 | 0) >> 2] = $10_1 + -1 | 0;
       $14_1 = $5_1 | 32 | 0;
       if (($14_1 | 0) != (97 | 0)) {
        break block6
       }
       break block7;
      }
      $14_1 = $5_1 | 32 | 0;
      if (($14_1 | 0) == (97 | 0)) {
       break block7
      }
      $15_1 = ($3_1 | 0) < (0 | 0) ? 6 : $3_1;
      $16_1 = HEAP32[($6_1 + 44 | 0) >> 2] | 0;
      break block8;
     }
     $16_1 = $10_1 + -29 | 0;
     HEAP32[($6_1 + 44 | 0) >> 2] = $16_1;
     $15_1 = ($3_1 | 0) < (0 | 0) ? 6 : $3_1;
     $1_1 = $1_1 * 268435456.0;
    }
    $17_1 = ($6_1 + 48 | 0) + (($16_1 | 0) < (0 | 0) ? 0 : 288) | 0;
    $11_1 = $17_1;
    label : while (1) {
     $133_1 = $11_1;
     if ($1_1 < 4294967295.0 & $1_1 >= 0.0 | 0) {
      $142_1 = ~~$1_1 >>> 0
     } else {
      $142_1 = 0
     }
     $10_1 = $142_1;
     HEAP32[$133_1 >> 2] = $10_1;
     $11_1 = $11_1 + 4 | 0;
     $1_1 = ($1_1 - +($10_1 >>> 0)) * 1.0e9;
     if ($1_1 != 0.0) {
      continue label
     }
     break label;
    };
    block10 : {
     block9 : {
      if (($16_1 | 0) >= (1 | 0)) {
       break block9
      }
      $18_1 = $16_1;
      $10_1 = $11_1;
      $19_1 = $17_1;
      break block10;
     }
     $19_1 = $17_1;
     $18_1 = $16_1;
     label3 : while (1) {
      $18_1 = $18_1 >>> 0 < 29 >>> 0 ? $18_1 : 29;
      block11 : {
       $10_1 = $11_1 + -4 | 0;
       if ($10_1 >>> 0 < $19_1 >>> 0) {
        break block11
       }
       i64toi32_i32$1 = 0;
       $25_1 = $18_1;
       $25$hi = i64toi32_i32$1;
       i64toi32_i32$1 = 0;
       $24_1 = 0;
       $24$hi = i64toi32_i32$1;
       label1 : while (1) {
        $172_1 = $10_1;
        i64toi32_i32$0 = $10_1;
        i64toi32_i32$1 = HEAP32[$10_1 >> 2] | 0;
        i64toi32_i32$2 = 0;
        $174$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $25$hi;
        i64toi32_i32$2 = $174$hi;
        i64toi32_i32$0 = i64toi32_i32$1;
        i64toi32_i32$1 = $25$hi;
        i64toi32_i32$3 = $25_1;
        i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
         $49_1 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
         $49_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
        }
        $176$hi = i64toi32_i32$1;
        i64toi32_i32$1 = $24$hi;
        i64toi32_i32$1 = $176$hi;
        i64toi32_i32$2 = $49_1;
        i64toi32_i32$0 = $24$hi;
        i64toi32_i32$3 = $24_1;
        i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
        i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
        if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
         i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
        }
        $26$hi = i64toi32_i32$5;
        i64toi32_i32$2 = 0;
        i64toi32_i32$2 = __wasm_i64_udiv(i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, 1e9 | 0, i64toi32_i32$2 | 0) | 0;
        i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
        $24_1 = i64toi32_i32$2;
        $24$hi = i64toi32_i32$5;
        i64toi32_i32$2 = 0;
        i64toi32_i32$2 = __wasm_i64_mul($24_1 | 0, i64toi32_i32$5 | 0, 1e9 | 0, i64toi32_i32$2 | 0) | 0;
        i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
        $183 = i64toi32_i32$2;
        $183$hi = i64toi32_i32$5;
        i64toi32_i32$5 = $26$hi;
        i64toi32_i32$1 = i64toi32_i32$4;
        i64toi32_i32$2 = $183$hi;
        i64toi32_i32$3 = $183;
        i64toi32_i32$0 = i64toi32_i32$1 - i64toi32_i32$3 | 0;
        i64toi32_i32$4 = (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) + i64toi32_i32$2 | 0;
        i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
        HEAP32[$172_1 >> 2] = i64toi32_i32$0;
        $10_1 = $10_1 + -4 | 0;
        if ($10_1 >>> 0 >= $19_1 >>> 0) {
         continue label1
        }
        break label1;
       };
       i64toi32_i32$4 = i64toi32_i32$5;
       i64toi32_i32$4 = i64toi32_i32$5;
       i64toi32_i32$5 = i64toi32_i32$1;
       i64toi32_i32$1 = 0;
       i64toi32_i32$3 = 1e9;
       if (i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
        break block11
       }
       $19_1 = $19_1 + -4 | 0;
       i64toi32_i32$5 = $24$hi;
       HEAP32[$19_1 >> 2] = $24_1;
      }
      block12 : {
       label2 : while (1) {
        $10_1 = $11_1;
        if ($10_1 >>> 0 <= $19_1 >>> 0) {
         break block12
        }
        $11_1 = $10_1 + -4 | 0;
        if (!(HEAP32[$11_1 >> 2] | 0)) {
         continue label2
        }
        break label2;
       };
      }
      $18_1 = (HEAP32[($6_1 + 44 | 0) >> 2] | 0) - $18_1 | 0;
      HEAP32[($6_1 + 44 | 0) >> 2] = $18_1;
      $11_1 = $10_1;
      if (($18_1 | 0) > (0 | 0)) {
       continue label3
      }
      break label3;
     };
    }
    block13 : {
     if (($18_1 | 0) > (-1 | 0)) {
      break block13
     }
     $20_1 = ((($15_1 + 25 | 0) >>> 0) / (9 >>> 0) | 0) + 1 | 0;
     $21_1 = ($14_1 | 0) == (102 | 0);
     label5 : while (1) {
      $11_1 = 0 - $18_1 | 0;
      $12_1 = $11_1 >>> 0 < 9 >>> 0 ? $11_1 : 9;
      block15 : {
       block14 : {
        if ($19_1 >>> 0 < $10_1 >>> 0) {
         break block14
        }
        $11_1 = HEAP32[$19_1 >> 2] | 0 ? 0 : 4;
        break block15;
       }
       $22_1 = 1e9 >>> $12_1 | 0;
       $23_1 = (-1 << $12_1 | 0) ^ -1 | 0;
       $18_1 = 0;
       $11_1 = $19_1;
       label4 : while (1) {
        $3_1 = HEAP32[$11_1 >> 2] | 0;
        HEAP32[$11_1 >> 2] = ($3_1 >>> $12_1 | 0) + $18_1 | 0;
        $18_1 = Math_imul($3_1 & $23_1 | 0, $22_1);
        $11_1 = $11_1 + 4 | 0;
        if ($11_1 >>> 0 < $10_1 >>> 0) {
         continue label4
        }
        break label4;
       };
       $11_1 = HEAP32[$19_1 >> 2] | 0 ? 0 : 4;
       if (!$18_1) {
        break block15
       }
       HEAP32[$10_1 >> 2] = $18_1;
       $10_1 = $10_1 + 4 | 0;
      }
      $18_1 = (HEAP32[($6_1 + 44 | 0) >> 2] | 0) + $12_1 | 0;
      HEAP32[($6_1 + 44 | 0) >> 2] = $18_1;
      $19_1 = $19_1 + $11_1 | 0;
      $11_1 = $21_1 ? $17_1 : $19_1;
      $10_1 = (($10_1 - $11_1 | 0) >> 2 | 0 | 0) > ($20_1 | 0) ? $11_1 + ($20_1 << 2 | 0) | 0 : $10_1;
      if (($18_1 | 0) < (0 | 0)) {
       continue label5
      }
      break label5;
     };
    }
    $18_1 = 0;
    block16 : {
     if ($19_1 >>> 0 >= $10_1 >>> 0) {
      break block16
     }
     $18_1 = Math_imul(($17_1 - $19_1 | 0) >> 2 | 0, 9);
     $11_1 = 10;
     $3_1 = HEAP32[$19_1 >> 2] | 0;
     if ($3_1 >>> 0 < 10 >>> 0) {
      break block16
     }
     label6 : while (1) {
      $18_1 = $18_1 + 1 | 0;
      $11_1 = Math_imul($11_1, 10);
      if ($3_1 >>> 0 >= $11_1 >>> 0) {
       continue label6
      }
      break label6;
     };
    }
    block17 : {
     $11_1 = ($15_1 - (($14_1 | 0) == (102 | 0) ? 0 : $18_1) | 0) - (($15_1 | 0) != (0 | 0) & ($14_1 | 0) == (103 | 0) | 0) | 0;
     if (($11_1 | 0) >= (Math_imul(($10_1 - $17_1 | 0) >> 2 | 0, 9) + -9 | 0 | 0)) {
      break block17
     }
     $3_1 = $11_1 + 9216 | 0;
     $22_1 = ($3_1 | 0) / (9 | 0) | 0;
     $12_1 = (($6_1 + 48 | 0) + (($16_1 | 0) < (0 | 0) ? -4092 : -3804) | 0) + ($22_1 << 2 | 0) | 0;
     $11_1 = 10;
     block18 : {
      $3_1 = $3_1 - Math_imul($22_1, 9) | 0;
      if (($3_1 | 0) > (7 | 0)) {
       break block18
      }
      label7 : while (1) {
       $11_1 = Math_imul($11_1, 10);
       $3_1 = $3_1 + 1 | 0;
       if (($3_1 | 0) != (8 | 0)) {
        continue label7
       }
       break label7;
      };
     }
     $23_1 = $12_1 + 4 | 0;
     block20 : {
      block19 : {
       $3_1 = HEAP32[$12_1 >> 2] | 0;
       $20_1 = ($3_1 >>> 0) / ($11_1 >>> 0) | 0;
       $22_1 = $3_1 - Math_imul($20_1, $11_1) | 0;
       if ($22_1) {
        break block19
       }
       if (($23_1 | 0) == ($10_1 | 0)) {
        break block20
       }
      }
      block22 : {
       block21 : {
        if ($20_1 & 1 | 0) {
         break block21
        }
        $1_1 = 9007199254740992.0;
        if (($11_1 | 0) != (1e9 | 0)) {
         break block22
        }
        if ($12_1 >>> 0 <= $19_1 >>> 0) {
         break block22
        }
        if (!((HEAPU8[($12_1 + -4 | 0) >> 0] | 0) & 1 | 0)) {
         break block22
        }
       }
       $1_1 = 9007199254740994.0;
      }
      $389 = ($23_1 | 0) == ($10_1 | 0) ? 1.0 : 1.5;
      $23_1 = $11_1 >>> 1 | 0;
      $27_1 = $22_1 >>> 0 < $23_1 >>> 0 ? .5 : ($22_1 | 0) == ($23_1 | 0) ? $389 : 1.5;
      block23 : {
       if ($7_1) {
        break block23
       }
       if ((HEAPU8[$9_1 >> 0] | 0 | 0) != (45 | 0)) {
        break block23
       }
       $27_1 = -$27_1;
       $1_1 = -$1_1;
      }
      $3_1 = $3_1 - $22_1 | 0;
      HEAP32[$12_1 >> 2] = $3_1;
      if ($1_1 + $27_1 == $1_1) {
       break block20
      }
      $11_1 = $3_1 + $11_1 | 0;
      HEAP32[$12_1 >> 2] = $11_1;
      block24 : {
       if ($11_1 >>> 0 < 1e9 >>> 0) {
        break block24
       }
       label8 : while (1) {
        HEAP32[$12_1 >> 2] = 0;
        block25 : {
         $12_1 = $12_1 + -4 | 0;
         if ($12_1 >>> 0 >= $19_1 >>> 0) {
          break block25
         }
         $19_1 = $19_1 + -4 | 0;
         HEAP32[$19_1 >> 2] = 0;
        }
        $11_1 = (HEAP32[$12_1 >> 2] | 0) + 1 | 0;
        HEAP32[$12_1 >> 2] = $11_1;
        if ($11_1 >>> 0 > 999999999 >>> 0) {
         continue label8
        }
        break label8;
       };
      }
      $18_1 = Math_imul(($17_1 - $19_1 | 0) >> 2 | 0, 9);
      $11_1 = 10;
      $3_1 = HEAP32[$19_1 >> 2] | 0;
      if ($3_1 >>> 0 < 10 >>> 0) {
       break block20
      }
      label9 : while (1) {
       $18_1 = $18_1 + 1 | 0;
       $11_1 = Math_imul($11_1, 10);
       if ($3_1 >>> 0 >= $11_1 >>> 0) {
        continue label9
       }
       break label9;
      };
     }
     $11_1 = $12_1 + 4 | 0;
     $10_1 = $10_1 >>> 0 > $11_1 >>> 0 ? $11_1 : $10_1;
    }
    block26 : {
     label10 : while (1) {
      $11_1 = $10_1;
      $3_1 = $10_1 >>> 0 <= $19_1 >>> 0;
      if ($3_1) {
       break block26
      }
      $10_1 = $10_1 + -4 | 0;
      if (!(HEAP32[$10_1 >> 2] | 0)) {
       continue label10
      }
      break label10;
     };
    }
    block28 : {
     block27 : {
      if (($14_1 | 0) == (103 | 0)) {
       break block27
      }
      $22_1 = $4_1 & 8 | 0;
      break block28;
     }
     $10_1 = $15_1 ? $15_1 : 1;
     $12_1 = ($10_1 | 0) > ($18_1 | 0) & ($18_1 | 0) > (-5 | 0) | 0;
     $15_1 = ($12_1 ? $18_1 ^ -1 | 0 : -1) + $10_1 | 0;
     $5_1 = ($12_1 ? -1 : -2) + $5_1 | 0;
     $22_1 = $4_1 & 8 | 0;
     if ($22_1) {
      break block28
     }
     $10_1 = -9;
     block29 : {
      if ($3_1) {
       break block29
      }
      $12_1 = HEAP32[($11_1 + -4 | 0) >> 2] | 0;
      if (!$12_1) {
       break block29
      }
      $3_1 = 10;
      $10_1 = 0;
      if (($12_1 >>> 0) % (10 >>> 0) | 0) {
       break block29
      }
      label11 : while (1) {
       $22_1 = $10_1;
       $10_1 = $10_1 + 1 | 0;
       $3_1 = Math_imul($3_1, 10);
       if (!(($12_1 >>> 0) % ($3_1 >>> 0) | 0)) {
        continue label11
       }
       break label11;
      };
      $10_1 = $22_1 ^ -1 | 0;
     }
     $3_1 = Math_imul(($11_1 - $17_1 | 0) >> 2 | 0, 9);
     block30 : {
      if (($5_1 & -33 | 0 | 0) != (70 | 0)) {
       break block30
      }
      $22_1 = 0;
      $10_1 = ($3_1 + $10_1 | 0) + -9 | 0;
      $10_1 = ($10_1 | 0) > (0 | 0) ? $10_1 : 0;
      $15_1 = ($15_1 | 0) < ($10_1 | 0) ? $15_1 : $10_1;
      break block28;
     }
     $22_1 = 0;
     $10_1 = (($18_1 + $3_1 | 0) + $10_1 | 0) + -9 | 0;
     $10_1 = ($10_1 | 0) > (0 | 0) ? $10_1 : 0;
     $15_1 = ($15_1 | 0) < ($10_1 | 0) ? $15_1 : $10_1;
    }
    $12_1 = -1;
    $23_1 = $15_1 | $22_1 | 0;
    if (($15_1 | 0) > (($23_1 ? 2147483645 : 2147483646) | 0)) {
     break block4
    }
    $3_1 = ($15_1 + (($23_1 | 0) != (0 | 0)) | 0) + 1 | 0;
    block32 : {
     block31 : {
      $21_1 = $5_1 & -33 | 0;
      if (($21_1 | 0) != (70 | 0)) {
       break block31
      }
      if (($18_1 | 0) > ($3_1 ^ 2147483647 | 0 | 0)) {
       break block4
      }
      $10_1 = ($18_1 | 0) > (0 | 0) ? $18_1 : 0;
      break block32;
     }
     block33 : {
      $10_1 = $18_1 >> 31 | 0;
      i64toi32_i32$5 = 0;
      $10_1 = $126(($18_1 ^ $10_1 | 0) - $10_1 | 0 | 0, i64toi32_i32$5 | 0, $13_1 | 0) | 0;
      if (($13_1 - $10_1 | 0 | 0) > (1 | 0)) {
       break block33
      }
      label12 : while (1) {
       $10_1 = $10_1 + -1 | 0;
       HEAP8[$10_1 >> 0] = 48;
       if (($13_1 - $10_1 | 0 | 0) < (2 | 0)) {
        continue label12
       }
       break label12;
      };
     }
     $20_1 = $10_1 + -2 | 0;
     HEAP8[$20_1 >> 0] = $5_1;
     $12_1 = -1;
     HEAP8[($10_1 + -1 | 0) >> 0] = ($18_1 | 0) < (0 | 0) ? 45 : 43;
     $10_1 = $13_1 - $20_1 | 0;
     if (($10_1 | 0) > ($3_1 ^ 2147483647 | 0 | 0)) {
      break block4
     }
    }
    $12_1 = -1;
    $10_1 = $10_1 + $3_1 | 0;
    if (($10_1 | 0) > ($8_1 ^ 2147483647 | 0 | 0)) {
     break block4
    }
    $5_1 = $10_1 + $8_1 | 0;
    $127($0_1 | 0, 32 | 0, $2_1 | 0, $5_1 | 0, $4_1 | 0);
    $121($0_1 | 0, $9_1 | 0, $8_1 | 0);
    $127($0_1 | 0, 48 | 0, $2_1 | 0, $5_1 | 0, $4_1 ^ 65536 | 0 | 0);
    block45 : {
     block40 : {
      block38 : {
       block34 : {
        if (($21_1 | 0) != (70 | 0)) {
         break block34
        }
        $18_1 = $6_1 + 16 | 0 | 9 | 0;
        $3_1 = $19_1 >>> 0 > $17_1 >>> 0 ? $17_1 : $19_1;
        $19_1 = $3_1;
        label14 : while (1) {
         i64toi32_i32$3 = $19_1;
         i64toi32_i32$5 = HEAP32[$19_1 >> 2] | 0;
         i64toi32_i32$4 = 0;
         $10_1 = $126(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, $18_1 | 0) | 0;
         block36 : {
          block35 : {
           if (($19_1 | 0) == ($3_1 | 0)) {
            break block35
           }
           if ($10_1 >>> 0 <= ($6_1 + 16 | 0) >>> 0) {
            break block36
           }
           label13 : while (1) {
            $10_1 = $10_1 + -1 | 0;
            HEAP8[$10_1 >> 0] = 48;
            if ($10_1 >>> 0 > ($6_1 + 16 | 0) >>> 0) {
             continue label13
            }
            break block36;
           };
          }
          if (($10_1 | 0) != ($18_1 | 0)) {
           break block36
          }
          $10_1 = $10_1 + -1 | 0;
          HEAP8[$10_1 >> 0] = 48;
         }
         $121($0_1 | 0, $10_1 | 0, $18_1 - $10_1 | 0 | 0);
         $19_1 = $19_1 + 4 | 0;
         if ($19_1 >>> 0 <= $17_1 >>> 0) {
          continue label14
         }
         break label14;
        };
        block37 : {
         if (!$23_1) {
          break block37
         }
         $121($0_1 | 0, 65931 | 0, 1 | 0);
        }
        if ($19_1 >>> 0 >= $11_1 >>> 0) {
         break block38
        }
        if (($15_1 | 0) < (1 | 0)) {
         break block38
        }
        label16 : while (1) {
         block39 : {
          i64toi32_i32$3 = $19_1;
          i64toi32_i32$4 = HEAP32[$19_1 >> 2] | 0;
          i64toi32_i32$5 = 0;
          $10_1 = $126(i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, $18_1 | 0) | 0;
          if ($10_1 >>> 0 <= ($6_1 + 16 | 0) >>> 0) {
           break block39
          }
          label15 : while (1) {
           $10_1 = $10_1 + -1 | 0;
           HEAP8[$10_1 >> 0] = 48;
           if ($10_1 >>> 0 > ($6_1 + 16 | 0) >>> 0) {
            continue label15
           }
           break label15;
          };
         }
         $121($0_1 | 0, $10_1 | 0, (($15_1 | 0) < (9 | 0) ? $15_1 : 9) | 0);
         $10_1 = $15_1 + -9 | 0;
         $19_1 = $19_1 + 4 | 0;
         if ($19_1 >>> 0 >= $11_1 >>> 0) {
          break block40
         }
         $3_1 = ($15_1 | 0) > (9 | 0);
         $15_1 = $10_1;
         if ($3_1) {
          continue label16
         }
         break block40;
        };
       }
       block41 : {
        if (($15_1 | 0) < (0 | 0)) {
         break block41
        }
        $12_1 = $11_1 >>> 0 > $19_1 >>> 0 ? $11_1 : $19_1 + 4 | 0;
        $18_1 = $6_1 + 16 | 0 | 9 | 0;
        $11_1 = $19_1;
        label18 : while (1) {
         block42 : {
          i64toi32_i32$3 = $11_1;
          i64toi32_i32$5 = HEAP32[$11_1 >> 2] | 0;
          i64toi32_i32$4 = 0;
          $10_1 = $126(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, $18_1 | 0) | 0;
          if (($10_1 | 0) != ($18_1 | 0)) {
           break block42
          }
          $10_1 = $10_1 + -1 | 0;
          HEAP8[$10_1 >> 0] = 48;
         }
         block44 : {
          block43 : {
           if (($11_1 | 0) == ($19_1 | 0)) {
            break block43
           }
           if ($10_1 >>> 0 <= ($6_1 + 16 | 0) >>> 0) {
            break block44
           }
           label17 : while (1) {
            $10_1 = $10_1 + -1 | 0;
            HEAP8[$10_1 >> 0] = 48;
            if ($10_1 >>> 0 > ($6_1 + 16 | 0) >>> 0) {
             continue label17
            }
            break block44;
           };
          }
          $121($0_1 | 0, $10_1 | 0, 1 | 0);
          $10_1 = $10_1 + 1 | 0;
          if (!($15_1 | $22_1 | 0)) {
           break block44
          }
          $121($0_1 | 0, 65931 | 0, 1 | 0);
         }
         $3_1 = $18_1 - $10_1 | 0;
         $121($0_1 | 0, $10_1 | 0, (($15_1 | 0) > ($3_1 | 0) ? $3_1 : $15_1) | 0);
         $15_1 = $15_1 - $3_1 | 0;
         $11_1 = $11_1 + 4 | 0;
         if ($11_1 >>> 0 >= $12_1 >>> 0) {
          break block41
         }
         if (($15_1 | 0) > (-1 | 0)) {
          continue label18
         }
         break label18;
        };
       }
       $127($0_1 | 0, 48 | 0, $15_1 + 18 | 0 | 0, 18 | 0, 0 | 0);
       $121($0_1 | 0, $20_1 | 0, $13_1 - $20_1 | 0 | 0);
       break block45;
      }
      $10_1 = $15_1;
     }
     $127($0_1 | 0, 48 | 0, $10_1 + 9 | 0 | 0, 9 | 0, 0 | 0);
    }
    $127($0_1 | 0, 32 | 0, $2_1 | 0, $5_1 | 0, $4_1 ^ 8192 | 0 | 0);
    $12_1 = ($2_1 | 0) > ($5_1 | 0) ? $2_1 : $5_1;
    break block4;
   }
   $23_1 = $9_1 + ((($5_1 << 26 | 0) >> 31 | 0) & 9 | 0) | 0;
   block46 : {
    if ($3_1 >>> 0 > 11 >>> 0) {
     break block46
    }
    $10_1 = 12 - $3_1 | 0;
    $27_1 = 16.0;
    label19 : while (1) {
     $27_1 = $27_1 * 16.0;
     $10_1 = $10_1 + -1 | 0;
     if ($10_1) {
      continue label19
     }
     break label19;
    };
    block47 : {
     if ((HEAPU8[$23_1 >> 0] | 0 | 0) != (45 | 0)) {
      break block47
     }
     $1_1 = -($27_1 + (-$1_1 - $27_1));
     break block46;
    }
    $1_1 = $1_1 + $27_1 - $27_1;
   }
   block48 : {
    $11_1 = HEAP32[($6_1 + 44 | 0) >> 2] | 0;
    $10_1 = $11_1 >> 31 | 0;
    i64toi32_i32$4 = 0;
    $10_1 = $126(($11_1 ^ $10_1 | 0) - $10_1 | 0 | 0, i64toi32_i32$4 | 0, $13_1 | 0) | 0;
    if (($10_1 | 0) != ($13_1 | 0)) {
     break block48
    }
    $10_1 = $10_1 + -1 | 0;
    HEAP8[$10_1 >> 0] = 48;
    $11_1 = HEAP32[($6_1 + 44 | 0) >> 2] | 0;
   }
   $20_1 = $8_1 | 2 | 0;
   $19_1 = $5_1 & 32 | 0;
   $22_1 = $10_1 + -2 | 0;
   HEAP8[$22_1 >> 0] = $5_1 + 15 | 0;
   HEAP8[($10_1 + -1 | 0) >> 0] = ($11_1 | 0) < (0 | 0) ? 45 : 43;
   $18_1 = ($3_1 | 0) < (1 | 0) & !($4_1 & 8 | 0) | 0;
   $11_1 = $6_1 + 16 | 0;
   label20 : while (1) {
    $10_1 = $11_1;
    $890 = $10_1;
    if (Math_abs($1_1) < 2147483647.0) {
     $897 = ~~$1_1
    } else {
     $897 = -2147483648
    }
    $11_1 = $897;
    HEAP8[$890 >> 0] = HEAPU8[($11_1 + 70352 | 0) >> 0] | 0 | $19_1 | 0;
    $1_1 = ($1_1 - +($11_1 | 0)) * 16.0;
    block49 : {
     $11_1 = $10_1 + 1 | 0;
     if (($11_1 - ($6_1 + 16 | 0) | 0 | 0) != (1 | 0)) {
      break block49
     }
     if ($1_1 == 0.0 & $18_1 | 0) {
      break block49
     }
     HEAP8[($10_1 + 1 | 0) >> 0] = 46;
     $11_1 = $10_1 + 2 | 0;
    }
    if ($1_1 != 0.0) {
     continue label20
    }
    break label20;
   };
   $12_1 = -1;
   $19_1 = $13_1 - $22_1 | 0;
   if (($3_1 | 0) > (2147483643 - ($8_1 + $19_1 | 0) | 0 | 0)) {
    break block4
   }
   $10_1 = $11_1 - ($6_1 + 16 | 0) | 0;
   $18_1 = $3_1 ? (($10_1 + -2 | 0 | 0) < ($3_1 | 0) ? $3_1 + 2 | 0 : $10_1) : $10_1;
   $11_1 = ($19_1 + $20_1 | 0) + $18_1 | 0;
   $127($0_1 | 0, 32 | 0, $2_1 | 0, $11_1 | 0, $4_1 | 0);
   $121($0_1 | 0, $23_1 | 0, $20_1 | 0);
   $127($0_1 | 0, 48 | 0, $2_1 | 0, $11_1 | 0, $4_1 ^ 65536 | 0 | 0);
   $121($0_1 | 0, $6_1 + 16 | 0 | 0, $10_1 | 0);
   $127($0_1 | 0, 48 | 0, $18_1 - $10_1 | 0 | 0, 0 | 0, 0 | 0);
   $121($0_1 | 0, $22_1 | 0, $19_1 | 0);
   $127($0_1 | 0, 32 | 0, $2_1 | 0, $11_1 | 0, $4_1 ^ 8192 | 0 | 0);
   $12_1 = ($2_1 | 0) > ($11_1 | 0) ? $2_1 : $11_1;
  }
  global$0 = $6_1 + 560 | 0;
  return $12_1 | 0;
 }
 
 function $130($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $2_1 = 0, $12_1 = 0, $12$hi = 0, $14_1 = 0, $14$hi = 0, wasm2js_i32$0 = 0, wasm2js_f64$0 = 0.0;
  $2_1 = ((HEAP32[$1_1 >> 2] | 0) + 7 | 0) & -8 | 0;
  HEAP32[$1_1 >> 2] = $2_1 + 16 | 0;
  i64toi32_i32$2 = $2_1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $12_1 = i64toi32_i32$0;
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] | 0;
  $14_1 = i64toi32_i32$1;
  $14$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $12$hi;
  i64toi32_i32$1 = $14$hi;
  (wasm2js_i32$0 = $0_1, wasm2js_f64$0 = +$149($12_1 | 0, i64toi32_i32$0 | 0, $14_1 | 0, i64toi32_i32$1 | 0)), HEAPF64[wasm2js_i32$0 >> 3] = wasm2js_f64$0;
 }
 
 function $131($0_1) {
  $0_1 = +$0_1;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  wasm2js_scratch_store_f64(+$0_1);
  i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
  i64toi32_i32$1 = wasm2js_scratch_load_i32(0 | 0) | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $132($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 160 | 0;
  global$0 = $4_1;
  $0_1 = $1_1 ? $0_1 : $4_1 + 158 | 0;
  HEAP32[($4_1 + 148 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 152 | 0) >> 2] = $1_1 - (($1_1 | 0) != (0 | 0)) | 0;
  wasm2js_memory_fill($4_1, 0, 144);
  HEAP32[($4_1 + 76 | 0) >> 2] = -1;
  HEAP32[($4_1 + 36 | 0) >> 2] = 10;
  HEAP32[($4_1 + 80 | 0) >> 2] = -1;
  HEAP32[($4_1 + 44 | 0) >> 2] = $4_1 + 159 | 0;
  HEAP32[($4_1 + 84 | 0) >> 2] = $4_1 + 148 | 0;
  HEAP8[$0_1 >> 0] = 0;
  $1_1 = $128($4_1 | 0, $2_1 | 0, $3_1 | 0) | 0;
  global$0 = $4_1 + 160 | 0;
  return $1_1 | 0;
 }
 
 function $133($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $5_1 = 0, $4_1 = 0, $7_1 = 0, $6_1 = 0;
  $3_1 = HEAP32[($0_1 + 84 | 0) >> 2] | 0;
  $4_1 = HEAP32[$3_1 >> 2] | 0;
  block : {
   $5_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
   $6_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
   $7_1 = (HEAP32[($0_1 + 20 | 0) >> 2] | 0) - $6_1 | 0;
   $7_1 = $5_1 >>> 0 < $7_1 >>> 0 ? $5_1 : $7_1;
   if (!$7_1) {
    break block
   }
   $117($4_1 | 0, $6_1 | 0, $7_1 | 0) | 0;
   $4_1 = (HEAP32[$3_1 >> 2] | 0) + $7_1 | 0;
   HEAP32[$3_1 >> 2] = $4_1;
   $5_1 = (HEAP32[($3_1 + 4 | 0) >> 2] | 0) - $7_1 | 0;
   HEAP32[($3_1 + 4 | 0) >> 2] = $5_1;
  }
  block1 : {
   $5_1 = $5_1 >>> 0 < $2_1 >>> 0 ? $5_1 : $2_1;
   if (!$5_1) {
    break block1
   }
   $117($4_1 | 0, $1_1 | 0, $5_1 | 0) | 0;
   $4_1 = (HEAP32[$3_1 >> 2] | 0) + $5_1 | 0;
   HEAP32[$3_1 >> 2] = $4_1;
   HEAP32[($3_1 + 4 | 0) >> 2] = (HEAP32[($3_1 + 4 | 0) >> 2] | 0) - $5_1 | 0;
  }
  HEAP8[$4_1 >> 0] = 0;
  $3_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
  HEAP32[($0_1 + 28 | 0) >> 2] = $3_1;
  HEAP32[($0_1 + 20 | 0) >> 2] = $3_1;
  return $2_1 | 0;
 }
 
 function $134($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $132($0_1 | 0, 2147483647 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0;
 }
 
 function $135($0_1) {
  $0_1 = $0_1 | 0;
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  block : {
   if ($0_1) {
    break block
   }
   return 0 | 0;
  }
  (wasm2js_i32$0 = $75() | 0, wasm2js_i32$1 = $0_1), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  return -1 | 0;
 }
 
 function $136($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $3_1 = 1;
  block1 : {
   block : {
    if (!$0_1) {
     break block
    }
    if ($1_1 >>> 0 <= 127 >>> 0) {
     break block1
    }
    block3 : {
     block2 : {
      if (HEAP32[(HEAP32[(0 + 73620 | 0) >> 2] | 0) >> 2] | 0) {
       break block2
      }
      if (($1_1 & -128 | 0 | 0) == (57216 | 0)) {
       break block1
      }
      (wasm2js_i32$0 = $75() | 0, wasm2js_i32$1 = 25), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
      break block3;
     }
     block4 : {
      if ($1_1 >>> 0 > 2047 >>> 0) {
       break block4
      }
      HEAP8[($0_1 + 1 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
      HEAP8[$0_1 >> 0] = $1_1 >>> 6 | 0 | 192 | 0;
      return 2 | 0;
     }
     block6 : {
      block5 : {
       if ($1_1 >>> 0 < 55296 >>> 0) {
        break block5
       }
       if (($1_1 & -8192 | 0 | 0) != (57344 | 0)) {
        break block6
       }
      }
      HEAP8[($0_1 + 2 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
      HEAP8[$0_1 >> 0] = $1_1 >>> 12 | 0 | 224 | 0;
      HEAP8[($0_1 + 1 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      return 3 | 0;
     }
     block7 : {
      if (($1_1 + -65536 | 0) >>> 0 > 1048575 >>> 0) {
       break block7
      }
      HEAP8[($0_1 + 3 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
      HEAP8[$0_1 >> 0] = $1_1 >>> 18 | 0 | 240 | 0;
      HEAP8[($0_1 + 2 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      HEAP8[($0_1 + 1 | 0) >> 0] = ($1_1 >>> 12 | 0) & 63 | 0 | 128 | 0;
      return 4 | 0;
     }
     (wasm2js_i32$0 = $75() | 0, wasm2js_i32$1 = 25), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    }
    $3_1 = -1;
   }
   return $3_1 | 0;
  }
  HEAP8[$0_1 >> 0] = $1_1;
  return 1 | 0;
 }
 
 function $137($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  block : {
   if ($0_1) {
    break block
   }
   return 0 | 0;
  }
  return $136($0_1 | 0, $1_1 | 0, 0 | 0) | 0 | 0;
 }
 
 function $138($0_1) {
  $0_1 = $0_1 | 0;
  var $6_1 = 0, $4_1 = 0, $5_1 = 0, $8_1 = 0, $3_1 = 0, $2_1 = 0, $7_1 = 0, $12_1 = 0, $11_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $10_1 = 0, i64toi32_i32$2 = 0, $1_1 = 0, $9_1 = 0, $84_1 = 0, $194 = 0, $1142 = 0, $1144 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  block5 : {
   block88 : {
    block4 : {
     block6 : {
      block : {
       if ($0_1 >>> 0 > 244 >>> 0) {
        break block
       }
       block1 : {
        $2_1 = HEAP32[(0 + 628860 | 0) >> 2] | 0;
        $3_1 = $0_1 >>> 0 < 11 >>> 0 ? 16 : ($0_1 + 11 | 0) & 504 | 0;
        $4_1 = $3_1 >>> 3 | 0;
        $0_1 = $2_1 >>> $4_1 | 0;
        if (!($0_1 & 3 | 0)) {
         break block1
        }
        block3 : {
         block2 : {
          $5_1 = (($0_1 ^ -1 | 0) & 1 | 0) + $4_1 | 0;
          $3_1 = $5_1 << 3 | 0;
          $6_1 = $3_1 + 628900 | 0;
          $4_1 = HEAP32[($3_1 + 628908 | 0) >> 2] | 0;
          $0_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
          if (($6_1 | 0) != ($0_1 | 0)) {
           break block2
          }
          (wasm2js_i32$0 = 0, wasm2js_i32$1 = $2_1 & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 628860 | 0) >> 2] = wasm2js_i32$1;
          break block3;
         }
         if ($0_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
          break block4
         }
         if ((HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
          break block4
         }
         HEAP32[($0_1 + 12 | 0) >> 2] = $6_1;
         HEAP32[($6_1 + 8 | 0) >> 2] = $0_1;
        }
        $0_1 = $4_1 + 8 | 0;
        HEAP32[($4_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
        $4_1 = $4_1 + $3_1 | 0;
        HEAP32[($4_1 + 4 | 0) >> 2] = HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 1 | 0;
        break block5;
       }
       $7_1 = HEAP32[(0 + 628868 | 0) >> 2] | 0;
       if ($3_1 >>> 0 <= $7_1 >>> 0) {
        break block6
       }
       block7 : {
        if (!$0_1) {
         break block7
        }
        block9 : {
         block8 : {
          $84_1 = $0_1 << $4_1 | 0;
          $0_1 = 2 << $4_1 | 0;
          $8_1 = __wasm_ctz_i32($84_1 & ($0_1 | (0 - $0_1 | 0) | 0) | 0 | 0) | 0;
          $4_1 = $8_1 << 3 | 0;
          $5_1 = $4_1 + 628900 | 0;
          $0_1 = HEAP32[($4_1 + 628908 | 0) >> 2] | 0;
          $6_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
          if (($5_1 | 0) != ($6_1 | 0)) {
           break block8
          }
          $2_1 = $2_1 & (__wasm_rotl_i32(-2 | 0, $8_1 | 0) | 0) | 0;
          HEAP32[(0 + 628860 | 0) >> 2] = $2_1;
          break block9;
         }
         if ($6_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
          break block4
         }
         if ((HEAP32[($6_1 + 12 | 0) >> 2] | 0 | 0) != ($0_1 | 0)) {
          break block4
         }
         HEAP32[($6_1 + 12 | 0) >> 2] = $5_1;
         HEAP32[($5_1 + 8 | 0) >> 2] = $6_1;
        }
        HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
        $5_1 = $0_1 + $3_1 | 0;
        $3_1 = $4_1 - $3_1 | 0;
        HEAP32[($5_1 + 4 | 0) >> 2] = $3_1 | 1 | 0;
        HEAP32[($0_1 + $4_1 | 0) >> 2] = $3_1;
        block10 : {
         if (!$7_1) {
          break block10
         }
         $6_1 = ($7_1 & -8 | 0) + 628900 | 0;
         $4_1 = HEAP32[(0 + 628880 | 0) >> 2] | 0;
         block12 : {
          block11 : {
           $8_1 = 1 << ($7_1 >>> 3 | 0) | 0;
           if ($2_1 & $8_1 | 0) {
            break block11
           }
           HEAP32[(0 + 628860 | 0) >> 2] = $2_1 | $8_1 | 0;
           $8_1 = $6_1;
           break block12;
          }
          $8_1 = HEAP32[($6_1 + 8 | 0) >> 2] | 0;
          if ($8_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
           break block4
          }
         }
         HEAP32[($6_1 + 8 | 0) >> 2] = $4_1;
         HEAP32[($8_1 + 12 | 0) >> 2] = $4_1;
         HEAP32[($4_1 + 12 | 0) >> 2] = $6_1;
         HEAP32[($4_1 + 8 | 0) >> 2] = $8_1;
        }
        $0_1 = $0_1 + 8 | 0;
        HEAP32[(0 + 628880 | 0) >> 2] = $5_1;
        HEAP32[(0 + 628868 | 0) >> 2] = $3_1;
        break block5;
       }
       $9_1 = HEAP32[(0 + 628864 | 0) >> 2] | 0;
       if (!$9_1) {
        break block6
       }
       $6_1 = HEAP32[(((__wasm_ctz_i32($9_1 | 0) | 0) << 2 | 0) + 629164 | 0) >> 2] | 0;
       $4_1 = ((HEAP32[($6_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
       $5_1 = $6_1;
       block14 : {
        label : while (1) {
         block13 : {
          $0_1 = HEAP32[($6_1 + 16 | 0) >> 2] | 0;
          if ($0_1) {
           break block13
          }
          $0_1 = HEAP32[($6_1 + 20 | 0) >> 2] | 0;
          if (!$0_1) {
           break block14
          }
         }
         $6_1 = ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
         $194 = $6_1;
         $6_1 = $6_1 >>> 0 < $4_1 >>> 0;
         $4_1 = $6_1 ? $194 : $4_1;
         $5_1 = $6_1 ? $0_1 : $5_1;
         $6_1 = $0_1;
         continue label;
        };
       }
       $10_1 = HEAP32[(0 + 628876 | 0) >> 2] | 0;
       if ($5_1 >>> 0 < $10_1 >>> 0) {
        break block4
       }
       $11_1 = HEAP32[($5_1 + 24 | 0) >> 2] | 0;
       block16 : {
        block15 : {
         $0_1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
         if (($0_1 | 0) == ($5_1 | 0)) {
          break block15
         }
         $6_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
         if ($6_1 >>> 0 < $10_1 >>> 0) {
          break block4
         }
         if ((HEAP32[($6_1 + 12 | 0) >> 2] | 0 | 0) != ($5_1 | 0)) {
          break block4
         }
         if ((HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0) != ($5_1 | 0)) {
          break block4
         }
         HEAP32[($6_1 + 12 | 0) >> 2] = $0_1;
         HEAP32[($0_1 + 8 | 0) >> 2] = $6_1;
         break block16;
        }
        block19 : {
         block18 : {
          block17 : {
           $6_1 = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
           if (!$6_1) {
            break block17
           }
           $8_1 = $5_1 + 20 | 0;
           break block18;
          }
          $6_1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
          if (!$6_1) {
           break block19
          }
          $8_1 = $5_1 + 16 | 0;
         }
         label1 : while (1) {
          $12_1 = $8_1;
          $0_1 = $6_1;
          $8_1 = $0_1 + 20 | 0;
          $6_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
          if ($6_1) {
           continue label1
          }
          $8_1 = $0_1 + 16 | 0;
          $6_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
          if ($6_1) {
           continue label1
          }
          break label1;
         };
         if ($12_1 >>> 0 < $10_1 >>> 0) {
          break block4
         }
         HEAP32[$12_1 >> 2] = 0;
         break block16;
        }
        $0_1 = 0;
       }
       block20 : {
        if (!$11_1) {
         break block20
        }
        block22 : {
         block21 : {
          $8_1 = HEAP32[($5_1 + 28 | 0) >> 2] | 0;
          $6_1 = $8_1 << 2 | 0;
          if (($5_1 | 0) != (HEAP32[($6_1 + 629164 | 0) >> 2] | 0 | 0)) {
           break block21
          }
          HEAP32[($6_1 + 629164 | 0) >> 2] = $0_1;
          if ($0_1) {
           break block22
          }
          (wasm2js_i32$0 = 0, wasm2js_i32$1 = $9_1 & (__wasm_rotl_i32(-2 | 0, $8_1 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 628864 | 0) >> 2] = wasm2js_i32$1;
          break block20;
         }
         if ($11_1 >>> 0 < $10_1 >>> 0) {
          break block4
         }
         block24 : {
          block23 : {
           if ((HEAP32[($11_1 + 16 | 0) >> 2] | 0 | 0) != ($5_1 | 0)) {
            break block23
           }
           HEAP32[($11_1 + 16 | 0) >> 2] = $0_1;
           break block24;
          }
          HEAP32[($11_1 + 20 | 0) >> 2] = $0_1;
         }
         if (!$0_1) {
          break block20
         }
        }
        if ($0_1 >>> 0 < $10_1 >>> 0) {
         break block4
        }
        HEAP32[($0_1 + 24 | 0) >> 2] = $11_1;
        block25 : {
         $6_1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
         if (!$6_1) {
          break block25
         }
         if ($6_1 >>> 0 < $10_1 >>> 0) {
          break block4
         }
         HEAP32[($0_1 + 16 | 0) >> 2] = $6_1;
         HEAP32[($6_1 + 24 | 0) >> 2] = $0_1;
        }
        $6_1 = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
        if (!$6_1) {
         break block20
        }
        if ($6_1 >>> 0 < $10_1 >>> 0) {
         break block4
        }
        HEAP32[($0_1 + 20 | 0) >> 2] = $6_1;
        HEAP32[($6_1 + 24 | 0) >> 2] = $0_1;
       }
       block27 : {
        block26 : {
         if ($4_1 >>> 0 > 15 >>> 0) {
          break block26
         }
         $0_1 = $4_1 + $3_1 | 0;
         HEAP32[($5_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
         $0_1 = $5_1 + $0_1 | 0;
         HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
         break block27;
        }
        HEAP32[($5_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
        $3_1 = $5_1 + $3_1 | 0;
        HEAP32[($3_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
        HEAP32[($3_1 + $4_1 | 0) >> 2] = $4_1;
        block28 : {
         if (!$7_1) {
          break block28
         }
         $6_1 = ($7_1 & -8 | 0) + 628900 | 0;
         $0_1 = HEAP32[(0 + 628880 | 0) >> 2] | 0;
         block30 : {
          block29 : {
           $8_1 = 1 << ($7_1 >>> 3 | 0) | 0;
           if ($8_1 & $2_1 | 0) {
            break block29
           }
           HEAP32[(0 + 628860 | 0) >> 2] = $8_1 | $2_1 | 0;
           $8_1 = $6_1;
           break block30;
          }
          $8_1 = HEAP32[($6_1 + 8 | 0) >> 2] | 0;
          if ($8_1 >>> 0 < $10_1 >>> 0) {
           break block4
          }
         }
         HEAP32[($6_1 + 8 | 0) >> 2] = $0_1;
         HEAP32[($8_1 + 12 | 0) >> 2] = $0_1;
         HEAP32[($0_1 + 12 | 0) >> 2] = $6_1;
         HEAP32[($0_1 + 8 | 0) >> 2] = $8_1;
        }
        HEAP32[(0 + 628880 | 0) >> 2] = $3_1;
        HEAP32[(0 + 628868 | 0) >> 2] = $4_1;
       }
       $0_1 = $5_1 + 8 | 0;
       break block5;
      }
      $3_1 = -1;
      if ($0_1 >>> 0 > -65 >>> 0) {
       break block6
      }
      $4_1 = $0_1 + 11 | 0;
      $3_1 = $4_1 & -8 | 0;
      $11_1 = HEAP32[(0 + 628864 | 0) >> 2] | 0;
      if (!$11_1) {
       break block6
      }
      $7_1 = 31;
      block31 : {
       if ($0_1 >>> 0 > 16777204 >>> 0) {
        break block31
       }
       $0_1 = Math_clz32($4_1 >>> 8 | 0);
       $7_1 = ((($3_1 >>> (38 - $0_1 | 0) | 0) & 1 | 0) - ($0_1 << 1 | 0) | 0) + 62 | 0;
      }
      $4_1 = 0 - $3_1 | 0;
      block37 : {
       block35 : {
        block33 : {
         block32 : {
          $6_1 = HEAP32[(($7_1 << 2 | 0) + 629164 | 0) >> 2] | 0;
          if ($6_1) {
           break block32
          }
          $0_1 = 0;
          $8_1 = 0;
          break block33;
         }
         $0_1 = 0;
         $5_1 = $3_1 << (($7_1 | 0) == (31 | 0) ? 0 : 25 - ($7_1 >>> 1 | 0) | 0) | 0;
         $8_1 = 0;
         label2 : while (1) {
          block34 : {
           $2_1 = ((HEAP32[($6_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
           if ($2_1 >>> 0 >= $4_1 >>> 0) {
            break block34
           }
           $4_1 = $2_1;
           $8_1 = $6_1;
           if ($4_1) {
            break block34
           }
           $4_1 = 0;
           $8_1 = $6_1;
           $0_1 = $6_1;
           break block35;
          }
          $2_1 = HEAP32[($6_1 + 20 | 0) >> 2] | 0;
          $12_1 = HEAP32[(($6_1 + (($5_1 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0) >> 2] | 0;
          $0_1 = $2_1 ? (($2_1 | 0) == ($12_1 | 0) ? $0_1 : $2_1) : $0_1;
          $5_1 = $5_1 << 1 | 0;
          $6_1 = $12_1;
          if ($6_1) {
           continue label2
          }
          break label2;
         };
        }
        block36 : {
         if ($0_1 | $8_1 | 0) {
          break block36
         }
         $8_1 = 0;
         $0_1 = 2 << $7_1 | 0;
         $0_1 = ($0_1 | (0 - $0_1 | 0) | 0) & $11_1 | 0;
         if (!$0_1) {
          break block6
         }
         $0_1 = HEAP32[(((__wasm_ctz_i32($0_1 | 0) | 0) << 2 | 0) + 629164 | 0) >> 2] | 0;
        }
        if (!$0_1) {
         break block37
        }
       }
       label3 : while (1) {
        $2_1 = ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
        $5_1 = $2_1 >>> 0 < $4_1 >>> 0;
        block38 : {
         $6_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
         if ($6_1) {
          break block38
         }
         $6_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
        }
        $4_1 = $5_1 ? $2_1 : $4_1;
        $8_1 = $5_1 ? $0_1 : $8_1;
        $0_1 = $6_1;
        if ($0_1) {
         continue label3
        }
        break label3;
       };
      }
      if (!$8_1) {
       break block6
      }
      if ($4_1 >>> 0 >= ((HEAP32[(0 + 628868 | 0) >> 2] | 0) - $3_1 | 0) >>> 0) {
       break block6
      }
      $12_1 = HEAP32[(0 + 628876 | 0) >> 2] | 0;
      if ($8_1 >>> 0 < $12_1 >>> 0) {
       break block4
      }
      $7_1 = HEAP32[($8_1 + 24 | 0) >> 2] | 0;
      block40 : {
       block39 : {
        $0_1 = HEAP32[($8_1 + 12 | 0) >> 2] | 0;
        if (($0_1 | 0) == ($8_1 | 0)) {
         break block39
        }
        $6_1 = HEAP32[($8_1 + 8 | 0) >> 2] | 0;
        if ($6_1 >>> 0 < $12_1 >>> 0) {
         break block4
        }
        if ((HEAP32[($6_1 + 12 | 0) >> 2] | 0 | 0) != ($8_1 | 0)) {
         break block4
        }
        if ((HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0) != ($8_1 | 0)) {
         break block4
        }
        HEAP32[($6_1 + 12 | 0) >> 2] = $0_1;
        HEAP32[($0_1 + 8 | 0) >> 2] = $6_1;
        break block40;
       }
       block43 : {
        block42 : {
         block41 : {
          $6_1 = HEAP32[($8_1 + 20 | 0) >> 2] | 0;
          if (!$6_1) {
           break block41
          }
          $5_1 = $8_1 + 20 | 0;
          break block42;
         }
         $6_1 = HEAP32[($8_1 + 16 | 0) >> 2] | 0;
         if (!$6_1) {
          break block43
         }
         $5_1 = $8_1 + 16 | 0;
        }
        label4 : while (1) {
         $2_1 = $5_1;
         $0_1 = $6_1;
         $5_1 = $0_1 + 20 | 0;
         $6_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
         if ($6_1) {
          continue label4
         }
         $5_1 = $0_1 + 16 | 0;
         $6_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
         if ($6_1) {
          continue label4
         }
         break label4;
        };
        if ($2_1 >>> 0 < $12_1 >>> 0) {
         break block4
        }
        HEAP32[$2_1 >> 2] = 0;
        break block40;
       }
       $0_1 = 0;
      }
      block44 : {
       if (!$7_1) {
        break block44
       }
       block46 : {
        block45 : {
         $5_1 = HEAP32[($8_1 + 28 | 0) >> 2] | 0;
         $6_1 = $5_1 << 2 | 0;
         if (($8_1 | 0) != (HEAP32[($6_1 + 629164 | 0) >> 2] | 0 | 0)) {
          break block45
         }
         HEAP32[($6_1 + 629164 | 0) >> 2] = $0_1;
         if ($0_1) {
          break block46
         }
         $11_1 = $11_1 & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
         HEAP32[(0 + 628864 | 0) >> 2] = $11_1;
         break block44;
        }
        if ($7_1 >>> 0 < $12_1 >>> 0) {
         break block4
        }
        block48 : {
         block47 : {
          if ((HEAP32[($7_1 + 16 | 0) >> 2] | 0 | 0) != ($8_1 | 0)) {
           break block47
          }
          HEAP32[($7_1 + 16 | 0) >> 2] = $0_1;
          break block48;
         }
         HEAP32[($7_1 + 20 | 0) >> 2] = $0_1;
        }
        if (!$0_1) {
         break block44
        }
       }
       if ($0_1 >>> 0 < $12_1 >>> 0) {
        break block4
       }
       HEAP32[($0_1 + 24 | 0) >> 2] = $7_1;
       block49 : {
        $6_1 = HEAP32[($8_1 + 16 | 0) >> 2] | 0;
        if (!$6_1) {
         break block49
        }
        if ($6_1 >>> 0 < $12_1 >>> 0) {
         break block4
        }
        HEAP32[($0_1 + 16 | 0) >> 2] = $6_1;
        HEAP32[($6_1 + 24 | 0) >> 2] = $0_1;
       }
       $6_1 = HEAP32[($8_1 + 20 | 0) >> 2] | 0;
       if (!$6_1) {
        break block44
       }
       if ($6_1 >>> 0 < $12_1 >>> 0) {
        break block4
       }
       HEAP32[($0_1 + 20 | 0) >> 2] = $6_1;
       HEAP32[($6_1 + 24 | 0) >> 2] = $0_1;
      }
      block51 : {
       block50 : {
        if ($4_1 >>> 0 > 15 >>> 0) {
         break block50
        }
        $0_1 = $4_1 + $3_1 | 0;
        HEAP32[($8_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
        $0_1 = $8_1 + $0_1 | 0;
        HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
        break block51;
       }
       HEAP32[($8_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
       $5_1 = $8_1 + $3_1 | 0;
       HEAP32[($5_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
       HEAP32[($5_1 + $4_1 | 0) >> 2] = $4_1;
       block52 : {
        if ($4_1 >>> 0 > 255 >>> 0) {
         break block52
        }
        $0_1 = ($4_1 & 248 | 0) + 628900 | 0;
        block54 : {
         block53 : {
          $3_1 = HEAP32[(0 + 628860 | 0) >> 2] | 0;
          $4_1 = 1 << ($4_1 >>> 3 | 0) | 0;
          if ($3_1 & $4_1 | 0) {
           break block53
          }
          HEAP32[(0 + 628860 | 0) >> 2] = $3_1 | $4_1 | 0;
          $4_1 = $0_1;
          break block54;
         }
         $4_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
         if ($4_1 >>> 0 < $12_1 >>> 0) {
          break block4
         }
        }
        HEAP32[($0_1 + 8 | 0) >> 2] = $5_1;
        HEAP32[($4_1 + 12 | 0) >> 2] = $5_1;
        HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
        HEAP32[($5_1 + 8 | 0) >> 2] = $4_1;
        break block51;
       }
       $0_1 = 31;
       block55 : {
        if ($4_1 >>> 0 > 16777215 >>> 0) {
         break block55
        }
        $0_1 = Math_clz32($4_1 >>> 8 | 0);
        $0_1 = (($4_1 >>> (38 - $0_1 | 0) | 0) & 1 | 0 | ($0_1 << 1 | 0) | 0) ^ 62 | 0;
       }
       HEAP32[($5_1 + 28 | 0) >> 2] = $0_1;
       i64toi32_i32$1 = $5_1;
       i64toi32_i32$0 = 0;
       HEAP32[($5_1 + 16 | 0) >> 2] = 0;
       HEAP32[($5_1 + 20 | 0) >> 2] = i64toi32_i32$0;
       $3_1 = ($0_1 << 2 | 0) + 629164 | 0;
       block58 : {
        block57 : {
         block56 : {
          $6_1 = 1 << $0_1 | 0;
          if ($11_1 & $6_1 | 0) {
           break block56
          }
          HEAP32[(0 + 628864 | 0) >> 2] = $11_1 | $6_1 | 0;
          HEAP32[$3_1 >> 2] = $5_1;
          HEAP32[($5_1 + 24 | 0) >> 2] = $3_1;
          break block57;
         }
         $0_1 = $4_1 << (($0_1 | 0) == (31 | 0) ? 0 : 25 - ($0_1 >>> 1 | 0) | 0) | 0;
         $6_1 = HEAP32[$3_1 >> 2] | 0;
         label5 : while (1) {
          $3_1 = $6_1;
          if (((HEAP32[($6_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($4_1 | 0)) {
           break block58
          }
          $6_1 = $0_1 >>> 29 | 0;
          $0_1 = $0_1 << 1 | 0;
          $2_1 = $3_1 + ($6_1 & 4 | 0) | 0;
          $6_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
          if ($6_1) {
           continue label5
          }
          break label5;
         };
         $0_1 = $2_1 + 16 | 0;
         if ($0_1 >>> 0 < $12_1 >>> 0) {
          break block4
         }
         HEAP32[$0_1 >> 2] = $5_1;
         HEAP32[($5_1 + 24 | 0) >> 2] = $3_1;
        }
        HEAP32[($5_1 + 12 | 0) >> 2] = $5_1;
        HEAP32[($5_1 + 8 | 0) >> 2] = $5_1;
        break block51;
       }
       if ($3_1 >>> 0 < $12_1 >>> 0) {
        break block4
       }
       $0_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
       if ($0_1 >>> 0 < $12_1 >>> 0) {
        break block4
       }
       HEAP32[($0_1 + 12 | 0) >> 2] = $5_1;
       HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
       HEAP32[($5_1 + 24 | 0) >> 2] = 0;
       HEAP32[($5_1 + 12 | 0) >> 2] = $3_1;
       HEAP32[($5_1 + 8 | 0) >> 2] = $0_1;
      }
      $0_1 = $8_1 + 8 | 0;
      break block5;
     }
     block59 : {
      $0_1 = HEAP32[(0 + 628868 | 0) >> 2] | 0;
      if ($0_1 >>> 0 < $3_1 >>> 0) {
       break block59
      }
      $4_1 = HEAP32[(0 + 628880 | 0) >> 2] | 0;
      block61 : {
       block60 : {
        $6_1 = $0_1 - $3_1 | 0;
        if ($6_1 >>> 0 < 16 >>> 0) {
         break block60
        }
        $5_1 = $4_1 + $3_1 | 0;
        HEAP32[($5_1 + 4 | 0) >> 2] = $6_1 | 1 | 0;
        HEAP32[($4_1 + $0_1 | 0) >> 2] = $6_1;
        HEAP32[($4_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
        break block61;
       }
       HEAP32[($4_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
       $0_1 = $4_1 + $0_1 | 0;
       HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
       $6_1 = 0;
       $5_1 = 0;
      }
      HEAP32[(0 + 628868 | 0) >> 2] = $6_1;
      HEAP32[(0 + 628880 | 0) >> 2] = $5_1;
      $0_1 = $4_1 + 8 | 0;
      break block5;
     }
     block62 : {
      $5_1 = HEAP32[(0 + 628872 | 0) >> 2] | 0;
      if ($5_1 >>> 0 <= $3_1 >>> 0) {
       break block62
      }
      $4_1 = $5_1 - $3_1 | 0;
      HEAP32[(0 + 628872 | 0) >> 2] = $4_1;
      $0_1 = HEAP32[(0 + 628884 | 0) >> 2] | 0;
      $6_1 = $0_1 + $3_1 | 0;
      HEAP32[(0 + 628884 | 0) >> 2] = $6_1;
      HEAP32[($6_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
      HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
      $0_1 = $0_1 + 8 | 0;
      break block5;
     }
     block64 : {
      block63 : {
       if (!(HEAP32[(0 + 629332 | 0) >> 2] | 0)) {
        break block63
       }
       $4_1 = HEAP32[(0 + 629340 | 0) >> 2] | 0;
       break block64;
      }
      i64toi32_i32$1 = 0;
      i64toi32_i32$0 = -1;
      HEAP32[(i64toi32_i32$1 + 629344 | 0) >> 2] = -1;
      HEAP32[(i64toi32_i32$1 + 629348 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$1 = 0;
      i64toi32_i32$0 = 4096;
      HEAP32[(i64toi32_i32$1 + 629336 | 0) >> 2] = 4096;
      HEAP32[(i64toi32_i32$1 + 629340 | 0) >> 2] = i64toi32_i32$0;
      HEAP32[(0 + 629332 | 0) >> 2] = (($1_1 + 12 | 0) & -16 | 0) ^ 1431655768 | 0;
      HEAP32[(0 + 629352 | 0) >> 2] = 0;
      HEAP32[(0 + 629304 | 0) >> 2] = 0;
      $4_1 = 4096;
     }
     $0_1 = 0;
     $7_1 = $3_1 + 47 | 0;
     $2_1 = $4_1 + $7_1 | 0;
     $12_1 = 0 - $4_1 | 0;
     $8_1 = $2_1 & $12_1 | 0;
     if ($8_1 >>> 0 <= $3_1 >>> 0) {
      break block5
     }
     $0_1 = 0;
     block65 : {
      $4_1 = HEAP32[(0 + 629300 | 0) >> 2] | 0;
      if (!$4_1) {
       break block65
      }
      $6_1 = HEAP32[(0 + 629292 | 0) >> 2] | 0;
      $11_1 = $6_1 + $8_1 | 0;
      if ($11_1 >>> 0 <= $6_1 >>> 0) {
       break block5
      }
      if ($11_1 >>> 0 > $4_1 >>> 0) {
       break block5
      }
     }
     block77 : {
      block74 : {
       block66 : {
        if ((HEAPU8[(0 + 629304 | 0) >> 0] | 0) & 4 | 0) {
         break block66
        }
        block70 : {
         block75 : {
          block73 : {
           block69 : {
            block67 : {
             $4_1 = HEAP32[(0 + 628884 | 0) >> 2] | 0;
             if (!$4_1) {
              break block67
             }
             $0_1 = 629308;
             label6 : while (1) {
              block68 : {
               $6_1 = HEAP32[$0_1 >> 2] | 0;
               if ($4_1 >>> 0 < $6_1 >>> 0) {
                break block68
               }
               if ($4_1 >>> 0 < ($6_1 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0) >>> 0) {
                break block69
               }
              }
              $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
              if ($0_1) {
               continue label6
              }
              break label6;
             };
            }
            $5_1 = $142(0 | 0) | 0;
            if (($5_1 | 0) == (-1 | 0)) {
             break block70
            }
            $2_1 = $8_1;
            block71 : {
             $0_1 = HEAP32[(0 + 629336 | 0) >> 2] | 0;
             $4_1 = $0_1 + -1 | 0;
             if (!($4_1 & $5_1 | 0)) {
              break block71
             }
             $2_1 = ($8_1 - $5_1 | 0) + (($4_1 + $5_1 | 0) & (0 - $0_1 | 0) | 0) | 0;
            }
            if ($2_1 >>> 0 <= $3_1 >>> 0) {
             break block70
            }
            block72 : {
             $0_1 = HEAP32[(0 + 629300 | 0) >> 2] | 0;
             if (!$0_1) {
              break block72
             }
             $4_1 = HEAP32[(0 + 629292 | 0) >> 2] | 0;
             $6_1 = $4_1 + $2_1 | 0;
             if ($6_1 >>> 0 <= $4_1 >>> 0) {
              break block70
             }
             if ($6_1 >>> 0 > $0_1 >>> 0) {
              break block70
             }
            }
            $0_1 = $142($2_1 | 0) | 0;
            if (($0_1 | 0) != ($5_1 | 0)) {
             break block73
            }
            break block74;
           }
           $2_1 = ($2_1 - $5_1 | 0) & $12_1 | 0;
           $5_1 = $142($2_1 | 0) | 0;
           if (($5_1 | 0) == ((HEAP32[$0_1 >> 2] | 0) + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0 | 0)) {
            break block75
           }
           $0_1 = $5_1;
          }
          if (($0_1 | 0) == (-1 | 0)) {
           break block70
          }
          block76 : {
           if ($2_1 >>> 0 < ($3_1 + 48 | 0) >>> 0) {
            break block76
           }
           $5_1 = $0_1;
           break block74;
          }
          $4_1 = HEAP32[(0 + 629340 | 0) >> 2] | 0;
          $4_1 = (($7_1 - $2_1 | 0) + $4_1 | 0) & (0 - $4_1 | 0) | 0;
          if (($142($4_1 | 0) | 0 | 0) == (-1 | 0)) {
           break block70
          }
          $2_1 = $4_1 + $2_1 | 0;
          $5_1 = $0_1;
          break block74;
         }
         if (($5_1 | 0) != (-1 | 0)) {
          break block74
         }
        }
        HEAP32[(0 + 629304 | 0) >> 2] = HEAP32[(0 + 629304 | 0) >> 2] | 0 | 4 | 0;
       }
       $5_1 = $142($8_1 | 0) | 0;
       $0_1 = $142(0 | 0) | 0;
       if (($5_1 | 0) == (-1 | 0)) {
        break block77
       }
       if (($0_1 | 0) == (-1 | 0)) {
        break block77
       }
       if ($5_1 >>> 0 >= $0_1 >>> 0) {
        break block77
       }
       $2_1 = $0_1 - $5_1 | 0;
       if ($2_1 >>> 0 <= ($3_1 + 40 | 0) >>> 0) {
        break block77
       }
      }
      $0_1 = (HEAP32[(0 + 629292 | 0) >> 2] | 0) + $2_1 | 0;
      HEAP32[(0 + 629292 | 0) >> 2] = $0_1;
      block78 : {
       if ($0_1 >>> 0 <= (HEAP32[(0 + 629296 | 0) >> 2] | 0) >>> 0) {
        break block78
       }
       HEAP32[(0 + 629296 | 0) >> 2] = $0_1;
      }
      block84 : {
       block81 : {
        block80 : {
         block79 : {
          $4_1 = HEAP32[(0 + 628884 | 0) >> 2] | 0;
          if (!$4_1) {
           break block79
          }
          $0_1 = 629308;
          label7 : while (1) {
           $6_1 = HEAP32[$0_1 >> 2] | 0;
           $8_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
           if (($5_1 | 0) == ($6_1 + $8_1 | 0 | 0)) {
            break block80
           }
           $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
           if ($0_1) {
            continue label7
           }
           break block81;
          };
         }
         block83 : {
          block82 : {
           $0_1 = HEAP32[(0 + 628876 | 0) >> 2] | 0;
           if (!$0_1) {
            break block82
           }
           if ($5_1 >>> 0 >= $0_1 >>> 0) {
            break block83
           }
          }
          HEAP32[(0 + 628876 | 0) >> 2] = $5_1;
         }
         $0_1 = 0;
         HEAP32[(0 + 629312 | 0) >> 2] = $2_1;
         HEAP32[(0 + 629308 | 0) >> 2] = $5_1;
         HEAP32[(0 + 628892 | 0) >> 2] = -1;
         HEAP32[(0 + 628896 | 0) >> 2] = HEAP32[(0 + 629332 | 0) >> 2] | 0;
         HEAP32[(0 + 629320 | 0) >> 2] = 0;
         label8 : while (1) {
          $4_1 = $0_1 << 3 | 0;
          $6_1 = $4_1 + 628900 | 0;
          HEAP32[($4_1 + 628908 | 0) >> 2] = $6_1;
          HEAP32[($4_1 + 628912 | 0) >> 2] = $6_1;
          $0_1 = $0_1 + 1 | 0;
          if (($0_1 | 0) != (32 | 0)) {
           continue label8
          }
          break label8;
         };
         $0_1 = $2_1 + -40 | 0;
         $4_1 = (-8 - $5_1 | 0) & 7 | 0;
         $6_1 = $0_1 - $4_1 | 0;
         HEAP32[(0 + 628872 | 0) >> 2] = $6_1;
         $4_1 = $5_1 + $4_1 | 0;
         HEAP32[(0 + 628884 | 0) >> 2] = $4_1;
         HEAP32[($4_1 + 4 | 0) >> 2] = $6_1 | 1 | 0;
         HEAP32[(($5_1 + $0_1 | 0) + 4 | 0) >> 2] = 40;
         HEAP32[(0 + 628888 | 0) >> 2] = HEAP32[(0 + 629348 | 0) >> 2] | 0;
         break block84;
        }
        if ($4_1 >>> 0 >= $5_1 >>> 0) {
         break block81
        }
        if ($4_1 >>> 0 < $6_1 >>> 0) {
         break block81
        }
        if ((HEAP32[($0_1 + 12 | 0) >> 2] | 0) & 8 | 0) {
         break block81
        }
        HEAP32[($0_1 + 4 | 0) >> 2] = $8_1 + $2_1 | 0;
        $0_1 = (-8 - $4_1 | 0) & 7 | 0;
        $6_1 = $4_1 + $0_1 | 0;
        HEAP32[(0 + 628884 | 0) >> 2] = $6_1;
        $5_1 = (HEAP32[(0 + 628872 | 0) >> 2] | 0) + $2_1 | 0;
        $0_1 = $5_1 - $0_1 | 0;
        HEAP32[(0 + 628872 | 0) >> 2] = $0_1;
        HEAP32[($6_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
        HEAP32[(($4_1 + $5_1 | 0) + 4 | 0) >> 2] = 40;
        HEAP32[(0 + 628888 | 0) >> 2] = HEAP32[(0 + 629348 | 0) >> 2] | 0;
        break block84;
       }
       block85 : {
        if ($5_1 >>> 0 >= (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
         break block85
        }
        HEAP32[(0 + 628876 | 0) >> 2] = $5_1;
       }
       $6_1 = $5_1 + $2_1 | 0;
       $0_1 = 629308;
       block87 : {
        block86 : {
         label9 : while (1) {
          $8_1 = HEAP32[$0_1 >> 2] | 0;
          if (($8_1 | 0) == ($6_1 | 0)) {
           break block86
          }
          $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
          if ($0_1) {
           continue label9
          }
          break block87;
         };
        }
        if (!((HEAPU8[($0_1 + 12 | 0) >> 0] | 0) & 8 | 0)) {
         break block88
        }
       }
       $0_1 = 629308;
       block90 : {
        label10 : while (1) {
         block89 : {
          $6_1 = HEAP32[$0_1 >> 2] | 0;
          if ($4_1 >>> 0 < $6_1 >>> 0) {
           break block89
          }
          $6_1 = $6_1 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0;
          if ($4_1 >>> 0 < $6_1 >>> 0) {
           break block90
          }
         }
         $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
         continue label10;
        };
       }
       $0_1 = $2_1 + -40 | 0;
       $8_1 = (-8 - $5_1 | 0) & 7 | 0;
       $12_1 = $0_1 - $8_1 | 0;
       HEAP32[(0 + 628872 | 0) >> 2] = $12_1;
       $8_1 = $5_1 + $8_1 | 0;
       HEAP32[(0 + 628884 | 0) >> 2] = $8_1;
       HEAP32[($8_1 + 4 | 0) >> 2] = $12_1 | 1 | 0;
       HEAP32[(($5_1 + $0_1 | 0) + 4 | 0) >> 2] = 40;
       HEAP32[(0 + 628888 | 0) >> 2] = HEAP32[(0 + 629348 | 0) >> 2] | 0;
       $0_1 = ($6_1 + ((39 - $6_1 | 0) & 7 | 0) | 0) + -47 | 0;
       $8_1 = $0_1 >>> 0 < ($4_1 + 16 | 0) >>> 0 ? $4_1 : $0_1;
       HEAP32[($8_1 + 4 | 0) >> 2] = 27;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 629316 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 629320 | 0) >> 2] | 0;
       $1142 = i64toi32_i32$0;
       i64toi32_i32$0 = $8_1;
       HEAP32[($8_1 + 16 | 0) >> 2] = $1142;
       HEAP32[($8_1 + 20 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$2 = 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 629308 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 629312 | 0) >> 2] | 0;
       $1144 = i64toi32_i32$1;
       i64toi32_i32$1 = $8_1;
       HEAP32[($8_1 + 8 | 0) >> 2] = $1144;
       HEAP32[($8_1 + 12 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[(0 + 629316 | 0) >> 2] = $8_1 + 8 | 0;
       HEAP32[(0 + 629312 | 0) >> 2] = $2_1;
       HEAP32[(0 + 629308 | 0) >> 2] = $5_1;
       HEAP32[(0 + 629320 | 0) >> 2] = 0;
       $0_1 = $8_1 + 24 | 0;
       label11 : while (1) {
        HEAP32[($0_1 + 4 | 0) >> 2] = 7;
        $5_1 = $0_1 + 8 | 0;
        $0_1 = $0_1 + 4 | 0;
        if ($5_1 >>> 0 < $6_1 >>> 0) {
         continue label11
        }
        break label11;
       };
       if (($8_1 | 0) == ($4_1 | 0)) {
        break block84
       }
       HEAP32[($8_1 + 4 | 0) >> 2] = (HEAP32[($8_1 + 4 | 0) >> 2] | 0) & -2 | 0;
       $5_1 = $8_1 - $4_1 | 0;
       HEAP32[($4_1 + 4 | 0) >> 2] = $5_1 | 1 | 0;
       HEAP32[$8_1 >> 2] = $5_1;
       block94 : {
        block91 : {
         if ($5_1 >>> 0 > 255 >>> 0) {
          break block91
         }
         $0_1 = ($5_1 & 248 | 0) + 628900 | 0;
         block93 : {
          block92 : {
           $6_1 = HEAP32[(0 + 628860 | 0) >> 2] | 0;
           $5_1 = 1 << ($5_1 >>> 3 | 0) | 0;
           if ($6_1 & $5_1 | 0) {
            break block92
           }
           HEAP32[(0 + 628860 | 0) >> 2] = $6_1 | $5_1 | 0;
           $6_1 = $0_1;
           break block93;
          }
          $6_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
          if ($6_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
           break block4
          }
         }
         HEAP32[($0_1 + 8 | 0) >> 2] = $4_1;
         HEAP32[($6_1 + 12 | 0) >> 2] = $4_1;
         $5_1 = 12;
         $8_1 = 8;
         break block94;
        }
        $0_1 = 31;
        block95 : {
         if ($5_1 >>> 0 > 16777215 >>> 0) {
          break block95
         }
         $0_1 = Math_clz32($5_1 >>> 8 | 0);
         $0_1 = (($5_1 >>> (38 - $0_1 | 0) | 0) & 1 | 0 | ($0_1 << 1 | 0) | 0) ^ 62 | 0;
        }
        HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
        i64toi32_i32$1 = $4_1;
        i64toi32_i32$0 = 0;
        HEAP32[($4_1 + 16 | 0) >> 2] = 0;
        HEAP32[($4_1 + 20 | 0) >> 2] = i64toi32_i32$0;
        $6_1 = ($0_1 << 2 | 0) + 629164 | 0;
        block98 : {
         block97 : {
          block96 : {
           $8_1 = HEAP32[(0 + 628864 | 0) >> 2] | 0;
           $2_1 = 1 << $0_1 | 0;
           if ($8_1 & $2_1 | 0) {
            break block96
           }
           HEAP32[(0 + 628864 | 0) >> 2] = $8_1 | $2_1 | 0;
           HEAP32[$6_1 >> 2] = $4_1;
           HEAP32[($4_1 + 24 | 0) >> 2] = $6_1;
           break block97;
          }
          $0_1 = $5_1 << (($0_1 | 0) == (31 | 0) ? 0 : 25 - ($0_1 >>> 1 | 0) | 0) | 0;
          $8_1 = HEAP32[$6_1 >> 2] | 0;
          label12 : while (1) {
           $6_1 = $8_1;
           if (((HEAP32[($6_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($5_1 | 0)) {
            break block98
           }
           $8_1 = $0_1 >>> 29 | 0;
           $0_1 = $0_1 << 1 | 0;
           $2_1 = $6_1 + ($8_1 & 4 | 0) | 0;
           $8_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
           if ($8_1) {
            continue label12
           }
           break label12;
          };
          $0_1 = $2_1 + 16 | 0;
          if ($0_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
           break block4
          }
          HEAP32[$0_1 >> 2] = $4_1;
          HEAP32[($4_1 + 24 | 0) >> 2] = $6_1;
         }
         $5_1 = 8;
         $8_1 = 12;
         $6_1 = $4_1;
         $0_1 = $6_1;
         break block94;
        }
        $5_1 = HEAP32[(0 + 628876 | 0) >> 2] | 0;
        if ($6_1 >>> 0 < $5_1 >>> 0) {
         break block4
        }
        $0_1 = HEAP32[($6_1 + 8 | 0) >> 2] | 0;
        if ($0_1 >>> 0 < $5_1 >>> 0) {
         break block4
        }
        HEAP32[($0_1 + 12 | 0) >> 2] = $4_1;
        HEAP32[($6_1 + 8 | 0) >> 2] = $4_1;
        HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
        $0_1 = 0;
        $5_1 = 24;
        $8_1 = 12;
       }
       HEAP32[($4_1 + $8_1 | 0) >> 2] = $6_1;
       HEAP32[($4_1 + $5_1 | 0) >> 2] = $0_1;
      }
      $0_1 = HEAP32[(0 + 628872 | 0) >> 2] | 0;
      if ($0_1 >>> 0 <= $3_1 >>> 0) {
       break block77
      }
      $4_1 = $0_1 - $3_1 | 0;
      HEAP32[(0 + 628872 | 0) >> 2] = $4_1;
      $0_1 = HEAP32[(0 + 628884 | 0) >> 2] | 0;
      $6_1 = $0_1 + $3_1 | 0;
      HEAP32[(0 + 628884 | 0) >> 2] = $6_1;
      HEAP32[($6_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
      HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
      $0_1 = $0_1 + 8 | 0;
      break block5;
     }
     (wasm2js_i32$0 = $75() | 0, wasm2js_i32$1 = 48), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
     $0_1 = 0;
     break block5;
    }
    $99();
    wasm2js_trap();
   }
   HEAP32[$0_1 >> 2] = $5_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = (HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $2_1 | 0;
   $0_1 = $139($5_1 | 0, $8_1 | 0, $3_1 | 0) | 0;
  }
  global$0 = $1_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $139($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $5_1 = 0, $7_1 = 0, $6_1 = 0, $8_1 = 0, $3_1 = 0, $9_1 = 0, $352 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $3_1 = $0_1 + ((-8 - $0_1 | 0) & 7 | 0) | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = $2_1 | 3 | 0;
  $4_1 = $1_1 + ((-8 - $1_1 | 0) & 7 | 0) | 0;
  $5_1 = $3_1 + $2_1 | 0;
  $0_1 = $4_1 - $5_1 | 0;
  block6 : {
   block1 : {
    block : {
     if (($4_1 | 0) != (HEAP32[(0 + 628884 | 0) >> 2] | 0 | 0)) {
      break block
     }
     HEAP32[(0 + 628884 | 0) >> 2] = $5_1;
     $2_1 = (HEAP32[(0 + 628872 | 0) >> 2] | 0) + $0_1 | 0;
     HEAP32[(0 + 628872 | 0) >> 2] = $2_1;
     HEAP32[($5_1 + 4 | 0) >> 2] = $2_1 | 1 | 0;
     break block1;
    }
    block2 : {
     if (($4_1 | 0) != (HEAP32[(0 + 628880 | 0) >> 2] | 0 | 0)) {
      break block2
     }
     HEAP32[(0 + 628880 | 0) >> 2] = $5_1;
     $2_1 = (HEAP32[(0 + 628868 | 0) >> 2] | 0) + $0_1 | 0;
     HEAP32[(0 + 628868 | 0) >> 2] = $2_1;
     HEAP32[($5_1 + 4 | 0) >> 2] = $2_1 | 1 | 0;
     HEAP32[($5_1 + $2_1 | 0) >> 2] = $2_1;
     break block1;
    }
    block3 : {
     $6_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
     if (($6_1 & 3 | 0 | 0) != (1 | 0)) {
      break block3
     }
     $2_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
     block8 : {
      block4 : {
       if ($6_1 >>> 0 > 255 >>> 0) {
        break block4
       }
       block5 : {
        $1_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
        $7_1 = ($6_1 & 248 | 0) + 628900 | 0;
        if (($1_1 | 0) == ($7_1 | 0)) {
         break block5
        }
        if ($1_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
         break block6
        }
        if ((HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
         break block6
        }
       }
       block7 : {
        if (($2_1 | 0) != ($1_1 | 0)) {
         break block7
        }
        (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAP32[(0 + 628860 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $6_1 >>> 3 | 0 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 628860 | 0) >> 2] = wasm2js_i32$1;
        break block8;
       }
       block9 : {
        if (($2_1 | 0) == ($7_1 | 0)) {
         break block9
        }
        if ($2_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
         break block6
        }
        if ((HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
         break block6
        }
       }
       HEAP32[($1_1 + 12 | 0) >> 2] = $2_1;
       HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
       break block8;
      }
      $8_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
      block11 : {
       block10 : {
        if (($2_1 | 0) == ($4_1 | 0)) {
         break block10
        }
        $1_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
        if ($1_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
         break block6
        }
        if ((HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
         break block6
        }
        if ((HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
         break block6
        }
        HEAP32[($1_1 + 12 | 0) >> 2] = $2_1;
        HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
        break block11;
       }
       block14 : {
        block13 : {
         block12 : {
          $1_1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
          if (!$1_1) {
           break block12
          }
          $7_1 = $4_1 + 20 | 0;
          break block13;
         }
         $1_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
         if (!$1_1) {
          break block14
         }
         $7_1 = $4_1 + 16 | 0;
        }
        label : while (1) {
         $9_1 = $7_1;
         $2_1 = $1_1;
         $7_1 = $2_1 + 20 | 0;
         $1_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
         if ($1_1) {
          continue label
         }
         $7_1 = $2_1 + 16 | 0;
         $1_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
         if ($1_1) {
          continue label
         }
         break label;
        };
        if ($9_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
         break block6
        }
        HEAP32[$9_1 >> 2] = 0;
        break block11;
       }
       $2_1 = 0;
      }
      if (!$8_1) {
       break block8
      }
      block16 : {
       block15 : {
        $7_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
        $1_1 = $7_1 << 2 | 0;
        if (($4_1 | 0) != (HEAP32[($1_1 + 629164 | 0) >> 2] | 0 | 0)) {
         break block15
        }
        HEAP32[($1_1 + 629164 | 0) >> 2] = $2_1;
        if ($2_1) {
         break block16
        }
        (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAP32[(0 + 628864 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $7_1 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 628864 | 0) >> 2] = wasm2js_i32$1;
        break block8;
       }
       if ($8_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
        break block6
       }
       block18 : {
        block17 : {
         if ((HEAP32[($8_1 + 16 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
          break block17
         }
         HEAP32[($8_1 + 16 | 0) >> 2] = $2_1;
         break block18;
        }
        HEAP32[($8_1 + 20 | 0) >> 2] = $2_1;
       }
       if (!$2_1) {
        break block8
       }
      }
      $7_1 = HEAP32[(0 + 628876 | 0) >> 2] | 0;
      if ($2_1 >>> 0 < $7_1 >>> 0) {
       break block6
      }
      HEAP32[($2_1 + 24 | 0) >> 2] = $8_1;
      block19 : {
       $1_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
       if (!$1_1) {
        break block19
       }
       if ($1_1 >>> 0 < $7_1 >>> 0) {
        break block6
       }
       HEAP32[($2_1 + 16 | 0) >> 2] = $1_1;
       HEAP32[($1_1 + 24 | 0) >> 2] = $2_1;
      }
      $1_1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
      if (!$1_1) {
       break block8
      }
      if ($1_1 >>> 0 < $7_1 >>> 0) {
       break block6
      }
      HEAP32[($2_1 + 20 | 0) >> 2] = $1_1;
      HEAP32[($1_1 + 24 | 0) >> 2] = $2_1;
     }
     $2_1 = $6_1 & -8 | 0;
     $0_1 = $2_1 + $0_1 | 0;
     $4_1 = $4_1 + $2_1 | 0;
     $6_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
    }
    HEAP32[($4_1 + 4 | 0) >> 2] = $6_1 & -2 | 0;
    HEAP32[($5_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
    HEAP32[($5_1 + $0_1 | 0) >> 2] = $0_1;
    block20 : {
     if ($0_1 >>> 0 > 255 >>> 0) {
      break block20
     }
     $2_1 = ($0_1 & 248 | 0) + 628900 | 0;
     block22 : {
      block21 : {
       $1_1 = HEAP32[(0 + 628860 | 0) >> 2] | 0;
       $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
       if ($1_1 & $0_1 | 0) {
        break block21
       }
       HEAP32[(0 + 628860 | 0) >> 2] = $1_1 | $0_1 | 0;
       $0_1 = $2_1;
       break block22;
      }
      $0_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
      if ($0_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
       break block6
      }
     }
     HEAP32[($2_1 + 8 | 0) >> 2] = $5_1;
     HEAP32[($0_1 + 12 | 0) >> 2] = $5_1;
     HEAP32[($5_1 + 12 | 0) >> 2] = $2_1;
     HEAP32[($5_1 + 8 | 0) >> 2] = $0_1;
     break block1;
    }
    $2_1 = 31;
    block23 : {
     if ($0_1 >>> 0 > 16777215 >>> 0) {
      break block23
     }
     $2_1 = Math_clz32($0_1 >>> 8 | 0);
     $2_1 = (($0_1 >>> (38 - $2_1 | 0) | 0) & 1 | 0 | ($2_1 << 1 | 0) | 0) ^ 62 | 0;
    }
    HEAP32[($5_1 + 28 | 0) >> 2] = $2_1;
    HEAP32[($5_1 + 16 | 0) >> 2] = 0;
    HEAP32[($5_1 + 20 | 0) >> 2] = 0;
    $1_1 = ($2_1 << 2 | 0) + 629164 | 0;
    block26 : {
     block25 : {
      block24 : {
       $7_1 = HEAP32[(0 + 628864 | 0) >> 2] | 0;
       $4_1 = 1 << $2_1 | 0;
       if ($7_1 & $4_1 | 0) {
        break block24
       }
       HEAP32[(0 + 628864 | 0) >> 2] = $7_1 | $4_1 | 0;
       HEAP32[$1_1 >> 2] = $5_1;
       HEAP32[($5_1 + 24 | 0) >> 2] = $1_1;
       break block25;
      }
      $2_1 = $0_1 << (($2_1 | 0) == (31 | 0) ? 0 : 25 - ($2_1 >>> 1 | 0) | 0) | 0;
      $7_1 = HEAP32[$1_1 >> 2] | 0;
      label1 : while (1) {
       $1_1 = $7_1;
       if (((HEAP32[($1_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($0_1 | 0)) {
        break block26
       }
       $7_1 = $2_1 >>> 29 | 0;
       $2_1 = $2_1 << 1 | 0;
       $4_1 = $1_1 + ($7_1 & 4 | 0) | 0;
       $7_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
       if ($7_1) {
        continue label1
       }
       break label1;
      };
      $2_1 = $4_1 + 16 | 0;
      if ($2_1 >>> 0 < (HEAP32[(0 + 628876 | 0) >> 2] | 0) >>> 0) {
       break block6
      }
      HEAP32[$2_1 >> 2] = $5_1;
      HEAP32[($5_1 + 24 | 0) >> 2] = $1_1;
     }
     HEAP32[($5_1 + 12 | 0) >> 2] = $5_1;
     HEAP32[($5_1 + 8 | 0) >> 2] = $5_1;
     break block1;
    }
    $0_1 = HEAP32[(0 + 628876 | 0) >> 2] | 0;
    if ($1_1 >>> 0 < $0_1 >>> 0) {
     break block6
    }
    $2_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
    if ($2_1 >>> 0 < $0_1 >>> 0) {
     break block6
    }
    HEAP32[($2_1 + 12 | 0) >> 2] = $5_1;
    HEAP32[($1_1 + 8 | 0) >> 2] = $5_1;
    HEAP32[($5_1 + 24 | 0) >> 2] = 0;
    HEAP32[($5_1 + 12 | 0) >> 2] = $1_1;
    HEAP32[($5_1 + 8 | 0) >> 2] = $2_1;
   }
   return $3_1 + 8 | 0 | 0;
  }
  $99();
  wasm2js_trap();
 }
 
 function $140($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $1_1 = 0, $6_1 = 0, $4_1 = 0, $2_1 = 0, $7_1 = 0, $8_1 = 0, $10_1 = 0, $9_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  block1 : {
   block : {
    if (!$0_1) {
     break block
    }
    $1_1 = $0_1 + -8 | 0;
    $2_1 = HEAP32[(0 + 628876 | 0) >> 2] | 0;
    if ($1_1 >>> 0 < $2_1 >>> 0) {
     break block1
    }
    $3_1 = HEAP32[($0_1 + -4 | 0) >> 2] | 0;
    if (($3_1 & 3 | 0 | 0) == (1 | 0)) {
     break block1
    }
    $0_1 = $3_1 & -8 | 0;
    $4_1 = $1_1 + $0_1 | 0;
    block2 : {
     if ($3_1 & 1 | 0) {
      break block2
     }
     if (!($3_1 & 2 | 0)) {
      break block
     }
     $5_1 = HEAP32[$1_1 >> 2] | 0;
     $1_1 = $1_1 - $5_1 | 0;
     if ($1_1 >>> 0 < $2_1 >>> 0) {
      break block1
     }
     $0_1 = $5_1 + $0_1 | 0;
     block3 : {
      if (($1_1 | 0) == (HEAP32[(0 + 628880 | 0) >> 2] | 0 | 0)) {
       break block3
      }
      $3_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
      block4 : {
       if ($5_1 >>> 0 > 255 >>> 0) {
        break block4
       }
       block5 : {
        $6_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
        $7_1 = ($5_1 & 248 | 0) + 628900 | 0;
        if (($6_1 | 0) == ($7_1 | 0)) {
         break block5
        }
        if ($6_1 >>> 0 < $2_1 >>> 0) {
         break block1
        }
        if ((HEAP32[($6_1 + 12 | 0) >> 2] | 0 | 0) != ($1_1 | 0)) {
         break block1
        }
       }
       block6 : {
        if (($3_1 | 0) != ($6_1 | 0)) {
         break block6
        }
        (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAP32[(0 + 628860 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 >>> 3 | 0 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 628860 | 0) >> 2] = wasm2js_i32$1;
        break block2;
       }
       block7 : {
        if (($3_1 | 0) == ($7_1 | 0)) {
         break block7
        }
        if ($3_1 >>> 0 < $2_1 >>> 0) {
         break block1
        }
        if ((HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) != ($1_1 | 0)) {
         break block1
        }
       }
       HEAP32[($6_1 + 12 | 0) >> 2] = $3_1;
       HEAP32[($3_1 + 8 | 0) >> 2] = $6_1;
       break block2;
      }
      $8_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
      block9 : {
       block8 : {
        if (($3_1 | 0) == ($1_1 | 0)) {
         break block8
        }
        $5_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
        if ($5_1 >>> 0 < $2_1 >>> 0) {
         break block1
        }
        if ((HEAP32[($5_1 + 12 | 0) >> 2] | 0 | 0) != ($1_1 | 0)) {
         break block1
        }
        if ((HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) != ($1_1 | 0)) {
         break block1
        }
        HEAP32[($5_1 + 12 | 0) >> 2] = $3_1;
        HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
        break block9;
       }
       block12 : {
        block11 : {
         block10 : {
          $5_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
          if (!$5_1) {
           break block10
          }
          $6_1 = $1_1 + 20 | 0;
          break block11;
         }
         $5_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
         if (!$5_1) {
          break block12
         }
         $6_1 = $1_1 + 16 | 0;
        }
        label : while (1) {
         $7_1 = $6_1;
         $3_1 = $5_1;
         $6_1 = $3_1 + 20 | 0;
         $5_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
         if ($5_1) {
          continue label
         }
         $6_1 = $3_1 + 16 | 0;
         $5_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
         if ($5_1) {
          continue label
         }
         break label;
        };
        if ($7_1 >>> 0 < $2_1 >>> 0) {
         break block1
        }
        HEAP32[$7_1 >> 2] = 0;
        break block9;
       }
       $3_1 = 0;
      }
      if (!$8_1) {
       break block2
      }
      block14 : {
       block13 : {
        $6_1 = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
        $5_1 = $6_1 << 2 | 0;
        if (($1_1 | 0) != (HEAP32[($5_1 + 629164 | 0) >> 2] | 0 | 0)) {
         break block13
        }
        HEAP32[($5_1 + 629164 | 0) >> 2] = $3_1;
        if ($3_1) {
         break block14
        }
        (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAP32[(0 + 628864 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $6_1 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 628864 | 0) >> 2] = wasm2js_i32$1;
        break block2;
       }
       if ($8_1 >>> 0 < $2_1 >>> 0) {
        break block1
       }
       block16 : {
        block15 : {
         if ((HEAP32[($8_1 + 16 | 0) >> 2] | 0 | 0) != ($1_1 | 0)) {
          break block15
         }
         HEAP32[($8_1 + 16 | 0) >> 2] = $3_1;
         break block16;
        }
        HEAP32[($8_1 + 20 | 0) >> 2] = $3_1;
       }
       if (!$3_1) {
        break block2
       }
      }
      if ($3_1 >>> 0 < $2_1 >>> 0) {
       break block1
      }
      HEAP32[($3_1 + 24 | 0) >> 2] = $8_1;
      block17 : {
       $5_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
       if (!$5_1) {
        break block17
       }
       if ($5_1 >>> 0 < $2_1 >>> 0) {
        break block1
       }
       HEAP32[($3_1 + 16 | 0) >> 2] = $5_1;
       HEAP32[($5_1 + 24 | 0) >> 2] = $3_1;
      }
      $5_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
      if (!$5_1) {
       break block2
      }
      if ($5_1 >>> 0 < $2_1 >>> 0) {
       break block1
      }
      HEAP32[($3_1 + 20 | 0) >> 2] = $5_1;
      HEAP32[($5_1 + 24 | 0) >> 2] = $3_1;
      break block2;
     }
     $3_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
     if (($3_1 & 3 | 0 | 0) != (3 | 0)) {
      break block2
     }
     HEAP32[(0 + 628868 | 0) >> 2] = $0_1;
     HEAP32[($4_1 + 4 | 0) >> 2] = $3_1 & -2 | 0;
     HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
     HEAP32[$4_1 >> 2] = $0_1;
     return;
    }
    if ($1_1 >>> 0 >= $4_1 >>> 0) {
     break block1
    }
    $7_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
    if (!($7_1 & 1 | 0)) {
     break block1
    }
    block36 : {
     block18 : {
      if ($7_1 & 2 | 0) {
       break block18
      }
      block19 : {
       if (($4_1 | 0) != (HEAP32[(0 + 628884 | 0) >> 2] | 0 | 0)) {
        break block19
       }
       HEAP32[(0 + 628884 | 0) >> 2] = $1_1;
       $0_1 = (HEAP32[(0 + 628872 | 0) >> 2] | 0) + $0_1 | 0;
       HEAP32[(0 + 628872 | 0) >> 2] = $0_1;
       HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
       if (($1_1 | 0) != (HEAP32[(0 + 628880 | 0) >> 2] | 0 | 0)) {
        break block
       }
       HEAP32[(0 + 628868 | 0) >> 2] = 0;
       HEAP32[(0 + 628880 | 0) >> 2] = 0;
       return;
      }
      block20 : {
       $9_1 = HEAP32[(0 + 628880 | 0) >> 2] | 0;
       if (($4_1 | 0) != ($9_1 | 0)) {
        break block20
       }
       HEAP32[(0 + 628880 | 0) >> 2] = $1_1;
       $0_1 = (HEAP32[(0 + 628868 | 0) >> 2] | 0) + $0_1 | 0;
       HEAP32[(0 + 628868 | 0) >> 2] = $0_1;
       HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
       HEAP32[($1_1 + $0_1 | 0) >> 2] = $0_1;
       return;
      }
      $3_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
      block24 : {
       block21 : {
        if ($7_1 >>> 0 > 255 >>> 0) {
         break block21
        }
        block22 : {
         $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
         $6_1 = ($7_1 & 248 | 0) + 628900 | 0;
         if (($5_1 | 0) == ($6_1 | 0)) {
          break block22
         }
         if ($5_1 >>> 0 < $2_1 >>> 0) {
          break block1
         }
         if ((HEAP32[($5_1 + 12 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
          break block1
         }
        }
        block23 : {
         if (($3_1 | 0) != ($5_1 | 0)) {
          break block23
         }
         (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAP32[(0 + 628860 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $7_1 >>> 3 | 0 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 628860 | 0) >> 2] = wasm2js_i32$1;
         break block24;
        }
        block25 : {
         if (($3_1 | 0) == ($6_1 | 0)) {
          break block25
         }
         if ($3_1 >>> 0 < $2_1 >>> 0) {
          break block1
         }
         if ((HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
          break block1
         }
        }
        HEAP32[($5_1 + 12 | 0) >> 2] = $3_1;
        HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
        break block24;
       }
       $10_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
       block27 : {
        block26 : {
         if (($3_1 | 0) == ($4_1 | 0)) {
          break block26
         }
         $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
         if ($5_1 >>> 0 < $2_1 >>> 0) {
          break block1
         }
         if ((HEAP32[($5_1 + 12 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
          break block1
         }
         if ((HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
          break block1
         }
         HEAP32[($5_1 + 12 | 0) >> 2] = $3_1;
         HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
         break block27;
        }
        block30 : {
         block29 : {
          block28 : {
           $5_1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
           if (!$5_1) {
            break block28
           }
           $6_1 = $4_1 + 20 | 0;
           break block29;
          }
          $5_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
          if (!$5_1) {
           break block30
          }
          $6_1 = $4_1 + 16 | 0;
         }
         label1 : while (1) {
          $8_1 = $6_1;
          $3_1 = $5_1;
          $6_1 = $3_1 + 20 | 0;
          $5_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
          if ($5_1) {
           continue label1
          }
          $6_1 = $3_1 + 16 | 0;
          $5_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
          if ($5_1) {
           continue label1
          }
          break label1;
         };
         if ($8_1 >>> 0 < $2_1 >>> 0) {
          break block1
         }
         HEAP32[$8_1 >> 2] = 0;
         break block27;
        }
        $3_1 = 0;
       }
       if (!$10_1) {
        break block24
       }
       block32 : {
        block31 : {
         $6_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
         $5_1 = $6_1 << 2 | 0;
         if (($4_1 | 0) != (HEAP32[($5_1 + 629164 | 0) >> 2] | 0 | 0)) {
          break block31
         }
         HEAP32[($5_1 + 629164 | 0) >> 2] = $3_1;
         if ($3_1) {
          break block32
         }
         (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAP32[(0 + 628864 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $6_1 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 628864 | 0) >> 2] = wasm2js_i32$1;
         break block24;
        }
        if ($10_1 >>> 0 < $2_1 >>> 0) {
         break block1
        }
        block34 : {
         block33 : {
          if ((HEAP32[($10_1 + 16 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
           break block33
          }
          HEAP32[($10_1 + 16 | 0) >> 2] = $3_1;
          break block34;
         }
         HEAP32[($10_1 + 20 | 0) >> 2] = $3_1;
        }
        if (!$3_1) {
         break block24
        }
       }
       if ($3_1 >>> 0 < $2_1 >>> 0) {
        break block1
       }
       HEAP32[($3_1 + 24 | 0) >> 2] = $10_1;
       block35 : {
        $5_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
        if (!$5_1) {
         break block35
        }
        if ($5_1 >>> 0 < $2_1 >>> 0) {
         break block1
        }
        HEAP32[($3_1 + 16 | 0) >> 2] = $5_1;
        HEAP32[($5_1 + 24 | 0) >> 2] = $3_1;
       }
       $5_1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
       if (!$5_1) {
        break block24
       }
       if ($5_1 >>> 0 < $2_1 >>> 0) {
        break block1
       }
       HEAP32[($3_1 + 20 | 0) >> 2] = $5_1;
       HEAP32[($5_1 + 24 | 0) >> 2] = $3_1;
      }
      $0_1 = ($7_1 & -8 | 0) + $0_1 | 0;
      HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
      HEAP32[($1_1 + $0_1 | 0) >> 2] = $0_1;
      if (($1_1 | 0) != ($9_1 | 0)) {
       break block36
      }
      HEAP32[(0 + 628868 | 0) >> 2] = $0_1;
      return;
     }
     HEAP32[($4_1 + 4 | 0) >> 2] = $7_1 & -2 | 0;
     HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
     HEAP32[($1_1 + $0_1 | 0) >> 2] = $0_1;
    }
    block37 : {
     if ($0_1 >>> 0 > 255 >>> 0) {
      break block37
     }
     $3_1 = ($0_1 & 248 | 0) + 628900 | 0;
     block39 : {
      block38 : {
       $5_1 = HEAP32[(0 + 628860 | 0) >> 2] | 0;
       $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
       if ($5_1 & $0_1 | 0) {
        break block38
       }
       HEAP32[(0 + 628860 | 0) >> 2] = $5_1 | $0_1 | 0;
       $0_1 = $3_1;
       break block39;
      }
      $0_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
      if ($0_1 >>> 0 < $2_1 >>> 0) {
       break block1
      }
     }
     HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
     HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
     HEAP32[($1_1 + 12 | 0) >> 2] = $3_1;
     HEAP32[($1_1 + 8 | 0) >> 2] = $0_1;
     return;
    }
    $3_1 = 31;
    block40 : {
     if ($0_1 >>> 0 > 16777215 >>> 0) {
      break block40
     }
     $3_1 = Math_clz32($0_1 >>> 8 | 0);
     $3_1 = (($0_1 >>> (38 - $3_1 | 0) | 0) & 1 | 0 | ($3_1 << 1 | 0) | 0) ^ 62 | 0;
    }
    HEAP32[($1_1 + 28 | 0) >> 2] = $3_1;
    HEAP32[($1_1 + 16 | 0) >> 2] = 0;
    HEAP32[($1_1 + 20 | 0) >> 2] = 0;
    $6_1 = ($3_1 << 2 | 0) + 629164 | 0;
    block44 : {
     block43 : {
      block42 : {
       block41 : {
        $5_1 = HEAP32[(0 + 628864 | 0) >> 2] | 0;
        $4_1 = 1 << $3_1 | 0;
        if ($5_1 & $4_1 | 0) {
         break block41
        }
        HEAP32[(0 + 628864 | 0) >> 2] = $5_1 | $4_1 | 0;
        HEAP32[$6_1 >> 2] = $1_1;
        $0_1 = 8;
        $3_1 = 24;
        break block42;
       }
       $3_1 = $0_1 << (($3_1 | 0) == (31 | 0) ? 0 : 25 - ($3_1 >>> 1 | 0) | 0) | 0;
       $6_1 = HEAP32[$6_1 >> 2] | 0;
       label2 : while (1) {
        $5_1 = $6_1;
        if (((HEAP32[($5_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($0_1 | 0)) {
         break block43
        }
        $6_1 = $3_1 >>> 29 | 0;
        $3_1 = $3_1 << 1 | 0;
        $4_1 = $5_1 + ($6_1 & 4 | 0) | 0;
        $6_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
        if ($6_1) {
         continue label2
        }
        break label2;
       };
       $0_1 = $4_1 + 16 | 0;
       if ($0_1 >>> 0 < $2_1 >>> 0) {
        break block1
       }
       HEAP32[$0_1 >> 2] = $1_1;
       $0_1 = 8;
       $3_1 = 24;
       $6_1 = $5_1;
      }
      $5_1 = $1_1;
      $4_1 = $5_1;
      break block44;
     }
     if ($5_1 >>> 0 < $2_1 >>> 0) {
      break block1
     }
     $6_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
     if ($6_1 >>> 0 < $2_1 >>> 0) {
      break block1
     }
     HEAP32[($6_1 + 12 | 0) >> 2] = $1_1;
     HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
     $4_1 = 0;
     $0_1 = 24;
     $3_1 = 8;
    }
    HEAP32[($1_1 + $3_1 | 0) >> 2] = $6_1;
    HEAP32[($1_1 + 12 | 0) >> 2] = $5_1;
    HEAP32[($1_1 + $0_1 | 0) >> 2] = $4_1;
    $1_1 = (HEAP32[(0 + 628892 | 0) >> 2] | 0) + -1 | 0;
    HEAP32[(0 + 628892 | 0) >> 2] = $1_1 ? $1_1 : -1;
   }
   return;
  }
  $99();
  wasm2js_trap();
 }
 
 function $141() {
  return __wasm_memory_size() << 16 | 0 | 0;
 }
 
 function $142($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $6$hi = 0, $9$hi = 0, $2_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  block1 : {
   block : {
    i64toi32_i32$0 = 0;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 7;
    i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
    i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
    if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
    }
    i64toi32_i32$0 = i64toi32_i32$4;
    i64toi32_i32$2 = 1;
    i64toi32_i32$3 = -8;
    i64toi32_i32$2 = i64toi32_i32$5 & i64toi32_i32$2 | 0;
    $6$hi = i64toi32_i32$2;
    $0_1 = HEAP32[(0 + 73772 | 0) >> 2] | 0;
    i64toi32_i32$2 = 0;
    $9$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $6$hi;
    i64toi32_i32$5 = i64toi32_i32$4 & i64toi32_i32$3 | 0;
    i64toi32_i32$0 = $9$hi;
    i64toi32_i32$3 = $0_1;
    i64toi32_i32$1 = i64toi32_i32$5 + i64toi32_i32$3 | 0;
    i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$0 | 0;
    if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
    }
    i64toi32_i32$2 = i64toi32_i32$1;
    i64toi32_i32$5 = 0;
    i64toi32_i32$3 = -1;
    if (i64toi32_i32$4 >>> 0 > i64toi32_i32$5 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$5 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0) {
     break block
    }
    i64toi32_i32$2 = i64toi32_i32$4;
    i64toi32_i32$2 = i64toi32_i32$4;
    $2_1 = i64toi32_i32$1;
    if (($141() | 0) >>> 0 >= i64toi32_i32$1 >>> 0) {
     break block1
    }
    if (fimport$12(i64toi32_i32$1 | 0) | 0) {
     break block1
    }
   }
   (wasm2js_i32$0 = $75() | 0, wasm2js_i32$1 = 48), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
   return -1 | 0;
  }
  HEAP32[(0 + 73772 | 0) >> 2] = $2_1;
  return $0_1 | 0;
 }
 
 function $143() {
  global$2 = 65536;
  global$1 = (0 + 15 | 0) & -16 | 0;
 }
 
 function $144() {
  return global$0 - global$1 | 0 | 0;
 }
 
 function $145() {
  return global$2 | 0;
 }
 
 function $146() {
  return global$1 | 0;
 }
 
 function $147($0_1, $1_1, $1$hi, $2_1, $2$hi, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, $4$hi = 0, $18_1 = 0, $20_1 = 0, $21_1 = 0, $22_1 = 0, $11$hi = 0, $18$hi = 0, $19_1 = 0, $19$hi = 0, $4_1 = 0, $24$hi = 0;
  block1 : {
   block : {
    if (!($3_1 & 64 | 0)) {
     break block
    }
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$0 = 0;
    $11$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$2 = $1_1;
    i64toi32_i32$1 = $11$hi;
    i64toi32_i32$3 = $3_1 + -64 | 0;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
     $18_1 = 0;
    } else {
     i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
     $18_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    }
    $2_1 = $18_1;
    $2$hi = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    $1_1 = 0;
    $1$hi = i64toi32_i32$1;
    break block1;
   }
   if (!$3_1) {
    break block1
   }
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$1 = 0;
   $18$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$0 = $1_1;
   i64toi32_i32$2 = $18$hi;
   i64toi32_i32$3 = 64 - $3_1 | 0;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $20_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $20_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
   }
   $19_1 = $20_1;
   $19$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $2$hi;
   i64toi32_i32$2 = 0;
   $4_1 = $3_1;
   $4$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $2$hi;
   i64toi32_i32$1 = $2_1;
   i64toi32_i32$0 = $4$hi;
   i64toi32_i32$3 = $3_1;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
    $21_1 = 0;
   } else {
    i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
    $21_1 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   }
   $24$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $19$hi;
   i64toi32_i32$2 = $19_1;
   i64toi32_i32$1 = $24$hi;
   i64toi32_i32$3 = $21_1;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   $2_1 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $2$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$1 = $4$hi;
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$0 = $1_1;
   i64toi32_i32$2 = $4$hi;
   i64toi32_i32$3 = $4_1;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    $22_1 = 0;
   } else {
    i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
    $22_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
   }
   $1_1 = $22_1;
   $1$hi = i64toi32_i32$2;
  }
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$0 = $0_1;
  HEAP32[i64toi32_i32$0 >> 2] = $1_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
  i64toi32_i32$2 = $2$hi;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $2_1;
  HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function $148($0_1, $1_1, $1$hi, $2_1, $2$hi, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $4$hi = 0, $18_1 = 0, $20_1 = 0, $21_1 = 0, $22_1 = 0, $11$hi = 0, $18$hi = 0, $19_1 = 0, $19$hi = 0, $4_1 = 0, $24$hi = 0;
  block1 : {
   block : {
    if (!($3_1 & 64 | 0)) {
     break block
    }
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$0 = 0;
    $11$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$2 = $2_1;
    i64toi32_i32$1 = $11$hi;
    i64toi32_i32$3 = $3_1 + -64 | 0;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $18_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     $18_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    $1_1 = $18_1;
    $1$hi = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    $2_1 = 0;
    $2$hi = i64toi32_i32$1;
    break block1;
   }
   if (!$3_1) {
    break block1
   }
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$1 = 0;
   $18$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$0 = $2_1;
   i64toi32_i32$2 = $18$hi;
   i64toi32_i32$3 = 64 - $3_1 | 0;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    $20_1 = 0;
   } else {
    i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
    $20_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
   }
   $19_1 = $20_1;
   $19$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $1$hi;
   i64toi32_i32$2 = 0;
   $4_1 = $3_1;
   $4$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $1$hi;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = $4$hi;
   i64toi32_i32$3 = $3_1;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$0 = 0;
    $21_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
    $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
   }
   $24$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $19$hi;
   i64toi32_i32$2 = $19_1;
   i64toi32_i32$1 = $24$hi;
   i64toi32_i32$3 = $21_1;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   $1_1 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $1$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$1 = $4$hi;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$0 = $2_1;
   i64toi32_i32$2 = $4$hi;
   i64toi32_i32$3 = $4_1;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $22_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $22_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
   }
   $2_1 = $22_1;
   $2$hi = i64toi32_i32$2;
  }
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$0 = $0_1;
  HEAP32[i64toi32_i32$0 >> 2] = $1_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
  i64toi32_i32$2 = $2$hi;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $2_1;
  HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function $149($0_1, $0$hi, $1_1, $1$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  var i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$5 = 0, $7_1 = 0, $7$hi = 0, $3_1 = 0, $2_1 = 0, $8_1 = 0, $8$hi = 0, $4_1 = 0, $6_1 = 0, $45_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, $49_1 = 0, $5_1 = 0, $50_1 = 0, $51_1 = 0, $52_1 = 0, $23_1 = 0, $23$hi = 0, $25$hi = 0, $39$hi = 0, $48$hi = 0, $58_1 = 0, $58$hi = 0, $60$hi = 0, $76_1 = 0, $76$hi = 0, $89_1 = 0, $89$hi = 0, $91_1 = 0, $91$hi = 0, $101_1 = 0, $101$hi = 0, $104$hi = 0, $107$hi = 0, $109$hi = 0, $118$hi = 0, $122_1 = 0, $122$hi = 0, $133$hi = 0, $135_1 = 0, $135$hi = 0, $136$hi = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 65535;
  i64toi32_i32$3 = -1;
  i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
  $7_1 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
  $7$hi = i64toi32_i32$1;
  block3 : {
   block : {
    i64toi32_i32$1 = i64toi32_i32$0;
    i64toi32_i32$1 = i64toi32_i32$0;
    i64toi32_i32$0 = i64toi32_i32$2;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 48;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = 0;
     $45_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
     $45_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
    }
    i64toi32_i32$1 = $45_1;
    i64toi32_i32$0 = 0;
    i64toi32_i32$3 = 32767;
    i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
    $8_1 = i64toi32_i32$1 & i64toi32_i32$3 | 0;
    $8$hi = i64toi32_i32$0;
    $3_1 = $8_1;
    if (($3_1 + -15361 | 0) >>> 0 > 2045 >>> 0) {
     break block
    }
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 60;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $46_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     $46_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    $23_1 = $46_1;
    $23$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $7$hi;
    i64toi32_i32$0 = $7_1;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 4;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
     $47_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $47_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    }
    $25$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $23$hi;
    i64toi32_i32$1 = $23_1;
    i64toi32_i32$0 = $25$hi;
    i64toi32_i32$3 = $47_1;
    i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
    $7_1 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
    $7$hi = i64toi32_i32$0;
    i64toi32_i32$0 = 0;
    $8_1 = $3_1 + -15360 | 0;
    $8$hi = i64toi32_i32$0;
    block2 : {
     block1 : {
      i64toi32_i32$0 = $0$hi;
      i64toi32_i32$2 = $0_1;
      i64toi32_i32$1 = 268435455;
      i64toi32_i32$3 = -1;
      i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
      $0_1 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
      $0$hi = i64toi32_i32$1;
      i64toi32_i32$0 = $0_1;
      i64toi32_i32$2 = 134217728;
      i64toi32_i32$3 = 1;
      if (i64toi32_i32$1 >>> 0 < i64toi32_i32$2 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
       break block1
      }
      i64toi32_i32$0 = $7$hi;
      i64toi32_i32$3 = $7_1;
      i64toi32_i32$1 = 0;
      i64toi32_i32$2 = 1;
      i64toi32_i32$4 = i64toi32_i32$3 + i64toi32_i32$2 | 0;
      i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
      if (i64toi32_i32$4 >>> 0 < i64toi32_i32$2 >>> 0) {
       i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
      }
      $7_1 = i64toi32_i32$4;
      $7$hi = i64toi32_i32$5;
      break block2;
     }
     i64toi32_i32$5 = $0$hi;
     i64toi32_i32$0 = $0_1;
     i64toi32_i32$3 = 134217728;
     i64toi32_i32$2 = 0;
     if ((i64toi32_i32$0 | 0) != (i64toi32_i32$2 | 0) | (i64toi32_i32$5 | 0) != (i64toi32_i32$3 | 0) | 0) {
      break block2
     }
     i64toi32_i32$0 = $7$hi;
     i64toi32_i32$2 = $7_1;
     i64toi32_i32$5 = 0;
     i64toi32_i32$3 = 1;
     i64toi32_i32$5 = i64toi32_i32$0 & i64toi32_i32$5 | 0;
     $39$hi = i64toi32_i32$5;
     i64toi32_i32$5 = i64toi32_i32$0;
     i64toi32_i32$5 = $39$hi;
     i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
     i64toi32_i32$2 = $7$hi;
     i64toi32_i32$3 = $7_1;
     i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
     i64toi32_i32$4 = i64toi32_i32$5 + i64toi32_i32$2 | 0;
     if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
      i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
     }
     $7_1 = i64toi32_i32$1;
     $7$hi = i64toi32_i32$4;
    }
    i64toi32_i32$4 = $7$hi;
    i64toi32_i32$5 = $7_1;
    i64toi32_i32$0 = 1048575;
    i64toi32_i32$3 = -1;
    $3_1 = i64toi32_i32$4 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$5 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0;
    i64toi32_i32$2 = $3_1;
    i64toi32_i32$5 = 0;
    i64toi32_i32$0 = i64toi32_i32$2 ? 0 : $7_1;
    i64toi32_i32$3 = i64toi32_i32$2 ? i64toi32_i32$5 : i64toi32_i32$4;
    $0_1 = i64toi32_i32$0;
    $0$hi = i64toi32_i32$3;
    i64toi32_i32$3 = 0;
    $48$hi = i64toi32_i32$3;
    i64toi32_i32$3 = $8$hi;
    i64toi32_i32$3 = $48$hi;
    i64toi32_i32$0 = $8$hi;
    i64toi32_i32$4 = $8_1;
    i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$4 | 0;
    i64toi32_i32$1 = i64toi32_i32$3 + i64toi32_i32$0 | 0;
    if (i64toi32_i32$5 >>> 0 < i64toi32_i32$4 >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
    }
    $7_1 = i64toi32_i32$5;
    $7$hi = i64toi32_i32$1;
    break block3;
   }
   block4 : {
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$1 = $7$hi;
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$3 = $0_1;
    i64toi32_i32$2 = $7$hi;
    i64toi32_i32$4 = $7_1;
    i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
    if (!(i64toi32_i32$3 | i64toi32_i32$4 | 0 | i64toi32_i32$2 | 0)) {
     break block4
    }
    i64toi32_i32$2 = $8$hi;
    i64toi32_i32$1 = $8_1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$4 = 32767;
    if ((i64toi32_i32$1 | 0) != (i64toi32_i32$4 | 0) | (i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | 0) {
     break block4
    }
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$4 = $0_1;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 60;
    i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = 0;
     $48_1 = i64toi32_i32$1 >>> i64toi32_i32$0 | 0;
    } else {
     i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$0 | 0;
     $48_1 = (((1 << i64toi32_i32$0 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$0 | 0) | 0 | (i64toi32_i32$4 >>> i64toi32_i32$0 | 0) | 0;
    }
    $58_1 = $48_1;
    $58$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $7$hi;
    i64toi32_i32$1 = $7_1;
    i64toi32_i32$4 = 0;
    i64toi32_i32$3 = 4;
    i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$1 << i64toi32_i32$0 | 0;
     $49_1 = 0;
    } else {
     i64toi32_i32$4 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$0 | 0) | 0;
     $49_1 = i64toi32_i32$1 << i64toi32_i32$0 | 0;
    }
    $60$hi = i64toi32_i32$4;
    i64toi32_i32$4 = $58$hi;
    i64toi32_i32$2 = $58_1;
    i64toi32_i32$1 = $60$hi;
    i64toi32_i32$3 = $49_1;
    i64toi32_i32$1 = i64toi32_i32$4 | i64toi32_i32$1 | 0;
    i64toi32_i32$4 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
    i64toi32_i32$2 = 524288;
    i64toi32_i32$3 = 0;
    i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
    $0_1 = i64toi32_i32$4 | i64toi32_i32$3 | 0;
    $0$hi = i64toi32_i32$2;
    i64toi32_i32$2 = 0;
    $7_1 = 2047;
    $7$hi = i64toi32_i32$2;
    break block3;
   }
   block5 : {
    if ($3_1 >>> 0 <= 17406 >>> 0) {
     break block5
    }
    i64toi32_i32$2 = 0;
    $7_1 = 2047;
    $7$hi = i64toi32_i32$2;
    i64toi32_i32$2 = 0;
    $0_1 = 0;
    $0$hi = i64toi32_i32$2;
    break block3;
   }
   block6 : {
    i64toi32_i32$2 = $8$hi;
    $4_1 = !($8_1 | i64toi32_i32$2 | 0);
    $5_1 = $4_1 ? 15360 : 15361;
    $6_1 = $5_1 - $3_1 | 0;
    if (($6_1 | 0) <= (112 | 0)) {
     break block6
    }
    i64toi32_i32$2 = 0;
    $0_1 = 0;
    $0$hi = i64toi32_i32$2;
    i64toi32_i32$2 = 0;
    $7_1 = 0;
    $7$hi = i64toi32_i32$2;
    break block3;
   }
   i64toi32_i32$2 = $7$hi;
   i64toi32_i32$1 = $7_1;
   i64toi32_i32$4 = 65536;
   i64toi32_i32$3 = 0;
   i64toi32_i32$4 = i64toi32_i32$2 | i64toi32_i32$4 | 0;
   $76_1 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
   $76$hi = i64toi32_i32$4;
   i64toi32_i32$0 = $4_1;
   i64toi32_i32$4 = i64toi32_i32$2;
   i64toi32_i32$1 = $76$hi;
   i64toi32_i32$3 = i64toi32_i32$0 ? $7_1 : $76_1;
   i64toi32_i32$2 = i64toi32_i32$0 ? i64toi32_i32$2 : i64toi32_i32$1;
   $7_1 = i64toi32_i32$3;
   $7$hi = i64toi32_i32$2;
   $4_1 = 0;
   block7 : {
    if (($5_1 | 0) == ($3_1 | 0)) {
     break block7
    }
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$2 = $7$hi;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$3 = $7$hi;
    $147($2_1 + 16 | 0 | 0, $0_1 | 0, i64toi32_i32$2 | 0, $7_1 | 0, i64toi32_i32$3 | 0, 128 - $6_1 | 0 | 0);
    i64toi32_i32$0 = $2_1;
    i64toi32_i32$3 = HEAP32[(i64toi32_i32$0 + 16 | 0) >> 2] | 0;
    i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 20 | 0) >> 2] | 0;
    $89_1 = i64toi32_i32$3;
    $89$hi = i64toi32_i32$2;
    i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] | 0;
    i64toi32_i32$3 = HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] | 0;
    $91_1 = i64toi32_i32$2;
    $91$hi = i64toi32_i32$3;
    i64toi32_i32$3 = $89$hi;
    i64toi32_i32$0 = $89_1;
    i64toi32_i32$2 = $91$hi;
    i64toi32_i32$1 = $91_1;
    i64toi32_i32$2 = i64toi32_i32$3 | i64toi32_i32$2 | 0;
    i64toi32_i32$3 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = 0;
    $4_1 = (i64toi32_i32$3 | 0) != (i64toi32_i32$1 | 0) | (i64toi32_i32$2 | 0) != (i64toi32_i32$0 | 0) | 0;
   }
   i64toi32_i32$3 = $0$hi;
   i64toi32_i32$3 = $7$hi;
   i64toi32_i32$3 = $0$hi;
   i64toi32_i32$2 = $7$hi;
   $148($2_1 | 0, $0_1 | 0, i64toi32_i32$3 | 0, $7_1 | 0, i64toi32_i32$2 | 0, $6_1 | 0);
   i64toi32_i32$1 = $2_1;
   i64toi32_i32$2 = HEAP32[i64toi32_i32$1 >> 2] | 0;
   i64toi32_i32$3 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
   $7_1 = i64toi32_i32$2;
   $7$hi = i64toi32_i32$3;
   i64toi32_i32$1 = i64toi32_i32$2;
   i64toi32_i32$2 = 0;
   i64toi32_i32$0 = 60;
   i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $50_1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    $50_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
   }
   $101_1 = $50_1;
   $101$hi = i64toi32_i32$2;
   i64toi32_i32$3 = $2_1;
   i64toi32_i32$2 = HEAP32[(i64toi32_i32$3 + 8 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$3 + 12 | 0) >> 2] | 0;
   i64toi32_i32$3 = i64toi32_i32$2;
   i64toi32_i32$2 = 0;
   i64toi32_i32$0 = 4;
   i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    $51_1 = 0;
   } else {
    i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
    $51_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
   }
   $104$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $101$hi;
   i64toi32_i32$1 = $101_1;
   i64toi32_i32$3 = $104$hi;
   i64toi32_i32$0 = $51_1;
   i64toi32_i32$3 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $0_1 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
   $0$hi = i64toi32_i32$3;
   block9 : {
    block8 : {
     i64toi32_i32$3 = $7$hi;
     i64toi32_i32$2 = $7_1;
     i64toi32_i32$1 = 268435455;
     i64toi32_i32$0 = -1;
     i64toi32_i32$1 = i64toi32_i32$3 & i64toi32_i32$1 | 0;
     $107$hi = i64toi32_i32$1;
     i64toi32_i32$1 = 0;
     $109$hi = i64toi32_i32$1;
     i64toi32_i32$1 = $107$hi;
     i64toi32_i32$3 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
     i64toi32_i32$2 = $109$hi;
     i64toi32_i32$0 = $4_1;
     i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
     $7_1 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
     $7$hi = i64toi32_i32$2;
     i64toi32_i32$1 = $7_1;
     i64toi32_i32$3 = 134217728;
     i64toi32_i32$0 = 1;
     if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$1 >>> 0 < i64toi32_i32$0 >>> 0 | 0) | 0) {
      break block8
     }
     i64toi32_i32$1 = $0$hi;
     i64toi32_i32$0 = $0_1;
     i64toi32_i32$2 = 0;
     i64toi32_i32$3 = 1;
     i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
     i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$2 | 0;
     if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
      i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
     }
     $0_1 = i64toi32_i32$4;
     $0$hi = i64toi32_i32$5;
     break block9;
    }
    i64toi32_i32$5 = $7$hi;
    i64toi32_i32$1 = $7_1;
    i64toi32_i32$0 = 134217728;
    i64toi32_i32$3 = 0;
    if ((i64toi32_i32$1 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$5 | 0) != (i64toi32_i32$0 | 0) | 0) {
     break block9
    }
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$3 = $0_1;
    i64toi32_i32$5 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$5 = i64toi32_i32$1 & i64toi32_i32$5 | 0;
    $118$hi = i64toi32_i32$5;
    i64toi32_i32$5 = i64toi32_i32$1;
    i64toi32_i32$5 = $118$hi;
    i64toi32_i32$1 = i64toi32_i32$3 & i64toi32_i32$0 | 0;
    i64toi32_i32$3 = $0$hi;
    i64toi32_i32$0 = $0_1;
    i64toi32_i32$2 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
    i64toi32_i32$4 = i64toi32_i32$5 + i64toi32_i32$3 | 0;
    if (i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
    }
    $0_1 = i64toi32_i32$2;
    $0$hi = i64toi32_i32$4;
   }
   i64toi32_i32$4 = $0$hi;
   i64toi32_i32$5 = $0_1;
   i64toi32_i32$1 = 1048576;
   i64toi32_i32$0 = 0;
   i64toi32_i32$1 = i64toi32_i32$4 ^ i64toi32_i32$1 | 0;
   $122_1 = i64toi32_i32$5 ^ i64toi32_i32$0 | 0;
   $122$hi = i64toi32_i32$1;
   i64toi32_i32$1 = i64toi32_i32$4;
   i64toi32_i32$4 = i64toi32_i32$5;
   i64toi32_i32$5 = 1048575;
   i64toi32_i32$0 = -1;
   $3_1 = i64toi32_i32$1 >>> 0 > i64toi32_i32$5 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$5 | 0) & i64toi32_i32$4 >>> 0 > i64toi32_i32$0 >>> 0 | 0) | 0;
   i64toi32_i32$3 = $3_1;
   i64toi32_i32$4 = $122$hi;
   i64toi32_i32$5 = i64toi32_i32$3 ? $122_1 : $0_1;
   i64toi32_i32$0 = i64toi32_i32$3 ? i64toi32_i32$4 : i64toi32_i32$1;
   $0_1 = i64toi32_i32$5;
   $0$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 0;
   $7_1 = i64toi32_i32$3;
   $7$hi = i64toi32_i32$0;
  }
  global$0 = $2_1 + 32 | 0;
  i64toi32_i32$0 = $7$hi;
  i64toi32_i32$3 = $7_1;
  i64toi32_i32$5 = 0;
  i64toi32_i32$1 = 52;
  i64toi32_i32$4 = i64toi32_i32$1 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
   i64toi32_i32$5 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
   $52_1 = 0;
  } else {
   i64toi32_i32$5 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $52_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
  }
  $133$hi = i64toi32_i32$5;
  i64toi32_i32$5 = $1$hi;
  i64toi32_i32$0 = $1_1;
  i64toi32_i32$3 = -2147483648;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
  $135_1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
  $135$hi = i64toi32_i32$3;
  i64toi32_i32$3 = $133$hi;
  i64toi32_i32$5 = $52_1;
  i64toi32_i32$0 = $135$hi;
  i64toi32_i32$1 = $135_1;
  i64toi32_i32$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
  $136$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$0 = $136$hi;
  i64toi32_i32$3 = i64toi32_i32$5 | i64toi32_i32$1 | 0;
  i64toi32_i32$5 = $0$hi;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$5 = i64toi32_i32$0 | i64toi32_i32$5 | 0;
  wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$3 | i64toi32_i32$1 | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$5 | 0);
  return +(+wasm2js_scratch_load_f64());
 }
 
 function $150() {
  $170(65765 | 0, 0 | 0);
  wasm2js_trap();
 }
 
 function $151($0_1) {
  $0_1 = $0_1 | 0;
  block : {
   $0_1 = $152($0_1 | 0) | 0;
   if ($0_1) {
    break block
   }
   $150();
   wasm2js_trap();
  }
  return $0_1 | 0;
 }
 
 function $152($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $1_1 = 0;
  $1_1 = $0_1 >>> 0 > 1 >>> 0 ? $0_1 : 1;
  block : {
   label : while (1) {
    $2_1 = $138($1_1 | 0) | 0;
    if ($2_1) {
     break block
    }
    $0_1 = $171() | 0;
    if (!$0_1) {
     break block
    }
    FUNCTION_TABLE[$0_1 | 0]();
    continue label;
   };
  }
  return $2_1 | 0;
 }
 
 function $153($0_1) {
  $0_1 = $0_1 | 0;
  $140($0_1 | 0);
 }
 
 function $154($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $153($0_1 | 0);
 }
 
 function $155($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = 65569;
  block : {
   if ($0_1 >>> 0 > 153 >>> 0) {
    break block
   }
   block2 : {
    block1 : {
     if ($0_1) {
      break block1
     }
     $0_1 = 0;
     break block2;
    }
    $0_1 = HEAPU16[(($0_1 << 1 | 0) + 70384 | 0) >> 1] | 0;
    if (!$0_1) {
     break block
    }
   }
   $2_1 = $0_1 + 70692 | 0;
  }
  return $2_1 | 0;
 }
 
 function $156($0_1) {
  $0_1 = $0_1 | 0;
  return $155($0_1 | 0, $0_1 | 0) | 0 | 0;
 }
 
 function $157($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0, $4_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP8[($2_1 + 15 | 0) >> 0] = $1_1;
  block2 : {
   block : {
    $3_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($3_1) {
     break block
    }
    block1 : {
     if (!($112($0_1 | 0) | 0)) {
      break block1
     }
     $3_1 = -1;
     break block2;
    }
    $3_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
   }
   block3 : {
    $4_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
    if (($4_1 | 0) == ($3_1 | 0)) {
     break block3
    }
    $3_1 = $1_1 & 255 | 0;
    if ((HEAP32[($0_1 + 80 | 0) >> 2] | 0 | 0) == ($3_1 | 0)) {
     break block3
    }
    HEAP32[($0_1 + 20 | 0) >> 2] = $4_1 + 1 | 0;
    HEAP8[$4_1 >> 0] = $1_1;
    break block2;
   }
   block4 : {
    if ((FUNCTION_TABLE[HEAP32[($0_1 + 36 | 0) >> 2] | 0 | 0]($0_1, $2_1 + 15 | 0, 1) | 0 | 0) == (1 | 0)) {
     break block4
    }
    $3_1 = -1;
    break block2;
   }
   $3_1 = HEAPU8[($2_1 + 15 | 0) >> 0] | 0;
  }
  global$0 = $2_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $158($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  block : {
   if ($2_1 >>> 0 >= 2147483639 >>> 0) {
    break block
   }
   block3 : {
    block2 : {
     block1 : {
      if ($2_1 >>> 0 < 11 >>> 0) {
       break block1
      }
      $3_1 = $2_1 | 7 | 0;
      $4_1 = $151($3_1 + 1 | 0 | 0) | 0;
      HEAP32[($0_1 + 8 | 0) >> 2] = $3_1 + -2147483647 | 0;
      HEAP32[$0_1 >> 2] = $4_1;
      HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
      $0_1 = $4_1;
      break block2;
     }
     HEAP8[($0_1 + 11 | 0) >> 0] = $2_1;
     if (!$2_1) {
      break block3
     }
    }
    if (!$2_1) {
     break block3
    }
    wasm2js_memory_copy($0_1, $1_1, $2_1);
   }
   HEAP8[($0_1 + $2_1 | 0) >> 0] = 0;
   return;
  }
  $159();
  wasm2js_trap();
 }
 
 function $159() {
  $160(65748 | 0);
  wasm2js_trap();
 }
 
 function $160($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[$1_1 >> 2] = $0_1;
  $170(65942 | 0, $1_1 | 0);
  wasm2js_trap();
 }
 
 function $161($0_1) {
  $0_1 = $0_1 | 0;
  block : {
   if ((HEAP8[($0_1 + 11 | 0) >> 0] | 0 | 0) > (-1 | 0)) {
    break block
   }
   $154(HEAP32[$0_1 >> 2] | 0 | 0, (HEAP32[($0_1 + 8 | 0) >> 2] | 0) & 2147483647 | 0 | 0);
  }
  return $0_1 | 0;
 }
 
 function $162($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  block1 : {
   block : {
    $3_1 = HEAP8[($0_1 + 11 | 0) >> 0] | 0;
    $4_1 = ($3_1 | 0) < (0 | 0);
    $5_1 = (wasm2js_i32$0 = ((HEAP32[($0_1 + 8 | 0) >> 2] | 0) & 2147483647 | 0) + -1 | 0, wasm2js_i32$1 = 10, wasm2js_i32$2 = $4_1, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
    $4_1 = (wasm2js_i32$0 = HEAP32[($0_1 + 4 | 0) >> 2] | 0, wasm2js_i32$1 = $3_1, wasm2js_i32$2 = $4_1, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
    if (($5_1 - $4_1 | 0) >>> 0 < $2_1 >>> 0) {
     break block
    }
    if (!$2_1) {
     break block1
    }
    $3_1 = (wasm2js_i32$0 = HEAP32[$0_1 >> 2] | 0, wasm2js_i32$1 = $0_1, wasm2js_i32$2 = ($3_1 | 0) < (0 | 0), wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
    block2 : {
     if (!$2_1) {
      break block2
     }
     wasm2js_memory_copy($3_1 + $4_1 | 0, $1_1, $2_1);
    }
    $2_1 = $4_1 + $2_1 | 0;
    block4 : {
     block3 : {
      if ((HEAP8[($0_1 + 11 | 0) >> 0] | 0 | 0) > (-1 | 0)) {
       break block3
      }
      HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
      break block4;
     }
     HEAP8[($0_1 + 11 | 0) >> 0] = $2_1 & 127 | 0;
    }
    HEAP8[($3_1 + $2_1 | 0) >> 0] = 0;
    return $0_1 | 0;
   }
   $163($0_1 | 0, $5_1 | 0, ($4_1 + $2_1 | 0) - $5_1 | 0 | 0, $4_1 | 0, $4_1 | 0, 0 | 0, $2_1 | 0, $1_1 | 0);
  }
  return $0_1 | 0;
 }
 
 function $163($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1, $7_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = $6_1 | 0;
  $7_1 = $7_1 | 0;
  var $10_1 = 0, $8_1 = 0, $9_1 = 0;
  block : {
   if ($2_1 >>> 0 > (2147483638 - $1_1 | 0) >>> 0) {
    break block
   }
   $8_1 = (HEAP8[($0_1 + 11 | 0) >> 0] | 0 | 0) < (0 | 0);
   $9_1 = HEAP32[$0_1 >> 2] | 0;
   $10_1 = 2147483639;
   block1 : {
    if ($1_1 >>> 0 > 1073741810 >>> 0) {
     break block1
    }
    $2_1 = $2_1 + $1_1 | 0;
    $10_1 = $1_1 << 1 | 0;
    $2_1 = $2_1 >>> 0 > $10_1 >>> 0 ? $2_1 : $10_1;
    $10_1 = $2_1 >>> 0 < 11 >>> 0 ? 11 : ($2_1 | 7 | 0) + 1 | 0;
   }
   $9_1 = $8_1 ? $9_1 : $0_1;
   $2_1 = $151($10_1 | 0) | 0;
   block2 : {
    if (!$4_1) {
     break block2
    }
    if (!$4_1) {
     break block2
    }
    wasm2js_memory_copy($2_1, $9_1, $4_1);
   }
   block3 : {
    if (!$6_1) {
     break block3
    }
    if (!$6_1) {
     break block3
    }
    wasm2js_memory_copy($2_1 + $4_1 | 0, $7_1, $6_1);
   }
   $7_1 = $5_1 + $4_1 | 0;
   $8_1 = $3_1 - $7_1 | 0;
   block4 : {
    if (($3_1 | 0) == ($7_1 | 0)) {
     break block4
    }
    if (!$8_1) {
     break block4
    }
    wasm2js_memory_copy(($2_1 + $4_1 | 0) + $6_1 | 0, ($9_1 + $4_1 | 0) + $5_1 | 0, $8_1);
   }
   block5 : {
    $1_1 = $1_1 + 1 | 0;
    if (($1_1 | 0) == (11 | 0)) {
     break block5
    }
    $154($9_1 | 0, $1_1 | 0);
   }
   HEAP32[$0_1 >> 2] = $2_1;
   HEAP32[($0_1 + 8 | 0) >> 2] = $10_1 | -2147483648 | 0;
   $4_1 = ($6_1 + $4_1 | 0) + $8_1 | 0;
   HEAP32[($0_1 + 4 | 0) >> 2] = $4_1;
   HEAP8[($2_1 + $4_1 | 0) >> 0] = 0;
   return;
  }
  $159();
  wasm2js_trap();
 }
 
 function $164($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $165($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $165($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  block1 : {
   block : {
    $2_1 = HEAP32[($1_1 + 76 | 0) >> 2] | 0;
    if (($2_1 | 0) < (0 | 0)) {
     break block
    }
    if (!$2_1) {
     break block1
    }
    if (($2_1 & 1073741823 | 0 | 0) != (HEAP32[(($97() | 0) + 24 | 0) >> 2] | 0 | 0)) {
     break block1
    }
   }
   block2 : {
    $2_1 = $0_1 & 255 | 0;
    if (($2_1 | 0) == (HEAP32[($1_1 + 80 | 0) >> 2] | 0 | 0)) {
     break block2
    }
    $3_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
    if (($3_1 | 0) == (HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0)) {
     break block2
    }
    HEAP32[($1_1 + 20 | 0) >> 2] = $3_1 + 1 | 0;
    HEAP8[$3_1 >> 0] = $0_1;
    return $2_1 | 0;
   }
   return $157($1_1 | 0, $2_1 | 0) | 0 | 0;
  }
  return $166($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $166($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0, $4_1 = 0;
  block : {
   $2_1 = $1_1 + 76 | 0;
   if (!($167($2_1 | 0) | 0)) {
    break block
   }
   $65($1_1 | 0) | 0;
  }
  block2 : {
   block1 : {
    $3_1 = $0_1 & 255 | 0;
    if (($3_1 | 0) == (HEAP32[($1_1 + 80 | 0) >> 2] | 0 | 0)) {
     break block1
    }
    $4_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
    if (($4_1 | 0) == (HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0)) {
     break block1
    }
    HEAP32[($1_1 + 20 | 0) >> 2] = $4_1 + 1 | 0;
    HEAP8[$4_1 >> 0] = $0_1;
    break block2;
   }
   $3_1 = $157($1_1 | 0, $3_1 | 0) | 0;
  }
  block3 : {
   if (!(($168($2_1 | 0) | 0) & 1073741824 | 0)) {
    break block3
   }
   $169($2_1 | 0);
  }
  return $3_1 | 0;
 }
 
 function $167($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP32[$0_1 >> 2] = $1_1 ? $1_1 : 1073741823;
  return $1_1 | 0;
 }
 
 function $168($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP32[$0_1 >> 2] = 0;
  return $1_1 | 0;
 }
 
 function $169($0_1) {
  $0_1 = $0_1 | 0;
  $88($0_1 | 0, 1 | 0) | 0;
 }
 
 function $170($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 12 | 0) >> 2] = $1_1;
  $2_1 = HEAP32[(0 + 70368 | 0) >> 2] | 0;
  $128($2_1 | 0, $0_1 | 0, $1_1 | 0) | 0;
  block : {
   if ((HEAPU8[(($0_1 + ($108($0_1 | 0) | 0) | 0) + -1 | 0) >> 0] | 0 | 0) == (10 | 0)) {
    break block
   }
   $164(10 | 0, $2_1 | 0) | 0;
  }
  $99();
  wasm2js_trap();
 }
 
 function $171() {
  return HEAP32[(0 + 629356 | 0) >> 2] | 0 | 0;
 }
 
 function $172($0_1) {
  $0_1 = $0_1 | 0;
  global$3 = $0_1;
 }
 
 function $174($0_1) {
  $0_1 = $0_1 | 0;
  global$0 = $0_1;
 }
 
 function $175($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = (global$0 - $0_1 | 0) & -16 | 0;
  global$0 = $1_1;
  return $1_1 | 0;
 }
 
 function $176() {
  return global$0 | 0;
 }
 
 function $177($0_1, $1_1, $2_1, $2$hi, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = FUNCTION_TABLE[$0_1 | 0]($1_1, $2_1, i64toi32_i32$0, $3_1) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $178($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $17_1 = 0, $18_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0, $9$hi = 0, $12$hi = 0, $5_1 = 0, $5$hi = 0;
  $6_1 = $0_1;
  $7_1 = $1_1;
  i64toi32_i32$0 = 0;
  $9_1 = $2_1;
  $9$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $3_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $17_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $17_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $9$hi;
  i64toi32_i32$0 = $9_1;
  i64toi32_i32$2 = $12$hi;
  i64toi32_i32$3 = $17_1;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $177($6_1 | 0, $7_1 | 0, i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0, $4_1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $5_1 = i64toi32_i32$2;
  $5$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $18_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $18_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  $172($18_1 | 0);
  i64toi32_i32$2 = $5$hi;
  return $5_1 | 0;
 }
 
 function $179($0_1, $1_1, $1$hi, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12_1 = 0, $4_1 = 0, $6_1 = 0, i64toi32_i32$2 = 0;
  $4_1 = $0_1;
  i64toi32_i32$0 = $1$hi;
  $6_1 = $1_1;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $12_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $12_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  return fimport$13($4_1 | 0, $6_1 | 0, $12_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0;
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21_1 = 0, $22_1 = 0, var$6 = 0, $24_1 = 0, $17_1 = 0, $18_1 = 0, $23_1 = 0, $29_1 = 0, $45_1 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17_1 = Math_imul(var$4, var$5);
  $18_1 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23_1 = $17_1 + Math_imul($18_1, $21_1) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29_1 = $23_1 + Math_imul($22_1, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45_1 = $29_1 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45_1 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24_1 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24_1 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24_1;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $37_1 = 0, $38_1 = 0, $39_1 = 0, $40_1 = 0, $41_1 = 0, $42_1 = 0, $43_1 = 0, $44_1 = 0, var$8$hi = 0, $45_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, var$7$hi = 0, $49_1 = 0, $63$hi = 0, $65_1 = 0, $65$hi = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140_1 = 0, $140$hi = 0, $142$hi = 0, $144_1 = 0, $144$hi = 0, $151_1 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $37_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $37_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $37_1;
             if (var$2) {
              i64toi32_i32$1 = var$1$hi;
              var$3 = var$1;
              if (!var$3) {
               break label$11
              }
              i64toi32_i32$0 = var$3;
              i64toi32_i32$2 = 0;
              i64toi32_i32$3 = 32;
              i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
              if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
               i64toi32_i32$2 = 0;
               $38_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
              } else {
               i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               $38_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
              }
              var$4 = $38_1;
              if (!var$4) {
               break label$9
              }
              var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
              if (var$2 >>> 0 <= 31 >>> 0) {
               break label$8
              }
              break label$2;
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = i64toi32_i32$2;
             i64toi32_i32$1 = i64toi32_i32$2;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             __wasm_intrinsics_temp_i64 = var$0 - Math_imul(var$2, var$3) | 0;
             __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $39_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $39_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $39_1;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $40_1 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $40_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65_1 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $40_1;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65_1;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            __wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> ((__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0) | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $41_1 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $41_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        __wasm_intrinsics_temp_i64 = $41_1;
        __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      __wasm_intrinsics_temp_i64 = var$4 & var$0 | 0;
      __wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $42_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $42_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $42_1;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $43_1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $43_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $43_1;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $44_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $44_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $44_1;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      i64toi32_i32$2 = var$1$hi;
      i64toi32_i32$1 = var$1;
      i64toi32_i32$3 = -1;
      i64toi32_i32$0 = -1;
      i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
      i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
      if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
       i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
      }
      var$8 = i64toi32_i32$4;
      var$8$hi = i64toi32_i32$5;
      label$15 : while (1) {
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$2 = var$5;
       i64toi32_i32$1 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        $45_1 = 0;
       } else {
        i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
        $45_1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
       }
       $140_1 = $45_1;
       $140$hi = i64toi32_i32$1;
       i64toi32_i32$1 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = 0;
        $46_1 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        $46_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
       }
       $142$hi = i64toi32_i32$2;
       i64toi32_i32$2 = $140$hi;
       i64toi32_i32$1 = $140_1;
       i64toi32_i32$5 = $142$hi;
       i64toi32_i32$0 = $46_1;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
       var$5$hi = i64toi32_i32$5;
       $144_1 = var$5;
       $144$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$2 = var$8;
       i64toi32_i32$1 = var$5$hi;
       i64toi32_i32$0 = var$5;
       i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
       i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
       i64toi32_i32$5 = i64toi32_i32$3;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
        $47_1 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        $47_1 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
       }
       var$6 = $47_1;
       var$6$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$2 = var$6$hi;
       i64toi32_i32$4 = var$6;
       i64toi32_i32$5 = var$1$hi;
       i64toi32_i32$0 = var$1;
       i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
       $151_1 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
       $151$hi = i64toi32_i32$5;
       i64toi32_i32$5 = $144$hi;
       i64toi32_i32$2 = $144_1;
       i64toi32_i32$4 = $151$hi;
       i64toi32_i32$0 = $151_1;
       i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
       i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
       var$5 = i64toi32_i32$1;
       var$5$hi = i64toi32_i32$3;
       i64toi32_i32$3 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        $48_1 = 0;
       } else {
        i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
        $48_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
       }
       $154$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$7$hi;
       i64toi32_i32$2 = $154$hi;
       i64toi32_i32$3 = $48_1;
       i64toi32_i32$5 = var$7$hi;
       i64toi32_i32$0 = var$7;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
       var$0$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$6$hi;
       i64toi32_i32$2 = var$6;
       i64toi32_i32$3 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
       var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
       var$6$hi = i64toi32_i32$3;
       var$7 = var$6;
       var$7$hi = i64toi32_i32$3;
       var$2 = var$2 + -1 | 0;
       if (var$2) {
        continue label$15
       }
       break label$15;
      };
      break label$13;
     }
    }
    i64toi32_i32$3 = var$5$hi;
    __wasm_intrinsics_temp_i64 = var$5;
    __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $49_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $49_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $49_1;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   __wasm_intrinsics_temp_i64 = var$0;
   __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_udiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_rotl_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 >>> var$2 | 0) & var$0 | 0) << var$2 | 0 | (((-1 << var$1 | 0) & var$0 | 0) >>> var$1 | 0) | 0 | 0;
 }
 
 // EMSCRIPTEN_END_FUNCS
;
 bufferView = HEAPU8;
 initActiveSegments(imports);
 var FUNCTION_TABLE = Table([null, $4, $5, $6, $78, $79, $80, $82, $129, $130, $133]);
 function __wasm_memory_size() {
  return buffer.byteLength >> 16;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536) && (newPages <= 32768)) {
   var newBuffer = new ArrayBuffer(newPages << 16);
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__wasm_call_ctors": $0, 
  "malloc": $138, 
  "main": $9, 
  "__em_js__render_to_canvas": {
   get value() {
    return global$4;
   }, 
   set value(_global$4) {
    global$4 = _global$4;
   }
  }, 
  "__indirect_function_table": FUNCTION_TABLE, 
  "fflush": $62, 
  "emscripten_stack_get_end": $146, 
  "emscripten_stack_get_base": $145, 
  "strerror": $156, 
  "emscripten_stack_init": $143, 
  "emscripten_stack_get_free": $144, 
  "_emscripten_stack_restore": $174, 
  "_emscripten_stack_alloc": $175, 
  "emscripten_stack_get_current": $176, 
  "__start_em_js": {
   get value() {
    return global$5;
   }, 
   set value(_global$5) {
    global$5 = _global$5;
   }
  }, 
  "__stop_em_js": {
   get value() {
    return global$6;
   }, 
   set value(_global$6) {
    global$6 = _global$6;
   }
  }, 
  "dynCall_jiji": $178
 };
}

  return asmFunc(info);
}

)(info);
  },

  instantiate: /** @suppress{checkTypes} */ function(binary, info) {
    return {
      then: function(ok) {
        var module = new WebAssembly.Module(binary);
        ok({
          'instance': new WebAssembly.Instance(module, info)
        });
        // Emulate a simple WebAssembly.instantiate(..).then(()=>{}).catch(()=>{}) syntax.
        return { catch: function() {} };
      }
    };
  },

  RuntimeError: Error,

  isWasm2js: true,
};
