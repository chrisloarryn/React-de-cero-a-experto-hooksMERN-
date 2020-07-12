describe('Tests in file demo.test.js', () => {
  test('strings should be equals', () => {
    // 1. Initialization
    const message1 = 'Hello World'

    // 2. Second word
    const message2 = `Hello World`

    // 3. Check out the result
    expect(message1).toBe(message2) // ===
  })
})
