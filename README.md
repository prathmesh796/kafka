# Kafka Practice Repository

This repository is a small practice project for learning how to use Kafka with [KafkaJS](https://kafka.js.org/) in Node.js/TypeScript.

## What Kafka is used for

Kafka is commonly used to move data between services in an event-driven system.  
Producers publish messages to a topic, and consumers read and process those messages.

Typical use cases include:
- Event-driven microservice communication
- Asynchronous background processing
- Activity/event logging pipelines
- Real-time notifications and stream processing

## What this repository demonstrates

This repo shows a basic local Kafka workflow using a single topic (`test-topic`) and three runnable examples:

- `src/producer.ts`: sends a message (`Hello KafkaJS user!`) to `test-topic`
- `src/consumer.ts`: subscribes to `test-topic` and logs partition, offset, and value
- `src/consumer-userId.ts`: subscribes to `test-topic` and logs received values as `userId`
- `src/index.ts`: combined producer + consumer flow in one script

All examples use:
- Kafka broker: `localhost:9092`
- Kafka client id: `my-app`
- Consumer groups: `test-group` and `userId-group`

## How it is implemented here (practice setup)

Implementation is intentionally minimal and focused on basics:

1. Create a Kafka client with `new Kafka({ clientId, brokers })`
2. Create either a producer (`kafka.producer()`) or consumer (`kafka.consumer({ groupId })`)
3. Connect with `.connect()`
4. Producer sends messages with `.send({ topic, messages })`
5. Consumer subscribes using `.subscribe({ topic, fromBeginning: true })`
6. Consumer processes messages in `.run({ eachMessage })`

This makes it easy to practice:
- producing events,
- consuming events,
- understanding topic/group behavior.

## Run locally

### Prerequisites
- Node.js (with npm)
- A running Kafka broker on `localhost:9092`

### Install dependencies

```bash
npm install
```

### Run examples

```bash
# build + run producer
npm run producer

# build + run consumer
npm run consumer

# build + run consumer focused on userId values
npm run consumer-userId

# build + run combined flow
npm run dev
```

> Note: This project is for practice/learning and does not yet include production concerns like retries, schema management, or graceful shutdown handling.
