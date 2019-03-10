# Guillaume Isabelle GIX Browsing

* Vision: A Package you use to browse web in your app
* Value: Run action in your IDE to browse your resources in 1 step and few seconds
* Value: Keep track of your resources used in your package.json
* Current Reality: Various resources used such as dev site, various provider such as DevOps, DNS config, hosting, Staging to remember

## Usage and Installation
* I use it in my package.json to quick browse my key site in less than 3 seconds :)

### Step 1. Global Install ###
```sh
npm i gixb --g
yarn global add gixb
```

### Step 2. Add browsing action to your JSON ###

```json
"scripts": {
	"mgm:gi:dns": "gixb http://mylink.com/r/mgm/dns/edit",
	...
}
```
