# Repro for issue 6808

## Steps to reproduce

1. Run `npm i` to install dependencies
1. Run `firebase emulators:start`
1. On a separate terminal, run `npm run start`
1. Go to "http://localhost:3000/", or the address when the web app is hosted
1. Click "Click me" button

## Output

On v13.3.1 of `firebase-tools`, error is raised:

```
ERROR
Internal
FirebaseError: Internal
```

On v13.3.0 of `firebase-tools`, developer console shows

```
count:  0
```
