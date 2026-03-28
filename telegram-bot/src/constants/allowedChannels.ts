export const RACE_CHANNEL_ID = process.env.RACE_CHANNEL_ID
  ? Number(process.env.RACE_CHANNEL_ID)
  : 0;

export const RACE_VIP_CHANNEL_ID = process.env.RACE_VIP_CHANNEL_ID
  ? Number(process.env.RACE_VIP_CHANNEL_ID)
  : 0;

export const ASSETS_CHANNEL_ID = process.env.ASSETS_CHANNEL_ID
  ? Number(process.env.ASSETS_CHANNEL_ID)
  : 0;

export const allowedChannels = [
  RACE_CHANNEL_ID,
  RACE_VIP_CHANNEL_ID,
  ASSETS_CHANNEL_ID,
];
