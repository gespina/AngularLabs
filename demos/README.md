# Demonstrations (Demos)

These are demos we can do together in class. Or you can do them on your own for just the ones you're interested in.

You'll see these folders:
| Folder   | Purpose 
|----------|--------
| starters | Starter files for the demo. Sometimes there are no starters for a demo.
| solutions| Finalized files for that demo. Look here for the 'solution'
| current  | An empty folder for you to work in

## How to run a demo

If it has a starter, cd to the starter folder

```bash
cd <pathToStarterFolder>
npm install
npm start
```

Then you can edit the code in that folder.

## If you want to keep the starter pristine

Copy everything from the starter to the `current` folder and edit the code there. Again, to run it, you'll just ...

```bash
cd <pathToCurrentFolder> 
cp ../starter/<nameOfStarter> .
npm install
npm start
```

## If it has no starter

Then there's nothing to copy. You can 

```bash
ng new <appName>
cd <appName>
npm start
```

## The solutions folder

It is just there to show you where you'd be heading while doing the demo/challenge. If you just want to see the solution work ...

```bash
cd <pathToSolutionFolder> 
npm install
npm start
```

