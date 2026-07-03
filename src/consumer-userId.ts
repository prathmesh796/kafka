import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'userId-group' })

const run = async () => {
  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const userId = message.value.toString()
      console.log(`Topic: ${topic}`)
      console.log(`Received userId: ${userId}`)
      console.log(`Message: ${message}`)
    },
  })
}

run().catch(console.error)