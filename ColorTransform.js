// ColorTransform.js v3.0.0
class ColorTransform {
   //-------------------
   // private variables 
   //-------------------
   #COLORS_MAP;
   
   //------------
   // constructor
   //------------
   constructor() {
      this.version = '3.0.0';
      this.#COLORS_MAP = new Map(
         Object.entries(this.#COLORS).map(([k, v]) => [this.#trimCase(k), v])
      );
   }
   
   //--------
   // Colors
   //--------
   #COLORS = {
      "AliceBlue": "#F0F8FF",
      "AntiqueWhite": "#FAEBD7",
      "Aqua": "#00FFFF",
      "Aquamarine": "#7FFFD4",
      "Azure": "#F0FFFF",
      "Beige": "#F5F5DC",
      "Bisque": "#FFE4C4",
      "Black": "#000000",
      "BlanchedAlmond": "#FFEBCD",
      "Blue": "#0000FF",
      "BlueViolet": "#8A2BE2",
      "Brown": "#A52A2A",
      "BurlyWood": "#DEB887",
      "CadetBlue": "#5F9EA0",
      "Chartreuse": "#7FFF00",
      "Chocolate": "#D2691E",
      "Coral": "#FF7F50",
      "CornflowerBlue": "#6495ED",
      "Cornsilk": "#FFF8DC",
      "Crimson": "#DC143C",
      "Cyan": "#00FFFF",
      "DarkBlue": "#00008B",
      "DarkCyan": "#008B8B",
      "DarkGoldenRod": "#B8860B",
      "DarkGray": "#A9A9A9",
      "DarkGrey": "#A9A9A9",
      "DarkGreen": "#006400",
      "DarkKhaki": "#BDB76B",
      "DarkMagenta": "#8B008B",
      "DarkOliveGreen": "#556B2F",
      "DarkOrange": "#FF8C00",
      "DarkOrchid": "#9932CC",
      "DarkRed": "#8B0000",
      "DarkSalmon": "#E9967A",
      "DarkSeaGreen": "#8FBC8F",
      "DarkSlateBlue": "#483D8B",
      "DarkSlateGray": "#2F4F4F",
      "DarkSlateGrey": "#2F4F4F",
      "DarkTurquoise": "#00CED1",
      "DarkViolet": "#9400D3",
      "DeepPink": "#FF1493",
      "DeepSkyBlue": "#00BFFF",
      "DimGray": "#696969",
      "DimGrey": "#696969",
      "DodgerBlue": "#1E90FF",
      "FireBrick": "#B22222",
      "FloralWhite": "#FFFAF0",
      "ForestGreen": "#228B22",
      "Fuchsia": "#FF00FF",
      "Gainsboro": "#DCDCDC",
      "GhostWhite": "#F8F8FF",
      "Gold": "#FFD700",
      "GoldenRod": "#DAA520",
      "Gray": "#808080",
      "Grey": "#808080",
      "Green": "#008000",
      "GreenYellow": "#ADFF2F",
      "HoneyDew": "#F0FFF0",
      "HotPink": "#FF69B4",
      "IndianRed": "#CD5C5C",
      "Indigo": "#4B0082",
      "Ivory": "#FFFFF0",
      "Khaki": "#F0E68C",
      "Lavender": "#E6E6FA",
      "LavenderBlush": "#FFF0F5",
      "LawnGreen": "#7CFC00",
      "LemonChiffon": "#FFFACD",
      "LightBlue": "#ADD8E6",
      "LightCoral": "#F08080",
      "LightCyan": "#E0FFFF",
      "LightGoldenRodYellow": "#FAFAD2",
      "LightGray": "#D3D3D3",
      "LightGrey": "#D3D3D3",
      "LightGreen": "#90EE90",
      "LightPink": "#FFB6C1",
      "LightSalmon": "#FFA07A",
      "LightSeaGreen": "#20B2AA",
      "LightSkyBlue": "#87CEFA",
      "LightSlateGray": "#778899",
      "LightSlateGrey": "#778899",
      "LightSteelBlue": "#B0C4DE",
      "LightYellow": "#FFFFE0",
      "Lime": "#00FF00",
      "LimeGreen": "#32CD32",
      "Linen": "#FAF0E6",
      "Magenta": "#FF00FF",
      "Maroon": "#800000",
      "MediumAquaMarine": "#66CDAA",
      "MediumBlue": "#0000CD",
      "MediumOrchid": "#BA55D3",
      "MediumPurple": "#9370DB",
      "MediumSeaGreen": "#3CB371",
      "MediumSlateBlue": "#3CB371",
      "MediumSpringGreen": "#00FA9A",
      "MediumTurquoise": "#48D1CC",
      "MediumVioletRed": "#C71585",
      "MidnightBlue": "#191970",
      "MintCream": "#F5FFFA",
      "MistyRose": "#FFE4E1",
      "Moccasin": "#FFE4B5",
      "NavajoWhite": "#FFDEAD",
      "Navy": "#000080",
      "OldLace": "#FDF5E6",
      "Olive": "#808000",
      "OliveDrab": "#6B8E23",
      "Orange": "#FFA500",
      "OrangeRed": "#FF4500",
      "Orchid": "#DA70D6",
      "PaleGoldenRod": "#EEE8AA",
      "PaleGreen": "#98FB98",
      "PaleTurquoise": "#AFEEEE",
      "PaleVioletRed": "#DB7093",
      "PapayaWhip": "#FFEFD5",
      "PeachPuff": "#FFDAB9",
      "Peru": "#CD853F",
      "Pink": "#FFC0CB",
      "Plum": "#DDA0DD",
      "PowderBlue": "#B0E0E6",
      "Purple": "#800080",
      "RebeccaPurple": "#663399",
      "Red": "#FF0000",
      "RosyBrown": "#BC8F8F",
      "RoyalBlue": "#4169E1",
      "SaddleBrown": "#8B4513",
      "Salmon": "#FA8072",
      "SandyBrown": "#F4A460",
      "SeaGreen": "#2E8B57",
      "SeaShell": "#FFF5EE",
      "Sienna": "#A0522D",
      "Silver": "#C0C0C0",
      "SkyBlue": "#87CEEB",
      "SlateBlue": "#6A5ACD",
      "SlateGray": "#708090",
      "SlateGrey": "#708090",
      "Snow": "#FFFAFA",
      "SpringGreen": "#00FF7F",
      "SteelBlue": "#4682B4",
      "Tan": "#D2B48C",
      "Teal": "#008080",
      "Thistle": "#D8BFD8",
      "Tomato": "#FF6347",
      "Turquoise": "#40E0D0",
      "Violet": "#EE82EE",
      "Wheat": "#F5DEB3",
      "White": "#FFFFFF",
      "WhiteSmoke": "#F5F5F5",
      "Yellow": "#FFFF00",
      "YellowGreen": "#9ACD32"
   };
   
   //------------
   // Validation 
   //------------
   #V = {
      // data type
      string: (input) => {
         return typeof input === 'string';
      },
      number: (input) => {
         return typeof input === 'number';
      },
      object: (input) => {
         return typeof input === 'object' && !Array.isArray(input) && input !== null;
      },
      array: (input) => {
         return typeof input === 'object' && Array.isArray(input) && input !== null;
      },
   }
   
   //--------
   // RegExp
   //--------
   #R = {
      // input 
      hex: /^#([a-f\d]{3}|[a-f\d]{4}|[a-f\d]{6}|[a-f\d]{8})$/i,
      rgb: /^rgba?\(\s*(\d+(\.\d+)?)\s*,?\s*(\d+(\.\d+)?)\s*,?\s*(\d+(\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
      hsl: /^hsla?\(\s*(\d+(\.\d+)?)\s*(deg)?\s*,?\s*(\d+(\.\d+)?)%?\s*,?\s*(\d+(\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
      // normalized match
      nHex: /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
      nRgb: /^rgb\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*\/\s*(\d*\.?\d+)\s*\)$/i,
      nHsl: /^hsl\(\s*(\d{1,3})deg\s+(\d{1,3})%\s+(\d{1,3})%\s*\/\s*(\d*\.?\d+)\s*\)$/i,
   }
   
   //-----------
   // Normalize 
   //-----------
   #N = {
      keyword: (input) => {
         const T = this.#trimCase;
         input = T(input);
         if (this.#COLORS_MAP.has(input)) {
            const originalKey = Object.keys(this.#COLORS).find(name => T(name) === input);
            return this.#splitPascalCase(originalKey);
         }
         return undefined;
      },
      hex: (input) => {
         const regex = this.#R.hex;
         if (!regex.test(input)) return undefined;
         let hex = input.slice(1).toUpperCase();
         if (hex.length === 3) {
            hex = hex.replace(/./g, x => x + x) + 'ff';
         } else if (hex.length === 4) {
            hex = hex.replace(/./g, x => x + x);
         } else if (hex.length === 6) {
            hex += 'FF';
         }
         return `#${hex.toUpperCase()}`;
      },
      rgb: (input) => {
         const regex = this.#R.rgb;
         let match = input.match(regex);
         if (!match) return undefined;
         let r = parseInt(match[1]);
         let g = parseInt(match[3]);
         let b = parseInt(match[5]);
         let a = match[7] !== undefined ? parseFloat(match[7]) : 1;
         if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1) return undefined;
         return `rgb(${r} ${g} ${b} / ${a})`;
      },
      hsl: (input) => {
         const regex = this.#R.hsl;
         let match = input.match(regex);
         if (!match) return undefined;
         let h = Math.round(parseFloat(match[1]));
         let s = Math.round(parseFloat(match[4]));
         let l = Math.round(parseFloat(match[6]));
         let a = match[8] !== undefined ? parseFloat(match[8]) : 1;
         if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100 || a < 0 || a > 1) return undefined;
         return `hsl(${h}deg ${s}% ${l}% / ${a})`;
      },
   }
   
   //----------
   // Channels
   //----------
   #C = {
      hex: (input) => {
         input = this.#N.hex(input);
         if (!input) return undefined;
         let match = input.match(this.#R.nHex);
         if (!match) return undefined;
         let R = match[1].toUpperCase();
         let G = match[2].toUpperCase();
         let B = match[3].toUpperCase();
         let A = match[4].toUpperCase();
         return { R, G, B, A };
      },
      rgb: (input) => {
         input = this.#N.rgb(input);
         if (!input) return undefined;
         let match = input.match(this.#R.nRgb);
         if (!match) return undefined;
         let R = parseInt(match[1]);
         let G = parseInt(match[2]);
         let B = parseInt(match[3]);
         let A = parseFloat(parseFloat(match[4]).toFixed(2));
         return { R, G, B, A };
      },
      hsl: (input) => {
         input = this.#N.hsl(input);
         if (!input) return undefined;
         let match = input.match(this.#R.nHsl);
         if (!match) return undefined;
         let H = parseInt(match[1]);
         let S = parseInt(match[2]);
         let L = parseInt(match[3]);
         let A = parseFloat(parseFloat(match[4]).toFixed(2));
         return { H, S, L, A };
      },
   }
   
   //------------
   // Transforms
   //------------
   #T = {
      keyword: {
         hex: (keyword) => {
            return this.#COLORS_MAP.get(this.#trimCase(keyword));
         },
         rgb: (keyword) => {
            let hex = this.#T.keyword.hex(keyword);
            return this.#T.hex.rgb(hex);
         },
         hsl: (keyword) => {
            let hex = this.#T.keyword.hex(keyword);
            return this.#T.hex.hsl(hex);
         },
      },
      hex: {
         keyword: (hex) => {
            let rgb = this.#T.hex.rgb(hex);
            return this.#T.rgb.keyword(rgb);
         },
         rgb: (hex) => {
            let channels = this.#C.hex(hex);
            if (!channels) return undefined;
            let { R, G, B, A } = channels;
            R = parseInt(R, 16);
            G = parseInt(G, 16);
            B = parseInt(B, 16);
            A = this.#toFixed(parseInt(A, 16) / 255);
            return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
         },
         hsl: (hex) => {
            let rgb = this.#T.hex.rgb(hex);
            return this.#T.rgb.hsl(rgb);
         },
      },
      rgb: {
         keyword: (rgb) => {
            let channels = this.#C.rgb(rgb);
            if (!channels) return undefined;
            let { R, G, B } = channels;
            let closest = null;
            let min = Infinity;
            for (const [name, hex] of Object.entries(this.#COLORS)) {
               const { R: r, G: g, B: b } = this.#C.rgb(this.#T.hex.rgb(hex));
               const dist = (R - r) ** 2 + (G - g) ** 2 + (B - b) ** 2;
               if (dist < min) {
                  min = dist;
                  closest = name;
               }
            }
            return closest;
         },
         hex: (rgb) => {
            let channels = this.#C.rgb(rgb);
            if (!channels) return undefined;
            let { R, G, B, A } = channels;
            R = this.#toString16(R);
            G = this.#toString16(G);
            B = this.#toString16(B);
            A = this.#toString16(A * 255);
            return A === 'FF' ? '#' + R + G + B : '#' + R + G + B + A;
         },
         hsl: (rgb) => {
            let channels = this.#C.rgb(rgb);
            if (!channels) return undefined;
            let { R, G, B, A } = channels;
            R /= 255;
            G /= 255;
            B /= 255;
            let max = Math.max(R, G, B);
            let min = Math.min(R, G, B);
            let H, S, L;
            const delta = max - min;
            if (max === min) {
               H = 0;
            } else if (R === max) {
               H = (G - B) / delta;
            } else if (G === max) {
               H = 2 + (B - R) / delta;
            } else if (B === max) {
               H = 4 + (R - G) / delta;
            }
            L = (min + max) / 2;
            if (max === min) {
               S = 0;
            } else if (L <= 0.5) {
               S = delta / (max + min);
            } else {
               S = delta / (2 - max - min);
            }
            H = Math.round(Math.min(H * 60, 360));
            H = (H < 0) ? H += 360 : H;
            S = Math.round(S * 100);
            L = Math.round(L * 100);
            return A === 1 ? `hsl(${H} ${S}% ${L}%)` : `hsl(${H} ${S}% ${L}% / ${A})`;
         },
      },
      hsl: {
         keyword: (hsl) => {
            let rgb = this.#T.hsl.rgb(hsl);
            return this.#T.rgb.keyword(rgb);
         },
         rgb: (hsl) => {
            let channels = this.#C.hsl(hsl);
            if (!channels) return undefined;
            let { H, S, L, A } = channels;
            // hsl TO hex
            H = H / 360;
            S = S / 100;
            L = L / 100;
            let R, G, B;
            let C = (1 - Math.abs(2 * L - 1)) * S;
            let X = C * (1 - Math.abs((H * 6) % 2 - 1));
            let M = L - C / 2;
            switch (true) {
               case (H >= 0 && H < 1 / 6):
                  R = C;
                  G = X;
                  B = 0;
                  break;
               case (H >= 1 / 6 && H < 2 / 6):
                  R = X;
                  G = C;
                  B = 0;
                  break;
               case (H >= 2 / 6 && H < 3 / 6):
                  R = 0;
                  G = C;
                  B = X;
                  break;
               case (H >= 3 / 6 && H < 4 / 6):
                  R = 0;
                  G = X;
                  B = C;
                  break;
               case (H >= 4 / 6 && H < 5 / 6):
                  R = X;
                  G = 0;
                  B = C;
                  break;
               default:
                  R = C;
                  G = 0;
                  B = X;
                  break;
            }
            R = Math.round((R + M) * 255);
            G = Math.round((G + M) * 255);
            B = Math.round((B + M) * 255);
            
            return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
         },
         hex: (hsl) => {
            let rgb = this.#T.hsl.rgb(hsl);
            return this.#T.rgb.hex(rgb);
         },
      },
      to: {
         keyword: (input) => {
            return this.#T[this.#detect(input)].keyword(input);
         },
         hex: (input) => {
            return this.#T[this.#detect(input)].hex(input);
         },
         rgb: (input) => {
            return this.#T[this.#detect(input)].rgb(input);
         },
         hsl: (input) => {
            return this.#T[this.#detect(input)].hsl(input);
         }
      }
   }
   
   //-----------------
   // private Methods 
   //-----------------
   #toString16(input) {
      let hex = input.toString(16).toUpperCase().split('.')[0];
      return hex.length == 1 ? '0' + hex : hex;
   }
   #toFixed(input1, input2 = 2) {
      return parseFloat(parseFloat(input1).toFixed(input2));
   }
   #splitPascalCase(input) {
      return input.split(/(?=[A-Z])/).join(" ");
   }
   #trimCase(input) {
      return input.replace(/\s+/g, '').toLowerCase();
   }
   #detect(input) {
      input = String(input).trim().toLowerCase();
      const colors = Array.from(this.#COLORS_MAP.keys());
      
      if (colors.includes(this.#trimCase(input))) return "keyword";
      if (this.#R.hex.test(input)) return "hex";
      if (this.#R.rgb.test(input)) return "rgb";
      if (this.#R.hsl.test(input)) return "hsl";
      
      return undefined;
   }
   #channelsToString(type) {
      switch (type) {
         case 'hex': {
            let { 1: r, 2: g, 3: b, 4: a = '' } = arguments;
            if (!r || !g || !b) return undefined;
            r = r.length == 1 ? r + r : r;
            g = g.length == 1 ? g + g : g;
            b = b.length == 1 ? b + b : b;
            a = a.length == 1 ? a + a : a;
            return this.normalize('#' + r + g + b + a)
         }
         case 'rgb': {
            let { 1: r, 2: g, 3: b, 4: a = '1' } = arguments;
            return (r && g && b && a) ? this.normalize(`rgb(${r} ${g} ${b} / ${a})`) : undefined;
         }
         case 'hsl': {
            let { 1: h, 2: s, 3: l, 4: a = '1' } = arguments;
            return (h && s && l && a) ? this.normalize(`hsl(${h} ${s} ${l} / ${a})`) : undefined;
         }
         default: {
            return undefined
         }
      }
   }
   #channelsTransforms() {
      const types = ['hex', 'rgb', 'hsl'];
      const result = {};
      for (const from of types) {
         result[from] = {};
         for (const to of types.concat('keyword')) {
            if (from === to) continue;
            result[from][to] = (...args) => {
               const input = this.#channelsToString(from, ...args);
               return (!input) ? undefined : this.#T[from][to](input);
            };
         }
      }
      return result;
   }
   
   //---------
   // Methods 
   //---------
   getChannels(str) {
      let detect = this.#detect(str);
      return (!detect || detect === 'keyword') ? undefined : this.#C[detect](str);
   }
   normalize(str) {
      let detect = this.#detect(str);
      return (!detect) ? undefined : this.#N[this.#detect(str)](str);
   }
   toAllFormat(str) {
      let f = (type) => (this.#detect(str) === type) ? this.#N[type](str) : this.#T.to[type](str);
      return {
         keyword: f('keyword'),
         hex: f('hex'),
         rgb: f('rgb'),
         hsl: f('hsl'),
      }
   }
   toHex(str) {
      return this.#T.to.hex(str);
   }
   toRgb(str) {
      return this.#T.to.rgb(str);
   }
   toHsl(str) {
      return this.#T.to.hsl(str);
   }
   
   //----------
   // property 
   //----------
   get transform() {
      return this.#T;
   }
   get channels() {
      return this.#channelsTransforms();
   }
}