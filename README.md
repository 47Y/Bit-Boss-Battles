Bit Boss Battles
v1.1.1: Release

This software is provided "as-is" with no warranties.

Presented under the GPL v3 license.

Creation and/or publication of media (images, videos, etc.) while using this software is authorized.

Created by: Nifty255

Copyright 2017 All rights reserved.


This software is in RELEASE condition. However, bugs can still happen. If you have a bug, or a suggestion, please leave it in a mature manner.


FEATURES:

Bit Boss Battles (BBB) is a viewer interactive bits widget for the Twitch platform. Streamers using BBB enable their viewers to fight each other using bits to become the next Bit Boss.

- Easy to use web-based interface.
- Smooth graphical widget with animations.
- Able to use as a browser source in OBS or any other streaming software.
- Demo mode available to test the widget without requiring bits.
- Enable or disable sounds, Transparent Mode, Chroma Mode, or Persistence Mode.
- Use constant HP, or allow a viewer's "overkill" bits to determine their health.

Bit Boss Battles requires authorization in order to listen for bits notifications from the Twitch API. BBB requires the "User Read" permission in order to obtain the streamer's user ID (public information) from the token it receives from authorization. Once authorized, BBB stores the token only as a cookie on your browser. BBB's servers DO NOT store ANY personal information about you or your Twitch account.

CHANGELOG:

v1.1.1:
- Streamers can now customize widget colors:
  - Background (Default: Dark Gray)
  - Health Background (Default: Red)
  - Health Hit Delay (Default: Orange)
  - Health Main Bar (Default: Green)
  - Text Color (Default: White)
- A reset button is available to revert to defaults.

v1.1.0.2:
- BBB now sends partner status to the server for analyitics purposes.

v1.1.0.1:
- Settings save now checks for a valid user ID.
- Settings save now uses the default setting if a setting was invalid.
- The widget now uses default settings if none were found in the database.

v1.1.0:
- Settings are now stored in a database, associated with Twitch user ID's.
- Saving settings to database allows the Stream Source URL to be shorter.
- The Stream Source Widget requests the streamer's settings on load.
- The Launched Widget still uses cookies to save bandwidth.

v1.0.7.1:
- Fixes #13 issue caused by changes in the Twitch API (8 Mar 17).

v1.0.7:
- Added Hidden Avatar setting.
- Bit Boss Battles can now be stretched to any width. Min 350px recommended.

v1.0.6.2:
- Fixed delayed (yellow) health bar using a pixel width at first.

v1.0.6.1:
- More robust Name Scroll reset. Prevents an issue which breaks name scrolling.

v1.0.6:
- Added Progressive HP mode. Closes #7 enhancement.
  - The first Bit Boss starts with an initial HP amount.
  - Each successive Bit Boss has a progressively incremented HP amount.
- Changing HP modes now resets the current boss and their HP.
- Settings descriptions now appear when the associated setting is moused over.

v1.0.5.7:
- Added full comments to BBB's app code.

v1.0.5.6:
- Fixed #9 issue: reloading BBB with non-default max HP results in using default max HP.

v1.0.5.5:
- Fixed hit delay bar reaching 100% after load with < 100% health.

v1.0.5.4:
- Added Patreon link to the About Page.

v1.0.5.3:
- Updated README version.

v1.0.5.2:
- Updated README. Now includes information about the data BBB uses.

v1.0.5.1:
- Minor About Page fix.

v1.0.5:
- Added option to allow current Bit Boss to heal him/herself.
- The current Bit Boss cannot increase max health, only heal.
- Healing has its own animated gif which plays over the avatar.
- Damange and healing together will only show whichever is greater.
- Small Settings Page improvements.

v1.0.4:
- Added option to modify Overkill Mode's initial HP.

v1.0.3.1:
- Fixed Persistent Mode not affecting the launched widget.

v1.0.3:
- Separated the Main Page into Home, Launcher, Settings, and About.
- Separated the index script into two, Launcher and Settings.
- Added tab navigation for the new pages.
- Settings changes no longer automatically propagate to the widget.

v1.0.2:
- Fixed bug which broke Persistent Mode.

v1.0.1.2:
- Fixed Client ID header.

v1.0.1.1:
- Landing Page improvements.

v1.0.1:
- The index page now properly remembers the "HP Type" cookie.

v1.0:
- INITIAL RELEASE