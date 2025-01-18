# Color Conversion Class `v1.01`

This repository contains a set of functions for color format conversion. The functions support various color formats like HEX, RGB, HSL, and more. Below is a list of the available functions:

## Functions

1. **hexNormalize(str)**  
   Normalize a HEX color string to the format `#rrggbbaa`.

2. **rgbNormalize(str)**  
   Normalize an RGB or RGBA color string to the format `rgba(r g b / a)`.

3. **hslNormalize(str)**  
   Normalize an HSL or HSLA color string to the format `hsla(h s% l% / a)`.

4. **getHexObj(str)**  
   Convert a HEX color string to an object with `{ r, g, b, a }`.

5. **getRgbObj(str)**  
   Convert an RGB or RGBA color string to an object with `{ r, g, b, a }`.

6. **getHslObj(str)**  
   Convert an HSL or HSLA color string to an object with `{ h, s, l, a }`.

7. **hexToHsl(hex)**  
   Convert a HEX color string to an HSL color string.

8. **hexToRgb(hex)**  
   Convert a HEX color string to an RGB color string.

9. **rgbToHex(rgb)**  
   Convert an RGB color object to a HEX color string.

10. **rgbToHsl(rgb)**  
   Convert an RGB color object to an HSL color string.

11. **hslToRgb(hsl)**  
   Convert an HSL color string to an RGB color string.

12. **hslToHex(hsl)**  
   Convert an HSL color string to a HEX color string.

13. **nameToHex(str)**  
   Convert a color name (e.g., "red") to a HEX color string.

14. **nameToRgb(str)**  
   Convert a color name (e.g., "red") to an RGB color string.

15. **nameToHsl(str)**  
   Convert a color name (e.g., "red") to an HSL color string.

16. **toHex(str)**  
   Convert any color format (HEX, RGB, HSL) to a HEX color string.

17. **toRgb(str)**  
   Convert any color format (HEX, RGB, HSL) to an RGB color string.

18. **toHsl(str)**  
   Convert any color format (HEX, RGB, HSL) to an HSL color string.

19. **toHexObj(str)**  
   Convert any color format (HEX, RGB, HSL) to an object in HEX format `{ r, g, b, a }`.

20. **toRgbObj(str)**  
   Convert any color format (HEX, RGB, HSL) to an object in RGB format `{ r, g, b, a }`.

21. **toHslObj(str)**  
   Convert any color format (HEX, RGB, HSL) to an object in HSL format `{ h, s, l, a }`.

## Usage

You can use these functions to easily convert between different color formats and manipulate the color values. For example:

```javascript
let C = new ColorTransform();
let hex = C.toHex("Persian Green"); // "#00a693"
let rgb = C.toRgb("#ff6347"); // "rgb(255 99 71)"
let hsl = C.rgbToHsl("rgb(255, 99, 71)"); // "hsl(9.1 100.0% 63.9%)"