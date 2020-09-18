# egg-bull

🥚 Egg.js middleware for bull

## Install

```bash
yarn add @zhuowenli/egg-bull
```

## Usage

### Plugin

```ts
// {app_root}/config/plugin.ts
const plugin: EggPlugin = {
    bull: {
        enable: true,
        package: '@zhuowenli/egg-bull',
    },
};
```

### Configuration

Single queue

```ts
// {app_root}/config/config.default.ts
config.bull = {
    client: {
        name: 'queue',
        redis: {
            host: 'localhost',
            port: 6379,
            db: 0,
        },
    },
};
```

Multiple queue (recommended)

```ts
// {app_root}/config/config.default.ts
config.bull = {
    clients: {
        q1: { name: 'q1' },
        q2: { name: 'q2' },
    },
    default: {
        redis: {
            host: 'localhost',
            port: 6379,
            db: 0,
        },
    },
};
```

### Example

```ts
app.bull.process(job => {
    console.log(job.data.job1); // 'this is a job'
});

app.bull.add({ job1: 'this is a job' });
```

For Bull's api read [Reference](https://github.com/OptimalBits/bull/blob/master/REFERENCE.md) for more details.
