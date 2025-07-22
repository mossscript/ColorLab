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
         Object.entries(this.#COLORS).map(([k, v]) => [this.#F.trimCase(k), v])
      );
   }
   
   //--------
   // Colors
   //--------
   #COLORS = <WebColors/>;
   
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
   
   //-----------
   // Functions 
   //-----------
   #F = {
      toHex: (input) => {
         let hex = input.toString(16).toUpperCase().split('.')[0];
         return hex.length == 1 ? '0' + hex : hex;
      },
      parseInt16: (input) => {
         return parseInt(input, 16);
      },
      toFixed: (input1, input2 = 2) => {
         return parseFloat(parseFloat(input1).toFixed(input2));
      },
      round: (input) => {
         return Math.round(input);
      },
      splitPascalCase: (input) => {
         return input.split(/(?=[A-Z])/).join(" ");
      },
      detect: (input) => {
         input = String(input).trim().toLowerCase();
         const colors = Array.from(this.#COLORS_MAP.keys());
         
         if (colors.includes(this.#F.trimCase(input))) return "KEYWORD";
         if (this.#R.HEX.test(input)) return "HEX";
         if (this.#R.RGB.test(input)) return "RGB";
         if (this.#R.HSL.test(input)) return "HSL";
         
         return undefined;
      },
      trimCase: (input) => {
         return input.replace(/\s+/g, '').toLowerCase()
      },
   }
   
   //--------
   // RegExp
   //--------
   #R = {
      // input 
      HEX: /^#([a-f\d]{3}|[a-f\d]{4}|[a-f\d]{6}|[a-f\d]{8})$/i,
      RGB: /^rgba?\(\s*(\d+(\.\d+)?)\s*,?\s*(\d+(\.\d+)?)\s*,?\s*(\d+(\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
      HSL: /^hsla?\(\s*(\d+(\.\d+)?)\s*(deg)?\s*,?\s*(\d+(\.\d+)?)%?\s*,?\s*(\d+(\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
      // normalized match
      nHEX: /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
      nRGB: /^rgb\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*\/\s*(\d*\.?\d+)\s*\)$/i,
      nHSL: /^hsl\(\s*(\d{1,3})deg\s+(\d{1,3})%\s+(\d{1,3})%\s*\/\s*(\d*\.?\d+)\s*\)$/i,
   }
   
   //-----------
   // Normalize 
   //-----------
   #N = {
      KEYWORD: (input) => {
         const T = this.#F.trimCase;
         input = T(input);
         if (this.#COLORS_MAP.has(input)) {
            const originalKey = Object.keys(this.#COLORS).find(name => T(name) === input);
            return this.#F.splitPascalCase(originalKey);
         }
         return undefined;
      },
      HEX: (input) => {
         const regex = this.#R.HEX;
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
      RGB: (input) => {
         const regex = this.#R.RGB;
         let match = input.match(regex);
         if (!match) return undefined;
         let r = parseInt(match[1]);
         let g = parseInt(match[3]);
         let b = parseInt(match[5]);
         let a = match[7] !== undefined ? parseFloat(match[7]) : 1;
         if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1) return undefined;
         return `rgb(${r} ${g} ${b} / ${a})`;
      },
      HSL: (input) => {
         const regex = this.#R.HSL;
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
      HEX: (input) => {
         input = this.#N.HEX(input);
         if (!input) return undefined;
         let match = input.match(this.#R.nHEX);
         if (!match) return undefined;
         let R = match[1].toUpperCase();
         let G = match[2].toUpperCase();
         let B = match[3].toUpperCase();
         let A = match[4].toUpperCase();
         return { R, G, B, A };
      },
      RGB: (input) => {
         input = this.#N.RGB(input);
         if (!input) return undefined;
         let match = input.match(this.#R.nRGB);
         if (!match) return undefined;
         let R = parseInt(match[1]);
         let G = parseInt(match[2]);
         let B = parseInt(match[3]);
         let A = parseFloat(parseFloat(match[4]).toFixed(2));
         return { R, G, B, A };
      },
      HSL: (input) => {
         input = this.#N.HSL(input);
         if (!input) return undefined;
         let match = input.match(this.#R.nHSL);
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
      KEYWORD: {
         KEYWORD: (key) => {
            return this.#N.KEYWORD(key);
         },
         HEX: (key) => {
            return this.#COLORS_MAP.get(this.#F.trimCase(key));
         },
         RGB: (key) => {
            let hex = this.#T.KEYWORD.HEX(key);
            return this.#T.HEX.RGB(hex);
         },
         HSL: (key) => {
            let hex = this.#T.KEYWORD.HEX(key);
            return this.#T.HEX.HSL(hex);
         },
      },
      HEX: {
         KEYWORD: (hex) => {
            let rgb = this.#T.HEX.RGB(hex);
            return this.#T.RGB.KEYWORD(rgb);
         },
         HEX: (hex) => {
            let channels = this.#C.HEX(hex);
            if (!channels) return undefined;
            let { R, G, B, A } = channels;
            return A === 'FF' ? '#' + R + G + B : '#' + R + G + B + A;
         },
         RGB: (hex) => {
            const { parseInt16: P, toFixed: F } = this.#F;
            let channels = this.#C.HEX(hex);
            if (!channels) return undefined;
            let { R, G, B, A } = channels;
            R = P(R);
            G = P(G);
            B = P(B);
            A = F(P(A) / 255);
            return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
         },
         HSL: (hex) => {
            let rgb = this.#T.HEX.RGB(hex);
            return this.#T.RGB.HSL(rgb);
         },
      },
      RGB: {
         KEYWORD: (rgb) => {
            let channels = this.#C.RGB(rgb);
            if (!channels) return undefined;
            let { R, G, B } = channels;
            let closest = null;
            let min = Infinity;
            for (const [name, hex] of Object.entries(this.#COLORS)) {
               const { R: r, G: g, B: b } = this.#C.RGB(this.#T.HEX.RGB(hex));
               const dist = (R - r) ** 2 + (G - g) ** 2 + (B - b) ** 2;
               if (dist < min) {
                  min = dist;
                  closest = name;
               }
            }
            return closest;
         },
         RGB: (rgb) => {
            let channels = this.#C.RGB(hex);
            if (!channels) return undefined;
            let { R, G, B, A } = channels;
            return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
         },
         HEX: (rgb) => {
            const H = this.#F.toHex;
            let channels = this.#C.RGB(rgb);
            if (!channels) return undefined;
            let { R, G, B, A } = channels;
            R = H(R);
            G = H(G);
            B = H(B);
            A = H(A * 255);
            return A === 'FF' ? '#' + R + G + B : '#' + R + G + B + A;
         },
         HSL: (rgb) => {
            const F = this.#F.round;
            let channels = this.#C.RGB(rgb);
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
            H = F(Math.min(H * 60, 360));
            H = (H < 0) ? H += 360 : H;
            S = F(S * 100);
            L = F(L * 100);
            return A === 1 ? `hsl(${H} ${S}% ${L}%)` : `hsl(${H} ${S}% ${L}% / ${A})`;
         },
      },
      HSL: {
         KEYWORD: (hsl) => {
            let rgb = this.#T.HSL.RGB(hsl);
            return this.#T.RGB.KEYWORD(rgb);
         },
         HSL: (hsl) => {
            let channels = this.#C.HSL(hsl);
            if (!channels) return undefined;
            let { H, S, L, A } = channels;
            return A === 1 ? `hsl(${H} ${S}% ${L}%)` : `hsl(${H} ${S}% ${L}% / ${A})`;
         },
         RGB: (hsl) => {
            const F = this.#F.round;
            
            let channels = this.#C.HSL(hsl);
            
            if (!channels) return undefined;
            
            let { H, S, L, A } = channels;
            
            // HSL TO HEX
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
            R = F((R + M) * 255);
            G = F((G + M) * 255);
            B = F((B + M) * 255);
            
            return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
         },
         HEX: (hsl) => {
            let rgb = this.#T.HSL.RGB(hsl);
            return this.#T.RGB.HEX(rgb);
         },
      },
      TO: {
         KEYWORD: (color) => {
            return this.#T[this.#F.detect(color)].KEYWORD(color);
         },
         HEX: (color) => {
            return this.#T[this.#F.detect(color)].HEX(color);
         },
         RGB: (color) => {
            return this.#T[this.#F.detect(color)].RGB(color);
         },
         HSL: (color) => {
            return this.#T[this.#F.detect(color)].HSL(color);
         },
         ALLFORMATS: (color) => {
            return {
               KEYWORD: this.#T.TO.KEYWORD(color),
               HEX: this.#T.TO.HEX(color),
               RGB: this.#T.TO.RGB(color),
               HSL: this.#T.TO.HSL(color),
            }
         },
      }
   }
   
   //---------
   // Methods 
   //---------
   
   
   //----------
   // property 
   //----------
   get transform() {
      return this.#T;
   }
   
}

let { transform: T } = new ColorTransform();

console.log(T.TO.ALLFORMATS('hsl(40 100 50)'));