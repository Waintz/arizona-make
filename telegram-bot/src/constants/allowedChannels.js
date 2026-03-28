"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedChannels = exports.ASSETS_CHANNEL_ID = exports.RACE_VIP_CHANNEL_ID = exports.RACE_CHANNEL_ID = void 0;
exports.RACE_CHANNEL_ID = process.env.RACE_CHANNEL_ID
    ? Number(process.env.RACE_CHANNEL_ID)
    : 0;
exports.RACE_VIP_CHANNEL_ID = process.env.RACE_VIP_CHANNEL_ID
    ? Number(process.env.RACE_VIP_CHANNEL_ID)
    : 0;
exports.ASSETS_CHANNEL_ID = process.env.ASSETS_CHANNEL_ID
    ? Number(process.env.ASSETS_CHANNEL_ID)
    : 0;
exports.allowedChannels = [
    exports.RACE_CHANNEL_ID,
    exports.RACE_VIP_CHANNEL_ID,
    exports.ASSETS_CHANNEL_ID,
];
