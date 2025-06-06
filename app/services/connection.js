import IORedis from 'ioredis';

const redisConf = {
    host: "localhost",
    port: 6379,
}
const { host: redisHost, port: redisPort } = redisConf;

//export const Redis = redis.createClient(redisHost);
export const Redis = new IORedis({
    host: redisHost,
    port: redisPort,
    maxRetriesPerRequest: 1,
});
