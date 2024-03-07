# src/components

This directory contains your UI components. It's further subdivided into ui for generic UI components and shared for components that might be reused across different parts of your application.

Conventions
ui components will go inside the ui folder
each component will be a folder of its own. Sub-components, if any will reside in the same folder. Each such folder will have index.ts file which will export all components.
separate folder for routes. E.g. about-us route will have a folder by the same name inside component folder which will have other components inside it.
Example: take a look at the header and footer component.
