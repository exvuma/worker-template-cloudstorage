## Cloud Storage

Read in static files from a generic cloud storage provider. (In this example we use Google Storage)

[`index.js`](https://github.com/victoriabernard92/worker-template-cloudstorage/blob/master/index.js) is the content of the Workers script.

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate myApp https://github.com/victoriabernard92/worker-template-cloudstorage
```

#### Serverless

To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.
