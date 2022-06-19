/**
 * Creates default primary data.
 *
 * @returns {DataPrimary}
 */
export function primary({ menuType, animation, variant, color, enableCustom = false, customPath = ""}) {
   if (typeof menuType !== 'string') { throw new TypeError(`'menuType' is not a string.`); }
   if (typeof animation !== 'string') { throw new TypeError(`'animation' is not a string.`); }
   if (typeof variant !== 'string') { throw new TypeError(`'variant' is not a string.`); }
   if (typeof color !== 'string') { throw new TypeError(`'color' is not a string.`); }
   if (typeof enableCustom !== 'boolean') { throw new TypeError(`'enableCustom' is not a boolean.`); }
   if (typeof customPath !== 'string') { throw new TypeError(`'customPath' is not a string.`); }

   return {
      menuType,
      animation,
      variant,
      color,
      enableCustom,
      customPath,
   }
}

/**
 * @typedef {object} DataPrimary
 *
 * @property {string}   menuType -
 *
 * @property {string}   animation -
 *
 * @property {string}   variant -
 *
 * @property {string}   color -
 *
 * @property {boolean}  enableCustom -
 *
 * @property {string}   customPath -
 */
