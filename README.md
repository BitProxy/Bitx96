#10/100 COMPLETED
*Please check the repository another day.*

# Better Roblox API Requests
- Script will simplify Roblox's DataModel Instance.
- Records time stamps and collects history.
- Toggle Block IP Grabbers.
- Blacklist certain websites.

### Global Environment

        return httpRequests

### Blacklisting Webs
- Webs can be toggled to be blocked.
- Run the script below,
        httpRequests.block("https://youtube.xyz/")
Change the "https://youtube.xyz/" to a web you want to blacklist. Blocking a website will block alternative webs. Example, www.roblox.com and web.roblox.com will be blocked if https://roblox.com/ was requested to be blocked.

### Whitelisting Webs
This is the opposite of blacklisting websites. By running the code below, you are allowing the website to be unblacklisted.
- Source
        httpRequests.white("https://youtube.xyz/")

##**httpRequests Methods**

###Properties
- `lastTimeRecorded : number`
**This is a property to get the recent http request. This will always be a number value or nil.**
*This property does not catch up to the latest Time Stamp recorded. Instead use the Function 'GetTimeStamp'*

- `ui : ScreenGui`
**This returns the HTTP Request UI. Do not attempt to destroy this Ui.**
*This property is a safe and locked property of httpRequests. Errors will occur by trying to change Parent or Destroying the Ui. Please toggle the Visibility of the Ui only.*

- `lastRequestedURL : string`
**Returns the previous URL a script has called.**
*Do not attempt to try copying someone's script.*

###Functions

- **`<table> getlogs`**
**Grabs entire history of urls requesting.**
*No description provided.*

- **`<any> request`**
**Requests a URL, headers are available.**
*Requests a url a script is calling for, blacklisted webs will return as an html error code.*

- **`<void> block`**
**Blocks a website. Check for Blacklisting content.**
*No description provided*

- **`<void> white`**
**Unblocks a website. Check for Whitelisting content.**
*No description provided*

*Properties are being added.*
