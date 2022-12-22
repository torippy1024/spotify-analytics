/* tslint:disable */
// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv from 'ajv';
import SpotifyPlaylistType from './index';
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

export const SpotifyPlaylistTypeSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  defaultProperties: [],
  definitions: {
    SpotifyPlaylistExternalUrlsType: {
      defaultProperties: [],
      properties: {
        spotify: {
          type: 'string',
        },
      },
      required: ['spotify'],
      type: 'object',
    },
    SpotifyPlaylistFollowersType: {
      defaultProperties: [],
      properties: {
        href: {
          type: 'string',
        },
        total: {
          type: 'number',
        },
      },
      required: ['href', 'total'],
      type: 'object',
    },
    SpotifyPlaylistImageType: {
      defaultProperties: [],
      properties: {
        height: {
          type: 'number',
        },
        url: {
          type: 'string',
        },
        width: {
          type: 'number',
        },
      },
      required: ['height', 'url', 'width'],
      type: 'object',
    },
    SpotifyPlaylistItemType: {
      defaultProperties: [],
      properties: {
        added_at: {
          description:
            'Enables basic storage and retrieval of dates and times.',
          format: 'date-time',
          type: 'string',
        },
        added_by: {
          $ref: '#/definitions/SpotifyPlaylistOwnerType',
        },
        is_local: {
          type: 'boolean',
        },
        primary_color: {
          type: 'null',
        },
        track: {
          $ref: '#/definitions/default',
        },
      },
      required: ['added_at', 'added_by', 'is_local', 'primary_color', 'track'],
      type: 'object',
    },
    SpotifyPlaylistOwnerType: {
      defaultProperties: [],
      properties: {
        display_name: {
          type: 'string',
        },
        external_urls: {
          $ref: '#/definitions/SpotifyPlaylistExternalUrlsType',
        },
        followers: {
          $ref: '#/definitions/SpotifyPlaylistFollowersType',
        },
        href: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uri: {
          type: 'string',
        },
      },
      required: [
        'display_name',
        'external_urls',
        'followers',
        'href',
        'id',
        'type',
        'uri',
      ],
      type: 'object',
    },
    SpotifyPlaylistTracksType: {
      defaultProperties: [],
      properties: {
        href: {
          type: 'string',
        },
        items: {
          items: {
            $ref: '#/definitions/SpotifyPlaylistItemType',
          },
          type: 'array',
        },
        limit: {
          type: 'number',
        },
        next: {
          type: 'string',
        },
        offset: {
          type: 'number',
        },
        previous: {
          type: 'string',
        },
        total: {
          type: 'number',
        },
      },
      required: [
        'href',
        'items',
        'limit',
        'next',
        'offset',
        'previous',
        'total',
      ],
      type: 'object',
    },
    SpotifyTrackAlbumArtistType: {
      defaultProperties: [],
      properties: {
        external_urls: {
          $ref: '#/definitions/SpotifyTrackExternalUrlsType',
        },
        href: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uri: {
          type: 'string',
        },
      },
      required: ['external_urls', 'href', 'id', 'name', 'type', 'uri'],
      type: 'object',
    },
    SpotifyTrackAlbumType: {
      defaultProperties: [],
      properties: {
        album_group: {
          type: 'string',
        },
        album_type: {
          type: 'string',
        },
        artists: {
          items: {
            $ref: '#/definitions/SpotifyTrackAlbumArtistType',
          },
          type: 'array',
        },
        available_markets: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        external_urls: {
          $ref: '#/definitions/SpotifyTrackExternalUrlsType',
        },
        href: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        images: {
          items: {
            $ref: '#/definitions/SpotifyTrackImageType',
          },
          type: 'array',
        },
        name: {
          type: 'string',
        },
        release_date: {
          type: 'string',
        },
        release_date_precision: {
          type: 'string',
        },
        restrictions: {
          $ref: '#/definitions/SpotifyTrackRestrictionsType',
        },
        total_tracks: {
          type: 'number',
        },
        type: {
          type: 'string',
        },
        uri: {
          type: 'string',
        },
      },
      required: [
        'album_group',
        'album_type',
        'artists',
        'available_markets',
        'external_urls',
        'href',
        'id',
        'images',
        'name',
        'release_date',
        'release_date_precision',
        'restrictions',
        'total_tracks',
        'type',
        'uri',
      ],
      type: 'object',
    },
    SpotifyTrackArtistType: {
      defaultProperties: [],
      properties: {
        external_urls: {
          $ref: '#/definitions/SpotifyTrackExternalUrlsType',
        },
        followers: {
          $ref: '#/definitions/SpotifyTrackFollowersType',
        },
        genres: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        href: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        images: {
          items: {
            $ref: '#/definitions/SpotifyTrackImageType',
          },
          type: 'array',
        },
        name: {
          type: 'string',
        },
        popularity: {
          type: 'number',
        },
        type: {
          type: 'string',
        },
        uri: {
          type: 'string',
        },
      },
      required: [
        'external_urls',
        'followers',
        'genres',
        'href',
        'id',
        'images',
        'name',
        'popularity',
        'type',
        'uri',
      ],
      type: 'object',
    },
    SpotifyTrackExternalIDSType: {
      defaultProperties: [],
      properties: {
        ean: {
          type: 'string',
        },
        isrc: {
          type: 'string',
        },
        upc: {
          type: 'string',
        },
      },
      required: ['ean', 'isrc', 'upc'],
      type: 'object',
    },
    SpotifyTrackExternalUrlsType: {
      defaultProperties: [],
      properties: {
        spotify: {
          type: 'string',
        },
      },
      required: ['spotify'],
      type: 'object',
    },
    SpotifyTrackFollowersType: {
      defaultProperties: [],
      properties: {
        href: {
          type: 'string',
        },
        total: {
          type: 'number',
        },
      },
      required: ['href', 'total'],
      type: 'object',
    },
    SpotifyTrackImageType: {
      defaultProperties: [],
      properties: {
        height: {
          type: 'number',
        },
        url: {
          type: 'string',
        },
        width: {
          type: 'number',
        },
      },
      required: ['height', 'url', 'width'],
      type: 'object',
    },
    SpotifyTrackRestrictionsType: {
      defaultProperties: [],
      properties: {
        reason: {
          type: 'string',
        },
      },
      required: ['reason'],
      type: 'object',
    },
    default: {
      defaultProperties: [],
      properties: {
        album: {
          $ref: '#/definitions/SpotifyTrackAlbumType',
        },
        artists: {
          items: {
            $ref: '#/definitions/SpotifyTrackArtistType',
          },
          type: 'array',
        },
        available_markets: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        disc_number: {
          type: 'number',
        },
        duration_ms: {
          type: 'number',
        },
        explicit: {
          type: 'boolean',
        },
        external_ids: {
          $ref: '#/definitions/SpotifyTrackExternalIDSType',
        },
        external_urls: {
          $ref: '#/definitions/SpotifyTrackExternalUrlsType',
        },
        href: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        is_local: {
          type: 'boolean',
        },
        is_playable: {
          type: 'boolean',
        },
        name: {
          type: 'string',
        },
        popularity: {
          type: 'number',
        },
        preview_url: {
          type: 'string',
        },
        restrictions: {
          $ref: '#/definitions/SpotifyTrackRestrictionsType',
        },
        track_number: {
          type: 'number',
        },
        type: {
          type: 'string',
        },
        uri: {
          type: 'string',
        },
      },
      required: [
        'album',
        'artists',
        'available_markets',
        'disc_number',
        'duration_ms',
        'explicit',
        'external_ids',
        'external_urls',
        'href',
        'id',
        'is_local',
        'is_playable',
        'name',
        'popularity',
        'preview_url',
        'restrictions',
        'track_number',
        'type',
        'uri',
      ],
      type: 'object',
    },
  },
  properties: {
    collaborative: {
      type: 'boolean',
    },
    description: {
      type: 'string',
    },
    external_urls: {
      $ref: '#/definitions/SpotifyPlaylistExternalUrlsType',
    },
    followers: {
      $ref: '#/definitions/SpotifyPlaylistFollowersType',
    },
    href: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    images: {
      items: {
        $ref: '#/definitions/SpotifyPlaylistImageType',
      },
      type: 'array',
    },
    name: {
      type: 'string',
    },
    owner: {
      $ref: '#/definitions/SpotifyPlaylistOwnerType',
    },
    public: {
      type: 'boolean',
    },
    snapshot_id: {
      type: 'string',
    },
    tracks: {
      $ref: '#/definitions/SpotifyPlaylistTracksType',
    },
    type: {
      type: 'string',
    },
    uri: {
      type: 'string',
    },
  },
  required: [
    'collaborative',
    'description',
    'external_urls',
    'followers',
    'href',
    'id',
    'images',
    'name',
    'owner',
    'public',
    'snapshot_id',
    'tracks',
    'type',
    'uri',
  ],
  type: 'object',
};
export type ValidateFunction<T> = ((data: unknown) => data is T) &
  Pick<Ajv.ValidateFunction, 'errors'>;
export const isSpotifyPlaylistType = ajv.compile(
  SpotifyPlaylistTypeSchema,
) as ValidateFunction<SpotifyPlaylistType>;
export default function validateSpotifyPlaylist(
  value: unknown,
): SpotifyPlaylistType {
  if (isSpotifyPlaylistType(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(
        isSpotifyPlaylistType.errors!.filter((e: any) => e.keyword !== 'if'),
        {dataVar: 'SpotifyPlaylistType'},
      ) +
        '\n\n' +
        inspect(value),
    );
  }
}