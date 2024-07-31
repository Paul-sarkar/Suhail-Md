const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919776931313";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_07_00_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDIyLFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA4LFxuICAgICAgICA1MCxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaWGZ5YXFSQ3NMNjB0Tmh0M3hhL3dLT1RWbldMaEdCZ2xPc1RIS0JsSVJzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTc3NjkzMTMxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUQxQThBNzY1N0M4QzY0RTMxMDU2NjVBRTExNzUxRDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNDA5MjU0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5Nzc2OTMxMzEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNjFEMTUzNzM4Q0REMjNCREZGMThBMDVDOUQ0OENEMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0MDkyNTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1FTdE4zNHdSRHl0NXlpaHhEYXJwZ1wiLFxuICBcInBob25lSWRcIjogXCJhNzlhYjhjNS0zMTcxLTRmNGEtOWE5OS1hYmNmMmRlNWFhNTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgMzQsXG4gICAgICAxMCxcbiAgICAgIDE0OCxcbiAgICAgIDI0NyxcbiAgICAgIDEsXG4gICAgICA2LFxuICAgICAgMjMyLFxuICAgICAgMTE1LFxuICAgICAgODcsXG4gICAgICAyNDIsXG4gICAgICAyNDQsXG4gICAgICAyMDIsXG4gICAgICAyNTUsXG4gICAgICAxMTIsXG4gICAgICA2MixcbiAgICAgIDI0MixcbiAgICAgIDE5MSxcbiAgICAgIDIzMCxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OCxcbiAgICAgIDEyNyxcbiAgICAgIDU5LFxuICAgICAgMTI0LFxuICAgICAgMTgzLFxuICAgICAgMTQwLFxuICAgICAgMjMwLFxuICAgICAgOTAsXG4gICAgICA4NCxcbiAgICAgIDc0LFxuICAgICAgMTQzLFxuICAgICAgMjEyLFxuICAgICAgMTM2LFxuICAgICAgMTM3LFxuICAgICAgMTc4LFxuICAgICAgNDAsXG4gICAgICAxNDEsXG4gICAgICAxMTUsXG4gICAgICAxNjEsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJON0FKWk5STFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5Nzc2OTMxMzEzOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzE0MDQ3MTc3OTc0NjU6NDZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWlzYSBOYWFtIEt5dSBSa2h0ZSBIbyA/XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHp2dXVjQkVKM0NwN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyODRvc0NyTVo2a2U1S0d3YnYwM0g0dXlmVUI4STVtSCttY255eXBxbWdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5qREN5eEFPeThFK3EyWDRBYk84aEdGTW0vM1c2K2E3Yy92VWM5WUI0MTZFVStjek5TY1JEa3dyN3htVGNKdWJEU2ZMbmNSSTRLVzZwYTVOeEZrV0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlN1b1A5elBreHBWcDRjVlBDZDMwVVl5SElLQU9US3JVMDE4R2FxbVV2TEVTYnZqM3Z5dHl4R1doUWFWT1dtcVk4MkhQYkl4cTBRbERBZWprdHhLYkJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTc3NjkzMTMxMzo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0MDkyNDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAxVS5qc29uIjogIntcImtleURhdGFcIjpcIjVyT0Q2MTExbkdrWlZPMU9ndUZnK1R4RFp2MEV2K3FZOEFncENMbyt1blE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDg1NDA2NzE2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0MDkyNTI1OThcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
