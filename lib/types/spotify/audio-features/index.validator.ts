/* tslint:disable */
// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv from 'ajv';
import SpotifyAudioFeatureType from './index';
export const ajv = new Ajv({
  allErrors: true,
  coerceTypes: false,
  format: 'fast',
  nullable: true,
  unicode: true,
  uniqueItems: true,
  useDefaults: true,
});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export const SpotifyAudioFeatureTypeSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  defaultProperties: [],
  properties: {
    acousticness: {
      type: 'number',
    },
    analysis_url: {
      type: 'string',
    },
    danceability: {
      type: 'number',
    },
    duration_ms: {
      type: 'number',
    },
    energy: {
      type: 'number',
    },
    id: {
      type: 'string',
    },
    instrumentalness: {
      type: 'number',
    },
    key: {
      type: 'number',
    },
    liveness: {
      type: 'number',
    },
    loudness: {
      type: 'number',
    },
    mode: {
      type: 'number',
    },
    speechiness: {
      type: 'number',
    },
    tempo: {
      type: 'number',
    },
    time_signature: {
      type: 'number',
    },
    track_href: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    uri: {
      type: 'string',
    },
    valence: {
      type: 'number',
    },
  },
  required: [
    'acousticness',
    'analysis_url',
    'danceability',
    'duration_ms',
    'energy',
    'id',
    'instrumentalness',
    'key',
    'liveness',
    'loudness',
    'mode',
    'speechiness',
    'tempo',
    'time_signature',
    'track_href',
    'type',
    'uri',
    'valence',
  ],
  type: 'object',
};
export type ValidateFunction<T> = ((data: unknown) => data is T) &
  Pick<Ajv.ValidateFunction, 'errors'>;
export const isSpotifyAudioFeatureType = ajv.compile(
  SpotifyAudioFeatureTypeSchema,
) as ValidateFunction<SpotifyAudioFeatureType>;
export default function validate(value: unknown): SpotifyAudioFeatureType {
  if (isSpotifyAudioFeatureType(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(
        isSpotifyAudioFeatureType.errors!.filter(
          (e: any) => e.keyword !== 'if',
        ),
        {dataVar: 'SpotifyAudioFeatureType'},
      ) +
        '\n\n' +
        inspect(value),
    );
  }
}