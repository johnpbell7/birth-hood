# Connecting the real Instagram feed

The home page pulls Leanne's latest six posts from Instagram when a token is
set. Until then it shows a plain follow panel instead of a grid — the shoot
photos aren't Instagram posts, so they shouldn't be presented as them.

## What's needed

1. `@birthhooduk` must be a **Business** or **Creator** account (Instagram app →
   Settings → Account type). A personal account can't be read by the API.
2. A Meta app at <https://developers.facebook.com/apps/> with the
   **Instagram** product added, using *Instagram API with Instagram login*.
3. Generate a **long-lived access token** for the account in that app.
4. Add it to the Vercel project as an environment variable:

   ```
   INSTAGRAM_ACCESS_TOKEN=<the long-lived token>
   ```

   Then redeploy. The grid appears automatically; posts are cached for an hour.

## The catch: tokens expire

A long-lived Instagram token lasts **60 days** and has to be refreshed (a call to
`https://graph.instagram.com/refresh_access_token`). It can't refresh itself
from an environment variable, so it needs either a diary note every couple of
months or a small scheduled job that refreshes it and updates the variable.

If that upkeep isn't wanted, a hosted widget (Behold, LightWidget, SnapWidget)
handles the token side and gives a feed URL to read instead — the component can
be wired to one of those instead of the Graph API.

## Where the code lives

- `lib/instagram.ts` — fetches the posts (returns an empty list on any failure,
  so the site never breaks if Instagram is down or the token has lapsed).
- `components/InstagramSection.tsx` — server component that calls it.
- `components/InstagramGrid.tsx` — renders the grid, or the follow panel.
