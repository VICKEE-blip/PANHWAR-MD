const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExzT09XRjNpb3N4UjRyNHB5bXVjNzJnMi9DVXJMdFJMQlM5Mysrb3FVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQktIVEhlM0VZT1c5bk1ZeVVkS2UyOXYxaUtBMUhsSFdGU2tRc1ZtTHNHbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT2lFSFdYcGRvYkE3R05jRGxMNkkxK3BwVFM2Mm9IUWphbnYvckhhUFhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpOTR6Y3Y3U3VUY1N1VVhJZEQ4azU4UEVKT21CbGd5VWtlVHJtaUtpcGpZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJVkFMczJKM1hiRVJENXdwclVEU3dJUW1IdW53UGRMc2ZjR3dOMGtIVU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJVDhtL21HUUg1dGxqS3Z3dXViaWthU1kyRWtZVXIrRTZGMzBCVHpWMUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNnU09lMk9pT1F2eWxwOERHS0dLRVk2RndtRlhERllvdDNCV29mbTYzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXVhbG05VW9TY21EY0dja3ZyT0kwR0k5bVVqdkZvK0NUeHlBUHpYN29rOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImswWDlGNXlMNFd1MkNvQ255NGJXQzl2eURsSTc1cHp2T3VVbXJKWHpVUzVMV1ZuQkdWektRc0NlNTk1Z1dzVlBNTmdabUZVY21EQ3NHS1N1QVVJYUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiK3kzSHIvZ1lJTDluMlZ6Y0xoSW9vKzFZQ080WGl5ckZFZlpjY09pSkowST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiX0l6SjgyUGhTNm1maFk3cXpKcGtLdyIsInBob25lSWQiOiI1YzgwNDBkNC0wNTk2LTQ4OTctYmNlOC02NTA3ZThhMzYxNjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVldRTWZuZjZ6dFN1UmFha0hLVkdRbkNCRm9jPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpuSHg4NlkzZUxmTjU1bW94MGpGMk0vSVAxZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSS1BWNVZTQSIsIm1lIjp7ImlkIjoiMjU0NzA1NjkxMzE4OjMzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1FTlRPUiBWSUNLRUUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pQRHhaQUdFSUt5ekx3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFBcEtscmZWd1daeTRocFZ5dzlodmJGMnZhQzB4czB0NDBTSmxSSC84WGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdtR0ZDODhadUgwY2ZQaStqQndpSThVTnBScHZWZjV6NEV6WFJQR3F5MjV5S3NPZlBUcXdrbXR2TjA3VzZCampOdyswR29xb3FrektQWWZZTWNzaURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJySFBxS3BVWUwyL3J6bFYrVDdGR0tMV0NoT0UyNkJCMXZuMGozVDNKRlVqbHp4Z0xzZUlJR0IrOXp0bDVqdFpISmZXcUJlOFhhd3hXVGpQZkU1VHZCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNTY5MTMxODozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhZ0tTcGEzMWNGbWN1SWFWY3NQWWIyeGRyMmd0TWJOTGVORWlaVVIvL0Y1In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3NjkzNDU2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU8wRSJ9",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴀɴsᴀʀ-ᴘᴀɴʜᴡᴀʀ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M PANHWAR-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ᴀᴡᴀɪs ᴍᴅ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 𝒑𝒂𝒏𝒉𝒘𝒂𝒓 𝒎𝒅`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
