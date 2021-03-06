import { Color } from 'tns-core-modules/color/color';

export interface AndroidPalette {
  vibrant: Color,
  vibrantDark: Color,
  vibrantLight: Color,
  muted: Color,
  mutedDark: Color,
  mutedLight: Color,
}

export interface IosPalette {
  backgroundColor: Color,
  primaryColor: Color,
  secondaryColor: Color,
  detailColor: Color,
}

export interface ColorPalette {
  color1: Color;
  color2: Color;
  color3: Color;
  AndroidPalette: AndroidPalette;
  IosPalette: IosPalette;
}
