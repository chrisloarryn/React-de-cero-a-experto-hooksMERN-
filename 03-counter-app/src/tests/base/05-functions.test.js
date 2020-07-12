import { getUser, getActiveUser } from '../../base/05-functions'

describe('Tests in file 05-functions.js', () => {
  test('getUser should return an user object', () => {
    const userTest = {
      uuid: 'ABC123',
      userName: 'The_Daddy1502',
    }
    const user = getUser()
    expect(user).toEqual(userTest)
  })

  test('getActiveUser should return an active user object', () => {
    const name = 'Casper'
    const user = getActiveUser(name)
    expect(user).toEqual({
        uuid: 'ABC567',
        userName: name,
      })
  })
})
