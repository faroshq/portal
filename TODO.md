1. Currently data loading model is bit shaky. We load organizations and their workspaces in
`App.vue`. Later each individual view based on route params loads and sets default organization
and default workspace. Setting logic is convoluted and duplicate (see LocationsView and SyncTargets.View).
It should be simplified or externalized.

2. Modal validation and errors.
3. We dont use `state.loading`. We should.
4. CSS. Currently CSS is all over the place. We tide up a bit UI. Especially in modals.
