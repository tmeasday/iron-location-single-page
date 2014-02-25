This is a proof of concept of how you might use pluggable locations to solve IR#382.

To use this testing version:

1. Create an app with the following smart.json

```
{
  "packages": {
    "iron-router": {
      "git": "https://github.com/EventedMind/iron-router.git",
      "branch": "new-location"
    },
    "iron-location-single-page": {
      "git": "https://github.com/tmeasday/iron-location-single-page.git",
    }
  }
}
```

2. Call `mrt add iron-router` and `mrt add iron-location-single-page`.

3. Create a router as usual. 

4. Notice that as you browse around the app, the location does not change. Call `Router._location.back()` to go back.

The API of `Router._location` is still up for grabs, but right now this outlines the basic minimums. Watch this space.

(c) Tom Coleman
MIT