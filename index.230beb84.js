!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("bOlkj",function(t,r){e(t.exports,"fetchBreeds",function(){return i}),e(t.exports,"fetchCatByBreed",function(){return o});var n=a("dIxxU");async function i(){try{let e=await (0,n.default).get("https://api.thecatapi.com/v1/breeds");return e.data}catch(e){throw e}}async function o(e){try{let t=await (0,n.default).get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`);return t.data}catch(e){throw e}}n.default.defaults.headers.common["x-api-key"]="live_JLKhZxskbzcrsqTWiM6f61vvtiB9iYS1dag3hByMnOhHScQE3Xg6Gc20jzY1hsr9"}),a("bOlkj")}();//# sourceMappingURL=index.230beb84.js.map

//# sourceMappingURL=index.230beb84.js.map
