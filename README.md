## Libstorefront Assortment List Plugin
This plugin provides support for fetching assortment list from Magento.

Plugin has access to all lsf functionality including IOC container. Dependencies
can be rebound according to plugin needs.

## Build plugin
Run `npm run build` to build plugin.
Output can be found in `/dist` catalog.

## Test plugin
Plugin must be tested in isolation. Unit tests can be performed via jest framework
in `/tests/test.ts` file.
Template includes by default mocked LocalStorage object.
