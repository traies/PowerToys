  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons"`,
      src: `url('data:application/octet-stream;base64,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') format('truetype')`
    },
    icons: {
      'GlobalNavButton': '\uE700',
      'ChevronDown': '\uE70D',
      'Cancel': '\uE711',
      'Settings': '\uE713',
      'ChevronLeft': '\uE76B',
      'ChevronRight': '\uE76C',
      'ChevronUpSmall': '\uE96D',
      'ChevronDownSmall': '\uE96E',
      'ChevronLeftSmall': '\uE96F',
      'ChevronRightSmall': '\uE970',
      'ChevronUpMed': '\uE971',
      'ChevronDownMed': '\uE972',
      'ChevronLeftMed': '\uE973',
      'ChevronRightMed': '\uE974',
      'CircleRing': '\uEA3A',
      'FabricReportLibrary': '\uF0A1',
      'PictureStretch': '\uF525'
    }
  };

  registerIcons(subset, options);
}
