import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary, {
  excludeParentKeys: true,
});

const sd = new StyleDictionary({
  log: {
    verbosity: 'verbose',
  },
  source: ['./tokens/**/*.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ["attribute/cti", "name/kebab", "time/seconds", "size/rem", "color/css"],
      buildPath: 'styles/css/',
      files: [
        {
          destination: 'toro.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
